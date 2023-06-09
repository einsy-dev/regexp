/* eslint-disable indent *//* eslint-disable linebreak-style */
export default class Validator {
    constructor(userName) {
        this.userName = userName;
    }

    ValidateUserName() {
        const step1 = new RegExp('^[A-z]?[A-z-_\\d]*[A-z]$');
        const step2 = new RegExp('^([A-z-_]\\d{0,3})*$');
        if (step1.test(this.userName)) {
            if (step2.test(this.userName)) {
                return true;
            }
        }
        return false;
    }
}
