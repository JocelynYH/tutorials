import { BehaviorSubject, ReplaySubject, Subject, Observable, fromEvent, AsyncSubject } from 'rxjs';

const addItem = (val: any) => {
    let node = document.createElement("li");
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// var subject = new Subject();
// let subject = new BehaviorSubject("First");
// let subject = new ReplaySubject(2, 100);
let subject = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
);

// var observer2 = subject.subscribe(
//     data => addItem(`Observer 2: ${data}`)
// )

// subject.next("The first thing has been sent.");
// subject.next("The first and a half thing has been sent.");
// subject.next("...observer 2 is about to subscribe");


// let i = 1;
// let int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem(`Observer 2: ${data}`)
    )
    subject.complete();
}, 2000)


subject.next("The second thing has been sent.")
subject.next("The third thing has been sent.")

// observer2.unsubscribe();

subject.next("a final thing has been sent.")
