// RxJS
function foo() {
	console.log('Hello')
	return 42
	return 100
}

console.log(foo())

var fooRxJS = Rx.Observable.create(function (observer){
	console.log('Hello')
	observer.next(42)
	observer.next(100)
	observer.next(200)
	setTimeout( () => {
		observer.next(300)
	}, 1000)
})

console.log('before')
fooRxJS.subscribe(function(x){
	console.log(x)
})

console.log('after')