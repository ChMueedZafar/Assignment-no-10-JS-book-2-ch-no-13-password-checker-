// statment no 1
const allowedPasswords = ['Password123','securePas!@#', 'admin2024', 'qwerty' ];

// statment no 2
function login(password){
    return allowedPasswords.includes(password);
}

// statment no 3
function checkPassword(password){
    return new Promise((resolve, reject) => {
        const isvalid = login(password);
        if (isvalid){
            resolve({ valid: true});
        }else {
            reject({valid: false});
        }
    });
}

// statment no 4
function verifyPassword(password){
    checkPassword(password)
    .then(result => {
        console.log(`password "${password}" is vaid : ${result.valid}`);
    })
    .catch(error => {
        console.log(`password "${password}" is valid: ${error.valid}`);
    })
}

// statment no 5
const testPasswords = ['password123', 'wrongPass','admin2024', 'unknownPass'];
testPasswords.forEach(password => verifyPassword(password));