function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    error.name = "Имя не может быть пустым";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Почта не может быть пустой";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Неправильная почта";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Пароль не может быть пустым";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Плохой пароль (хороший пароль 1sF1dF1fF)";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
