

export function timer(data) {

	let count;
	let n = data;
	let audioElement = new Audio('./media/notification.mp3');
	let stopButton = document.querySelector(".stop-button");
	let timerResult = document.getElementById("timer__result");


	stopButton.addEventListener("click", (e)=> {
		e.preventDefault();
		clearTimeout(count);
		timerResult.innerHTML = "0";
	})

	countdown()

	function countdown() {
		timerResult.innerHTML = n;
		n--;

		if (n < 0) {
			clearTimeout(count);
			audioElement.play();
			timerResult.innerHTML = "0";
		} else {
			count = setTimeout(countdown, 1000);
		}
	}
}