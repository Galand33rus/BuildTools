
export default class Output {
	img = (item) => {
		return `
					<div class="media-item">
						<a href="${item.src}" target="_blank">
						<img class="img" src="${item.src}" alt="${item.media}"></a>
						${item.name}
					</div>`
	}
	mp3 = (item) => {
		return `<div class="media-item">
							<div  class="mp3" >
								<audio controls="controls" src="${item.src}"></audio>
							</div>
							<span>${item.name}</span>
						</div>`
	}
	mp4 = (item) => {
		return `<div class="media-item">
							<div class="video">
								<video class="video" controls="controls" src="${item.src}"></video>
							</div>
							<span>${item.name}</span>
						</div>`
	}
}

