import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { toggle } from "./toggle.js";
import { timer } from "./timer.js";

const log = console.log;
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const timerForm = document.getElementById("timer");
const timerError = document.getElementById("error")

dateCalcForm.addEventListener("submit", handleCalcDates);
timerForm.addEventListener("submit", handleTimer);

function handleCalcDates(event) {

	event.preventDefault();
	dateCalcResult.innerHTML = "";

	let { firstDate, secondDate } = event.target.elements;
	firstDate = firstDate.value;
	secondDate = secondDate.value;

	if (firstDate && secondDate) {
		const diff = diffDates(firstDate, secondDate);
		dateCalcResult.innerHTML = diffToHtml(diff);
	} else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

function handleTimer(event) {
	event.preventDefault();

	let timerStarting = event.target.elements.starting;
	let timerStartingValue = timerStarting.value;
	if (event.submitter.classList == "start-button" &&  timerStartingValue) {
		timer(timerStartingValue);
		timerStarting.value = "";
		timerError.innerHTML = "";
	} else if (!timerStartingValue || timerStartingValue == 0) {
		timerError.innerHTML = formatError("Введите время");
	} else {
		timerStarting.value = "";
	}
}

toggle();