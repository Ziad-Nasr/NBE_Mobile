export function hasUpper(myString) {
  return /[A-Z]/.test(myString);
}

export function hasLower(myString) {
  return /[a-z]/.test(myString);
}

export function hasNumber(myString) {
  return /\d/.test(myString);
}

export function has8Char(myString) {
  return myString.length > 7;
}

export function hasSpecial(myString) {
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return format.test(myString);
}

export function Equal(password, confirmPassword) {
  return password == confirmPassword;
}
