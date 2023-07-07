

//////////////////////////////////////
/// Tests function
///
export const domElementLog = (element) => {
  console.log(`${element.id}: `, element);
};

export const clickedLog = (event) => {
  const id = event.target.id; // get id of event being clicked
  console.log(`${id} is clicked`);
};
