// a function create text element -> add text to text element -> add CSS classes to text element -> add it to parent element
export const createTextEl = (
  elType,
  textVal,
  parent,
  classes = [],
  id = "",
  name = ""
) => {
  const newEl = document.createElement(elType); // create Element
  classes.forEach((c) => newEl.classList.add(c)); // add classes to Element
  id ? (newEl.id = id) : id; // add id when there's id
  name ? newEl.setAttribute("name", name) : name; // add name when there's id
  const text = document.createTextNode(textVal); // convert textVal to text node
  newEl.appendChild(text); // add text node to Element
  parent.appendChild(newEl); // assign Element to parent
};

