const registerValidationFunc = (
  email,
  username,
  password,
  confirmPassword
) => {
  let validEmail = (() => {
    let mailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let testMail = mailRegex.test(email);
    return testMail && email !== '';
  })();

  let validUsername = (() => {
    return username.length > 3 && username !== '';
  })();

  let validPassword = (() => {
    return password.length > 7 && password !== '';
  })();

  let validConfirmPassword = (() => {
    return confirmPassword.length > 7 &&
        confirmPassword !== '' &&
        confirmPassword === password;

  })();

  return {
    validEmail,
    validUsername,
    validPassword,
    validConfirmPassword
  }
};

const loginValidationFunc = (email, password) => {
  let validEmail = (() => {
    let emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let testMail = emailRegex.test(email);
    return testMail && email !== '';
  })();

  let validPassword = (() => {
    return password.length > 7 && password !== '';
  })();

  return {
    validEmail,
    validPassword
  }
};

const createProductValidationFunc = (name, ingredients ,description, image, weight, price) => {
  let validName = (() => {
    return name.length > 2 && name !== '';
  })();

  let validDescription = (() => {
    return description.length > 10 &&
        description.length <= 200 &&
        description !== '';
  })();

  let validImage = (() => {
    return (image.startsWith('https://') || image.startsWith('http://')) && image.length >= 14;
  })();

  let validPrice = (() => {
    return price > 0 && price !== '';
  })();
let validWeight = (()=> {
  return weight;
})();
let validIngredients = (()=> {
  return ingredients;
})();
  return {
    validName,
    validIngredients,
    validDescription,
    validImage,
    validWeight,
    validPrice
  }
};

export {
  registerValidationFunc,
  loginValidationFunc,
  createProductValidationFunc
}
