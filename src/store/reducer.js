/* eslint-disable no-case-declarations */
import {
  getAsylumApplicationBundles,
  setAsylumApplicationBundles,
  getChatStatus as getChatStatusStorage,
  setChatStatus as setChatStatusStorage,
} from "../localstorage";
import { diff } from "deep-object-diff";
import { translationFileGetter } from "../utilities";
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
  SET_QUESTION_ANSWER_TIMESTAMP,
  SET_CHAT_STATUS,
  SET_ACTIVE_CONVERSATION_ID,
  SAVE_DEPENDENTS,
  CONVERSATION_FETCHED,
  SET_SKIP_QUESTIONS,
  SET_MESSAGES,
  SET_CURRENT_PROFILE,
} from "./Constants/StoreConstants";

const initState = {
  activeConversationId: null,
  users: [],
  currentUser: null,
  currentProfile: null,
  language: 'en',
  serverDropdown: null,
  translationFile: translationFileGetter('en'),
  error: null,
  botID: null,
  botName: null,
  questionAnsObj: {},
  currentFormPayload: {},
  lastAddedDependant: null,
  asylumApplicationBundles: getAsylumApplicationBundles() || [],
  questionsOrder: [],
  accessToken: null,
  botConversationMap: {},
  lastQuestionIndex: null,
  questionAnswerTimestamp: {},
  chatStatus: getChatStatusStorage() || {},
  skipQuestions: [],
  dependents: [],
  conversationFetched: false,
  messages: [],
};
export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_ACTIVE_CONVERSATION_ID:
      return {
        ...state,
        activeConversationId: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        currentProfile: action.payload ? action.payload.profiles.find(
          (profile) => profile.id === action.payload.active_profile_id
        ) : state.currentProfile,
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile:
          Object.keys(diff(action.payload, state.currentProfile)).length > 0
            ? action.payload
            : state.currentProfile,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          message: action.payload,
        },
      };
    case SET_BOT:
      const result = {
        ...state,
        botID: action.payload.id,
        botName: action.payload.name,
      };
      return result;
    case SET_QUES_ANS:
      return {
        ...state,
        questionAnsObj: {
          ...state.questionAnsObj,
          [action.payload.botID || state.botID]: action.payload.questionAnsObj,
        },
      };
    case SET_QUESTIONS_ORDER:
      return {
        ...state,
        questionsOrder:
          action.payload || state.currentProfile.question_order[state.botID],
      };
    case SET_TRANSLATION_FILE:
      return {
        ...state,
        translationFile: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_CURRENT_FORM_PAYLOAD:
      return {
        ...state,
        currentFormPayload: action.payload,
      };
    case SET_ASYLUM_APPLICATION_BUNDLES:
      const asylumApplicationBundles = action.payload
        .filter((bundle) => bundle.checked)
        .map((bundle) => bundle.name);

      setAsylumApplicationBundles(asylumApplicationBundles);
      return {
        ...state,
        asylumApplicationBundles,
      };
    case SET_LAST_QUESTION_INDEX:
      return {
        ...state,
        lastQuestionIndex:
          action.payload || state.currentProfile.lastQuestionIndex,
      };
    case SET_SERVER_DROPDOWN:
      return {
        ...state,
        serverDropdown: action.payload,
      };
    case SET_QUESTION_ANSWER_TIMESTAMP:
      const newState = {
        ...state,
        questionAnswerTimestamp: {
          ...state.questionAnswerTimestamp,
          ...action.payload,
        },
      };
      return newState;
    case SET_CHAT_STATUS:
      const chatStatus = {
        ...state.chatStatus,
        ...action.payload,
      };
      setChatStatusStorage(chatStatus);
      return {
        ...state,
        chatStatus,
      };
    case SET_SKIP_QUESTIONS:
      const skipQuestions = state.skipQuestions.includes(action.payload)
        ? state.skipQuestions
        : [...state.skipQuestions, action.payload];
      return {
        ...state,
        skipQuestions,
      };
    case SAVE_DEPENDENTS:
      return {
        ...state,
        dependents: action.payload,
      };
    case CONVERSATION_FETCHED:
      return {
        ...state,
        conversationFetched: action.payload,
      };
    case SET_MESSAGES:
      const diffObj = diff(action.payload, state.messages);
      const isChanged = Object.keys(diffObj).length > 0;
      return {
        ...state,
        messages: isChanged ? action.payload : state.messages,
      };
    default:
      return state;
  }
}
