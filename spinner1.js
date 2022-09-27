const spinner = (amount) => {
  if(amount > 0){
	setTimeout(() => {
	  process.stdout.write(`\r|     `);
	},100);

	setTimeout(() => {
	  process.stdout.write(`\r/     `);
	},300);

	setTimeout(() => {
      process.stdout.write(`\r-     `);
	},500);

	setTimeout(() => {
      process.stdout.write(`\r\\    `);
	},700);

	setTimeout(() => {
      process.stdout.write(`\r|    `);
	},900);

	setTimeout(() => {
	  spinner(amount - 1);
	},900);
  }
}

spinner(2);