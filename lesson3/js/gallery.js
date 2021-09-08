import {data} from './mediaDB.js';
import OutputData from "./outputData.js";

let create = new OutputData();

let imagesBlock = document.querySelector('.images-block');
let mp3Block = document.querySelector('.mp3-block');
let videoBlock = document.querySelector('.video-block');


const createHtmlMarkup = (data) => {
	for (let item of data) {
		switch (item.type) {
			case 'img':
				imagesBlock.insertAdjacentHTML("beforeend", create.img(item));
				break;
			case 'mp3':
				mp3Block.insertAdjacentHTML("beforeend", create.mp3(item));
				break;
			case 'mp4':
				videoBlock.insertAdjacentHTML("beforeend", create.mp4(item));
		}
	}
}

createHtmlMarkup(data);



