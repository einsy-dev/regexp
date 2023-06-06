/* eslint-disable indent *//* eslint-disable linebreak-style */
export default class Validator {
    constructor(userName) {
        this.userName = userName;
    }

    ValidateUserName() {
        return /^[^(\-_\d)]([A-z\-_]*|\d{0,3})*[^(\-_\d)]$/.test(this.userName);
    }
}
