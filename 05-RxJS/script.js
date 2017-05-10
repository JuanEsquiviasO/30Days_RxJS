// var observable = Rx.Observable.create(function subscribe (observer){
// 	var id = setInterval( () => {
// 		observer.next('hi')
// 	}, 1000)
// })

// observable.subscribe( x => console.log(x))

// var observable = Rx.Observable.create(function subscribe (observer){
// 	try{
// 		observer.next(1)
// 		observer.next(2)
// 		observer.next(3)
// 		observer.complete()
// 		observer.next(4)
// 	}
// 	catch(err){
// 		observer.error(err)
// 	}
// })

// observable.subscribe( x => console.log(x))

// var observable =Rx.Observable.from([10, 20, 30])
// var subscription = observable.subscribe(x => console.log(x))
// subscription.unsubscribe()

// var observable = Rx.Observable.create(function subscribe (observer){
// 	var id = setInterval( () => {
// 		observer.next('Hi world')
// 	}, 1000)
// 	return function unsubscribe(){
// 		clearInterval(id)
// 	}
// })

function subscribe(observer) {
	var intervalID = setInterval(() => {
		observer.next('Hi world')
	}, 1000)

	return function unsubscribe() {
		clearInterval(intervalID)
	}
}

var unsubscribe = subscribe( { next : (x) => console.log(x) } )

unsubscribe()