//  \   Single\  Multiple
//  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//  Pull \ Function  \   Iterator
//   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//  Push \ Promise  \   Observable


var observable = Rx.Observable.create(function (observer){
	observer.next(1)
	observer.next(2)
	observer.next(3)
	setTimeout(() => {
		observer.next(4)

		setTimeout(() => {
		observer.next(4)

		setTimeout(() => {
		observer.next(4)

		setTimeout(() => {
		observer.next(4)
		observer.complete()
	}, 1000)
	}, 1000)
	}, 1000)
	}, 1000)
})

console.log('just before subscribe')
observable.subscribe({
	next : x => console.log('x is', x),
	error: err => console.log('Something is wrong', err),
	complete: () => console.log('done'),
})

console.log('just before subscribe')

