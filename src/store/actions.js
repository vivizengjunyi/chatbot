import {
  setAccessToken,
  setLoginUserId,
} from "../localstorage";
import axios from "axios";
import {
  SET_CURRENT_USER,
  SET_USERS,
  SET_QUES_ANS,
  SET_BOT,
  SET_ERROR,
  SET_LANGUAGE,
  SET_TRANSLATION_FILE,
  SET_CURRENT_FORM_PAYLOAD,
  SET_ASYLUM_APPLICATION_BUNDLES,
  SET_ACCESS_TOKEN,
  SET_QUESTIONS_ORDER,
  SET_LAST_QUESTION_INDEX,
  SET_SERVER_DROPDOWN,
  SET_CHAT_STATUS,
  SET_ACTIVE_CONVERSATION_ID,
  SET_SKIP_QUESTIONS,
  SAVE_DEPENDENTS,
  CONVERSATION_FETCHED,
  SET_MESSAGES,
  SET_CURRENT_PROFILE,
} from "./Constants/StoreConstants";
// create a request function to provide queue for requests, only one request can be processed at a time
const requestQueue = [];
let isRequesting = false;
const addRequestQueue = (action) => {
  requestQueue.push(action);
  if (!isRequesting) {
    requestQueue.shift()();
    isRequesting = true;
  }
};
const nextRequest = () => {
  isRequesting = false;
  if (requestQueue.length > 0) {
    requestQueue.shift()();
    isRequesting = true;
  }
};
export const updateConversation = (dispatch, conversationId, data, botID) => {
  dispatch(
    updateConversationAppendOrRewrite(conversationId, data.messages[0], botID)
  );
};
export const updateConversationAppendOrRewrite = (conversationId, message, botID) => {
  return (dispatch) => {
    addRequestQueue(() => {
      axios
        .get(`api/v1/conversation/${conversationId}`)
        .then(async ({ data }) => {
          let messageFound = false;
          let newData;
          if (Array.isArray(message)) {
            newData = message
            messageFound = true;
          } else {
            newData = data.messages.map((msg) => {
              if (
                msg.id === message.id ||
                msg.question_id === message.question_id
              ) {
                messageFound = true;
                return { ...msg, ...message };
              }
              return msg;
            });
          }
          const request = messageFound
            ? axios.patch(`/api/v1/conversation/${conversationId}/rewrite`, {
                messages: newData,
              })
            : axios.patch(`/api/v1/conversation/${conversationId}`, {
                messages: [message],
              });
          request
            .then((res) => {
              updateConversationDetail(dispatch, res, conversationId, botID);
            })
            .catch((err) => {
              console.log(
                "Failed to put the conversation to DB with err: ",
                err
              );
            })
            .finally(() => {
              nextRequest();
            });
        })
        .catch((err) =>
          console.log(
            "Failed to update user conversation details with err: ",
            err
          )
        );
    });
  };
};
export const setConversationFetched = (payload) => {
  return {
    type: CONVERSATION_FETCHED,
    payload: payload,
  };
};
export const setQuestionsAnswer = (payload) => {
  return {
    type: SET_QUES_ANS,
    payload: payload,
  };
};

export const setTranslationFile = (questions) => {
  return {
    type: SET_TRANSLATION_FILE,
    payload: questions,
  };
};

export const setActiveConversationID = (activeConversationId) => {
  return {
    type: SET_ACTIVE_CONVERSATION_ID,
    payload: activeConversationId,
  };
};

export const setCurrentUserAction = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
export const setUsersAction = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};
export const setErrorAction = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const signUpAction = (user) => {
  return (dispatch) => {
    return axios
      .post("/api/v1/users", user)
      .then((res) => {
        // creating a new user profile and signing in that profile
        createUserProfile(res.data.id).then(() => dispatch(signInAction(user)));
      })
      .catch((e) => {
        dispatch(setErrorAction("An error occured while signing up."));
        console.log(e);
      });
  };
};

// Creates a new profile
export const createUserProfile = (userId) => {
  return axios.post(`/api/v1/users/${userId}/profiles`, {
    name: "Default Profile",
  });
};

