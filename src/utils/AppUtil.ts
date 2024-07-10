export const isEmptyVal = (val: any) => {
  return !val || val == 'null' || val == null || val == '' || val == undefined || val == 'undefined';
};
