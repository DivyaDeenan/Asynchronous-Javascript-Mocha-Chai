// Ordinary capitalize function
function capitalize(text) {
    return text[0].toUpperCase() + text.substr(1);
}


// Promisified capitalize function
function capitalize1(text) {
    return new Promise(function (resolve, reject) {
        if (typeof text !== 'string') {
            return reject(new Error('Argument must be a string'));
            // Don't forget to put return statement here, otherwise
            // the execution will go further
        }
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    })
}

console.log(capitalize('hello'));
capitalize1(123).then(value => console.log(value))
.catch(error=>console.log(error));