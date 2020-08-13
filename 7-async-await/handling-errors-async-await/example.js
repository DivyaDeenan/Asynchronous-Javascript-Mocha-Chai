async function f() {
	try {
        // Execution will go to the catch block
		let response = await fetch('https://some-host.com/wrong-url');
	} catch (e) {
		console.log(`Some error: ${e}`);
	}
}


async function f1() {
    let response = await fetch('https://some-host.com/wrong-url');
}
f();
// You can invoke .catch
f1().catch(e => console.log('Custom error: ' + e));