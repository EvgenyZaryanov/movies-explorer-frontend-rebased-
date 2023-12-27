function isValidName(name) {
  return /^[a-zA-Zа-яА-я- ]+$/.test(name);
}

function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

export { isValidName, isValidEmail };
