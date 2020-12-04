const regexPinCode = RegExp(`^[0-9]{6}$`);

let validatePinCode = (pinCode) => {
    console.log(`validating ${pinCode}... `);
    if (!regexPinCode.test(pinCode)) throw 'Invalid PIN Code!'
    {
        console.log(`PIN Code accepted.`);
    }
}


// validate pin code for A400088
try {
    pinCode = `A400088`;
    validatePinCode(pinCode);
} catch (e) {
    console.error(e);
}
