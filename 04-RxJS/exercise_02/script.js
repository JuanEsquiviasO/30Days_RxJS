function foo() {
	console.log('Hello')
	return 42
}

var x = foo.call()
console.log(x)

var y = foo.call()
console.log(y)

console.log('before')
console.log(foo.call())
console.log('after')


// RxJS
var fooRxJS = Rx.Observable.create(function (observer){
	console.log('Hello')
	observer.next(42)
})

fooRxJS.subscribe(function(x){
	console.log(x)
})

fooRxJS.subscribe(function(y){
	console.log(y)
})