export const required = (value) => {
  if (value) return undefined;
  else return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Max Length is ${maxLength} chars`;
  else return undefined;
};
