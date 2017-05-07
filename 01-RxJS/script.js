let button = document.querySelector('button')
button.addEventListener('click', () => console.log('Clicked!'))

Rx.Observable.fromEvent(button, 'click')
	.subscribe(() => console.log('Clicked RxJS'))