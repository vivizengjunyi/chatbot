/* This file contains the logic to convert the user conversation in a format which backend understands */

import { Queskeys } from "./QuestionKeysHelper";
import { serverDropdownGetter } from "./index";
import { getOriginalQuestionId } from "./chat";

export const payloadConstructor = async (
  language,
  botID,
  conversation,
  isDependent
) => {
  let payload = {
    name: "",
    application_details: {},
    personal_details: {},
    dependents: [],
    contact_information: {},
    passport: {},
    national_identity_document: {},
    education_occupation_details: {},
    language_details: {},
    consent_and_declaration: {},
  };

  const serverDropdown = await serverDropdownGetter(language);
  Object.keys(conversation).forEach((questionId) => {
    let answer = conversation[questionId];
    let originalQuestionId = getOriginalQuestionId(questionId);
    let questionConfig = {
      ...Queskeys[originalQuestionId],
      ...Queskeys[questionId],
    };
    const { valueKey, section, labels, type } = questionConfig;
    let submitAnswer = answer;
    switch (type) {
      // Wrapping cases for lexical declaration
      case "serverDropdown":
        // eslint-disable-next-line no-case-declarations
        const dropdownObj = serverDropdown[valueKey];
        submitAnswer = Object.keys(dropdownObj).find(
          (key) => dropdownObj[key] === answer
        );
        break;
      case "Boolean":
        submitAnswer = answer === "Yes" ? "Yes" : "No";
        break;
      case "checkBox":
        submitAnswer = answer === "Yes" ? "1" : "0";
        break;
      case "date":
        if (Array.isArray(labels)) {
          let dateArray = answer === null || answer === undefined ? [] : answer.split("/");
          const sections = Array.isArray(section) ? section : [section];
          sections.forEach((section) => {
            labels.forEach((label, index) => {
              payload[section] = {
                ...payload[section],
                ...{ [label]: dateArray.length > 0 ? parseInt(dateArray[index]) : null },
              };
            });
          });
        } else {
          payload[section] = {
            ...payload[section],
            ...{ [labels]: answer === null || answer === undefined ? null : answer.replace(/\//g, "-") },
          };
        }
        break;
      default:
        submitAnswer = isNaN(parseInt(answer)) ? answer : parseInt(answer);
    }
    if (type !== "date") {
      const sections = Array.isArray(section) ? section : [section];
      const _labels = Array.isArray(labels) ? labels : [labels];
      sections.forEach((section) => {
        _labels.forEach((label) => {
          if (!sections.includes("dependents") || isDependent) {
            payload[section] = {
              ...(payload[section] || {}),
              ...{ [label]: submitAnswer },
            };
          }
        });
      });
    }
  });
  
  console.log("Payload generated for form is: ", payload);
  return payload;
};
