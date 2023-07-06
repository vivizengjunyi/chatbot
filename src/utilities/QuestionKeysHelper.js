/*
  NOTE: All DB columns with Bool type in Backend needs to be defined as "checkBox" in this file.
  Essentially, "Boolean" and "checkBox" will have the same UI but the values mapped would be different.
 */

/* NOTE: 
  Every form has its own workflow, although some share the same start question. In order to create different workflows, some question id has their sibling ids like 123, 123.1, 123.2 and 123.3. All ids and their siblings have different parentNode and they belong to different forms. That is the logic to show different quetsionsOrder based on forms.
*/

export const startQuestion = {
  generic_application_form: "34",
  change_of_conditions_student_filter_form: "123.2",
  change_of_conditions_worker_filter_form: "123.3",
  change_of_conditions_student_form: "6.3",
  change_of_conditions_worker_form: "6.4",
  basis_of_claim_form: "400",
};
export const endQuestion = {
  generic_application_form: { id: "280", value: "No" },
  change_of_conditions_student_filter_form: [
    "182.1",
    { id: 169.1, value: "No" },
  ],
  change_of_conditions_worker_filter_form: [
    "182.3",
    { id: 169.3, value: "No" },
  ],
  change_of_conditions_student_form: ["182", { id: 169, value: "No" }],
  change_of_conditions_worker_form: ["182.2", { id: 169.2, value: "No" }],
  basis_of_claim_form: ["415"],
};
const onParentSkipped = (parentValue) => {
  return !parentValue;
};
const onParentAnswered = (parentValue) => {
  return !!parentValue;
};
export const Queskeys = {
  1: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "family_names",
    parentNode: [
      "30",
      "30.1",
      "30.2",
      "30.3",
      "30.4",
      "30.5",
      "30.6",
      "30.7",
      "30.8",
      "30.9",
      "30.10",
      "30.11",
      "30.12",
      "30.13",
    ],
    required: true,
  },
  1.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "224",
  },
  1.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "224.1",
  },
  2: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "given_names",
    parentNode: "1",
    required: false,
  },
  2.2: {
    forms: "generic_application_form",
    section: ["personal_details", "dependents"],
    parentNode: ["1", "290"],
  },
  2.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "1.3",
  },
  2.4: {
    forms: "change_of_conditions_student_form",
    parentNode: "1.4",
  },
  3: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "has_alias",
    type: "checkBox",
    parentNode: "2",
    required: true,
  },
  3.2: {
    forms: "generic_application_form",
    section: ["personal_details", "dependents"],
    parentNode: "2.2",
  },
  3.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "2.3",
  },
  3.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "2.4",
  },
  4: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "alias_family_names",
    parentNode: {
      id: "3",
      value: "Yes",
    },
    required: false,
  },
  4.2: {
    forms: "generic_application_form",
    section: ["personal_details", "dependents"],
    parentNode: {
      id: "3.2",
      value: "Yes",
    },
  },
  4.3: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "3.3",
      value: "Yes",
    },
  },
  4.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "3.4",
      value: "Yes",
    },
  },
  5: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "alias_given_names",
    parentNode: "4",
    required: false,
  },
  5.2: {
    forms: "generic_application_form",
    section: ["personal_details", "dependents"],
    parentNode: "4.2",
  },
  5.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "4.3",
  },
  5.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "4.4",
  },
  6: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "uci",
    parentNode: ["3", "5"],
    required: false,
  },
  6.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: ["3.2", "5.2"],
  },
  6.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
  },
  6.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
  },
  7: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "serverDropdown",
    labels: "sex",
    valueKey: "GenderCitList_GenderCit",
    parentNode: "6",
    required: true,
  },
  7.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "6.2",
  },
  7.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: [
      {
        id: "3.3",
        value: "No",
      },
      "5.3",
    ],
  },
  7.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: [
      {
        id: "3.4",
        value: "No",
      },
      "5.4",
    ],
  },
  8: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "height_cm",
    parentNode: "7",
    required: false,
  },
  8.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "7.2",
  },
  9: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "serverDropdown",
    labels: "eye_colour",
    valueKey: "EyeColorList_EyeColor",
    parentNode: "8",
    required: true,
  },
  9.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "8.2",
  },
  10: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "date",
    labels: ["date_of_birth_year", "date_of_birth_month", "date_of_birth_day"],
    parentNode: "9",
    required: true,
  },
  10.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "9.2",
  },
  10.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "7.3",
  },
  10.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "7.4",
  },
  11: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "serverDropdown",
    valueKey: "CountryOfBirthList_CountryOfBirth",
    labels: "place_of_birth_country",
    parentNode: "10",
    required: true,
  },
  11.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "10.2",
  },
  11.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "10.3",
  },
  11.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "10.4",
  },
  12: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "place_of_birth_city",
    parentNode: "11",
    required: true,
  },
  12.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "11.2",
  },
  12.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "11.3",
  },
  12.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "11.4",
  },
  13: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "serverDropdown",
    labels: "citizenship_one",
    valueKey: "CountryOfCitizenshipList_CountryOfCitizenship",
    parentNode: "12",
    required: true,
  },
  13.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "12.2",
  },
  13.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "12.3",
  },
  13.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "12.4",
  },
  14: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "serverDropdown",
    labels: "current_country_of_residence_country",
    valueKey:
      "CountryOfLastPermanentResidentList_CountryOfLastPermanentResident",
    parentNode: [{ id: "105", value: "No" }, 106],
    required: true,
  },
  14.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [{ id: "105.2", value: "No" }, 106.2],
  },
  15: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "current_country_of_residence_status",
    type: "serverDropdown",
    valueKey: "ImmigrationStatusList_ImmigrationStatus",
    parentNode: [
      "17",
      {
        id: "14",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
    required: true,
  },
  15.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [
      "17.2",
      {
        id: "14.2",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
  },
  16: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "last_entry_into_canada_date",
    type: "date",
    parentNode: {
      id: "14",
      value: "Canada",
    },
    required: true,
  },
  16.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "14.2",
      value: "Canada",
    },
  },
  17: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "last_entry_into_canada_place",
    parentNode: "16",
    required: true,
  },
  17.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "16.2",
  },
  18: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "has_previous_countries_of_residence",
    type: "checkBox",
    parentNode: [
      "276",
      {
        id: "15",
        value: [
          "Citizen",
          "Permanent resident",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
      {
        id: "273",
        value: [onParentSkipped],
      },
    ],
    required: true,
  },
  18.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [
      "276.2",
      {
        id: "15.2",
        value: [
          "Citizen",
          "Permanent resident",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
      {
        id: "273.2",
        value: [onParentSkipped],
      },
    ],
  },
  18.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: [
      "131",
      {
        id: "129",
        value: [
          "Citizen",
          "Permanent resident",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  18.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: [
      "131.1",
      {
        id: "129.1",
        value: [
          "Citizen",
          "Permanent resident",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  19: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "serverDropdown",
    labels: "first_previous_country_of_residence_country",
    valueKey:
      "CountryOfLastPermanentResidentList_CountryOfLastPermanentResident",
    parentNode: {
      id: "18",
      value: "Yes",
    },
    required: false,
  },
  19.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "18.2",
      value: "Yes",
    },
  },
  19.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: {
      id: "18.3",
      value: "Yes",
    },
  },
  19.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: {
      id: "18.4",
      value: "Yes",
    },
  },
  20: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "second_previous_country_of_residence_country",
    type: "serverDropdown",
    valueKey:
      "CountryOfLastPermanentResidentList_CountryOfLastPermanentResident",
    parentNode: {
      id: "117",
      value: "Yes",
    },
    required: false,
  },
  20.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "117.2",
      value: "Yes",
    },
  },
  20.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    valueKey:
      "CountryOfLastPermanentResidentList_CountryOfLastPermanentResident",
    parentNode: {
      id: "117.3",
      value: "Yes",
    },
  },
  20.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    valueKey:
      "CountryOfLastPermanentResidentList_CountryOfLastPermanentResident",
    parentNode: {
      id: "117.4",
      value: "Yes",
    },
  },
  21: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "second_previous_country_of_residence_status",
    type: "serverDropdown",
    valueKey: "ImmigrationStatusList_ImmigrationStatus",
    parentNode: "20",
    required: false,
  },
  21.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "20.2",
  },
  21.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "20.3",
  },
  21.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "20.4",
  },
  22: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "second_previous_country_of_residence_other",
    parentNode: {
      id: "21",
      value: "Other",
    },
    required: false,
  },
  22.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "21.2",
      value: "Other",
    },
  },
  22.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: {
      id: "21.3",
      value: "Other",
    },
  },
  22.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: {
      id: "21.4",
      value: "Other",
    },
  },
  23: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "second_previous_country_of_residence_to_date",
    type: "date",
    parentNode: "210",
    required: false,
  },
  23.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "210.2",
  },
  23.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "210.3",
  },
  23.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "210.4",
  },
  86: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "marital_status",
    type: "serverDropdown",
    valueKey: "MaritalStatusList_MaritalStatus",
    parentNode: [
      "23",
      {
        id: "117",
        value: "No",
      },
      {
        id: "18",
        value: "No",
      },
      {
        id: "19",
        value: [onParentSkipped],
      },
      {
        id: "119",
        value: [onParentSkipped],
      },
      {
        id: "20",
        value: [onParentSkipped],
      },
      {
        id: "22",
        value: [onParentSkipped],
      },
      {
        id: "21",
        value: [onParentSkipped],
      },
      {
        id: "272",
        value: [onParentSkipped],
      },
    ],
    required: true,
  },
  86.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [
      "23.2",
      {
        id: "117.2",
        value: "No",
      },
      {
        id: "18.2",
        value: "No",
      },
      {
        id: "19.2",
        value: [onParentSkipped],
      },
      {
        id: "119.2",
        value: [onParentSkipped],
      },
      {
        id: "20.2",
        value: [onParentSkipped],
      },
      {
        id: "22.2",
        value: [onParentSkipped],
      },
      {
        id: "21.2",
        value: [onParentSkipped],
      },
      {
        id: "272.2",
        value: [onParentSkipped],
      },
    ],
  },
  86.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: [
      "23.3",
      {
        id: "117.3",
        value: "No",
      },
      {
        id: "18.3",
        value: "No",
      },
      {
        id: "19.3",
        value: [onParentSkipped],
      },
      {
        id: "119.3",
        value: [onParentSkipped],
      },
      {
        id: "20.3",
        value: [onParentSkipped],
      },
      {
        id: "22.3",
        value: [onParentSkipped],
      },
      {
        id: "21.3",
        value: [onParentSkipped],
      },
      {
        id: "272.3",
        value: [onParentSkipped],
      },
    ],
  },
  86.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: [
      "23.4",
      {
        id: "117.4",
        value: "No",
      },
      {
        id: "18.4",
        value: "No",
      },
      {
        id: "19.4",
        value: [onParentSkipped],
      },
      {
        id: "119.4",
        value: [onParentSkipped],
      },
      {
        id: "20.4",
        value: [onParentSkipped],
      },
      {
        id: "22.4",
        value: [onParentSkipped],
      },
      {
        id: "21.4",
        value: [onParentSkipped],
      },
      {
        id: "272.4",
        value: [onParentSkipped],
      },
    ],
  },
  87: {
    forms: "generic_application_form",
    section: ["personal_details", "dependents"],
    labels: "previously_married",
    type: "checkBox",
  },
  88: {
    forms: "generic_application_form",
    section: ["personal_details", "dependents"],
    labels: "previous_spouse_family_names",
  },
  89: {
    forms: "generic_application_form",
    section: ["personal_details", "dependents"],
    labels: "previous_spouse_given_names",
  },
  90: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "previous_relationship_type",
    type: "serverDropdown",
    valueKey: "MaritalStatusHistoryList_MaritalStatusHistory",
    parentNode: "233",
    required: true,
  },
  90.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "233.2",
  },
  90.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "233.3",
  },
  90.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "233.4",
  },
  91: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "previous_relationship_from_date",
    type: "date",
    parentNode: "90",
    required: true,
  },
  91.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "90.2",
  },
  91.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "90.3",
  },
  91.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "90.4",
  },
  92: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "previous_relationship_to_date",
    type: "date",
    parentNode: "91",
    required: true,
  },
  92.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "91.2",
  },
  92.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "91.3",
  },
  92.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "91.4",
  },
  93: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: [
      "previous_relationship_date_of_birth_year",
      "previous_relationship_date_of_birth_month",
      "previous_relationship_date_of_birth_day",
    ],
    type: "date",
    parentNode: "92",
    required: true,
  },
  93.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "92.2",
  },
  93.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "92.3",
  },
  93.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "92.4",
  },
  94: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "serverDropdown",
    labels: "citizenship_two",
    valueKey: "CountryList_Country",
  },
  24: {
    forms: "generic_application_form",
    section: "application_details",
    type: "serverDropdown",
    labels: "category",
    valueKey: "ApplyingCategoryList_Family_ApplyingCategory",
    parentNode: {
      id: "34",
      value: "Family",
    },
    requiredd: true,
  },
  24.1: {
    valueKey: "ApplyingCategoryList_Economic_ApplyingCategory",
    parentNode: {
      id: "34",
      value: "Economic",
    },
  },
  24.2: {
    valueKey: "ApplyingCategoryList_Refugee_ApplyingCategory",
    parentNode: {
      id: "34",
      value: "Refugee",
    },
  },
  24.3: {
    valueKey: "ApplyingCategoryList_Other_ApplyingCategory",
    parentNode: {
      id: "34",
      value: "Other",
    },
  },
  25: {
    forms: "generic_application_form",
    section: "application_details",
    type: "number",
    labels: "family_members",
    parentNode: ["24", "24.1", "24.2", "24.3"],
    requiredd: true,
  },
  26: {
    forms: "generic_application_form",
    section: "application_details",
    type: "serverDropdown",
    labels: "language_correspondence",
    valueKey: "PreferenceLanguageList_PreferenceLanguage",
    parentNode: "25",
    requiredd: true,
  },
  27: {
    forms: "generic_application_form",
    section: "application_details",
    labels: "language_interview",
    type: "serverDropdown",
    valueKey: "InterviewLanguageList_InterviewLanguage",
    parentNode: "26",
    requiredd: true,
  },
  28: {
    forms: "generic_application_form",
    section: "application_details",
    labels: "interpreter_requested",
    type: "Boolean",
    parentNode: "27",
    requiredd: true,
  },
  29: {
    forms: "generic_application_form",
    section: "application_details",
    labels: "intend_to_live_in_canada_province_territory",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: "28",
    requiredd: true,
  },
  30: {
    forms: "generic_application_form",
    section: "application_details",
    labels: "intend_to_live_in_canada_city_town",
    type: "serverDropdown",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "29",
      value: "AB",
    },
    requiredd: true,
  },
  30.1: {
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "29",
      value: "BC",
    },
  },
  30.2: {
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "29",
      value: "MB",
    },
    requiredd: true,
  },
  30.3: {
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "29",
      value: "MB",
    },
  },
  30.4: {
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "29",
      value: "NB",
    },
  },
  30.5: {
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "29",
      value: "NL",
    },
  },
  30.6: {
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "29",
      value: "NS",
    },
  },
  30.7: {
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "29",
      value: "NT",
    },
  },
  30.8: {
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "29",
      value: "NU",
    },
  },
  30.9: {
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "29",
      value: "ON",
    },
  },
  "30.10": {
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "29",
      value: "PE",
    },
  },
  30.11: {
    valueKey: "CityList_QC_City",
    parentNode: ["32", "33"],
  },
  30.12: {
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "29",
      value: "SK",
    },
  },
  30.13: {
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "29",
      value: "YT",
    },
  },
  31: {
    forms: "generic_application_form",
    section: "application_details",
    labels: "received_csq",
    type: "checkBox",
    parentNode: {
      id: "29",
      value: "QC",
    },
    required: true,
  },
  32: {
    forms: "generic_application_form",
    section: "application_details",
    labels: "csq_number",
    parentNode: {
      id: "31",
      value: "Yes",
    },
    required: false,
  },
  33: {
    forms: "generic_application_form",
    section: "application_details",
    labels: "csq_application_date",
    type: "date",
    parentNode: {
      id: "31",
      value: "No",
    },
    required: false,
  },
  34: {
    forms: "generic_application_form",
    section: ["application_details"],
    labels: "program",
    type: "serverDropdown",
    valueKey: "ApplyingProgramList_ApplyingProgram",
    required: true,
  },
  35: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "po_box",
    parentNode: [
      {
        id: "231",
        value: "No",
      },
      "93",
    ],
    required: false,
  },
  36: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "current_address_apt_unit",
    parentNode: "35",
    required: false,
  },
  37: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "current_address_street_number",
    type: "number",
    parentNode: "36",
    required: false,
  },
  38: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "current_address_street_name",
    parentNode: "37",
    required: true,
  },
  39: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "current_address_city_town",
    parentNode: "38",
    required: false,
  },
  40: {
    forms: "generic_application_form",
    section: "contact_information",
    type: "serverDropdown",
    labels: "current_address_country",
    valueKey: "CountryOfIssueList_CountryOfIssue",
    parentNode: "39",
    required: true,
  },
  41: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "current_address_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: {
      id: "40",
      value: "Canada",
    },
    required: true,
  },
  42: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "current_address_district",
    parentNode: {
      id: "40",
      value: [
        (parentValue) => {
          return parentValue !== "Canada";
        },
      ],
    },
    required: false,
  },
  43: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "current_address_postal_code",
    parentNode: ["41", "42"],
    required: true,
  },
  44: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_same_as_mailing_indicator",
    type: "checkBox",
    parentNode: "43",
    required: true,
  },
  45: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_apt_unit",
    parentNode: {
      id: "44",
      value: "No",
    },
    required: false,
  },
  46: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_street_number",
    parentNode: "45",
    required: false,
  },
  47: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_street_name",
    parentNode: "46",
    required: false,
  },
  48: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_city_town",
    parentNode: "47",
    required: false,
  },
  49: {
    forms: "generic_application_form",
    section: "contact_information",
    type: "serverDropdown",
    labels: "residential_address_country",
    valueKey: "CountryOfIssueList_CountryOfIssue",
    parentNode: "48",
    required: false,
  },
  50: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: {
      id: "49",
      value: "Canada",
    },
    required: false,
  },
  51: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_district",
    parentNode: {
      id: "49",
      value: [
        (parentValue) => {
          return parentValue !== "Canada";
        },
      ],
    },
    required: false,
  },
  52: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "residential_address_postal_code",
    parentNode: ["50", "51"],
    required: false,
  },
  53: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "phone_canada_us_indicator",
    type: "checkBox",
    parentNode: [
      "52",
      {
        id: "44",
        value: "Yes",
      },
    ],
    required: true,
  },
  53.3: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      "313",
      {
        id: "307",
        value: "Yes",
      },
    ],
  },
  53.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "313.1",
      {
        id: "307.1",
        value: "Yes",
      },
    ],
  },
  54: {
    forms: "generic_application_form",
    section: "contact_information",
    type: "serverDropdown",
    labels: "phone_type",
    valueKey: "PhoneTypeTRVList_PhoneTypeTRV",
    parentNode: [
      "55",
      {
        id: "53",
        value: "Yes",
      },
    ],
    required: true,
  },
  54.3: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      "55.3",
      {
        id: "53.3",
        value: "Yes",
      },
    ],
  },
  54.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "55.4",
      {
        id: "53.4",
        value: "Yes",
      },
    ],
  },
  55: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "phone_country_code",
    parentNode: "277",
    required: true,
  },
  55.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "277.3",
  },
  55.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "277.4",
  },
  56: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "phone_number",
    parentNode: "54",
    required: true,
  },
  56.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "54.3",
  },
  56.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "54.4",
  },
  57: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "phone_ext",
    parentNode: "56",
    required: false,
  },
  57.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "56.3",
  },
  57.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "56.4",
  },
  58: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "alternate_phone_canada_us_indicator",
    type: "checkBox",
    parentNode: {
      id: "148",
      value: "Yes",
    },
    required: true,
  },
  58.3: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "148.3",
      value: "Yes",
    },
  },
  58.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "148.4",
      value: "Yes",
    },
  },
  59: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "alternate_phone_type",
    type: "serverDropdown",
    valueKey: "PhoneTypeTRVList_PhoneTypeTRV",
    parentNode: [
      {
        id: "58",
        value: "Yes",
      },
      "60",
    ],
    required: true,
  },
  59.3: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      {
        id: "58.3",
        value: "Yes",
      },
      "60.3",
    ],
  },
  59.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "58.4",
        value: "Yes",
      },
      "60.4",
    ],
  },
  60: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "alternate_phone_country_code",
    parentNode: "278",
    required: true,
  },
  60.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "278.3",
  },
  60.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "278.4",
  },
  61: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "alternate_phone_number",
    parentNode: "59",
    required: true,
  },
  61.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "59.3",
  },
  61.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "59.4",
  },
  62: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "alternate_phone_ext",
    parentNode: "61",
    required: false,
  },
  62.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "61.3",
  },
  62.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "61.4",
  },
  63: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "fax_phone_canada_us_indicator",
    type: "checkBox",
    parentNode: [
      "62",
      {
        id: "148",
        value: "No",
      },
    ],
    required: false,
  },
  63.3: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      "62.3",
      {
        id: "148.3",
        value: "No",
      },
    ],
  },
  63.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "62.4",
      {
        id: "148.4",
        value: "No",
      },
    ],
  },
  64: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "fax_country_code",
    parentNode: "279",
    required: false,
  },
  64.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "279.3",
  },
  64.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "279.4",
  },
  65: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "fax_number",
    parentNode: [
      {
        id: "63",
        value: "Yes",
      },
      "64",
    ],
    required: false,
  },
  65.3: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      {
        id: "63.3",
        value: "Yes",
      },
      "64.3",
    ],
  },
  65.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "63.4",
        value: "Yes",
      },
      "64.4",
    ],
  },
  66: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "fax_ext",
    parentNode: "65",
    required: false,
  },
  66.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "65.3",
  },
  66.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "65.4",
  },
  67: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "email",
    parentNode: "66",
    required: false,
  },
  67.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "66.3",
  },
  67.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "66.4",
  },
  68: {
    forms: "generic_application_form",
    section: "passport",
    labels: "passport_valid_indicator",
    type: "checkBox",
    parentNode: "67",
    required: true,
  },
  68.2: {
    forms: "generic_application_form",
    section: ["dependents", "passport"],
    parentNode: [
      {
        id: "231.2",
        value: "No",
      },
      "93.2",
    ],
  },
  69: {
    forms: "generic_application_form",
    section: "passport",
    labels: "passport_number",
    parentNode: {
      id: "68",
      value: "Yes",
    },
    required: true,
  },
  69.2: {
    forms: "generic_application_form",
    section: ["dependents", "passport"],
    parentNode: {
      id: "68.2",
      value: "Yes",
    },
    required: true,
  },
  70: {
    forms: "generic_application_form",
    section: ["passport"],
    labels: "passport_country_of_issue",
    type: "serverDropdown",
    valueKey: "CountryTravelDocumentList_CountryTravelDocument",
    parentNode: "69",
  },
  70.2: {
    forms: "generic_application_form",
    section: ["passport", "dependents"],
    parentNode: "69.2",
  },
  71: {
    forms: "generic_application_form",
    section: "passport",
    labels: "passport_issue_date",
    type: "date",
    parentNode: [
      {
        id: "70",
        value: [
          (parentValue) => {
            return (
              parentValue !== "TWN (Taiwan)" && parentValue !== "ISR (Israel)"
            );
          },
        ],
      },
      "73",
      "74",
    ],
    required: true,
  },
  71.2: {
    forms: "generic_application_form",
    section: ["passport", "dependents"],
    parentNode: [
      {
        id: "70.2",
        value: [
          (parentValue) => {
            return (
              parentValue !== "TWN (Taiwan)" && parentValue !== "ISR (Israel)"
            );
          },
        ],
      },
      "73.5",
      "74.5",
    ],
  },
  72: {
    forms: "generic_application_form",
    section: "passport",
    labels: "passport_expiry_date",
    type: "date",
    parentNode: "71",
    required: true,
  },
  72.2: {
    forms: "generic_application_form",
    section: ["passport", "dependents"],
    parentNode: "71.2",
  },
  73: {
    forms: "generic_application_form",
    section: "passport",
    labels: "taiwain_personal_identification_number_indicator",
    type: "checkBox",
    parentNode: {
      id: "70",
      value: "TWN (Taiwan)",
    },
    required: true,
  },
  73.1: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "141",
      value: "TWN (Taiwan)",
    },
  },
  73.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "141.1",
      value: "TWN (Taiwan)",
    },
  },
  73.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "141.2",
      value: "TWN (Taiwan)",
    },
  },
  73.4: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "141.3",
      value: "TWN (Taiwan)",
    },
  },
  73.5: {
    forms: "generic_application_form",
    section: ["passport", "dependents"],
    parentNode: {
      id: "70.2",
      value: "TWN (Taiwan)",
    },
  },
  74: {
    forms: "generic_application_form",
    section: "passport",
    labels: "israel_passport_indicator",
    type: "checkBox",
    parentNode: {
      id: "70",
      value: "ISR (Israel)",
    },
    required: true,
  },
  74.1: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "141",
      value: "ISR (Israel)",
    },
  },
  74.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "141.1",
      value: "ISR (Israel)",
    },
  },
  74.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "141.2",
      value: "ISR (Israel)",
    },
  },
  74.4: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "141.3",
      value: "ISR (Israel)",
    },
  },
  74.5: {
    forms: "generic_application_form",
    section: ["passport", "dependents"],
    parentNode: {
      id: "70.2",
      value: "ISR (Israel)",
    },
  },
  75: {
    forms: "generic_application_form",
    section: "national_identity_document",
    labels: "national_identity_indicator",
    type: "checkBox",
    parentNode: [
      {
        id: "68",
        value: "No",
      },
      "72",
    ],
    required: true,
  },
  75.2: {
    forms: "generic_application_form",
    section: ["national_identity_document", "dependents"],
    parentNode: [
      {
        id: "68.2",
        value: "No",
      },
      "72.2",
    ],
  },
  75.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "143",
  },
  75.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "143.1",
  },
  76: {
    forms: "generic_application_form",
    section: "national_identity_document",
    labels: "national_identity_number",
    parentNode: {
      id: "75",
      value: "Yes",
    },
    required: true,
  },
  76.2: {
    forms: "generic_application_form",
    section: ["national_identity_document", "dependents"],
    parentNode: {
      id: "75.2",
      value: "Yes",
    },
  },
  76.3: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "75.3",
      value: "Yes",
    },
  },
  76.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "75.4",
      value: "Yes",
    },
  },
  77: {
    forms: "generic_application_form",
    section: "national_identity_document",
    type: "serverDropdown",
    labels: "national_identity_country_of_issue",
    valueKey: "CountryOfIssueList_CountryOfIssue",
    parentNode: "76",
    required: false,
  },
  77.2: {
    forms: "generic_application_form",
    section: ["national_identity_document", "dependents"],
    parentNode: "76.2",
  },
  77.3: {
    forms: "change_of_conditions_student_form",
    section: ["national_identity_document"],
    parentNode: "76.3",
  },
  77.4: {
    forms: "change_of_conditions_worker_form",
    section: ["national_identity_document"],
    parentNode: "76.4",
  },
  78: {
    forms: "generic_application_form",
    section: ["education_occupation_details"],
    labels: "highest_level_of_education",
    type: "serverDropdown",
    valueKey: "EducationLevelList_EducationLevel",
    parentNode: [
      {
        id: "75",
        value: "No",
      },
      "122",
    ],
    required: true,
  },
  78.2: {
    forms: "generic_application_form",
    section: ["education_occupation_details", "dependents"],
    parentNode: [
      {
        id: "75.2",
        value: "No",
      },
      "122.2",
    ],
  },
  79: {
    forms: "generic_application_form",
    section: "education_occupation_details",
    type: "number",
    labels: "total_years_of_education",
    parentNode: "78",
    required: true,
  },
  79.2: {
    forms: "generic_application_form",
    section: ["education_occupation_details", "dependents"],
    parentNode: "78.2",
  },
  80: {
    forms: "generic_application_form",
    section: ["education_occupation_details"],
    labels: "current_occupation",
    // type: "serverDropdown",
    // valueKey: "NationalOccupationCodeList_NationalOccupationCode",
    parentNode: "79",
    required: true,
  },
  80.2: {
    forms: "generic_application_form",
    section: ["education_occupation_details", "dependents"],
    parentNode: "79.2",
  },
  81: {
    forms: "generic_application_form",
    section: "education_occupation_details",
    labels: "intended_occupation",
    // type: "serverDropdown",
    // valueKey: "NationalOccupationCodeList_NationalOccupationCode",
    parentNode: "80",
    required: true,
  },
  81.2: {
    forms: "generic_application_form",
    section: ["education_occupation_details", "dependents"],
    parentNode: "80.2",
  },
  82: {
    forms: "generic_application_form",
    section: "language_details",
    type: "serverDropdown",
    labels: "native_language",
    valueKey: "ContactLanguageList_ContactLanguage",
    parentNode: "81",
    required: true,
  },
  82.2: {
    forms: "generic_application_form",
    section: ["language_details", "dependents"],
    parentNode: "81.2",
    required: true,
  },
  82.3: {
    forms: "change_of_conditions_student_form",
    section: "language_details",
    parentNode: [
      {
        id: "231.3",
        value: "No",
      },
      "93.3",
    ],
  },
  82.4: {
    forms: "change_of_conditions_worker_form",
    section: "language_details",
    parentNode: [
      {
        id: "231.4",
        value: "No",
      },
      "93.4",
    ],
  },
  83: {
    forms: "generic_application_form",
    section: "language_details",
    type: "serverDropdown",
    labels: "able_to_communicate_english_french",
    valueKey:
      "AbleCommunicateEnglishOrFrenchList_AbleCommunicateEnglishOrFrench",
    parentNode: "82",
    required: true,
  },
  83.2: {
    forms: "generic_application_form",
    section: ["language_details", "dependents"],
    parentNode: "82.2",
    required: true,
  },
  83.3: {
    forms: "change_of_conditions_student_form",
    section: "language_details",
    parentNode: "82.3",
  },
  83.4: {
    forms: "change_of_conditions_worker_form",
    section: "language_details",
    parentNode: "82.4",
  },
  84: {
    forms: "generic_application_form",
    section: "language_details",
    type: "serverDropdown",
    labels: "preferred_language",
    valueKey: "PreferenceLanguageList_PreferenceLanguage",
    parentNode: {
      id: "83",
      value: "Both",
    },
    required: true,
  },
  84.2: {
    forms: "generic_application_form",
    section: ["language_details", "dependents"],
    parentNode: {
      id: "83.2",
      value: "Both",
    },
  },
  84.3: {
    forms: "change_of_conditions_student_form",
    section: "language_details",
    parentNode: {
      id: "83.3",
      value: "Both",
    },
  },
  84.4: {
    forms: "change_of_conditions_worker_form",
    section: "language_details",
    parentNode: {
      id: "83.4",
      value: "Both",
    },
  },
  85: {
    forms: "generic_application_form",
    section: "language_details",
    labels: "language_test_indicator",
    type: "checkBox",
    parentNode: [
      {
        id: "83",
        value: ["English", "French", "Neither"],
      },
      "84",
    ],
    required: true,
  },
  85.2: {
    forms: "generic_application_form",
    section: ["language_details", "dependents"],
    parentNode: [
      {
        id: "83.2",
        value: ["English", "French", "Neither"],
      },
      "84.2",
    ],
  },
  85.3: {
    forms: "change_of_conditions_student_form",
    section: "language_details",
    parentNode: [
      {
        id: "83.3",
        value: ["English", "French", "Neither"],
      },
      "84.3",
    ],
  },
  85.4: {
    forms: "change_of_conditions_worker_form",
    section: "language_details",
    parentNode: [
      {
        id: "83.4",
        value: ["English", "French", "Neither"],
      },
      "84.4",
    ],
  },
  95: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "married_date",
    type: "date",
    parentNode: {
      id: "86",
      value: ["Common-Law", "Married"],
    },
    required: true,
  },
  95.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "86.2",
      value: ["Common-Law", "Married"],
    },
  },
  95.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: {
      id: "86.3",
      value: ["Common-Law", "Married"],
    },
  },
  95.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: {
      id: "86.4",
      value: ["Common-Law", "Married"],
    },
  },
  96: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "spouse_family_names",
    parentNode: "95",
    required: true,
  },
  96.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "95.2",
  },
  96.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "95.3",
  },
  96.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "95.4",
  },
  105: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "Boolean",
    parentNode: "13",
    required: true,
  },
  105.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "13.2",
  },
  106: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "citizenship_two",
    type: "serverDropdown",
    valueKey: "CountryOfCitizenshipList_CountryOfCitizenship",
    parentNode: {
      id: "105",
      value: "Yes",
    },
    required: false,
  },
  106.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "105.2",
      value: "Yes",
    },
  },
  107: {
    forms: "generic_application_form",
    section: ["dependents", "dependant_relationship"],
    labels: "relationship_to_applicant",
    type: "serverDropdown",
    valueKey: "RelationshipToPAList_RelationshipToPA",
    parentNode: {
      id: "280",
      value: "Yes",
    },
    required: true,
  },
  108: {
    forms: "generic_application_form",
    section: ["dependents", "dependant_relationship"],
    labels: "will_accompany_to_canada",
    type: "checkBox",
    parentNode: [
      "234",
      {
        id: "107",
        value: [
          (parentValue) => {
            return parentValue !== "Other";
          },
        ],
      },
    ],
    required: true,
  },
  109: {
    forms: "generic_application_form",
    section: ["dependents", "dependant_relationship"],
    labels: "dependant_type",
    type: "serverDropdown",
    valueKey: "DependantTypeList_DependantType",
    parentNode: [
      "235",
      {
        id: "108",
        value: "Yes",
      },
    ],
    information: {
      en: "Type A: The dependant is under the age of 22 and single (not married and not in a common-law relationship)\nType B: The dependant has been continuously enrolled in and in attendance as a full-time student at a post-secondary institution accredited by the relevant government authority and has depended substantially on the financial support of a parent since before the age of 22.\nType C: The dependant is 22 years of age or older, has depended substantially on the financial support of a parent since before the age of 22, and is unable to provide for themselves because of a medical condition.",
      fr: "Type A: la personne à charge a moins de 22 ans et est célibataire (non mariée et ne vit pas en union de fait)\nType B: la personne à charge a été continuellement inscrite et fréquente un établissement d'enseignement postsecondaire à temps plein institution accréditée par l'autorité gouvernementale compétente et dépend en grande partie du soutien financier d'un parent depuis avant l'âge de 22 ans.\nType C: la personne à charge a 22 ans ou plus, dépend en grande partie du soutien financier d'un parent depuis avant l'âge de 22 ans et est incapable de subvenir à ses besoins en raison d'une condition médicale.",
      es: "Tipo A: el dependiente tiene menos de 22 años y es soltero (no está casado ni tiene una relación de hecho)\nTipo B: el dependiente ha estado continuamente inscrito y asistiendo como estudiante de tiempo completo a una institución postsecundaria institución acreditada por la autoridad gubernamental pertinente y ha dependido sustancialmente del apoyo financiero de uno de los padres desde antes de los 22 años.\nTipo C: El dependiente tiene 22 años de edad o más, ha dependido sustancialmente del apoyo financiero de un padre desde antes de los 22 años. antes de la edad de 22 años, y no puede valerse por sí mismo debido a una condición médica.",
      ar: "النوع أ: المُعال أقل من 22 عامًا وغير متزوج (غير متزوج وليس في علاقة عاطفية) \n النوع ب: المُعال مُسجل باستمرار وحضور كطالب بدوام كامل في مرحلة ما بعد الثانوية مؤسسة معتمدة من قبل السلطة الحكومية ذات الصلة وتعتمد بشكل كبير على الدعم المالي لأحد الوالدين منذ ما قبل سن 22. \n النوع ج: يبلغ عمر المُعال 22 عامًا أو أكثر ، وقد اعتمد بشكل كبير على الدعم المالي لأحد الوالدين منذ ذلك الحين قبل سن 22 ، ولا يستطيعون إعالة أنفسهم بسبب حالة طبية.",
    }, // https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/complete-0008-5669.html
    required: false,
  },
  117: {
    forms: "generic_application_form",
    section: "personal_details",
    type: "Boolean",
    parentNode: "134",
    required: true,
  },
  117.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "134.2",
  },
  117.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "134.3",
  },
  117.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "134.4",
  },
  119: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "first_previous_country_of_residence_status",
    type: "serverDropdown",
    valueKey: "ImmigrationStatusList_ImmigrationStatus",
    parentNode: {
      id: "19",
      value: [onParentAnswered],
    },
    required: false,
  },
  119.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "19.2",
      value: [onParentAnswered],
    },
  },
  119.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "19.3",
  },
  119.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "19.4",
  },
  121: {
    forms: "generic_application_form",
    section: "national_identity_document",
    labels: "national_identity_issue_date",
    type: "date",
    parentNode: "77",
    required: false,
  },
  121.2: {
    forms: "generic_application_form",
    section: ["national_identity_document", "dependents"],
    parentNode: "77.2",
  },
  121.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "77.3",
  },
  121.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "77.4",
  },
  122: {
    forms: "generic_application_form",
    section: "national_identity_document",
    labels: "national_identity_expiry_date",
    type: "date",
    parentNode: "121",
    required: false,
  },
  122.2: {
    forms: "generic_application_form",
    section: ["national_identity_document", "dependents"],
    parentNode: "121.2",
  },
  122.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "121.3",
  },
  122.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "121.4",
  },
  123: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_details",
    labels: "language_correspondence",
    type: "serverDropdown",
    valueKey: "PreferenceLanguageList_PreferenceLanguage",
    parentNode: "6.3",
    required: true,
  },
  123.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "6.4",
  },
  123.2: {
    forms: "change_of_conditions_student_filter_form",
    section: "change_of_conditions_details",
  },
  123.3: {
    forms: "change_of_conditions_worker_filter_form",
  },
  222: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_details",
    lables: "apply_or_extend_study_permit",
    type: "checkBox",
    parentNode: "123",
    required: true,
  },
  222.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "123.2",
  },
  223: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_details",
    lables: "restore_status_student",
    type: "checkBox",
    parentNode: "222",
  },
  223.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "222.1",
  },
  224: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_details",
    lables: "temporary_resident_permit",
    type: "checkBox",
    parentNode: "223",
    required: true,
  },
  224.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "185",
  },
  224.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "223.1",
  },
  224.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "185.1",
  },
  129: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    labels: "current_country_of_residence_status",
    type: "serverDropdown",
    valueKey: "ImmigrationStatusList_ImmigrationStatus",
    parentNode: "13.3",
    required: true,
  },
  129.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "13.4",
  },
  129.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "224.2",
  },
  129.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "224.3",
  },
  130: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    labels: "current_country_of_residence_from_date",
    type: "date",
    parentNode: [
      "283",
      {
        id: "129",
        value: ["Visitor", "Worker", "Student"],
      },
    ],
    required: true,
  },
  130.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "283.1",
      {
        id: "129.1",
        value: ["Visitor", "Worker", "Student"],
      },
    ],
  },
  130.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "283.2",
      {
        id: "129.2",
        value: ["Visitor", "Worker", "Student"],
      },
    ],
  },
  130.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "283.2",
      {
        id: "129.3",
        value: ["Visitor", "Worker", "Student"],
      },
    ],
  },
  131: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    labels: "current_country_of_residence_to_date",
    type: "date",
    parentNode: "130",
    required: false,
  },
  131.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "130.1",
  },
  131.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "130.2",
  },
  131.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "130.3",
  },
  // Some keys are redundant and can be grouped under an array of sections e.g.key 132 and 18
  133: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "first_previous_country_of_residence_from_date",
    type: "date",
    parentNode: [
      "272",
      {
        id: "119",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
      {
        id: "272",
        value: [onParentAnswered],
      },
    ],
    required: false,
  },
  133.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [
      "272.2",
      {
        id: "119.2",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
      {
        id: "272.2",
        value: [onParentAnswered],
      },
    ],
  },
  133.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: [
      "272.3",
      {
        id: "119.3",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  133.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: [
      "272.4",
      {
        id: "119.4",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  134: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "first_previous_country_of_residence_to_date",
    type: "date",
    parentNode: "133",
    required: false,
  },
  134.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "133.2",
  },
  134.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "133.3",
  },
  134.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "133.4",
  },
  140: {
    forms: "change_of_conditions_student_form",
    section: "passport",
    labels: "passport_number",
    parentNode: "85.3",
    required: true,
  },
  140.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "85.4",
  },
  140.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "131.2",
      {
        id: "129.2",
        value: [
          "Citizen",
          "Permanent resident",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  140.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "131.3",
      {
        id: "129.3",
        value: [
          "Citizen",
          "Permanent resident",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  141: {
    forms: "change_of_conditions_student_form",
    section: "passport",
    labels: "passport_country_of_issue",
    type: "serverDropdown",
    valueKey: "CountryTravelDocumentList_CountryTravelDocument",
    parentNode: "140",
    required: true,
  },
  141.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "140.1",
  },
  141.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "140.2",
  },
  141.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "140.3",
  },
  142: {
    forms: "change_of_conditions_student_form",
    section: "passport",
    labels: "passport_issue_date",
    type: "date",
    parentNode: [
      {
        id: "141",
        value: [
          (parentValue) => {
            return (
              parentValue !== "TWN (Taiwan)" && parentValue !== "ISR (Israel)"
            );
          },
        ],
      },
      "73.1",
      "74.1",
    ],
    required: true,
  },
  142.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "141.1",
        value: [
          (parentValue) => {
            return (
              parentValue !== "TWN (Taiwan)" && parentValue !== "ISR (Israel)"
            );
          },
        ],
      },
      "73.2",
      "74.2",
    ],
  },
  142.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "141.2",
        value: [
          (parentValue) => {
            return (
              parentValue !== "TWN (Taiwan)" && parentValue !== "ISR (Israel)"
            );
          },
        ],
      },
      "73.3",
      "74.3",
    ],
  },
  142.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "141.3",
        value: [
          (parentValue) => {
            return (
              parentValue !== "TWN (Taiwan)" && parentValue !== "ISR (Israel)"
            );
          },
        ],
      },
      "73.4",
      "74.4",
    ],
  },
  143: {
    forms: "change_of_conditions_student_form",
    section: "passport",
    labels: "passport_expiry_date",
    type: "date",
    parentNode: "142",
    required: true,
  },
  143.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "142.1",
  },
  143.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "142.2",
  },
  143.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "142.3",
  },
  144: {
    forms: "change_of_conditions_student_form",
    section: "us_card",
    labels: "us_card_indicator",
    type: "checkBox",
    parentNode: [
      {
        id: "75.3",
        value: "No",
      },
      "122.3",
    ],
    required: true,
  },
  144.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "75.4",
        value: "No",
      },
      "122.4",
    ],
  },
  144.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "143.2",
  },
  144.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "143.3",
  },
  145: {
    forms: "change_of_conditions_student_form",
    section: "us_card",
    labels: "document_number",
    parentNode: {
      id: "144",
      value: "Yes",
    },
    required: true,
  },
  145.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "144.1",
      value: "Yes",
    },
  },
  145.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "144.2",
      value: "Yes",
    },
  },
  145.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "144.3",
      value: "Yes",
    },
  },
  146: {
    forms: "change_of_conditions_student_form",
    section: "us_card",
    labels: "expiry_date",
    type: "date",
    parentNode: "145",
    required: true,
  },
  146.1: {
    forms: "change_of_conditions_student_form",
    parentNode: "145.1",
  },
  146.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "145.2",
  },
  146.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "145.3",
  },
  148: {
    forms: "generic_application_form",
    section: "contact_information",
    type: "Boolean",
    parentNode: "57",
    required: true,
  },
  148.3: {
    forms: "change_of_conditions_student_form",
    parentNode: "57.3",
  },
  148.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: "57.4",
  },
  149: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: "education_indicator",
    type: "checkBox",
    parentNode: [
      {
        id: "268",
        value: "No",
      },
      "269",
    ],
    required: true,
  },
  149.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "268.1",
        value: "No",
      },
      "269.1",
    ],
  },
  149.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: 202,
  },
  149.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: 202.1,
  },
  150: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: ["education_from_year", "education_from_month"],
    type: "date",
    parentNode: {
      id: "149",
      value: "Yes",
    },
    required: true,
  },
  150.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "149.1",
      value: "Yes",
    },
  },
  150.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "149.2",
      value: "Yes",
    },
  },
  150.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "149.3",
      value: "Yes",
    },
  },
  151: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: ["education_to_year", "education_to_month"],
    type: "date",
    parentNode: "150",
    required: false,
  },
  151.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "150.1",
  },
  151.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "150.2",
  },
  151.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "150.3",
  },
  152: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: "education_field_of_study",
    parentNode: "151",
    required: true,
  },
  152.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "151.1",
  },
  152.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "151.2",
  },
  152.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "151.3",
  },
  153: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: "education_school",
    parentNode: "152",
    required: true,
  },
  153.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "152.1",
  },
  153.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "152.2",
  },
  153.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "152.3",
  },
  154: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: "education_city_town",
    parentNode: "153",
    required: true,
  },
  154.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "153.1",
  },
  154.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "153.2",
  },
  154.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "153.3",
  },
  155: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: "education_country",
    type: "serverDropdown",
    valueKey: "CountryOfBirthList_CountryOfBirth",
    parentNode: "154",
    required: false,
  },
  155.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "154.1",
  },
  155.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "154.2",
  },
  155.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "154.3",
  },
  156: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: ["current_employment_from_year", "current_employment_from_month"],
    type: "date",
    parentNode: [
      {
        id: "155",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "282",
      {
        id: "149",
        value: "No",
      },
    ],
    required: true,
  },
  156.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "155.1",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "282.1",
      {
        id: "149.1",
        value: "No",
      },
    ],
  },
  156.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "155.2",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "282.2",
      {
        id: "149.2",
        value: "No",
      },
    ],
  },
  156.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      {
        id: "155.3",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "282.3",
      {
        id: "149.3",
        value: "No",
      },
    ],
  },
  157: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: ["current_employment_to_year", "current_employment_to_month"],
    type: "date",
    parentNode: "156",
    required: false,
  },
  157.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "156.1",
  },
  157.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "156.2",
  },
  157.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "156.3",
  },
  158: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "current_employment_occupation",
    parentNode: "157",
    required: true,
  },
  158.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "157.1",
  },
  158.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "157.2",
  },
  158.3: {
    forms: "change_of_conditions_worker_form",
    parentNode: "157.3",
  },
  159: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "current_employment_employer",
    parentNode: "158",
    required: true,
  },
  159.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "158.1",
  },
  159.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "158.2",
  },
  159.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "158.3",
  },
  160: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "",
    parentNode: "159",
    required: true,
  },
  160.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "159.1",
  },
  160.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "159.2",
  },
  160.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "159.3",
  },
  161: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "current_employment_country",
    type: "serverDropdown",
    valueKey: "CountryOfBirthList_CountryOfBirth",
    parentNode: "160",
    required: false,
  },
  161.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "160.1",
  },
  161.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "160.2",
  },
  161.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "160.3",
  },
  162: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    type: "Boolean",
    parentNode: [
      {
        id: "161",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "286",
    ],
    required: true,
  },
  162.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "161.1",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "286.1",
    ],
  },
  162.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "161.2",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "286.2",
    ],
  },
  162.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      {
        id: "161.3",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
      "286.3",
    ],
  },
  163: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: [
      "first_previous_employment_from_year",
      "first_previous_employment_from_month",
    ],
    type: "date",
    parentNode: {
      id: "162",
      value: "Yes",
    },
    required: true,
  },
  163.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "162.1",
      value: "Yes",
    },
  },
  163.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "162.2",
      value: "Yes",
    },
  },
  163.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "162.3",
      value: "Yes",
    },
  },
  164: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: [
      "first_previous_employment_to_year",
      "first_previous_employment_to_month",
    ],
    type: "date",
    parentNode: "163",
    required: false,
  },
  164.1: {
    forms: "change_of_conditions_student_filter_form",
    labels: [
      "first_previous_employment_to_year",
      "first_previous_employment_to_month",
    ],
    parentNode: "163.1",
  },
  164.2: {
    forms: "change_of_conditions_worker_form",
    labels: [
      "first_previous_employment_to_year",
      "first_previous_employment_to_month",
    ],
    parentNode: "163.2",
  },
  164.3: {
    forms: "change_of_conditions_worker_filter_form",
    labels: [
      "first_previous_employment_to_year",
      "first_previous_employment_to_month",
    ],
    parentNode: "163.3",
  },
  165: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "first_previous_employment_occupation",
    parentNode: "164",
    required: true,
  },
  165.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "164.1",
  },
  165.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "164.2",
  },
  165.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "164.3",
  },
  166: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "first_previous_employment_employer",
    parentNode: "165",
    required: true,
  },
  166.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "165.1",
  },
  166.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "165.2",
  },
  166.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "165.3",
  },
  167: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "",
    parentNode: "166",
    required: true,
  },
  167.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "166.1",
  },
  167.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "166.2",
  },
  167.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "166.3",
  },
  168: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    label: "first_previous_employment_country",
    type: "serverDropdown",
    valueKey: "CountryOfBirthList_CountryOfBirth",
    parentNode: "167",
    required: false,
  },
  168.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "167.1",
  },
  168.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "167.2",
  },
  168.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "167.3",
  },
  169: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    type: "Boolean",
    parentNode: [
      {
        id: "162",
        value: "No",
      },
      {
        id: "281",
        value: "No",
      },
      "243",
      {
        id: "242",
        value: [onParentSkipped],
      },
      {
        id: "242",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
    required: true,
  },
  169.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "162.1",
        value: "No",
      },
      {
        id: "281.1",
        value: "No",
      },
      "243.1",
      {
        id: "242.1",
        value: [onParentSkipped],
      },
      {
        id: "242.1",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
  },
  169.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "162.2",
        value: "No",
      },
      {
        id: "281.2",
        value: "No",
      },
      "243.2",
      {
        id: "242.2",
        value: [onParentSkipped],
      },
      {
        id: "242.2",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
  },
  169.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      {
        id: "162.3",
        value: "No",
      },
      {
        id: "281.3",
        value: "No",
      },
      "243.3",
      {
        id: "242.3",
        value: [onParentSkipped],
      },
      {
        id: "242.3",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
  },
  170: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "tuberculosis_indicator",
    type: "checkBox",
    parentNode: {
      id: "169",
      value: "Yes",
    },
    required: true,
  },
  170.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "169.1",
      value: "Yes",
    },
  },
  170.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "169.2",
      value: "Yes",
    },
  },
  170.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "169.3",
      value: "Yes",
    },
  },
  171: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "disorder_indicator",
    type: "checkBox",
    parentNode: [
      {
        id: "170",
        value: "Yes",
      },
    ],
    required: true,
  },
  171.1: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      {
        id: "170",
        value: "No",
      },
    ],
  },
  171.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "170.1",
        value: "Yes",
      },
    ],
    required: true,
  },
  171.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "170.1",
        value: "No",
      },
    ],
  },
  171.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "170.2",
        value: "Yes",
      },
    ],
    required: true,
  },
  171.5: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "170.2",
        value: "No",
      },
    ],
  },
  171.6: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      {
        id: "170.3",
        value: "Yes",
      },
    ],
    required: true,
  },
  171.7: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      {
        id: "170.3",
        value: "No",
      },
    ],
  },
  172: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "medical_details",
    type: "textarea",
    parentNode: [
      "171",
      {
        id: "171.1",
        value: "Yes",
      },
    ],
    required: true,
  },
  172.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "171.2",
      {
        id: "171.3",
        value: "Yes",
      },
    ],
  },
  172.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "171.4",
      {
        id: "171.5",
        value: "Yes",
      },
    ],
  },
  172.4: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "171.6",
      {
        id: "171.7",
        value: "Yes",
      },
    ],
  },
  173: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "validity_expired_indicator",
    type: "checkBox",
    parentNode: [
      "172",
      {
        id: "171.1",
        value: "No",
      },
    ],
    required: true,
  },
  173.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "172.1",
      {
        id: "171.3",
        value: "No",
      },
    ],
  },
  173.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "172.2",
      {
        id: "171.5",
        value: "No",
      },
    ],
  },
  173.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "172.3",
      {
        id: "171.7",
        value: "No",
      },
    ],
  },
  174: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "refused_visa_or_permit_indicator",
    type: "checkBox",
    parentNode: {
      id: "173",
      value: "Yes",
    },
    required: true,
  },
  174.1: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "173",
      value: "No",
    },
  },
  174.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "173.1",
      value: "Yes",
    },
  },
  174.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "173.1",
      value: "No",
    },
  },
  174.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "173.2",
      value: "Yes",
    },
  },
  174.5: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "173.2",
      value: "No",
    },
  },
  174.6: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "173.3",
      value: "Yes",
    },
  },
  174.7: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "173.3",
      value: "No",
    },
  },
  175: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "previously_applied_indicator",
    type: "checkBox",
    parentNode: [
      "174",
      {
        id: "174.1",
        value: "Yes",
      },
    ],
    required: true,
  },
  175.1: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "174.1",
      value: "No",
    },
  },
  175.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "174.2",
      {
        id: "174.3",
        value: "Yes",
      },
    ],
  },
  175.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "174.3",
      value: "No",
    },
  },
  175.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "174.4",
      {
        id: "174.5",
        value: "Yes",
      },
    ],
  },
  175.5: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "174.5",
      value: "No",
    },
  },
  175.6: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "174.6",
      {
        id: "174.7",
        value: "Yes",
      },
    ],
  },
  175.7: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "174.7",
      value: "No",
    },
  },
  176: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "previously_applied_details",
    type: "textarea",
    parentNode: [
      "175",
      {
        id: "175.1",
        value: "Yes",
      },
    ],
    required: true,
  },
  176.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "175.2",
      {
        id: "175.3",
        value: "Yes",
      },
    ],
  },
  176.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "175.4",
      {
        id: "175.5",
        value: "Yes",
      },
    ],
  },
  176.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "175.6",
      {
        id: "175.7",
        value: "Yes",
      },
    ],
  },
  177: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "convicted_criminal_offence_indicator",
    type: "checkBox",
    parentNode: [
      "176",
      {
        id: "175.1",
        value: "No",
      },
    ],
    required: true,
  },
  177.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "176.1",
      {
        id: "175.3",
        value: "No",
      },
    ],
  },
  177.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "176.2",
      {
        id: "175.5",
        value: "No",
      },
    ],
  },
  177.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "176.3",
      {
        id: "175.7",
        value: "No",
      },
    ],
  },
  178: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "convicted_criminal_offence_details",
    type: "textarea",
    parentNode: {
      id: "177",
      value: "Yes",
    },
    required: true,
  },
  178.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "177.1",
      value: "Yes",
    },
  },
  178.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "177.2",
      value: "Yes",
    },
  },
  178.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "177.3",
      value: "Yes",
    },
  },
  179: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "military_service_indicator",
    type: "checkBox",
    parentNode: [
      "178",
      {
        id: "177",
        value: "No",
      },
    ],
    required: true,
  },
  179.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "178.1",
      {
        id: "177.1",
        value: "No",
      },
    ],
  },
  179.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "178.2",
      {
        id: "177.2",
        value: "No",
      },
    ],
  },
  179.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "178.3",
      {
        id: "177.3",
        value: "No",
      },
    ],
  },
  180: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "military_service_details",
    type: "textarea",
    parentNode: {
      id: "179",
      value: "Yes",
    },
    required: true,
  },
  180.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "179.1",
      value: "Yes",
    },
  },
  180.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "179.2",
      value: "Yes",
    },
  },
  180.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "179.3",
      value: "Yes",
    },
  },
  181: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "government_position_indicator",
    type: "checkBox",
    parentNode: [
      "180",
      {
        id: "179",
        value: "No",
      },
    ],
    required: true,
  },
  181.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "180.1",
      {
        id: "179.1",
        value: "No",
      },
    ],
  },
  181.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "180.2",
      {
        id: "179.2",
        value: "No",
      },
    ],
  },
  181.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "180.3",
      {
        id: "179.3",
        value: "No",
      },
    ],
  },
  182: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_background_information",
    labels: "ill_treatment_indicator",
    type: "checkBox",
    parentNode: "181",
    required: true,
  },
  182.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "181.1",
  },
  182.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "181.2",
  },
  182.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "181.3",
  },
  183: {
    forms: "change_of_conditions_worker_form",
    section: "",
    labels: "",
    type: "Boolean",
    parentNode: "123.1",
    required: true,
  },
  183.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "123.3",
  },
  184: {
    forms: "change_of_conditions_worker_form",
    section: "",
    labels: "",
    type: "Boolean",
    parentNode: "183",
    required: true,
  },
  184.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "183.1",
  },
  185: {
    forms: "change_of_conditions_worker_form",
    section: "",
    labels: "",
    type: "Boolean",
    parentNode: "184",
    required: true,
  },
  185.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "184.1",
  },
  186: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    type: "serverDropdown",
    valueKey: "StudyWorkPermitTypeList_StudyWorkPermitType",
    parentNode: "251.1",
    required: true,
  },
  186.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "251.3",
  },
  187: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    parentNode: {
      id: "186",
      value: "Other",
    },
    required: true,
  },
  187.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "186.1",
      value: "Other",
    },
  },
  189: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    parentNode: [
      "187",
      {
        id: "186",
        value: [
          (parentValue) => {
            return parentValue !== "Other";
          },
        ],
      },
    ],
    required: true,
  },
  189.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "187.1",
      {
        id: "186.1",
        value: [
          (parentValue) => {
            return parentValue !== "Other";
          },
        ],
      },
    ],
  },
  190: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    parentNode: "189",
    required: true,
  },
  190.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "189.1",
  },
  191: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: "190",
    required: true,
  },
  191.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "190.1",
  },
  192: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    type: "serverDropdown",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "191",
      value: "AB",
    },
    requiredd: true,
  },
  192.14: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "191.1",
      value: "AB",
    },
  },
  192.1: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "191",
      value: "BC",
    },
  },
  192.15: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "191.1",
      value: "BC",
    },
  },
  192.2: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "191",
      value: "MB",
    },
  },
  192.16: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "191.1",
      value: "MB",
    },
  },
  192.3: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "191",
      value: "MB",
    },
  },
  192.17: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "191.1",
      value: "MB",
    },
  },
  192.4: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "191",
      value: "NB",
    },
  },
  192.18: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "191.1",
      value: "NB",
    },
  },
  192.5: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "191",
      value: "NL",
    },
  },
  192.19: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "191.1",
      value: "NL",
    },
  },
  192.6: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "191",
      value: "NS",
    },
  },
  "192.20": {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "191.1",
      value: "NS",
    },
  },
  192.7: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "191",
      value: "NT",
    },
  },
  192.21: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "191.1",
      value: "NT",
    },
  },
  192.8: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "191",
      value: "NU",
    },
  },
  192.22: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "191.1",
      value: "NU",
    },
  },
  192.9: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "191",
      value: "ON",
    },
  },
  192.23: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "191.1",
      value: "ON",
    },
  },
  "192.10": {
    forms: "change_of_conditions_worker_form",
    section: "",
    labels: "",
    type: "serverDropdown",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "191",
      value: "PE",
    },
    required: true,
  },
  192.24: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "191.1",
      value: "PE",
    },
  },
  192.11: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_QC_City",
    parentNode: "271.1",
  },
  192.25: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_QC_City",
    parentNode: "271.3",
  },
  192.12: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "191",
      value: "SK",
    },
  },
  192.26: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "191.1",
      value: "SK",
    },
  },
  192.13: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "191",
      value: "YT",
    },
  },
  192.27: {
    forms: "change_of_conditions_worker_filter_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "191.1",
      value: "YT",
    },
  },
  193: {
    forms: "change_of_conditions_worker_form",
    section: "",
    labels: "",
    parentNode: [
      "192",
      "192.1",
      "192.2",
      "192.3",
      "192.4",
      "192.5",
      "192.6",
      "192.7",
      "192.8",
      "192.9",
      "192.10",
      "192.11",
      "192.12",
      "192.13",
    ],
    required: true,
  },
  193.1: {
    forms: "change_of_conditions_worker_filter_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    parentNode: [
      "192.14",
      "192.15",
      "192.16",
      "192.17",
      "192.18",
      "192.19",
      "192.20",
      "192.21",
      "192.22",
      "192.23",
      "192.24",
      "192.25",
      "192.26",
      "192.27",
    ],
    required: true,
  },
  194: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    parentNode: "193",
    required: true,
  },
  194.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "193.1",
  },
  195: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    type: "textarea",
    parentNode: "194",
    required: true,
  },
  195.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "194.1",
  },
  196: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    type: "date",
    parentNode: "195",
    required: true,
  },
  196.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "195.1",
  },
  197: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    type: "date",
    parentNode: "196",
    required: true,
  },
  197.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "196.1",
  },
  198: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    parentNode: "197",
    required: false,
  },
  198.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "197.1",
  },
  202: {
    forms: "change_of_conditions_worker_form",
    section: "details_of_intended_work_in_canada",
    labels: "",
    type: "Boolean",
    parentNode: "198",
    required: true,
  },
  202.1: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "198.1",
  },
  210: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "second_previous_country_of_residence_from_date",
    type: "date",
    parentNode: [
      "22",
      {
        id: "21",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
    required: false,
  },
  210.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [
      "22.2",
      {
        id: "21.2",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  210.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: [
      "22.3",
      {
        id: "21.3",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  210.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: [
      "22.4",
      {
        id: "21.4",
        value: [
          "Citizen",
          "Permanent resident",
          "Visitor",
          "Worker",
          "Student",
          "Protected Person",
          "Refugee Claimant",
          "Foreign National",
        ],
      },
    ],
  },
  230: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "spouse_given_names",
    parentNode: "96",
    required: false,
  },
  230.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "96.2",
  },
  230.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: "96.3",
  },
  230.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "96.4",
  },
  231: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "previously_married",
    type: "checkBox",
    parentNode: [
      "230",
      {
        id: "86",
        value: [
          "Annulled Marriage",
          "Divorced",
          "Separated",
          "Single",
          "Unknown",
          "Widowed",
        ],
      },
    ],
    required: true,
  },
  231.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [
      "230.2",
      {
        id: "86.2",
        value: [
          "Annulled Marriage",
          "Divorced",
          "Separated",
          "Single",
          "Unknown",
          "Widowed",
        ],
      },
    ],
  },
  231.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: [
      "230.3",
      {
        id: "86.3",
        value: [
          "Annulled Marriage",
          "Divorced",
          "Separated",
          "Single",
          "Unknown",
          "Widowed",
        ],
      },
    ],
  },
  231.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: [
      "230.4",
      {
        id: "86.4",
        value: [
          "Annulled Marriage",
          "Divorced",
          "Separated",
          "Single",
          "Unknown",
          "Widowed",
        ],
      },
    ],
  },
  232: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "previous_spouse_family_names",
    parentNode: {
      id: "231",
      value: "Yes",
    },
    required: true,
  },
  232.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "231.2",
      value: "Yes",
    },
  },
  232.3: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    parentNode: {
      id: "231.3",
      value: "Yes",
    },
  },
  232.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: {
      id: "231.4",
      value: "Yes",
    },
  },
  233: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "previous_spouse_given_names",
    parentNode: "232",
    required: false,
  },
  233.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "232.2",
  },
  233.3: {
    forms: ["studnet-form"],
    section: "personal_details",
    parentNode: "232.3",
  },
  233.4: {
    forms: "change_of_conditions_worker_form",
    section: "personal_details",
    parentNode: "232.4",
  },
  234: {
    forms: "generic_application_form",
    section: ["dependents", "dependant_relationship"],
    labels: "other_relationship_to_applicant",
    parentNode: {
      id: "107",
      value: "Other",
    },
    required: false,
  },
  235: {
    forms: "generic_application_form",
    section: ["dependents", "dependant_relationship"],
    labels: "non_accompanying_reason",
    type: "textarea",
    parentNode: {
      id: "108",
      value: "No",
    },
    required: false,
  },
  236: {
    forms: [
      "change_of_conditions_student_form",
      "change_of_conditions_worker_form",
    ],
    section: "change_of_conditions_student_employment",
    labels: "first_previous_employment_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: {
      id: "168",
      value: "Canada",
    },
    required: true,
  },
  237: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: [
      "second_previous_employment_from_year",
      "second_previous_employment_from_month",
    ],
    type: "date",
    parentNode: {
      id: "281",
      value: "Yes",
    },
    required: true,
  },
  237.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "281.1",
      value: "Yes",
    },
  },
  237.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "281.2",
      value: "Yes",
    },
  },
  237.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "281.3",
      value: "Yes",
    },
  },
  238: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: [
      "second_previous_employment_to_year",
      "second_previous_employment_to_month",
    ],
    type: "date",
    parentNode: "237",
    required: false,
  },
  238.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "237.1",
  },
  238.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "237.2",
  },
  238.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "237.3",
  },
  239: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: "second_previous_employment_occupation",
    parentNode: "238",
    required: true,
  },
  239.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "238.1",
  },
  239.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "238.2",
  },
  239.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "238.3",
  },
  240: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: "second_previous_employment_employer",
    parentNode: "239",
    required: true,
  },
  240.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "239.1",
  },
  240.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "239.2",
  },
  240.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "239.3",
  },
  241: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: "",
    parentNode: "240",
    required: true,
  },
  241.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "240.1",
  },
  241.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "240.2",
  },
  241.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "240.3",
  },
  242: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: "second_previous_employment_country",
    type: "serverDropdown",
    valueKey: "CountryOfBirthList_CountryOfBirth",
    parentNode: "241",
    required: false,
  },
  242.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "241.1",
  },
  242.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: "241.2",
  },
  242.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "241.3",
  },
  243: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    labels: "second_previous_employment_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: {
      id: "242",
      value: "Canada",
    },
    required: true,
  },
  243.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "242.1",
      value: "Canada",
    },
  },
  243.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "242.2",
      value: "Canada",
    },
  },
  243.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "242.3",
      value: "Canada",
    },
  },
  244: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    labels: "origin_entry_last_entry_date",
    type: "date",
    parentNode: "67.3",
    required: true,
  },
  244.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "67.4",
  },
  244.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "146.2",
      {
        id: "144.2",
        value: "No",
      },
    ],
  },
  244.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "146.3",
      {
        id: "144.3",
        value: "No",
      },
    ],
  },
  245: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    labels: "origin_entry_place",
    parentNode: "244",
    required: true,
  },
  245.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "244.1",
  },
  245.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "244.2",
  },
  245.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "244.3",
  },
  246: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    labels: "purpose_of_visit",
    type: "serverDropdown",
    valueKey: "VisitPurposeOriginalList_VisitPurposeOriginal",
    parentNode: "245",
    required: true,
  },
  246.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "245.1",
  },
  246.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "245.2",
  },
  246.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "245.3",
  },
  247: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    labels: "purpose_of_visit_other",
    type: "textarea",
    parentNode: {
      id: "246",
      value: "Other",
    },
    required: true,
  },
  247.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "246.1",
      value: "Other",
    },
  },
  247.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "246.2",
      value: "Other",
    },
  },
  247.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "246.3",
      value: "Other",
    },
  },
  248: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    type: "Boolean",
    parentNode: [
      {
        id: "246",
        value: ["Business", "Tourism", "Study", "Work", "Family Visit"],
      },
      "247",
    ],
    required: true,
  },
  248.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "246.1",
        value: ["Business", "Tourism", "Study", "Work", "Family Visit"],
      },
      "247.1",
    ],
  },
  248.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "246.2",
        value: ["Business", "Tourism", "Study", "Work", "Family Visit"],
      },
      "247.2",
    ],
  },
  248.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      {
        id: "246.3",
        value: ["Business", "Tourism", "Study", "Work", "Family Visit"],
      },
      "247.3",
    ],
  },
  249: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    labels: "recent_entry_last_entry_date",
    type: "date",
    parentNode: {
      id: "248",
      value: "No",
    },
    required: true,
  },
  249.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "248.1",
      value: "No",
    },
  },
  249.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "248.2",
      value: "No",
    },
  },
  249.3: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "248.3",
      value: "No",
    },
  },
  250: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    labels: "recent_entry_place",
    parentNode: "249",
    required: true,
  },
  250.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "249.1",
  },
  250.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "249.2",
  },
  250.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "249.3",
  },
  251: {
    forms: "change_of_conditions_student_form",
    section: "coming_into_canada",
    labels: "previous_document_number",
    parentNode: [
      {
        id: "248",
        value: "Yes",
      },
      "250",
    ],
    required: false,
  },
  251.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "248.1",
        value: "Yes",
      },
      "250.1",
    ],
  },
  251.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      {
        id: "248.2",
        value: "Yes",
      },
      "250.2",
    ],
  },
  251.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      {
        id: "248.3",
        value: "Yes",
      },
      "250.3",
    ],
  },
  252: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "school_name",
    parentNode: "251",
    required: true,
  },
  252.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "251.2",
  },
  253: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "study_major_level",
    type: "serverDropdown",
    valueKey: "LevelOfStudyList_LevelOfStudy",
    parentNode: "252",
    required: true,
  },
  253.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "252.1",
  },
  254: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "study_major_program",
    type: "serverDropdown",
    valueKey: "FieldOfStudyList_FieldOfStudy",
    parentNode: "253",
    required: true,
  },
  254.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "253.1",
  },
  255: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "school_province",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: "254",
    required: true,
  },
  255.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "254.1",
  },
  256: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "school_city_town",
    type: "serverDropdown",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "255",
      value: "AB",
    },
    requiredd: true,
  },
  256.14: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "255.1",
      value: "AB",
    },
  },
  256.1: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "255",
      value: "BC",
    },
  },
  256.15: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "255.1",
      value: "BC",
    },
  },
  256.2: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "255",
      value: "MB",
    },
  },
  256.16: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "255.1",
      value: "MB",
    },
  },
  256.3: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "255",
      value: "MB",
    },
  },
  256.17: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "255.1",
      value: "MB",
    },
  },
  256.4: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "255",
      value: "NB",
    },
  },
  256.18: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "255.1",
      value: "NB",
    },
  },
  256.5: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "255",
      value: "NL",
    },
  },
  256.19: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "255.1",
      value: "NL",
    },
  },
  256.6: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "255",
      value: "NS",
    },
  },
  "256.20": {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "255.1",
      value: "NS",
    },
  },
  256.7: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "255",
      value: "NT",
    },
  },
  256.21: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "255.1",
      value: "NT",
    },
  },
  256.8: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "255",
      value: "NU",
    },
  },
  256.22: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "255.1",
      value: "NU",
    },
  },
  256.9: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "255",
      value: "ON",
    },
  },
  256.23: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "255.1",
      value: "ON",
    },
  },
  "256.10": {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "255",
      value: "PE",
    },
  },
  256.24: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "255.1",
      value: "PE",
    },
  },
  256.11: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_QC_City",
    parentNode: "271",
  },
  256.25: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_QC_City",
    parentNode: "271.1",
  },
  256.12: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "255",
      value: "SK",
    },
  },
  256.26: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "255.1",
      value: "SK",
    },
  },
  256.13: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "255",
      value: "YT",
    },
  },
  256.27: {
    forms: "change_of_conditions_student_filter_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "255.1",
      value: "YT",
    },
  },
  257: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "school_address",
    parentNode: [
      "256",
      "256.1",
      "256.2",
      "256.3",
      "256.4",
      "256.5",
      "256.6",
      "256.7",
      "256.8",
      "256.9",
      "256.10",
      "256.11",
      "256.12",
      "256.13",
    ],
    required: true,
  },
  257.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "256.14",
      "256.15",
      "256.16",
      "256.17",
      "256.18",
      "256.19",
      "256.20",
      "256.21",
      "256.22",
      "256.23",
      "256.24",
      "256.25",
      "256.26",
      "256.27",
    ],
  },
  258: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "designated_learning_institution",
    parentNode: "257",
    required: false,
  },
  258.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "257.1",
  },
  259: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "student_id",
    parentNode: "258",
    required: false,
  },
  259.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "258.1",
  },
  260: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "study_term_from",
    type: "date",
    parentNode: "259",
    required: true,
  },
  260.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "259.1",
  },
  261: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "study_term_to",
    type: "date",
    parentNode: "260",
    required: true,
  },
  261.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "260.1",
  },
  262: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "education_costs_tuition",
    parentNode: "261",
    required: true,
  },
  262.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "261.1",
  },
  263: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "education_costs_room",
    parentNode: "262",
    required: false,
  },
  263.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "262.1",
  },
  264: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "education_costs_other",
    parentNode: "263",
    required: false,
  },
  264.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "263.1",
  },
  265: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "funds_available",
    parentNode: "264",
    required: true,
  },
  265.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "264.1",
  },
  266: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "expenses_paid_by",
    type: "serverDropdown",
    valueKey: "ExpensesPaidBySPList_ExpensesPaidBySP",
    parentNode: "265",
    required: true,
  },
  266.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "265.1",
  },
  267: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "expenses_paid_by_other",
    parentNode: {
      id: "266",
      value: "Other",
    },
    required: true,
  },
  267.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "266.1",
      value: "Other",
    },
  },
  268: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "work_permit_indicator",
    type: "checkBox",
    parentNode: [
      "267",
      {
        id: "266",
        value: [
          (parentValue) => {
            return parentValue !== "Other";
          },
        ],
      },
    ],
    required: true,
  },
  268.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "267.1",
      {
        id: "266.1",
        value: [
          (parentValue) => {
            return parentValue !== "Other";
          },
        ],
      },
    ],
  },
  269: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "work_permit_type",
    type: "serverDropdown",
    valueKey: "StudyWorkPermitTypeList_StudyWorkPermitType",
    parentNode: {
      id: "268",
      value: "Yes",
    },
    required: true,
  },
  269.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "268.1",
      value: "Yes",
    },
  },
  270: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "quebec_acceptance_certificate_number",
    parentNode: {
      id: "255",
      value: "QC",
    },
    required: false,
  },
  270.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "191",
      value: "QC",
    },
  },
  270.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "255.1",
      value: "QC",
    },
  },
  270.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "191.1",
      value: "QC",
    },
  },
  271: {
    forms: "change_of_conditions_student_form",
    section: "details_intended_study_canada",
    labels: "quebec_acceptance_certificate_expiry",
    type: "date",
    parentNode: "270",
    required: false,
  },
  271.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "270.1",
  },
  271.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: "270.2",
  },
  271.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: "270.3",
  },
  272: {
    forms: "generic_application_form",
    section: "personal_details",
    labels: "first_previous_country_of_residence_other",
    parentNode: {
      id: "119",
      value: "Other",
    },
    required: false,
  },
  272.2: {
    forms: "generic_application_form",
    section: ["personal_details", "dependent_details"],
    parentNode: {
      id: "119.2",
      value: "Other",
    },
  },
  272.3: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "119.3",
      value: "Other",
    },
  },
  272.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "119.4",
      value: "Other",
    },
  },
  273: {
    forms: [
      "generic_application_form",
      "change_of_conditions_student_form",
      "change_of_conditions_worker_form",
    ],
    section: "personal_details",
    labels: "current_country_of_residence_other",
    parentNode: {
      id: "15",
      value: "Other",
    },
    required: false,
  },
  273.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: {
      id: "15.2",
      value: "Other",
    },
  },
  274: {
    forms: [
      "generic_application_form",
      "change_of_conditions_student_form",
      "change_of_conditions_worker_form",
    ],
    section: "personal_details",
    labels: "current_country_of_residence_other",
  },
  275: {
    forms: [
      "generic_application_form",
      "change_of_conditions_student_form",
      "change_of_conditions_worker_form",
    ],
    section: "personal_details",
    labels: "current_country_of_residence_from_date",
    type: "date",
    parentNode: [
      {
        id: "15",
        value: ["Visitor", "Worker", "Student"],
      },
      "273",
    ],
    required: false,
  },
  275.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: [
      {
        id: "15.2",
        value: ["Visitor", "Worker", "Student"],
      },
      "273.2",
    ],
  },
  276: {
    forms: [
      "generic_application_form",
      "change_of_conditions_student_form",
      "change_of_conditions_worker_form",
    ],
    section: "personal_details",
    labels: "current_country_of_residence_to_date",
    type: "date",
    parentNode: "275",
    required: false,
  },
  276.2: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    parentNode: "275.2",
  },
  277: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "phone_other_indicator",
    type: "checkBox",
    parentNode: [
      {
        id: "53",
        value: "No",
      },
    ],
    required: true,
  },
  277.3: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      {
        id: "53.3",
        value: "No",
      },
    ],
  },
  277.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "53.4",
        value: "No",
      },
    ],
  },
  278: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "alternate_phone_other_indicator",
    type: "checkBox",
    parentNode: {
      id: "58",
      value: "No",
    },
    required: true,
  },
  278.3: {
    forms: "change_of_conditions_student_form",
    parentNode: {
      id: "58.3",
      value: "No",
    },
  },
  278.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "58.4",
      value: "No",
    },
  },
  279: {
    forms: "generic_application_form",
    section: "contact_information",
    labels: "fax_phone_other_indicator",
    type: "checkBox",
    parentNode: [
      {
        id: "63",
        value: "No",
      },
      {
        id: "63",
        value: [onParentSkipped],
      },
    ],
    required: true,
  },
  279.3: {
    forms: "change_of_conditions_student_form",
    parentNode: [
      {
        id: "63.3",
        value: "No",
      },
      {
        id: "63.3",
        value: [onParentSkipped],
      },
    ],
  },
  279.4: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "63.4",
        value: "No",
      },
      {
        id: "63.4",
        value: [onParentSkipped],
      },
    ],
  },
  280: {
    forms: "generic_application_form",
    section: "dependents",
    type: "Boolean",
    parentNode: ["85", "85.2"],
    required: true,
  },
  281: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_employment",
    type: "Boolean",
    parentNode: [
      "236",
      {
        id: "168",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
    required: true,
  },
  281.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: [
      "236.1",
      {
        id: "168.1",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
  },
  281.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "236.2",
      {
        id: "168.2",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
  },
  281.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: [
      "236.2",
      {
        id: "168.2",
        value: [
          (parentValue) => {
            return parentValue !== "Canada";
          },
        ],
      },
    ],
  },
  282: {
    forms: "change_of_conditions_student_form",
    section: "change_of_conditions_student_education",
    labels: "education_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: {
      id: "155",
      value: "Canada",
    },
    required: true,
  },
  282.1: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "155.1",
      value: "Canada",
    },
  },
  282.2: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "155.2",
      value: "Canada",
    },
  },
  282.3: {
    forms: "change_of_conditions_worker_filter_form",
    parentNode: {
      id: "155.3",
      value: "Canada",
    },
  },
  283: {
    forms: "change_of_conditions_student_form",
    section: "personal_details",
    labels: "",
    parentNode: {
      id: "129",
      value: "Other",
    },
    required: true,
  },
  283.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "129.1",
      value: "Other",
    },
  },
  283.2: {
    forms: "change_of_conditions_student_filter_form",
    parentNode: {
      id: "129.2",
      value: "Other",
    },
  },
  286: {
    forms: [
      "change_of_conditions_student_form",
      "change_of_conditions_worker_form",
    ],
    section: "change_of_conditions_student_employment",
    labels: "employment_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: {
      id: "161",
      value: "Canada",
    },
    required: true,
  },
  290: {
    forms: "generic_application_form",
    section: ["dependents", "personal_details"],
    labels: "family_names",
    parentNode: "109",
    required: true,
  },
  300: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "po_box",
    parentNode: [
      {
        id: "144",
        value: "No",
      },
      "146",
    ],
    required: false,
  },
  300.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      {
        id: "144.1",
        value: "No",
      },
      "146.1",
    ],
  },
  301: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "current_address_apt_unit",
    parentNode: "300",
    required: false,
  },
  301.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "300.1",
  },
  302: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "current_address_street_number",
    parentNode: "301",
    required: false,
  },
  302.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "301.1",
  },
  303: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "current_address_street_name",
    parentNode: "302",
    required: true,
  },
  303.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "302.1",
  },
  304: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "current_address_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: "303",
    required: true,
  },
  304.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "303.1",
  },
  305: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "current_address_city_town",
    type: "serverDropdown",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "304",
      value: "AB",
    },
    requiredd: true,
  },
  305.14: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "304.1",
      value: "AB",
    },
  },
  305.1: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "304",
      value: "BC",
    },
  },
  305.15: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "304.1",
      value: "BC",
    },
  },
  305.2: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "304",
      value: "MB",
    },
  },
  305.16: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "304.1",
      value: "MB",
    },
  },
  305.3: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "304",
      value: "MB",
    },
  },
  305.17: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "304.1",
      value: "MB",
    },
  },
  305.4: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "304",
      value: "NB",
    },
  },
  305.18: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "304.1",
      value: "NB",
    },
  },
  305.5: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "304",
      value: "NL",
    },
  },
  305.19: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "304.1",
      value: "NL",
    },
  },
  305.6: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "304",
      value: "NS",
    },
  },
  "305.20": {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "304.1",
      value: "NS",
    },
  },
  305.7: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "304",
      value: "NT",
    },
  },
  305.21: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "304.1",
      value: "NT",
    },
  },
  305.8: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "304",
      value: "NU",
    },
  },
  305.22: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "304.1",
      value: "NU",
    },
  },
  305.9: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "304",
      value: "ON",
    },
  },
  305.23: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "304.1",
      value: "ON",
    },
  },
  "305.10": {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "304",
      value: "PE",
    },
  },
  305.24: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "304.1",
      value: "PE",
    },
  },
  305.11: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_QC_City",
    parentNode: {
      id: "304",
      value: "QC",
    },
  },
  305.25: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_QC_City",
    parentNode: {
      id: "304.1",
      value: "QC",
    },
  },
  305.12: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "304",
      value: "SK",
    },
  },
  305.26: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "304.1",
      value: "SK",
    },
  },
  305.13: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "304",
      value: "YT",
    },
  },
  305.27: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "304.1",
      value: "YT",
    },
  },
  306: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "current_address_postal_code",
    parentNode: [
      "305",
      "305.1",
      "305.2",
      "305.3",
      "305.4",
      "305.5",
      "305.6",
      "305.7",
      "305.8",
      "305.9",
      "305.10",
      "305.11",
      "305.12",
      "305.13",
    ],
    required: true,
  },
  306.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "305.14",
      "305.15",
      "305.16",
      "305.17",
      "305.18",
      "305.19",
      "305.20",
      "305.21",
      "305.22",
      "305.23",
      "305.24",
      "305.25",
      "305.26",
      "305.27",
    ],
  },
  307: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "residential_address_same_as_mailing_indicator",
    type: "checkBox",
    parentNode: "306",
    required: true,
  },
  307.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "306.1",
  },
  308: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "residential_address_apt_unit",
    parentNode: {
      id: "307",
      value: "No",
    },
    required: false,
  },
  308.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: {
      id: "307.1",
      value: "No",
    },
  },
  309: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "residential_address_street_number",
    parentNode: "308",
    required: false,
  },
  309.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "308.1",
  },
  310: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "residential_address_street_name",
    parentNode: "309",
    required: true,
  },
  310.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "309.1",
  },
  311: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "residential_address_province_state",
    type: "serverDropdown",
    valueKey: "ProvinceAbbrevList_ProvinceAbbrev",
    parentNode: "310",
    required: true,
  },
  311.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: "310.1",
  },
  312: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "residential_address_city_town",
    type: "serverDropdown",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "311",
      value: "AB",
    },
    requiredd: true,
  },
  312.14: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_AB_City",
    parentNode: {
      id: "311.1",
      value: "AB",
    },
  },
  312.1: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "311",
      value: "BC",
    },
  },
  312.15: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_BC_City",
    parentNode: {
      id: "311.1",
      value: "BC",
    },
  },
  312.2: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "311",
      value: "MB",
    },
  },
  312.16: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_MB_City",
    parentNode: {
      id: "311.1",
      value: "MB",
    },
  },
  312.3: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "311",
      value: "MB",
    },
  },
  312.17: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "311.1",
      value: "MB",
    },
  },
  312.4: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "311",
      value: "NB",
    },
  },
  312.18: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NB_City",
    parentNode: {
      id: "311.1",
      value: "NB",
    },
  },
  312.5: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "311",
      value: "NL",
    },
  },
  312.19: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NL_City",
    parentNode: {
      id: "311.1",
      value: "NL",
    },
  },
  312.6: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "311",
      value: "NS",
    },
  },
  "312.20": {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NS_City",
    parentNode: {
      id: "311.1",
      value: "NS",
    },
  },
  312.7: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "311",
      value: "NT",
    },
  },
  312.21: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NT_City",
    parentNode: {
      id: "311.1",
      value: "NT",
    },
  },
  312.8: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "311",
      value: "NU",
    },
  },
  312.22: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_NU_City",
    parentNode: {
      id: "311.1",
      value: "NU",
    },
  },
  312.9: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "311",
      value: "ON",
    },
  },
  312.23: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_ON_City",
    parentNode: {
      id: "311.1",
      value: "ON",
    },
  },
  "312.10": {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "311",
      value: "PE",
    },
  },
  312.24: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_PE_City",
    parentNode: {
      id: "311.1",
      value: "PE",
    },
  },
  312.11: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_QC_City",
    parentNode: {
      id: "311",
      value: "QC",
    },
  },
  312.25: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_QC_City",
    parentNode: {
      id: "311.1",
      value: "QC",
    },
  },
  312.12: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "311",
      value: "SK",
    },
  },
  312.26: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_SK_City",
    parentNode: {
      id: "311.1",
      value: "SK",
    },
  },
  312.13: {
    forms: "change_of_conditions_student_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "311",
      value: "YT",
    },
  },
  312.27: {
    forms: "change_of_conditions_worker_form",
    valueKey: "CityList_YT_City",
    parentNode: {
      id: "311.1",
      value: "YT",
    },
  },
  313: {
    forms: "change_of_conditions_student_form",
    section: "contact_information",
    labels: "residential_address_postal_code",
    parentNode: [
      "312",
      "312.1",
      "312.2",
      "312.3",
      "312.4",
      "312.5",
      "312.6",
      "312.7",
      "312.8",
      "312.9",
      "312.10",
      "312.11",
      "312.12",
      "312.13",
    ],
    required: true,
  },
  313.1: {
    forms: "change_of_conditions_worker_form",
    parentNode: [
      "312.14",
      "312.15",
      "312.16",
      "312.17",
      "312.18",
      "312.19",
      "312.20",
      "312.21",
      "312.22",
      "312.23",
      "312.24",
      "312.25",
      "312.26",
      "312.27",
    ],
  },
  400: {
    forms: "basis_of_claim_form",
    section: ["personal_details"],
    labels: "nationality",
    required: true,
  },
  401: {
    forms: "basis_of_claim_form",
    section: ["personal_details"],
    labels: "religious_denomination",
    parentNode: "400",
    required: true,
  },
  402: {
    forms: "basis_of_claim_form",
    section: ["personal_details"],
    labels: "languages_and_dialects",
    parentNode: "401",
    required: true,
  },
  403: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "family_safety_yes",
    type: "checkBox",
    parentNode: "402",
    required: true,
  },
  404: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "family_safety_2a",
    parentNode: "403",
    required: false,
  },
  405: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "return_to_country_yes",
    type: "checkBox",
    parentNode: "404",
    required: true,
  },
  406: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "return_to_country_2b",
    parentNode: "405",
    required: false,
  },
  407: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "authority_assistance_yes",
    parentNode: "406",
    type: "checkBox",
    required: true,
  },
  408: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "authority_assistance_2c",
    parentNode: "407",
    required: false,
  },
  409: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "move_within_country_yes",
    parentNode: "408",
    type: "checkBox",
    required: true,
  },
  410: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "move_within_country_2d",
    parentNode: "409",
    required: false,
  },
  411: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "leaving_country_reasons_2e",
    parentNode: "410",
    required: true,
  },
  412: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "leaving_country_timing_2f",
    parentNode: "411",
    required: true,
  },
  413: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "leaving_country_yes",
    parentNode: "412",
    type: "checkBox",
    required: true,
  },
  414: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "moving_from_country_2g",
    parentNode: "413",
    required: true,
  },
  415: {
    forms: "basis_of_claim_form",
    section: ["refugee_protection_information"],
    labels: "refugee_protection_details_2h",
    parentNode: "414",
    required: false,
  },
};
