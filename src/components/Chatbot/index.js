import React, { useEffect, useMemo, useRef, useState } from "react";
import { saveAs } from "file-saver";
import { useDispatch, useSelector } from "react-redux";
import { serverDropdownGetter, translationFileGetter } from "../../utilities";
import EditIcon from "../icons/EditIcon";
import FormSelectModal from "../FormSelectModal";
import "./style.css";
import {
  changeBot,
  creatDependentsAction,
  generateReportFormAction,
  setChatStatus,
  setErrorAction,
  setQuestionsAnswer,
  setServerDropdown,
  setTranslationFile,
  updateDependentsAction,
  getDependentsAction,
  setQuestionAnswerTimestamp,
  updateConversation,
  updateLastQuestionIndex,
  updateConversationAppendOrRewrite,
} from "../../store/actions";
import {
  GENERIC_APPLICATION_FORM,
  STUDENT_FORM,
  STUDENT_FORM_FILTER,
  WORKER_FORM,
  WORKER_FORM_FILTER,
  GENERAL_APPLICATION,
  CHANGE_CONDITIONS_STUDENT,
  CHANGE_CONDITIONS_WORKER,
  BASIS_OF_CLAIM_FORM,
  BASIS_OF_CLAIM,
} from "../../Constants/constants";
import { FaRobot } from "react-icons/fa";
import {
  BsArrowCounterclockwise,
  BsFillPencilFill,
  BsInfoCircle,
} from "react-icons/bs";
import {
  createQuestionOrder,
  getEndMessage,
  getQuestion,
  getTranslationValue,
  getWelcomeMessage,
  updateQuestionsOrder,
  getOriginalQuestionId,
  getDependent,
  getDependentsQuestionAnswer,
} from "../../utilities/chat";
import {
  endQuestion,
  Queskeys,
  startQuestion,
} from "../../utilities/QuestionKeysHelper";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";
import valueMapping from "../../utilities/valueMapping";
import _ from "lodash";
import { payloadConstructor } from "../../utilities/answerConvert";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export default function BotPressPage() {
  const serverDropdown = useSelector((state) => state.serverDropdown);
  const chatStatus = useSelector((state) => state.chatStatus);
  const dependents = useSelector((state) => state.dependents);
  const currentUser = useSelector((state) => state.currentUser);
  const currentProfile = useSelector((state) => state.currentProfile);
  const active_profile_id = currentUser?.active_profile_id;
  const botID = useSelector((state) => state.botID);
  const asylumApplicationBundles = useSelector(
    (state) => state.asylumApplicationBundles
  );
  const questionsOrderInProfile =
    currentProfile && currentProfile.question_order[botID];
  const questionsOrder = useMemo(
    () => (questionsOrderInProfile ? questionsOrderInProfile.split(",") : []),
    [questionsOrderInProfile]
  );
  const activeConversationId = useSelector(
    (state) => state.activeConversationId
  );
  const lastQuestionIndex = useMemo(
    () => currentProfile?.last_question_index,
    [currentProfile]
  );
  const localizeSelectPrompt = (language) => {
    switch(language) {
      case "ar":
        return "الرجاء تحديد :"
      case "fr":
        return "Veuillez sélectionner..."
      case "es":
        return "Por favor selecciona"
      default:
        return "Please select..."
    }
  }
  const localizeSend = (language) => {
    switch(language) {
      case "ar":
        return "يرسل"
      case "fr":
        return "Envoie"
      case "es":
        return "Enviar"
      default:
        return "Send"
    }
  }
  const localizeSkip = (language) => {
    switch(language) {
      case "ar":
        return "تخطي"
      case "fr":
        return "Sauter"
      case "es":
        return "Omitir"
      default:
        return "Skip"
    }
  }
  const localizeSkipped = (language) => {
    switch(language) {
      case "ar":
        return "تم تخطيه"
      case "fr":
        return "Sauté"
      case "es":
        return "Omitido"
      default:
        return "Skipped"
    }
  }
  const conversationFetched = useSelector((state) => state.conversationFetched);
  console.log("conversationFetched: ", conversationFetched);
  const botName = useSelector((state) => state.botName);
  const language = useSelector((state) => state.language);
  const messages = useSelector((state) => state.messages);
  const messagesRef = useRef(messages);
  const dispatch = useDispatch();
  let _questionAnsObj = useSelector((state) => state.questionAnsObj);
  let questionAnsObj = useMemo(() => {
    if (botID && _questionAnsObj) {
      return _questionAnsObj[botID] || {};
    }
    return {};
  }, [_questionAnsObj]);
  let questionAnswerTimestamp = useMemo(() => {
    return messages.reduce((obj, item) => {
      const questionId = item.question_id;
      const answer = item.answer_timestamp;
      const question = item.question_timestamp;
      return {
        ...obj,
        [questionId]: {
          answer,
          question,
        },
      };
    }, {});
  }, [messages]);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);
  const [editingAnswer, setEditingAnswer] = useState("");
  const [modalEditingAnswer, setModalEditingAnswer] = useState("");
  const [currentEditQuestionIndex, setCurrentEditQuestionIndex] = useState(-1);
  const questionsOrderRef = useRef(questionsOrder);
  const [infoDialogQuestionId, setInfoDialogQuestionId] = useState(null);
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = useState(null);
  const [lastSkipQuestion, setLastSkipQuestion] = useState("");
  console.log("questionAnsObj is: ", questionAnsObj);
  const [showLoadingBar, setShowLoadingBar] = useState(false);

  useEffect(() => {
    if (active_profile_id) {
      dispatch(getDependentsAction(active_profile_id));
    }
  }, [active_profile_id]);
  useEffect(() => {
    const data = translationFileGetter(language);
    dispatch(setTranslationFile(JSON.stringify(data)));
    serverDropdownGetter(language)
      .then((serverDropdown) => {
        dispatch(setServerDropdown(serverDropdown));
      })
      .catch(() => {
        dispatch(setErrorAction("Failed to get form data."));
      });
  }, [dispatch, language]);
  useEffect(() => {
    questionsOrderRef.current = questionsOrder;
  }, [questionsOrder]);
  useEffect(() => {
    const profileId = currentUser?.active_profile_id;
    if (
      botID &&
      language &&
      conversationFetched &&
      profileId &&
      questionsOrder
    ) {
      const questionOrder =
        questionsOrder && questionsOrder.length > 0
          ? questionsOrder
          : createQuestionOrder({
              dispatch,
              startQuestionId: startQuestion[botID],
              questionAnsObj,
              endQuestionId: endQuestion[botID],
              language,
              botID,
              profileId,
              currentProfile,
            });
      if (!lastQuestionIndex[botID]) {
        const currentLastQuestionIndex = getLastQuestionIndex(questionOrder);
        dispatch(
          updateLastQuestionIndex(
            profileId,
            {
              [botID]: currentLastQuestionIndex,
            },
            lastQuestionIndex
          )
        );
      }
      setQuestionTime(0, questionOrder);
    }
  }, [botID, language, conversationFetched, currentUser, questionsOrder]);

  useEffect(() => {
    if (currentEditQuestionIndex !== -1) {
      setTimeout(() => {
        window.$(".modal-body select").selectpicker();
      }, 100);
    }
  }, [currentEditQuestionIndex]);

  // keep Application to claim asymlum in Canada in the first of array
  const asylumApplicationBundlesSorted =
    asylumApplicationBundles.length > 0 &&
    asylumApplicationBundles.includes("Application to claim asylum in Canada")
      ? asylumApplicationBundles.sort(function (x, y) {
          return x === "Application to claim asylum in Canada"
            ? -1
            : y === "Application to claim asylum in Canada"
            ? 1
            : 0;
        })
      : asylumApplicationBundles;

  const bundleMap = {
    "Application to claim asylum in Canada": {
      formName: "Application to claim asylum in Canada",
      id1: GENERIC_APPLICATION_FORM,
    },
    "Change of conditions student": {
      formName: "Change of conditions student",
      id1: STUDENT_FORM,
      id2: STUDENT_FORM_FILTER,
    },
    "Change of conditions worker": {
      formName: "Change of conditions worker",
      id1: WORKER_FORM,
      id2: WORKER_FORM_FILTER,
    },
    "Basis of claim": {
      formName: "Basis of claim",
      id1: BASIS_OF_CLAIM_FORM,
    },
  };

  const asylumApplicationBundlesFilter = (asylumApplicationBundlesSorted) => {
    const result = asylumApplicationBundlesSorted
      .map((bundle) => {
        return bundleMap[bundle];
      })
      .map((bundle) => {
        return {
          ...bundle,
          id:
            asylumApplicationBundlesSorted.length > 1 &&
            asylumApplicationBundlesSorted.find((bundle) => !bundle.id2)
              ? bundle.id2 || bundle.id1
              : bundle.id1,
        };
      });
    console.log(result);
    return result;
  };

  const formList = asylumApplicationBundlesFilter(
    asylumApplicationBundlesSorted
  );

  useEffect(() => {
    if (!botID && formList.length > 0) {
      dispatch(changeBot(formList[0].id, formList[0].formName));
    }
  }, [botID, formList]);
  // When the formList is changed, change the botID to the first form in the list
  useEffect(() => {
    if (formList.length > 0) {
      dispatch(changeBot(formList[0].id, formList[0].formName));
    }
  }, [asylumApplicationBundles]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const conversation = questionsOrder.map((questionId) => {
    const answer = questionAnsObj[questionId];
    return {
      questionId,
      answer,
      is_skipped: messages.find((message) => message.question_id === questionId)
        ?.is_skipped,
    };
  });
  console.log("conversation is: ", conversation);

  useEffect(scrollToBottom, [conversation]);

  const getLastQuestionIndex = (_questionOrder) => {
    console.log("_questionOrder: ", _questionOrder);
    _questionOrder = _questionOrder || questionsOrder;
    let currentLastQuestionIndex =
      (lastQuestionIndex && lastQuestionIndex[botID]) || 0;
    currentLastQuestionIndex -= 0;
    if (currentLastQuestionIndex >= _questionOrder.length) {
      currentLastQuestionIndex = _questionOrder.length - 1;
    }
    console.log("currentLastQuestionIndex: ", currentLastQuestionIndex);

    return currentLastQuestionIndex;
  };

  const getQuestionId = (questionIndex) => {
    if (questionIndex >= questionsOrder.length) {
      questionIndex = questionsOrder.length - 1;
    }
    return questionsOrder[questionIndex];
  };

  const handleAnswer = () => {
    if (!editingAnswer) {
      dispatch(setErrorAction("Please enter your answer"));
      return;
    }
    dispatch(
      setQuestionsAnswer({
        botID,
        questionAnsObj: {
          ...questionAnsObj,
          [questionsOrder[getLastQuestionIndex()]]: editingAnswer,
        },
      })
    );
    setAnswerTime();
    const currentLastQuestionIndex = getLastQuestionIndex();
    updateQuestionsOrder({
      dispatch,
      value: editingAnswer,
      questionsOrder,
      questionIndex: currentLastQuestionIndex,
      questionId: questionsOrder[currentLastQuestionIndex],
      questionAnsObj,
      endQuestion: endQuestion[botID],
      language,
      botID,
      profileId: active_profile_id,
      currentProfile,
      callback: () => {
        dispatch(
          updateLastQuestionIndex(
            active_profile_id,
            { [botID]: currentLastQuestionIndex + 1 },
            lastQuestionIndex
          )
        );
      },
    });
    console.log("questionAnsObj is: ", questionAnsObj);
    console.log("editingAnswer is: ", editingAnswer);
    console.log("getLastQuestionIndex() is: ", getLastQuestionIndex());
    console.log(
      "questionsOrder[getLastQuestionIndex()] is: ",
      questionsOrder[getLastQuestionIndex()]
    );
    console.log("currentUser is: ", currentUser);
    console.log("conversation is: ", conversation);

    let questionId = questionsOrder[getLastQuestionIndex()];
    setLastAnsweredQuestion([questionId, editingAnswer]);

    let data = {
      messages: [
        {
          question_id: questionId,
          answer: editingAnswer,
          answer_timestamp: new Date().toISOString(),
          form_name: botID,
        },
      ],
    };
    console.log("data is: ", data);
    

    // Saving the user answer and question to the DB conversation_message table
    updateConversation(dispatch, activeConversationId, data, botID);
    setEditingAnswer("");
    setTimeout(() => {
      setQuestionTime(
        currentLastQuestionIndex + 1,
        questionsOrderRef.current,
        messages
      );
    }, 100);
    const endQuestionArr = Array.isArray(endQuestion[botID])
      ? endQuestion[botID]
      : [endQuestion[botID]];
    if (
      endQuestionArr.some((endQuestion) => {
        return (
          questionsOrder[currentLastQuestionIndex] == endQuestion ||
          (endQuestion.id &&
            endQuestion.id ==
              (questionsOrder[currentLastQuestionIndex].includes(":")
                ? questionsOrder[currentLastQuestionIndex].split(":")[0]
                : questionsOrder[currentLastQuestionIndex]) &&
            getTranslationValue(endQuestion.value, language) == editingAnswer)
        );
      })
    ) {
      dispatch(
        setChatStatus({
          [botID]: "finished",
        })
      );
      return;
    } else if (chatStatus[botID] == "finished") {
      dispatch(
        setChatStatus({
          [botID]: "chatting",
        })
      );
    }
  };

  const setQuestionTime = (questionIndex, _questionOrder) => {
    const questionId = (_questionOrder || questionsOrder)[questionIndex];
    if (questionId) {
      dispatch(
        setQuestionAnswerTimestamp(
          {
            questionId: questionId,
            ...(questionAnswerTimestamp[questionId] || {}),
            question: new Date().toISOString(),
          },
          activeConversationId,
          messagesRef.current,
          botID
        )
      );
    }
  };

  const setAnswerTime = () => {
    const questionId = questionsOrder[getLastQuestionIndex()];
    if (questionId) {
      dispatch(
        setQuestionAnswerTimestamp(
          {
            questionId: questionId,
            ...(questionAnswerTimestamp[questionId] || {}),
            answer: new Date().toISOString(),
          },
          activeConversationId,
          messagesRef.current,
          botID
        )
      );
    }
  };

  const resetChat = () => {
    dispatch(
      updateLastQuestionIndex(active_profile_id, { [botID]: 0 }),
      lastQuestionIndex
    );
    dispatch(
      setChatStatus({
        [botID]: "chatting",
      })
    );
    const messagesData = messages.filter(
      (message) => message.form_name !== botID
    );
    dispatch(
      updateConversationAppendOrRewrite(
        activeConversationId,
        messagesData,
        botID
      )
    );
  };
  const generateForm = () => {
    switch (botID) {
      case GENERIC_APPLICATION_FORM:
        return GENERAL_APPLICATION;
      case STUDENT_FORM:
      case STUDENT_FORM_FILTER:
        return CHANGE_CONDITIONS_STUDENT;
      case WORKER_FORM:
      case WORKER_FORM_FILTER:
        return CHANGE_CONDITIONS_WORKER;
      case BASIS_OF_CLAIM_FORM:
        return BASIS_OF_CLAIM;
      default:
        break;
    }
  };
  const formName = generateForm();

  // This method handles the generation of PDF form
  const handleFormPopulation = async () => {
    try {
      // Saving the information to user active profile
      setShowLoadingBar(true);
      const profileId = currentUser?.active_profile_id;
      const data = await payloadConstructor(language, botID, questionAnsObj);
      const dependentsQuestionAnswer =
        getDependentsQuestionAnswer(questionAnsObj);
      console.log("dependentsQuestionAnswer", dependentsQuestionAnswer);
      dependentsQuestionAnswer.forEach(async (dependentQuestionAnswer) => {
        const dependent = getDependent(dependentQuestionAnswer, dependents);
        const dependentData = await payloadConstructor(
          language,
          botID,
          dependentQuestionAnswer,
          true
        );
        if (!dependent) {
          await dispatch(creatDependentsAction(dependentData, profileId));
        } else {
          dispatch(await updateDependentsAction(dependentData, dependent.id));
        }
      });
      await dispatch(generateReportFormAction(data, profileId));

      // Translate for form if not in en, fr
      // TODO: have a loading bar
      if (!["en", "fr"].includes(language)) {
        await axios.get(`api/v1/translate/${profileId}/en`);
      }

      // Generating the PDF form after data is populated in DB
      const locale = language === "fr" ? "fr" : "en";
      const formData = await axios.get(
        `api/v1/form/profiles/${profileId}/template/${formName}?locale=${locale}`,
        {
          method: "GET",
          responseType: "blob", //Force to receive data in a Blob Format
        }
      );
      const file = new Blob([formData.data], { type: "application/pdf" });
      saveAs(file, "tickets.pdf");
      setShowLoadingBar(false);
    } catch (e) {
      dispatch(setErrorAction("Failed to generate form."));
      console.log("Unable to generate user form", e);
      throw e;
    }
  };

  const messagesEndRef = useRef(null);

  const getEditInput = (questionIndex, isFromModal) => {
    const _editingAnswer = isFromModal ? modalEditingAnswer : editingAnswer;
    const _setEditingAnswer = (value) => {
      if (isFromModal) {
        setModalEditingAnswer(value);
      } else {
        setEditingAnswer(value);
      }
    };
    if (questionIndex < 0) {
      questionIndex = 0;
    }
    const questionId = getQuestionId(questionIndex);
    if (!questionId) return null;
    const originalQuestionId = getOriginalQuestionId(questionId);
    const mapperObjOriginal = Queskeys[originalQuestionId];
    const mapperObj = Queskeys[questionId];
    const { type, valueKey } = { ...mapperObjOriginal, ...mapperObj };
    if (type === "serverDropdown") {
      return serverDropdown ? (
        <select
          id={`selectpicker${questionIndex}`}
          className="form-control"
          style={{ width: "100%" }}
          data-live-search="true"
          value={_editingAnswer}
          onChange={(event) => {
            _setEditingAnswer(event.target.value);
          }}
        >
          <option key="empty" value="">
            {localizeSelectPrompt(language)}
          </option>
          {Object.values(serverDropdown[valueKey]).map((item) => (
            <option key={item} data-tokens={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : null;
    }
    if (type === "date") {
      const selectedDate = _editingAnswer
        ? moment(_editingAnswer, "YYYY/MM/DD").toDate()
        : new Date();
      return (
        <DatePicker
          selected={selectedDate}
          className="form-control datepicker"
          dateFormat="yyyy/MM/dd"
          onChange={(date) => {
            const newValue = moment(date).format("YYYY/MM/DD");
            _setEditingAnswer(newValue);
          }}
        />
      );
    }
    if (type === "Boolean" || type === "checkBox") {
      const yesValue = valueMapping["Yes"][language] || "Yes";
      const noValue = valueMapping["No"][language] || "No";
      return (
        <>
          <Form.Check
            inline
            type="radio"
            id="inline-radio-1"
            label={yesValue}
            checked={_editingAnswer === yesValue}
            onChange={(e) => {
              const value = e.target.checked ? yesValue : noValue;
              _setEditingAnswer(value);
            }}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            id="inline-radio-2"
            label={noValue}
            checked={_editingAnswer === noValue}
            onChange={(e) => {
              const value = e.target.checked ? noValue : yesValue;
              _setEditingAnswer(value);
            }}
          ></Form.Check>
        </>
      );
    }
    if (type === "textarea") {
      return (
        <textarea
          className="form-control"
          style={{ width: "100%" }}
          aria-label="With textarea"
          onChange={(e) => {
            _setEditingAnswer(e.target.value);
          }}
        >
          {_editingAnswer}
        </textarea>
      );
    }
    if (type === "number") {
      return (
        <input
          type="number"
          className="form-control"
          style={{ width: "100%" }}
          value={_editingAnswer}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAnswer();
            }
          }}
          onChange={(e) => {
            _setEditingAnswer(e.target.value);
          }}
        />
      );
    }
    return (
      <input
        type="text"
        className="form-control"
        style={{ width: "100%" }}
        aria-describedby="basic-addon1"
        value={_editingAnswer}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAnswer();
          }
        }}
        onChange={(event) => {
          _setEditingAnswer(event.target.value);
        }}
      />
    );
  };

  const updateLastQuestionIndexInModal = (currentLastQuestionIndex, newQuestionsOrder) => {
      if (currentEditQuestionIndex === currentLastQuestionIndex) {
        dispatch(
          updateLastQuestionIndex(
            active_profile_id,
            { [botID]: currentLastQuestionIndex + 1 },
            lastQuestionIndex
          )
        );
      } else {
        const newLastQuestionIndex = newQuestionsOrder.findIndex(
          (_questionId) =>
            _questionId === questionsOrder[currentLastQuestionIndex]
        );
        if (newLastQuestionIndex > -1) {
          dispatch(
            updateLastQuestionIndex(
              active_profile_id,
              { [botID]: newLastQuestionIndex },
              lastQuestionIndex
            )
          );
        }
      }
    }

  // This method is called when an answer is edited
  const updateAnswerByModal = () => {
    if (!modalEditingAnswer) {
      dispatch(setErrorAction("Please enter your answer"));
      return;
    }
    let questionId = questionsOrder[currentEditQuestionIndex];
    dispatch(
      setQuestionsAnswer({
        botID,
        questionAnsObj: {
          ...questionAnsObj,
          [questionId]: modalEditingAnswer,
        },
      })
    );
    let data = {
      messages: [
        {
          question_id: questionId,
          answer: modalEditingAnswer,
          answer_timestamp: new Date().toISOString(),
          form_name: botID,
        },
      ],
    };
    // Saving the user answer and question to the DB conversation_message table
    updateConversation(dispatch, activeConversationId, data, botID);
    setAnswerTime();
    const currentLastQuestionIndex = getLastQuestionIndex();
    const endQuestionArr = Array.isArray(endQuestion[botID])
      ? endQuestion[botID]
      : [endQuestion[botID]];
    if (
      endQuestionArr.some((endQuestion) => {
        return (
          questionsOrder[currentEditQuestionIndex] == endQuestion ||
          (endQuestion.id &&
            endQuestion.id ==
              (questionsOrder[currentEditQuestionIndex].includes(":")
                ? questionsOrder[currentEditQuestionIndex].split(":")[0]
                : questionsOrder[currentEditQuestionIndex]) &&
            endQuestion.value == modalEditingAnswer)
        );
      })
    ) {
      dispatch(
        setChatStatus({
          [botID]: "finished",
        })
      );
      setModalEditingAnswer("");
      setCurrentEditQuestionIndex(-1);
      dispatch(
        updateLastQuestionIndex(
          active_profile_id,
          { [botID]: currentEditQuestionIndex },
          lastQuestionIndex
        )
      );
    }

    const newQuestionsOrder = updateQuestionsOrder({
      dispatch,
      value: modalEditingAnswer,
      questionsOrder,
      questionIndex: currentEditQuestionIndex,
      questionId: questionsOrder[currentEditQuestionIndex],
      questionAnsObj,
      endQuestionId: endQuestion[botID],
      language,
      botID,
      profileId: active_profile_id,
      currentProfile,
      callback: () => updateLastQuestionIndexInModal(currentEditQuestionIndex, currentLastQuestionIndex, newQuestionsOrder),
    });

    if (newQuestionsOrder.join(",") !== questionsOrder.join(",")) {
      if (chatStatus[botID] == "finished") {
        dispatch(
          setChatStatus({
            [botID]: "chatting",
          })
        );
      }
    }
    setModalEditingAnswer("");
    setCurrentEditQuestionIndex(-1);
  };

  const createEditModal = (questionIndex) => {
    const questionId = getQuestionId(questionIndex);
    return (
      <Modal
        scrollable={true}
        show={true}
        onHide={() => {
          setCurrentEditQuestionIndex(-1);
        }}
        size="lg"
        contentClassName="modal-height"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit answer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            {getQuestion(
              questionId,
              questionAnsObj,
              questionsOrder,
              questionIndex,
              language
            )}
          </div>
          {getEditInput(questionIndex, true)}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setCurrentEditQuestionIndex(-1)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => updateAnswerByModal(questionId)}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const formatTime = (time) => {
    if (time && typeof time === "string") {
      // check time string contains timezone
      return new Date(time.includes("+") ? time : time + "Z").toLocaleString(
        "en-CA"
      );
    }
  };

  const handleCloseInfoDialog = () => {
    setInfoDialogQuestionId(null);
  };

  const handleOpenInfoDialog = (questionId) => {
    setInfoDialogQuestionId(questionId);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const displayDialog = () => {
    const mapperObj = Queskeys[infoDialogQuestionId];
    return (
      <BootstrapDialog
        onClose={handleCloseInfoDialog}
        aria-labelledby="customized-dialog-title"
        open={!!infoDialogQuestionId}
      >
        {/* <DialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
        Maybe put the question itself here.
      </DialogTitle> */}
        <DialogContent dividers>
          <Typography gutterBottom>
            {mapperObj.information[language]}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    );
  };

  const canSkipQuestion = () => {
    const currentLastQuestionIndex = getLastQuestionIndex();
    if (currentLastQuestionIndex < 0) {
      return false;
    }
    const questionId = getQuestionId(currentLastQuestionIndex);
    if (!questionId) return false;
    const originalQuestionId = getOriginalQuestionId(questionId);
    const mapperObj = Queskeys[originalQuestionId];
    return mapperObj.required === false;
  };
  const skipQuestion = () => {
    const currentLastQuestionIndex = getLastQuestionIndex();
    if (currentLastQuestionIndex < 0) {
      return;
    }
    let questionId = questionsOrder[getLastQuestionIndex()];
    let data = {
      messages: [
        {
          question_id: questionId,
          is_skipped: true,
        },
      ],
    };
    // Saving the user answer and question to the DB conversation_message table
    updateConversation(dispatch, activeConversationId, data, botID);
    setAnswerTime();
    setLastSkipQuestion(questionId);
    setQuestionTime(currentLastQuestionIndex + 1, questionsOrderRef.current);
    updateQuestionsOrder({
      dispatch,
      value: "",
      questionsOrder,
      questionIndex: currentLastQuestionIndex,
      questionId: questionsOrder[currentLastQuestionIndex],
      questionAnsObj,
      endQuestionId: endQuestion[botID],
      botID,
      profileId: active_profile_id,
      currentProfile,
      callback: () => {
        dispatch(
          updateLastQuestionIndex(
            active_profile_id,
            { [botID]: currentLastQuestionIndex + 1 },
            lastQuestionIndex
          )
        );
      },
    });
  };
  // only when first form is finished, enable the rest forms
  const isFormDisabled = (botId) => {
    if (
      botId !== GENERIC_APPLICATION_FORM &&
      formList.find((item) => item.id === GENERIC_APPLICATION_FORM) &&
      chatStatus[GENERIC_APPLICATION_FORM] !== "finished"
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="chatbot-container container border-0 align-items-center">
        <div className="row w-100 h-100 justify-content-center">
          <div className="col-12 col-md-4 col-xl-3 bg-white mb-4 mx-lg-2">
            <div>
              {asylumApplicationBundlesSorted.length === 1 ? (
                <div className="flex-row mb-2">
                  <span className="bundle-title">Asylum Application</span>
                  <span>
                    <button
                      className="btn-temperary no-style"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <EditIcon className="edit-icon" />
                    </button>
                  </span>
                </div>
              ) : (
                <div className="flex-row">
                  <span className="bundle-title">
                    Asylum Application Bundles
                  </span>
                  <span>
                    <button
                      className="btn-temperary no-style"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <EditIcon className="edit-icon" />
                    </button>
                  </span>
                </div>
              )}
            </div>
            <div className="accordion" id="accordionExample">
              {formList.map((item) => (
                <div className="accordion-item" key={item.key}>
                  <h2 className="accordion-header">
                    <button
                      className={`${
                        botID === item.id
                          ? "accordion-button change-background"
                          : "accordion-button"
                      } text-center ${
                        isFormDisabled(item.id) ? "disabled" : ""
                      }`}
                      type="button"
                      onClick={
                        isFormDisabled(item.id)
                          ? () => {}
                          : () => {
                              dispatch(changeBot(item.id, item.formName));
                            }
                      }
                      disabled={isFormDisabled(item.id)}
                    >
                      {item.formName}
                    </button>
                  </h2>
                </div>
              ))}
            </div>
            <div>
              {showLoadingBar ? (
                <button
                  className="accordion-button change-background btn btn-primary"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <button
                  onClick={handleFormPopulation}
                  type="button"
                  className="accordion-button change-background"
                >
                  Generate Report
                </button>
              )}
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 chatbot-border mh-100">
            <div className="py-2 px-4 border-bottom container-header">
              <div className="align-items-center py-1 media d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div>
                    <FaRobot className="robot" />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <strong>{botName}</strong>
                  </div>
                </div>
                <div className="flex-row">
                  <div className="fs-6">Reset</div>
                  <button
                    className="btn-temperary no-style"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                    disabled={_.isEmpty(questionAnsObj)}
                    onClick={resetChat}
                  >
                    <BsArrowCounterclockwise />
                  </button>
                </div>
              </div>
            </div>
            <div className="scroll-content h-75">
              <ul>
                <li className="message">
                  <div className={`message-flex-row`}>
                    <div>
                      <FaRobot className="robot" />
                    </div>
                    <div className="message-robot">
                      {getWelcomeMessage(language)} {botName}.
                    </div>
                  </div>
                </li>
                {conversation &&
                  conversation
                    .slice(0, getLastQuestionIndex() + 1)
                    .map((item, i, items) => {
                      return (
                        <>
                          <li className="message">
                            <div
                              className={`${
                                i === items.length - 1 ? "last-question" : ""
                              } message-flex-row`}
                            >
                              <div>
                                <FaRobot className="robot" />
                              </div>
                              <div className="message-robot">
                                {getQuestion(
                                  item.questionId,
                                  questionAnsObj,
                                  questionsOrder,
                                  i,
                                  language
                                )}
                              </div>
                              {Queskeys[item.questionId]?.information ? (
                                <BsInfoCircle
                                  onClick={() =>
                                    handleOpenInfoDialog(item.questionId)
                                  }
                                />
                              ) : null}
                            </div>
                            <div className="time">
                              {formatTime(
                                questionAnswerTimestamp[item.questionId]
                                  ?.question
                              )}
                            </div>
                            <div ref={messagesEndRef} />
                          </li>
                          {(i < items.length - 1 ||
                            chatStatus[botID] === "finished") && (
                            <li className="message message-right message-right-margin">
                              <div className="message-flex-row">
                                <div
                                  className={
                                    item.answer ||
                                    item.questionId ===
                                      (lastAnsweredQuestion &&
                                        lastAnsweredQuestion[0])
                                      ? "message-client"
                                      : item.is_skipped ||
                                        lastSkipQuestion === item.questionId
                                      ? "message-skipped"
                                      : "message-client message-client-no-answer"
                                  }
                                >
                                  {item.answer ||
                                    ((lastSkipQuestion === item.questionId ||
                                      item.is_skipped) &&
                                      localizeSkipped(language)) ||
                                    (item.answer &&
                                      lastAnsweredQuestion &&
                                      lastAnsweredQuestion[1])}
                                </div>
                                <div>
                                  <BsFillPencilFill
                                    className="pencil-icon"
                                    onClick={() => {
                                      setCurrentEditQuestionIndex(i);
                                      setModalEditingAnswer(item.answer);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="time">
                                {formatTime(
                                  questionAnswerTimestamp[item.questionId]
                                    ?.answer
                                )}
                              </div>
                              <div ref={messagesEndRef} />
                            </li>
                          )}
                        </>
                      );
                    })}
                {infoDialogQuestionId ? displayDialog() : null}
                {chatStatus[botID] === "finished" && (
                  <li className="message">
                    <div className={`message-flex-row`}>
                      <div>
                        <FaRobot className="robot" />
                      </div>
                      <div className="message-robot">
                        {getEndMessage(language)} {botName}.
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="px-4 border-top d-none d-md-block"></div>
            <div>
              {chatStatus[botID] !== "finished" && (
                <div className="row h-100 p-2 w-100 p-lg-3 d-flex flex-row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    {lastQuestionIndex &&
                      typeof lastQuestionIndex[botID] !== "undefined" &&
                      getEditInput(getLastQuestionIndex())}
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <button
                      className="btn btn-primary"
                      style={{ margin: "10px" }}
                      onClick={() => {
                        handleAnswer();
                      }}
                    >
                      {localizeSend(language)}
                    </button>
                    {canSkipQuestion() && (
                      <button className="btn" onClick={() => skipQuestion()}>
                        {localizeSkip(language)}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FormSelectModal />
      {currentEditQuestionIndex > -1 &&
        createEditModal(currentEditQuestionIndex)}
    </>
  );
}
