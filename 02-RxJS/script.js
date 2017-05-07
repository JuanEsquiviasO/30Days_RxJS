// Counter

//MAP
var count = 0
var rate = 1000
var lastClick = Date.now() - rate
var button = document.getElementById('JSButton')
button.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX
    console.log(count)
    lastClick = Date.now()
  }
})

var button = document.getElementById('RxJSButton')
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe(count => console.log(count))

//THROTTLE
// var count = 0
// var rate = 3000
// var lastClick = Date.now() - rate
// var button = document.getElementById('JSButton')
// button.addEventListener('click', () => {
//   if (Date.now() - lastClick >= rate) {
//     console.log(`JS Clicked ${++count} times`)
//     lastClick = Date.now()
//   }
// })


// var button = document.getElementById('RxJSButton')
// Rx.Observable.fromEvent(button, 'click')
//   .throttleTime(3000)
//   .scan(count => count + 1, 0)
//   .subscribe(count => console.log(`Clicked ${count} times`))


//SCAN
// let countJS = 0
// // get button
// var button = document.getElementById('JSButton')
// button.addEventListener('click', () => console.log(`JS Click ${++countJS} times`))

// // get button
// var button = document.getElementById('RxJSButton')
// Rx.Observable.fromEvent(button, 'click')
// 	.scan(count => count +1, 0)
// 	.subscribe(count => console.log(`RxJS Clicked ${count} times`))

