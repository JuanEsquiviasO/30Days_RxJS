function foo() {
	console.log('Hello')
	return 42
}

console.log('before')
console.log(foo.call())
console.log('after')

var fooRxJS = Rx.Observable.create(function (observer){
	console.log('Hello')
	observer.next(42)
})

console.log('before')
fooRxJS.subscribe(function(x){
	console.log(x)
})

console.log('after')
fooRxJS.subscribe(function(y){
	console.log(y)
})