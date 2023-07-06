import { Queskeys } from "./QuestionKeysHelper";
import { updateQuestionsOrder as _updateQuestionsOrder } from "../store/actions";
import { getObjKey, translationFileGetter } from ".";
import valueMapping from "./valueMapping";

const createQuestionOrder = ({
  dispatch,
  startQuestionId,
  questionAnsObj,
  endQuestionId,
  language,
  botID,
  profileId,
  currentProfile,
}) => {
  const newQuestionsOrder = [startQuestionId];
  return updateQuestionsOrder({
    questionAnsObj,
    dispatch,
    value: null,
    questionsOrder: newQuestionsOrder,
    questionIndex: 0,
    questionId: startQuestionId,
    endQuestionId,
    language,
    botID,
    profileId,
    currentProfile,
  });
};
const updateQuestionsOrder = ({
  dispatch,
  value,
  questionsOrder,
  questionIndex,
  questionId,
  questionAnsObj,
  endQuestionId,
  language,
  botID,
  profileId,
  currentProfile,
  callback
}) => {
  const newQuestionsOrder = questionsOrder.slice(0, questionIndex + 1);
  let childNodeId = getChildNodeId(
    questionId,
    value || questionAnsObj[questionId],
    language
  );
  while (childNodeId) {
    if (newQuestionsOrder.includes(childNodeId)) {
      childNodeId = generateQuestionId(newQuestionsOrder, childNodeId);
    }
    newQuestionsOrder.push(childNodeId);
    if (endQuestionId == childNodeId) childNodeId = null;
    else
      childNodeId = getChildNodeId(
        childNodeId,
        questionAnsObj[childNodeId],
        language
      );
  }
  dispatch(
    _updateQuestionsOrder(
      profileId,
      botID,
      newQuestionsOrder.toString(),
      currentProfile.questionsOrder,
      callback
    )
  );
  return newQuestionsOrder;
};

const generateQuestionId = (questionsOrder, questionId) => {
  let newQuestionId = questionId;
  let count = 1;
  while (questionsOrder.includes(newQuestionId)) {
    newQuestionId = `${questionId}:${count}`;
    count++;
  }
  return newQuestionId;
};
const getChildNodeId = (parentNodeId, value, language) => {
  parentNodeId = parentNodeId.toString();
  parentNodeId = getQuestionIdInKeys(parentNodeId);
  const childNodeId = Object.keys(Queskeys)
    .map((key) => key.toString())
    .find((key) => {
      let parentNode = Queskeys[key].parentNode;
      if (parentNode) {
        if (!Array.isArray(parentNode)) parentNode = [parentNode];
        return parentNode.some((parent) => {
          if (
            parent == parentNodeId ||
            (parent?.id == parentNodeId &&
              getTranslationValue(parent?.value, language) == value) ||
            (parent?.id == parentNodeId &&
              Array.isArray(parent?.value) &&
              parent?.value.find((item) => {
                return typeof item === "function"
                  ? item(value)
                  : getTranslationValue(item, language) == value;
              }))
          ) {
            return true;
          }
        });
      }
    });
  return childNodeId;
};
const getTranslationValue = (value, language) => {
  return valueMapping[value] ? valueMapping[value][language] || value : value;
};
const getOriginalQuestionId = (questionId) => {
  let result = questionId;
  if (questionId.includes(":")) {
    result = questionId.split(":")[0];
  }
  if (questionId.includes(".")) {
    result = questionId.split(".")[0];
  }
  return result;
};
const getQuestionIdInKeys = (questionId) => {
  let result = questionId;
  if (questionId.includes(":")) {
    result = questionId.split(":")[0];
  }
  return result;
};
const getQuestion = (
  questionId,
  questionAnsObj,
  questionsOrder,
  questionIndex,
  language
) => {
  if (!questionId) return null;
  const originalQuestionId = getOriginalQuestionId(questionId);
  const translationFile = translationFileGetter(language || "en");
  let question = getObjKey(translationFile, originalQuestionId);
  if (!question) console.log("question not found", originalQuestionId);
  question = processQuestion(
    question,
    questionAnsObj,
    questionsOrder,
    questionIndex
  );
  return question;
};
const processQuestion = (
  question,
  questionAnsObj,
  questionsOrder,
  questionIndex
) => {
  if (question.includes("{") && question.includes("}")) {
    const matches = question.match(/\{(.*?)\}/g);
    matches.forEach((match) => {
      let questionId = match.slice(1, -1);
      let questionIds;
      if (questionId.includes("||")) {
        questionIds = questionId.split("||");
      } else {
        questionIds = [questionId];
      }
      questionId = questionIds
        .map((questionId) => {
          const reverseQuestionsOrder = [
            ...questionsOrder.slice(0, questionIndex),
          ];
          reverseQuestionsOrder.reverse();
          return reverseQuestionsOrder.find((item) => {
            if (item == questionId) return true;
            else if (item.includes(":")) {
              return item.split(":")[0] == questionId;
            }
          });
        })
        .filter(Boolean)[0];
      const value = questionAnsObj[questionId];
      question = question.replace(match, value || "");
    });
  }
  return question;
};
const getWelcomeMessage = (language) => {
  const translationFile = translationFileGetter(language || "en");
  return translationFile.welcome;
};
const getEndMessage = (language) => {
  const translationFile = translationFileGetter(language || "en");
  return translationFile.finish;
};
const getDependentsQuestionAnswer = (questionAnsObj) => {
  const dependentsQuestionAnswer = [];
  Object.keys(questionAnsObj)
    .filter((key) => {
      // return key.includes(":");
      const originalQuestionId = getOriginalQuestionId(key);
      const questionIdInKey = getQuestionIdInKeys(key);
      const { section } = {
        ...Queskeys[originalQuestionId],
        ...Queskeys[questionIdInKey],
      };
      return (
        section == "dependents" ||
        (Array.isArray(section) && section.includes("dependents"))
      );
    })
    .forEach((key) => {
      const [questionId, dependentIndex = 0] = key.split(":");
      if (dependentsQuestionAnswer[dependentIndex]) {
        dependentsQuestionAnswer[dependentIndex] = {
          ...dependentsQuestionAnswer[dependentIndex],
          [questionId]: questionAnsObj[key],
        };
      } else {
        dependentsQuestionAnswer[dependentIndex] = {
          [questionId]: questionAnsObj[key],
        };
      }
    });

  return dependentsQuestionAnswer.filter(Boolean);
};

const getDependent = (dependent, dependents) => {
  return dependents.find((item) => {
    return (
      dependent[290] === item["personal_details"].family_names &&
      dependent[2] === item["personal_details"].given_names
    );
  });
};

export {
  updateQuestionsOrder,
  createQuestionOrder,
  getOriginalQuestionId,
  getQuestion,
  getQuestionIdInKeys,
  getWelcomeMessage,
  getEndMessage,
  getTranslationValue,
  getDependentsQuestionAnswer,
  getDependent,
};
