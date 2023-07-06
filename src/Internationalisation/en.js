let questions = {
  welcome:
    "Hello! I am Luna, and I will be guiding you through your applications for",
  finish: "You have finished your application for",
  // application details
  "Program under which you are applying?": 34,
  "Category under which you are applying?": 24,
  "How many family members, including yourself, are in this application?": 25,
  "What is your language preference for correspondence?": 26,
  "What is your language preference for the interview?": 27,
  "Would you like to request an interpreter?": 28,
  "In which province/territory do you intend to reside in when in Canada?": 29,
  "Which city/town do you intend to reside in when in Canada?": 30,
  "Have you received your Certificat de Sélection Québec (CSQ)?": 31,
  "What is the number for your CSQ?": 32,
  "When did you apply for your CSQ?": 33,

  // personal details
  "What are your primary family name(s)? (exactly as shown on your passport or travel document)": 1,
  "What are your primary given name(s)? (exactly as shown on your passport or travel document)": 2,
  "Have you ever used any other alternate name(s) (e.g. Nickname, maiden name, alias, etc.)?": 3,
  "Please provide your alternate family name(s) (e.g. Nickname, maiden name, alias, etc)": 4,
  "Please provide your alternate given name(s) (e.g. Nickname, maiden name, alias, etc)": 5,
  "What is your UCI number?": 6,
  "What gender do you identify as?": 7,
  "What is your height? Please indicate in centimeters (cm)": 8,
  "What is your eye colour?": 9,
  "What is your date of birth?": 10,
  "What is your country of birth?": 11,
  "What is your city/town of birth?": 12,
  "What is your country of citizenship?": 13,
  "Do you have more than one citizenship?": 105,
  "Please indicate your second citizenship": 106,
  "Where is your current country of residence?": 14,
  ["What is your status in {14||14.2}?"]: 15,
  ['What is your "other" status in {14||14.2}?']: 273,
  ["When did your {15||15.2||273||273.2} status start in {14||14.2}?"]: 275,
  ["When did your {15||15.2||273||273.2} status end in {14||14.2}?"]: 276,
  "When was your last entry into Canada?": 16,
  "Where was your last entry into Canada?": 17,
  "During the past five years have you lived in any country other than your country of citizenship or your current country of residence (indicated above) for more than six months?": 18,
  "Which country was this other country?": 19,
  ['What was your "other" status {19||19.2||19.3||19.4}?']: 272,
  ["What was your status in {19||19.2||19.3||19.4}?"]: 119,
  ["When did your {272||272.2||272.3||272.4||119||119.2||119.3||119.4} status in {19||19.2||19.3||19.4} start?"]: 133,
  ["When did your {272||272.2||272.3||272.4||119||119.2||119.3||119.4} status in {19||19.2||19.3||19.4} end?"]: 134,
  ["Except for {19||19.2||19.3||19.4}, during the past five years have you lived in any country other than your country of citizenship or your current country of residence (indicated above) for more than six months?"]: 117,
  "Which country was your second previous residence country?": 20,
  ["What was your status in {20||20.2||20.3||20.4}?"]: 21,
  ['What was your "other" status in {20||20.2||20.3||20.4}?']: 22,
  ["When did your {21||21.2||21.3||21.4||22||22.2||22.3||22.4} status in {20||20.2||20.3||20.4} start?"]: 210,
  ["When did your {21||21.2||21.3||21.4||22||22.2||22.3||22.4} status in {20||20.2||20.3||20.4} end?"]: 23,
  "What is your current marital status?": 86,
  "What is the date on which you were married or entered into the common-law relationship?": 95,
  "What are the family name(s) of your current spouse/common-law partner?": 96,
  "What are the given name(s) of your current spouse/common-law partner?": 230,
  "Have you previously been married or in a common-law relationship?": 231,
  "What are the family name(s) of your previous spouse/common-law partner?": 232,
  "What are the given name(s) of your previous spouse/common-law partner?": 233,
  "What was the type of your previous relationship?": 90,
  ["When did your {90||90.2||90.3||90.4} status begin?"]: 91,
  ["When did your {90||90.2||90.3||90.4} status end?"]: 92,
  "What is your partner's date of birth?": 93,

  // personal details(student, worker)
  "What is your status in Canada?": 129,
  ["When was the {129||283||129.1||283.1} status start in Canada?"]: 130,
  ["When was the {129||283||129.1||283.1} status end in Canada?"]: 131,
  "What's the other status in Canada?": 283,

  // contact information
  "What is the P.O. box of your mailing address?": 35,
  "What is the apt./unit of your mailing address?": 36,
  "What is the street number of your mailing address?": 37,
  "What is the street name of your mailing address?": 38,
  "What is the city/town of your mailing address?": 39,
  "What is the country of your mailing address?": 40,
  "What is the province/state of your mailing address?": 41,
  "What is the district of your mailing address?": 42,
  "What is the postal code of your mailing address ?": 43,
  "Is your residential address the as same as your mailing address?": 44,
  "What is apt./unit of your residential address?": 45,
  "What is the street number of your residential address?": 46,
  "What is the street name of your residential address?": 47,
  "What is the city/town of your residential address?": 48,
  "What is the country of your residential address?": 49,
  "What is province/state of your residential address?": 50,
  "What is the district of your residential address?": 51,
  "What is the postal code of your residential address?": 52,
  "Does your telephone number belong to Canada/US?": 53,
  "Does your telephone number belong another country?": 277,
  "What is the type of your telephone number?": 54,
  "What is the country code of your telephone number?": 55,
  "What is your telephone number?": 56,
  "What is the ext. of your telephone number?": 57,
  "Do you have alternate telephone number?": 148,
  "Does your alternate telephone number belong to Canada/US?": 58,
  "Does your alternate telephone number belong to another country?": 278,
  "What is the type of your alternate telephone number?": 59,
  "What is the country code of your alternate telephone number?": 60,
  "What is your alternate telephone number?": 61,
  "What is the ext. of your alternate telephone number?": 62,
  "Does your fax number belong to Canada/US?": 63,
  "Does your fax number belong to another country?": 279,
  "What is the country code of your fax number?": 64,
  "What is the fax number?": 65,
  "What is the ext. of your fax number?": 66,
  "What is your e-mail address?": 67,

  // contact information (student, worker)
  "What is your P.O. box of your current mailing address in Canada?": 300,
  "What is your apt./unit of your current mailing address in Canada?": 301,
  "What is the street number of your current mailing address in Canada?": 302,
  "What is the street name of your current mailing address in Canada?": 303,
  "What is the province of your current mailing address in Canada": 304,
  "What is the city/town of your current mailing address in Canada?": 305,
  "What is the post code of your current mailing address in Canada?": 306,
  "Is your residential address as same as your mailing address in Canada?": 307,
  "What is apt./unit of your residential address in Canada?": 308,
  "What is the street number of your residential address in Canada?": 309,
  "What is the street name of your residential address in Canada?": 310,
  "What is province of your residential address in Canada?": 311,
  "What is the city/town of your residential address in Canada?": 312,
  "What is the post code of your residential address in Canada?": 313,

  // passport
  "Do you have a valid passport/travel document?": 68,
  "What is your passport/travel document number (exactly as shown on your passport or travel document)?": 69,
  "What is the country of issue of your passport/travel document?": 70,
  "What is the issue date of your passport/travel document?": 71,
  "What is the expiry date of your passport/travel document?": 72,
  "For this trip, will you use a passport issued by the Ministry of Foreign Affairs in Taiwan that includes your personal identification number?": 73,
  "For this trip, will you use a National Israeli passport?": 74,

  // passport(student, worker)
  "What is your passport number?": 140,
  "What is the country/territory of issue of your passport?": 141,
  "What is the issue date of your passport?": 142,
  "What is the expiry date of your passport?": 143,

  // national identity document
  "Do you have a national identity document?": 75,
  "What is the national identity document number?": 76,
  "Which country issued your national identity document?": 77,
  "What is the issue date of your national identity document?": 121,
  "What is the expiry date of your national identity document?": 122,

  // education/occupation detail
  "What is your highest level of education?": 78,
  "How many years of education in total?": 79,
  "What is your current occupation?": 80,
  "What is your intended occupation?": 81,

  // language detail
  "What is your native language or mother tongue?": 82,
  "Are you able to communicate in English and/or French?": 83,
  "In which language are you most at ease in?": 84,
  "Have you taken a test from a designated testing agency to assess your proficiency in English or French?": 85,

  // dependents personal detail
  "Will your application include a dependant?": 280,
  "What is your relationship to the dependant?": 107,
  'What is the "other" relationship to dependant?': 234,
  "Will this dependant accompany you to Canada?": 108,
  "What are the reason(s) your dependant will not accompany you?": 235,
  "What is the category type of your dependant?": 109,
  "Please answer the following for your dependants for your dependant. What are your family name(s)? (exactly as shown on your passport or travel document)": 290,

  // change of condition detail (student)
  "What language would you like to serve in?": 123,
  "Are you applying for a study permit for the first time or extend your study permit?": 222,
  "Are you applying for restoring your status as a student?": 223,
  "Are you applying for getting a new temporary resident permit(for inadmissible applicants only)?": 224,

  // change of condition detail (worker)
  "Are you applying for a work permit with the same employer?": 183,
  "Are you applying for a work permit for the first time or with a new employer?": 184,
  "Are you applying for restoring your status as a worker?": 185,

  // US PR card (student, worker)
  "Are you a lawful Permanent Resident of the United States with a valid alien registration card(green card)?": 144,
  "What is the document number?": 145,
  "When will be the expiry date?": 146,

  // coming into Canada(student, worker)
  "When was your original date of entry into Canda?": 244,
  "Where was your original date of entry into Canda?": 245,
  "What was your original purpose for coming to Canada?": 246,
  "What was the other purpose?": 247,
  "Was your most recent entry to Canada the same as original entry?": 248,
  "When was your most recent entry to Canada?": 249,
  "Where was your most recent entry to Canada?": 250,
  "If applicable, provide the document number of the most recent Visitor Record, Study Permit, Work Permit or Temporary Resident Permit issued to you.": 251,

  // employment(student, worker)
  "When is your current employment start?": 156,
  "When is your current employment end?": 157,
  "What is your current activity/occupation?": 158,
  "What is the company/employer/facility name?": 159,
  ["What is the city/town of {159||159.1||159.2||159.3}?"]: 160,
  ["What is the country of {159||159.1||159.2||159.3}?"]: 161,
  ["What is the province/state of {159||159.1||159.2||159.3}?"]: 286,
  "Do you have more employment experience?": 162,
  "When was your previous employment start?": 163,
  "When was your previous employment end?": 164,
  "What was your previous activity/occupation?": 165,
  "What was the previous company/employer/facility name?": 166,
  ["What is the city/town of {166||166.1||166.2||166.3}?"]: 167,
  ["What was the country of {166||166.1||166.2||166.3}?"]: 168,
  ["What was the province/state of {166||166.1||166.2||166.3}?"]: 236,
  "Do you have more than two employment experience?": 281,
  "When was your second previous employment start?": 237,
  "When was your second previous employment end?": 238,
  "What was your second previous activity/occupation?": 239,
  "What was the second previous company/employer/facility name?": 240,
  ["What is the city/town of {240||240.1||240.2||240.3}?"]: 241,
  ["What is the country of {240||240.1||240.2||240.3}?"]: 242,
  ["What is the province/state of {240||240.1||240.2||240.3}?"]: 243,

  // background infomaion(student, worker)
  "You must complete the following section if you are 18 years of age or older. Do you want to continue?": 169,
  "Within the past two years, have you or a family member ever had tuberculosis of the lungs or been in close contact with a person with tuberculosis?": 170,
  "Do you have any physical or mental disorder that would require social and/or health services, other than medication, during a stay in Canada?": 171,
  "Please provide details if you answer YES to any of the last two questions.": 172,
  "Have you ever remained beyond the validity of your status, attended school without authorization or worked without authorization in Canada?": 173,
  "Have you ever been refused a visa or permit, denied entry or ordered to leave Canada or any other country or territory?": 174,
  "Have you previously applied to enter or remain in Canada?": 175,
  "Please provide details if you answer YES to any of the last three questions.": 176,
  "Have you ever committed, been arrested for or been charged with or convicted of any criminal offence in any country or territory?": 177,
  "Please provide details if you answer YES to the last questions.": 178,
  "Did you serve in any military, militia, or civil defence unit or serve in a security organization or police force(including non obligatory national service, reserve or volunteer units)?": 179,
  "Please provide dates of service and countries or territories where you served.": 180,
  "Are you, or have you ever been a member or associated with any political party, or other group or organization which has engaged in or advocated voilence as a means to achieving a political or religious objective, or which has been associated with criminal activity at any time?": 181,
  "Have you ever witnessed or participated in the ill treatment of prisoners or civilians, looting or desecration of religious buildings?": 182,

  // education(student, worker)
  "Have you had any post secondary education(including university, college or apprenticeship training)?": 149,
  "When did your highest level of post secondary education start?": 150,
  "When did your highest level of post secondary education end?": 151,
  "What is the field and level of study?": 152,
  "What is the school/facility name?": 153,
  ["What is the city/town of {153||153.1||153.2||153.3}?"]: 154,
  ["What is the country or territory of {153||153.1||153.2||153.3}?"]: 155,
  ["Which is the province/state of {153||153.1||153.2||153.3}?"]: 282,

  // details of intended study in Canada(student)
  "What is the name of the school that you have been accepted?": 252,
  ["What level of study will be at {252||252.1}?"]: 253,
  ["What field of study will be at {252||252.1}?"]: 254,
  ["What is the province of {252||252.1}?"]: 255,
  ["What is city/town of {252||252.1}?"]: 256,
  ["What is the address of {252||252.1}?"]: 257,
  "What is the designated learning institution # (0#)?": 258,
  "What is your student ID #?": 259,
  "When will the duration of expected study start?": 260,
  "When will the duration of expected study end?": 261,
  "How much is the tuition cost for your studies?": 262,
  "How much will be the room and board cost of your studies?": 263,
  "How much will be the other cost of your studies?": 264,
  "How many funds are available for your stay (CAD)?": 265,
  "Your expenses in Canada will be paid by:": 266,
  "What is the other that will paid your expenses?": 267,
  "In addition to a study permit, are you also applying for a work permit?": 268,
  "What type of work permit are you applying for:": 269,
  "What is your Quebec Acceptance Certificate(CAQ) number?": 270,
  "When will be the expiry date of Quebec Acceptance Certificate(CAQ)?": 271,

  // details of intended work in Canada(worker)
  "What type of work permit are you applying for?": 186,
  "What is the other type of your work permit?": 187,
  "What is the name of your employer? (If you are employed by a foreign employer who has been awarded a contract to provide services to a Canadian entity, please identify the foreign employer here)": 189,
  ["What is the complete address of {189||189.1} (Canadian or Foreign)?"]: 190,
  ["What is the province of {189||189.1}?"]: 191,
  ["What is city/town of {189||189.1}?"]: 192,
  ["What is the address of {189||189.1}?"]: 193,
  "What will be the job title of your occupation in Canada?": 194,
  "Please provide brief description of duties.": 195,
  "When will the duration of expected employment start?": 196,
  "When will the duration of expected employment end?": 197,
  "What is the Labour Market Impact Assessment (LMIA) No. or Offer of Employment (LMIA Exempt)?": 198,
  "Have you been issued a certificate under the Provincial Nominee program?": 202,

  // basis of claim
  "What is your nationality, ethnic and racial group, or tribe?": 400,
  "What is your religious denomination or sect?": 401,
  "List all languages and dialects you speak.": 402,
  "Have you or your family ever been harmed, mistreated, or threatened by any person or group?": 403,
  "If yes, explain in detail.\n \
  What happened to you and your family.\n \
  When the harm or mistreatment or threats occurred;\n \
  Who do you think caused the harm or mistreatment or threats;\n \
  What do you think was the reason for the harm or mistreatment or threats that occurred;\n \
  Whether persons in situations similar to yours experienced such harm, mistreatment or threats.\n \
  (Indicate dates, names and places, wherever possible.)": 404,
  "If you returned to your country, do you believe you would be harmed, mistreated or threatened by any person or group?": 405,
  "If yes, explain in detail.\n \
  What would happen to you?\n \
  Who would harm, mistreat or threaten you?\n \
  What do you think is the reason you would be harmed, mistreated or threatened?\n \
  (Indicate dates, names and places, wherever possible.)": 406,
  "Did you ask any authorities such as the police, or any other organization, in your country to protect or assist you?": 407,
  "If yes, explain in detail.\n \
  Whom you approached for help;\n \
  What steps you took; and\n \
  What happened as a result.\n \
  (Indicate dates, names and places, wherever possible.)": 408,
  "Did you move to another part of your country to seek safety?": 409,
  "If yes, explain in detail.\n \
  If no, explain in detail why not.\n \
  Why you left the place that you moved to; and\n \
  Why you could not live there, or some other place in another part of your country.": 410,
  "When did you leave your country? (Provide dates)": 411,
  "Why did you leave at that time and not sooner, or at a later time?": 412,
  "Did you move to another country (other than Canada) to seek safety?": 413,
  "If yes, explain in detail.\n \
  Name of country;\n \
  When you moved to that country;\n \
  How long you stayed there;\n \
  Whether you claimed refugee protection in that country and, if not, why not.": 414,
  "Give any other details that you think are important for your claim for refugee protection.": 415,
  "Are children who are less than 18 years old claiming refugee protection with you?": 416,
  "If yes, are you the child's parent and the other parent is in Canada?": 417,
  "If yes, are you not the child's parent?": 418,
  "If yes, are you the child's parent but the other parent is not in Canada?": 419,
  "If you are not the child's parent, do you have any legal documents or written consent allowing you to take care of the child or travel with the child?\n \
  If yes, what document(s) do you have? If not, why not?": 420,
  "If you are the child's parent but the other parent is not in Canada, do you have any legal documents or written consent allowing you to take care of the child or travel with the child?\n \
  If yes, what document(s) do you have? If not, why not?": 421,
  "If a child, six years old or younger, is claiming refugee protection with you, explain in detail why you believe the child would be at risk of being harmed, mistreated or threatened if returned to their country.\n \
  (Include only information that is specific to the child's situation and is different from the information you gave to support your claim.)": 422,
  "List the first country (if applicable) where you believe you are at risk of serious harm.": 423,
  "List the second country (if applicable) where you believe you are at risk of serious harm.": 424,
  "List the third country (if applicable) where you believe you are at risk of serious harm.": 425,
  "List the fourth country (if applicable) where you believe you are at risk of serious harm.": 426,

  "List the first country of which you are or have been a citizen.": 427,
  "What is your status in the first country?": 428,
  "How was your citizenship acquired in the first country?": 429,
  "On what date was your citizenship acquired in the first country?": 430,

  "List the second country of which you are or have been a citizen.": 431,
  "What is your status in the second country?": 432,
  "How was your citizenship acquired in the second country?": 433,
  "On what date was your citizenship acquired in the second country?": 434,

  "List the third country of which you are or have been a citizen.": 435,
  "What is your status in the third country?": 436,
  "How was your citizenship acquired in the third country?": 437,
  "On what date was your citizenship acquired in the third country?": 438,

  "List the fourth country of which you are or have been a citizen.": 439,
  "What is your status in the fourth country?": 440,
  "How was your citizenship acquired in the fourth country?": 441,
  "On what date was your citizenship acquired in the fourth country?": 442,

  "List the fifth country of which you are or have been a citizen.": 443,
  "What is your status in the fifth country?": 444,
  "How was your citizenship acquired in the fifth country?": 445,
  "On what date was your citizenship acquired in the fifth country?": 446,

  "List the sixth country of which you are or have been a citizen.": 447,
  "What is your status in the sixth country?": 448,
  "How was your citizenship acquired in the sixth country?": 449,
  "On what date was your citizenship acquired in the sixth country?": 450,
};
export default questions;
