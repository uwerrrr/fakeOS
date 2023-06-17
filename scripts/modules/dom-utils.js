const eleArr = [];

////////////////////////////////////
/// captured elements
///

export const appleLogo = document.querySelector("#appleLogo");
eleArr.push(appleLogo);

export const macMenu = document.querySelector("#macMenuWrapper");
eleArr.push(macMenu);

////////////////////////////////////
/// log
///
const domElementLog = (element) => {
  console.log(`${element.id}: `, element);
};

export const logAllEle = () => {
  eleArr.forEach((element) => domElementLog(element));
};
