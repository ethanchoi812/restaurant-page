const contact = () => {
  let formDiv = document.createElement("div");
  formDiv.classList.add("contact-form");

  formDiv.innerHTML +=
    "<form novalidate>" +
    '<div class="form-field"><label for="name">Name</label><input id="name" type="text" name="name" required></div>' +
    '<div class="form-field"><label for="email">Email</label><input id="email" type="email" name="email" required></div>' +
    '<div class="form-field"><label for="message">Your Message</label><textarea></textarea></div>' +
    '<div class="form-submit"><input id="submit-btn" type="submit" value="Send"></div>' +
    "</form>";

  return formDiv;
};

export default contact;
