export const courseType = {
  LIVE: 0,
  RECORDED: 1,
  MIX: 2,
};
export const paymentToTeacherType = {
  ONETIME: 0,
  MONTHLY: 1,
};

export const moduleSectionTypes = {
  ARTICLE: 0, // html string
  RESOURCES: 1, // Heading , Description and File (eg, pdf)
  LECTURE: 2, // VEDIO with resource link
  NOTE: 3, // Typo in previous lecture
  ASSIGNMENT: 4, // Code submission OR mcq base
  QUIZ: 5, // MCQ BASE or CODE SUBMISSION
};

export const submissionTypes = {
  FILES: 0, // Files like coding file , pdf file , presentation slides file
  TEXT: 1, // Raw text
  VIDEO: 2, // Upload video
  IMAGES: 3, // Images
};

export const gradingSchemeTypes = {
  PERCENTAGE: 0,
  NUMBERS: 1,
  PASS_OR_FAIL: 2,
};

export const courseTypes = {
  PAID: 0,
  UNPAID: 1,
};

export const courseLanguages = {
  ENGLISH: 0,
  URDU: 1,
};

export const sectionVisibility = {
  PUBLIC: 0,
  PRIVATE: 1,
};
