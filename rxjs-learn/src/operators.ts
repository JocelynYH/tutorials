import { from, Observable, Subject, interval, merge } from "rxjs";

import { map, pluck } from "rxjs/operators";
import "rxjs/add/operator/pluck"
import "rxjs/add/operator/skipUntil"


const addItem = (val: any) => {
    let node = document.createElement("li");
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// let observable1 = Observable.create((observer: any) => {
//     observer.next("Hey guys!")
// })
// let observable2 = Observable.create((observer: any) => {
//     observer.next("How's it going?!")
// })

// let newObservable = merge(observable1, observable2);

// newObservable.map((val: any) => val.toUpperCase())
//     .subscribe((x: any) => {
//         addItem(x)
//     })

// let obs3 = from([
//     { first: "Lori", last: "Yuan", age: "34" },
//     { first: "Cocoa", last: "Huang", age: "34" },
//     { first: "Jocelyn", last: "Huang", age: "34" }
// ])

// obs3.pluck("first").subscribe((val: any) => {
//     addItem(val)
// })

let obs1 = Observable.create((data: any) => {
    let i = 1;
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

let obs2 = new Subject;

setTimeout(() => {
    obs2.next("Hey!")
}, 5000)

let newObs = obs1.skipUntil(obs2)

newObs.subscribe((val: any) => addItem(val))