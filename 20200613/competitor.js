let timer;
let n = 0;

self.onmessage = ({ data }) => {
	const { done } = data;
	if (done) {
		clearInterval(timer);
		console.log('clear timer...');
	} else {
		const arr = new Uint8Array(data);
		timer = setInterval(() => {
			arr[0] = Math.floor(Math.random() * 3) + 1;
			n++;
			if (n % 1e4 === 0) console.log('update...');
		});
	}
};
