/* eslint-disable indent *//* eslint-disable linebreak-style */
export default class Validator {
    constructor(userName) {
        this.userName = userName;
    }

    ValidateUserName() {
        return /^[A-z]([A-z-_][0-9]{0,3}|[A-z-_])*[A-z]$/.test(this.userName);
    }
}
