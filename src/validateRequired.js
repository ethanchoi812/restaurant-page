const validateRequired = () => {
  let isValid = [];
  let fields = document.querySelectorAll(
    ".form-field input, .form-field textarea"
  );

  let emailField = document.querySelector('.form-field input[type="email"]');
  let form = document.querySelector("form");

  const checkRequiredField = field => {
    if (field.validity.valueMissing) {
      let msg = "This field is required!";
      hasError(field, msg);
      isValid.push[false];
    }

    if (!field.validity.valueMissing) {
      removeError(field);
    }
  };

  const checkEmailField = field => {
    if (field.validity.typeMismatch) {
      let msg = "Please use valid email address";
      hasError(field, msg);
      isValid.push(false);
    }

    if (!field.validity.typeMismatch) {
      removeError(field);
    }
  };

  form.addEventListener("submit", () => {
    event.preventDefault();

    if (isValid.includes(false)) {
      return false;
    }
  });

  fields.forEach(field => {
    field.addEventListener("blur", () => {
      checkRequiredField(field);
    });
  });

  emailField.addEventListener("blur", () => {
    checkEmailField(emailField);
  });

  const hasError = (field, msg) => {
    field.classList.add("has-error");

    let span = document.createElement("span");
    span.classList.add("error-msg");
    span.innerHTML = msg;

    if (!field.nextElementSibling) {
      field.parentNode.appendChild(span);
    }
  };

  const removeError = field => {
    let errorMsg = field.parentNode.querySelector(".error-msg");

    if (errorMsg) {
      field.parentNode.removeChild(errorMsg);
    }

    field.classList.remove("has-error");
  };
};

export default validateRequired;
