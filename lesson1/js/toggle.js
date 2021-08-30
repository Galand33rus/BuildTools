export const toggle = () => {

	let tab = document.querySelectorAll('.form__tab'),
		header = document.querySelector('.header__tab'),
		tabContent = document.querySelectorAll('.form');

	function hideTabContent(x) {
		for (let i = x; i < tabContent.length; i++) {
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('active');

		}
	}

	function showTabContent(y) {
		if (tabContent[y].classList.contains('hide')) {
			tabContent[y].classList.remove('hide');
			tab[y].classList.add('active');
		}
	}

	header.addEventListener('click', function (event) {
		let target = event.target;
		//			if (target && target.classList.contains('form__tab')) {
		for (let i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				hideTabContent(0);
				showTabContent(i);
				break;
				//					}
			}
		}
	});

	hideTabContent(1);

};


