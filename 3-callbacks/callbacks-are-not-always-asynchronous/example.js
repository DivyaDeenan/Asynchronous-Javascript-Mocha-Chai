// Example of an asynchronous function
function f(callback) {
    callback();
}

f(() => console.log('This is a callback'));

console.log('Hello world!');
