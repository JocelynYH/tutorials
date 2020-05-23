// import * as Rx from "rxjs/Observable";

// import { Observable } from 'rxjs';

// const addItem = (val: any) => {
//     let node = document.createElement("li");
//     let textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }

// var observable = Observable.create(function subscribe(observer: any) {
//     try {
//         observer.next('event 1')
//         observer.next('event 2')
//         setInterval(() => {
//             observer.next('repeating event')
//         }, 2000)
//         // observer.complete()
//         observer.next('event 3 will not send')
//     }
//     catch (err) {
//         observer.error(err)
//     }
// });

// var observer = observable.subscribe(
//     (event: any) => addItem(event), // next function
//     (error: any) => addItem(error), // error function
//     () => addItem('Completed')
// )

// setTimeout(() => {
//     observer.unsubscribe();
//     let observerr2 = observable.subscribe(
//         (event: any) => addItem('Subscriber 2: ' + event)
//     );
// }, 1000)
