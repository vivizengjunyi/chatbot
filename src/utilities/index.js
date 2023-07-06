import axios from "axios";

export const serverDropdownGetter = async (language) => {
    const serverDropdowns = await axios.get(
      `api/v1/form/options/general_application?locale=${language}`
    );
    return serverDropdowns.data
  // }
};

export const translationFileGetter = (language) => {
  const { default: data } = require(
    `../Internationalisation/${language}.js`
  );
  return data;
};

export const getObjKey = (obj, value) => {
  const result = Object.keys(obj).find((key) => obj[key] == value);
  if(!result && value - 0 > 1000){
    return getObjKey(obj, value - 1000);
  }
  return result
};