export const signInAction = (user) => {
  return (dispatch) => {
    const bodyFormData = new FormData();
    bodyFormData.append("grant_type", "password");
    bodyFormData.append("username", user.username);
    bodyFormData.append("password", user.password);
    axios({
      method: "post",
      url: "api/v1/token",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        return dispatch(getUserAction(res));
      })
      .catch((e) => {
        dispatch(
          setErrorAction(
            "Failed to sign in. Please make sure you have the right credentials."
          )
        );
        console.log(e);
      });
  };
};

// Gets user profile by ID
export const getUserProfile = (profileId) =>
  axios.get(`api/v1/profiles/${profileId}`);

// Updates the user profile
export const updateUserConversation = (activeProfileId) => {
  return (dispatch) => {
    getUserProfile(activeProfileId)
      .then(async (profile) => {
        let userProfile = profile.data;
        let activeConversationId = userProfile.active_conversation_id;
        console.log("activeConversationId is: ", activeConversationId);
        dispatch(fetchConversationDetails(activeConversationId));
      })
      .catch(() =>
        dispatch(setErrorAction("Failed to update user conversation!"))
      );
  };
};
const updateConversationDetail = async (
  dispatch,
  res,
  conversationId,
  botID
) => {
  console.log("res.data.messages: ", res.data.messages);
  let quesAnsObj = res.data.messages
    .reduce((obj, item) => {
      if (item.question_id) {
        obj[item.question_id] = item.answer;
      }
      return obj;
    }, {});
  dispatch(setActiveConversationID(conversationId));
  dispatch(
    setQuestionsAnswer({
      botID,
      questionAnsObj: quesAnsObj,
    })
  );
  dispatch(setMessages(res.data.messages));
  dispatch(setConversationFetched(true));
};
// Fetch the conversation details
export const fetchConversationDetails = (activeConversationId) => {
  return (dispatch) => {
    axios
      .get(`api/v1/conversation/${activeConversationId}`)
      .then(async (res) => {
        updateConversationDetail(dispatch, res, activeConversationId);
      })
      .catch((err) =>
        console.log(
          "Failed to update user conversation details with err: ",
          err
        )
      );
  };
};

