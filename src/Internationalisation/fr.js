// TODO: Translate remainder of questions from English to French
let questions = {
  welcome:
    "Bonjour ! Je suis Luna et je vais vous guider dans vos candidatures pour",
  finish: "Vous avez terminé votre candidature pour",
  // application details
  "Programme dans le cadre duquel vous postulez?": 34,
  "Catégorie dans laquelle vous postulez?": 24,
  "Combien de membres de la famille, y compris vous-même, figurent dans cette application?": 25,
  "Quelle est votre préférence linguistique pour la correspondance?": 26,
  "Quelle est votre langue préférée pour l'entretien?": 27,
  "Voulez-vous demander un interprète?": 28,
  "Dans quelle province/territoire avez-vous l'intention de résider lorsque vous serez au Canada?": 29,
  "Dans quelle ville avez-vous l'intention de résider lorsque vous serez au Canada?": 30,
  "Avez-vous reçu votre Certificat de Sélection Québec (CSQ)?": 31,
  "Quel est le numéro de votre CSQ?": 32,
  "Quand avez-vous demandé votre CSQ?": 33,

  // personal details
  "Quel est votre ou vos nom(s) de famille principal(s)? (exactement tel qu'il apparaît sur votre passeport ou document de voyage)": 1,
  "Quels sont vos prénoms principaux? (exactement tels qu'ils figurent sur votre passeport ou document de voyage)": 2,
  "Avez-vous déjà utilisé d'autres noms alternatifs (par exemple, surnom, nom de jeune fille, alias, etc.)?": 3,
  "Veuillez indiquer votre ou vos autres noms de famille (par exemple, surnom, nom de jeune fille, pseudonyme, etc.)": 4,
  "Veuillez fournir votre ou vos prénoms alternatifs (par exemple, surnom, nom de jeune fille, alias, etc.)": 5,
  "Quel est votre numéro UCI?": 6,
  "A quel genre vous identifiez-vous?": 7,
  "Quelle est votre taille? Veuillez indiquer en centimètres (cm)": 8,
  "Quelle est la couleur de vos yeux?": 9,
  "Quelle est votre date de naissance?": 10,
  "Quel est votre pays de naissance?": 11,
  "Quelle est votre ville/village de naissance?": 12,
  "Quel est votre pays de citoyenneté?": 13,
  "Avez-vous plus d'une nationalité?": 105,
  "Veuillez indiquer votre deuxième nationalité": 106,
  "Où est votre pays de résidence actuel?": 14,
  ["Quel est votre statut en {14||14.2}?"]: 15,
  ['Quel est votre "autre" statut dans {14||14.2}?']: 273,
  ["Quand votre statut {15||15.2||273||273.2} a-t-il commencé en {14||14.2}?"]: 275,
  ["Quand votre statut {15||15.2||273||273.2} s'est-il terminé en {14||14.2}?"]: 276,
  "À quand remonte votre dernière entrée au Canada?": 16,
  "Où était votre dernière entrée au Canada?": 17,
  "Au cours des cinq dernières années, avez-vous vécu dans un pays autre que votre pays de citoyenneté ou votre pays de résidence actuel (indiqué ci-dessus) pendant plus de six mois?": 18,
  "Quel pays était cet autre pays?": 19,
  ['Quel était votre "autre" statut {19||19.2||19.3||19.4}?']: 272,
  ["Quel était votre statut en {19||19.2||19.3||19.4}?"]: 119,
  ["Quand votre statut {272||272.2||272.3||272.4||119||119.2||119.3||119.4} dans {19||19.2||19.3||19.4} a-t-il commencé?"]: 133,
  ["Quand votre statut {272||272.2||272.3||272.4||119||119.2||119.3||119.4} dans {19||19.2||19.3||19.4} a-t-il pris fin?"]: 134,
  ["À l'exception de {19||19.2||19.3||19.4}, au cours des cinq dernières années, avez-vous vécu dans un pays autre que votre pays de citoyenneté ou votre pays de résidence actuel (indiqué ci-dessus) pendant plus de six mois? "]: 117,
  "Quel pays était votre deuxième pays de résidence précédent?": 20,
  ["Quel était votre statut en {20||20.2||20.3||20.4}?"]: 21,
  ['Quel était votre "autre" statut en {20||20.2||20.3||20.4}?']: 22,
  ["Quand votre statut {21||21.2||21.3||21.4||22||22.2||22.3||22.4} dans {20||20.2||20.3||20.4} a-t-il commencé?"]: 210,
  ["Quand est-ce que votre statut {21||21.2||21.3||21.4||22||22.2||22.3||22.4} dans {20||20.2||20.3||20.4} a pris fin?"]: 23,
  "Quel est votre état civil actuel?": 86,
  "Quelle est la date à laquelle vous vous êtes marié ou êtes entré en union de fait?": 95,
  "Quel est le(s) nom(s) de famille de votre époux/conjoint de fait actuel?": 96,
  "Quel est le(s) prénom(s) de votre époux/conjoint de fait actuel?": 230,
  "Avez-vous déjà été marié ou en union de fait?": 231,
  "Quel est le(s) nom(s) de famille de votre ancien époux/conjoint de fait?": 232,
  "Quel est le(s) prénom(s) de votre ancien époux/conjoint de fait?": 233,
  "Quel était le type de votre relation précédente?": 90,
  ["Quand votre statut {90||90.2||90.3||90.4} a-t-il commencé?"]: 91,
  ["Quand votre statut {90||90.2||90.3||90.4} s'est-il terminé?"]: 92,
  "Quelle est la date de naissance de votre partenaire?": 93,

  // personal details(student, worker)
  "What is your status in Canada?": 129,
  ["When was the {129||283||129.1||283.1} status start in Canada?"]: 130,
  ["When was the {129||283||129.1||283.1} status end in Canada?"]: 131,
  "What's the other status in Canada?": 283,

  // contact information
  "Quelle est la boîte postale de votre adresse postale?": 35,
  "Quel est l'app./l'unité de votre adresse postale?": 36,
  "Quel est le numéro civique de votre adresse postale?": 37,
  "Quel est le nom de la rue de votre adresse postale?": 38,
  "Quelle est la ville de votre adresse postale?": 39,
  "Quel est le pays de votre adresse postale?": 40,
  "Quelle est la province/l'état de votre adresse postale?": 41,
  "Quel est le district de votre adresse postale?": 42,
  "Quel est le code postal de votre adresse postale?": 43,
  "Votre adresse résidentielle est-elle la même que votre adresse postale?": 44,
  "Qu'est-ce que l'app./l'unité de votre adresse résidentielle?": 45,
  "Quel est le numéro civique de votre adresse résidentielle?": 46,
  "Quel est le nom de la rue de votre adresse résidentielle?": 47,
  "Quelle est la ville/village de votre adresse résidentielle?": 48,
  "Quel est le pays de votre adresse résidentielle?": 49,
  "Quelle est la province/l'état de votre adresse résidentielle?": 50,
  "Quel est le quartier de votre adresse résidentielle?": 51,
  "Quel est le code postal de votre adresse résidentielle?": 52,
  "Votre numéro de téléphone appartient-il au Canada/aux États-Unis?": 53,
  "Votre numéro de téléphone appartient-il à un autre pays?": 277,
  "Quel est le type de votre numéro de téléphone?": 54,
  "Quel est l'indicatif pays de votre numéro de téléphone?": 55,
  "Quel est votre numéro de téléphone?": 56,
  "Quel est le poste de votre numéro de téléphone?": 57,
  "Avez-vous un autre numéro de téléphone?": 148,
  "Votre autre numéro de téléphone appartient-il au Canada/aux États-Unis?": 58,
  "Votre autre numéro de téléphone appartient-il à un autre pays?": 278,
  "Quel est le type de votre numéro de téléphone alternatif?": 59,
  "Quel est l'indicatif du pays de votre numéro de téléphone alternatif?": 60,
  "Quel est votre numéro de téléphone alternatif?": 61,
  "Quel est le poste de votre numéro de téléphone alternatif?": 62,
  "Votre numéro de télécopieur appartient-il au Canada/aux États-Unis?": 63,
  "Votre numéro de fax appartient-il à un autre pays?": 279,
  "Quel est l'indicatif pays de votre numéro de fax?": 64,
  "Quel est le numéro de fax?": 65,
  "Quel est le poste de votre numéro de fax?": 66,
  "Quelle est votre adresse e-mail?": 67,

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
  "Avez-vous un passeport/document de voyage valide?": 68,
  "Quel est votre numéro de passeport/document de voyage (exactement tel qu'il figure sur votre passeport ou document de voyage) ?": 69,
  "Quel est le pays de délivrance de votre passeport/document de voyage?": 70,
  "Quelle est la date de délivrance de votre passeport/document de voyage?": 71,
  "Quelle est la date d'expiration de votre passeport/document de voyage?": 72,
  "Pour ce voyage, utiliserez-vous un passeport délivré par le ministère des Affaires étrangères de Taïwan qui comprend votre numéro d'identification personnel?": 73,
  "Pour ce voyage, utiliserez-vous un passeport national israélien?": 74,

  // passport(student, worker)
  "What is your passport number?": 140,
  "What is the country/territory of issue of your passport?": 141,
  "What is the issue date of your passport?": 142,
  "What is the expiry date of your passport?": 143,

  // national identity document
  "Avez-vous une pièce d'identité nationale?": 75,
  "Quel est le numéro de pièce d'identité nationale?": 76,
  "Quel pays a délivré votre pièce d'identité nationale?": 77,
  "Quelle est la date de délivrance de votre pièce d'identité nationale?": 121,
  "Quelle est la date d'expiration de votre pièce d'identité nationale?": 122,

  // education/occupation detail
  "Quel est votre niveau d'études le plus élevé?": 78,
  "Combien d'années d'études au total?": 79,
  "Quelle est votre profession actuelle?": 80,
  "Quelle est votre profession envisagée?": 81,

  // language detail
  "Quelle est votre langue maternelle ou votre langue maternelle?": 82,
  "Êtes-vous capable de communiquer en anglais et/ou en français?": 83,
  "Dans quelle langue êtes-vous le plus à l'aise?": 84,
  "Avez-vous passé un test auprès d'un organisme de test désigné pour évaluer votre maîtrise de l'anglais ou du français?": 85,

  // dependants personal detail
  "Votre demande inclura-t-elle une personne à charge?": 280,
  "Quel est votre lien avec la personne à charge?": 107,
  'Quelle est "l\'autre" relation avec la personne à charge?': 234,
  "Cette personne à charge vous accompagnera-t-elle au Canada?": 108,
  "Pour quelle(s) raison(s) votre personne à charge ne vous accompagnera-t-elle pas?": 235,
  "Quel est le type de catégorie de votre personne à charge?": 109,
  "Veuillez répondre aux questions suivantes pour vos personnes à charge pour votre personne à charge. Quel est votre ou vos nom(s) de famille? (exactement comme indiqué sur votre passeport ou document de voyage)": 290,

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
