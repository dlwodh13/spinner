const spinnerTwo = (amount) => {
	//storing motion and time inververt
	let timeIntervert = [100, 300, 500, 700, 900];
	let output = [`\r|     `, `\r/     `,`\r-     `,`\r\\    `,`\r|     `];

	//each output loop will print half of the animation
	if(amount > 0) {
		for(let loopMotion = 0; loopMotion < output.length; loopMotion++) {
			setTimeout(() => {
				process.stdout.write(output[loopMotion]);
			},timeIntervert[loopMotion]);
		}
		setTimeout(() => {
			spinnerTwo(amount - 1);
		},900);
	}
}	

spinnerTwo(2);