import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import trim from 'validator/lib/trim';
import isNumeric from 'validator/lib/isNumeric';

/*
* ResetPassword form validator
*/
export const resetPassword = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Champ requis';
  } else if (!isEmail(values.email)) {
    errors.email = 'Email invalide';
  }

  return errors;
};

/*
* SignIn form validator
*/
export const SignIn = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Champ requis';
  } else if (!isEmail(values.email)) {
    errors.email = 'Email invalide';
  }

  if (!values.password) {
    errors.password = 'Champ requis';
  } else if (!isLength(values.password, { min: 8 })) {
    errors.password = 'Au moins 8 caractères requis';
  } else if (!trim(values.password) && true) {
    errors.password = 'Mot de passe invalide';
  }

  return errors;
};

/*
* SignUp form validator
*/
export const SignUp = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Champ requis';
  } else if (!isEmail(values.email)) {
    errors.email = 'Email invalide';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Champ requis';
  } else if (!isNumeric(values.phoneNumber)) {
    errors.phoneNumber = 'Numéro de téléphone incorrect';
  } else if (!isLength(values.phoneNumber, { min: 8 })) {
    errors.phoneNumber = 'Numéro de téléphone trop court';
  } else if (!isLength(values.phoneNumber, { max: 10 })) {
    errors.phoneNumber = 'Numéro de téléphone trop long';
  }

  if (!values.password) {
    errors.password = 'Champ requis';
  } else if (!isLength(values.password, { min: 8 })) {
    errors.password = 'Au moins 8 caractères requis';
  } else if (!trim(values.password) && true) {
    errors.password = 'Mot de passe invalide';
  }

  return errors;
};

/*
* SignUpValidation form validator
*/
export const SignUpValidation = (values) => {
  const errors = {};

  if (!values.confirmationCode) {
    errors.confirmationCode = 'Champ requis';
  } else if (
    !isNumeric(values.confirmationCode) ||
    !isLength(values.confirmationCode, { min: 4, max: 5 })
  ) {
    errors.confirmationCode = 'Code de confirmation invalide';
  }

  return errors;
};
