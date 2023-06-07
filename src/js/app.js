/* eslint-disable indent *//* eslint-disable linebreak-style */
export default class Validator {
    constructor(userName) {
        this.userName = userName;
    }

    ValidateUserName() {
        return /^[^(\-_\d)]([A-z-_][0-9]{0,3}|[A-z-_])*[^(\-_\d)]$/.test(this.userName);
    }
}
