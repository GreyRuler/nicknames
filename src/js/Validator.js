export default class Validator {
  static validateUsername(username) {
    return !/[^a-z0-9_-]/g.test(username) && !/(^\d|\d$)|\d{4}/.test(username);
  }
}
