const contact = () => {
  let formDiv = document.createElement("div");
  formDiv.classList.add("contact-form");

  formDiv.innerHTML +=
    "<form novalidate>" +
    '<div><label for="email">Email</label><input class="form-field" id="email" type="email" name="email" required></div>' +
    '<div><input id="submit-btn" type="submit"></div>' +
    "</form>";

  return formDiv;
};

export default contact;