export const getUserAction = (res, accessToken) => {
  return (dispatch) => {
    if (res?.data?.access_token) {
      accessToken = res.data.access_token;
      dispatch(setAccessTokenAction(accessToken));
    }
    axios({
      method: "get",
      url: "api/v1/current_user",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(async (res) => {
      const currentUser = JSON.parse(JSON.stringify(res.data));
      if (currentUser) {
        setLoginUserId(currentUser.email);
        dispatch(setCurrentUserAction(currentUser));
        dispatch(setLanguage(currentUser.locale_code));
        dispatch(updateUserConversation(currentUser.active_profile_id));
      } else {
        dispatch(setErrorAction("user not found"));
      }
    });
  };
};

export const changeBot = (id, name) => {
  return {
    type: SET_BOT,
    payload: { id, name },
  };
};

export const setLanguage = (payload) => {
  payload = payload.toLowerCase();
  return {
    type: SET_LANGUAGE,
    payload: payload,
  };
};

export const createProfileAction = (currentUser, payload) => {
  return (dispatch) => {
    return axios
      .post(`api/v1/users/${currentUser.id}/profiles`, payload)
      .then(() => axios.get(`/api/v1/users/${currentUser.id}`))
      .then((res) => {
        dispatch(setCurrentUserAction(res.data));
      })
      .catch(() => dispatch(setErrorAction("Failed to create profile")));
  };
};

export const deleteProfileAction = (currentUser, profileId) => {
  return (dispatch) => {
    if (currentUser.profiles?.length == 0) {
      return dispatch(
        setErrorAction("Cannot delete profile - user must have at least one.")
      );
    } else if (currentUser.active_profile_id === profileId) {
      return dispatch(setErrorAction("Cannot delete active profile."));
    }

    return axios
      .delete(`api/v1/profiles/${profileId}`)
      .then(() => axios.get(`/api/v1/users/${currentUser.id}`))
      .then((res) => {
        return dispatch(setCurrentUserAction(res.data));
      })
      .catch(() => dispatch(setErrorAction("Failed to delete profile")));
  };
};

export const editProfileAction = (currentUser, profileId, payload) => {
  return updateProfile(profileId, payload, (dispatch) => {
    axios
      .get(`/api/v1/users/${currentUser.id}`)
      .then((res) => dispatch(setCurrentUserAction(res.data)))
      .catch(() => dispatch(setErrorAction("Failed to update profile")));
  });
};

export const generateReportFormAction = (payload, profileId) => {
  //interact payload find key is undefined, and delete it
  Object.keys(payload).forEach((key) => {
    if (key === "undefined") {
      delete payload[key];
    }
    // find any key inside the payload[key] is undefined, and delete it
    if (payload[key] && typeof payload[key] === "object") {
      Object.keys(payload[key]).forEach((key2) => {
        if (key2 === "undefined") {
          delete payload[key][key2];
        }
      });
    }
  });
  //
  return async (dispatch) => {
    await axios.patch(`api/v1/profiles/${profileId}`, payload);
    dispatch(saveCurrentFormPayloadAction(payload));
  };
};

export const creatDependentsAction = (payload, profileId) => {
  return async () => {
    await axios.post(`/api/v1/profiles/${profileId}/dependants`, payload);
  };
};

export const updateDependentsAction = (payload, dependant_id) => {
  return async () => {
    await axios.patch(`/api/v1/dependants/${dependant_id}`, payload);
  };
};

export const getDependentsAction = (profileId) => {
  return async (dispatch) => {
    const result = await axios.get(`/api/v1/profiles/${profileId}/dependants`);
    dispatch(saveDependentsAction(result.data));
  };
};

export const saveDependentsAction = (dependants) => {
  return {
    type: SAVE_DEPENDENTS,
    payload: dependants,
  };
};

export const saveCurrentFormPayloadAction = (payload) => {
  return {
    type: SET_CURRENT_FORM_PAYLOAD,
    payload: payload,
  };
};

export const saveOrDeleteAsylumApplicationBundlesAction = (formList) => {
  return {
    type: SET_ASYLUM_APPLICATION_BUNDLES,
    payload: formList,
  };
};

export const setAccessTokenAction = (payload) => {
  setAccessToken(payload);
  return {
    type: SET_ACCESS_TOKEN,
    payload: payload,
  };
};

export const setQuestionsOrder = (payload) => {
  return {
    type: SET_QUESTIONS_ORDER,
    payload: payload,
  };
};

export const updateQuestionsOrder = (
  profileId,
  botID,
  data,
  questionsOrder,
  callback
) => {
  return updateProfile(
    profileId,
    "question_order",
    { ...questionsOrder, ...{ [botID]: data } },
    callback
  );
};

export const setLastQuestionIndex = (payload) => {
  return {
    type: SET_LAST_QUESTION_INDEX,
    payload: payload,
  };
};

export const updateLastQuestionIndex = (profileId, data, lastQuestionIndex) => {
  return updateProfile(
    profileId,
    "last_question_index",
    { ...lastQuestionIndex, ...data }
  );
};

export const updateProfile = (profileId, key, data, callback) => {
  let postData = {};
  if (typeof key === "object") {
    postData = key;
    callback = data;
  } else {
    postData = { [key]: data };
  }
  return (dispatch) => {
    axios
      .patch(`/api/v1/profiles/${profileId}`, postData)
      .then((res) => {
        dispatch({
          type: SET_CURRENT_PROFILE,
          payload: res.data,
        });
        callback && callback(dispatch, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setServerDropdown = (payload) => {
  return {
    type: SET_SERVER_DROPDOWN,
    payload: payload,
  };
};
export const setQuestionAnswerTimestamp = (
  payload,
  activeConversationId,
  messages,
  botID
) => {
  return updateConversationAppendOrRewrite(
    activeConversationId,
    {
      question_id: payload.questionId,
      ...(payload.answer ? { answer_timestamp: payload.answer } : {}),
      ...(payload.question ? { question_timestamp: payload.question } : {}),
    },
    botID
  );
};

export const setChatStatus = (payload) => {
  return {
    type: SET_CHAT_STATUS,
    payload: payload,
  };
};

export const setSkipQuestions = (payload) => {
  return {
    type: SET_SKIP_QUESTIONS,
    payload: payload,
  };
};

export const setMessages = (payload) => {
  return {
    type: SET_MESSAGES,
    payload: payload,
  };
};
