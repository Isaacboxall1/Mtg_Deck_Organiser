// function that checks that the first name, last name, and contain only letters and numbers
// function that checks that the username is not already taken
// function that checks that the user has not already created a profile
// function that checks that all fields are filled out

export function verifyTextValiditiy(firstName, lastName, userName) {
    let nameRegex = /^[a-zA-Z0-9]+$/;
    if (firstName.trim().match(nameRegex) && lastName.trim().match(nameRegex) && userName.trim().match(nameRegex)) {
        return true;
    } else {
        return false;
    }
}