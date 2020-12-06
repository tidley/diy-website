window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById('header').style.padding = '20px 10px';
	} else {
		document.getElementById('header').style.padding = '80px 10px';
	}
}

function openMenu() {
	const nav = document.getElementsByClassName('inactive');
	for (let index = 0; index < nav.length; index++) {
		const element = nav[index];
		if (element.className === 'inactive') {
			element.className += ' show';
		} else {
			element.className = 'inactive';
		}
	}
}
