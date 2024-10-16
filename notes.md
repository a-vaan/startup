# Notes for BYU CS 260 #

### GitHub Notes ###
- Make sure to commit frequently and consistantly. Stay ahead of assignments in order to keep up with the class.
- Here's a link to my [README.md](https://github.com/a-vaan/startup/blob/main/README.md) file

### Technology stack ###
- The collection of technologies used to create or deliver a web application is called a technology stack. It is a stack because they usually layer on top of one another.
- Dependability, support, scalability, performance, and security are all important factors when it comes to developing a technology stack

### EC2 Notes ###
- Public IP address: http://44.219.229.13/
- SSH command to get into prod server from the CS 260 folder: ssh -i Production.pem ubuntu@simplycinema.click

### JS Promises ###
The rendering process of your HTML executes on a single thread. That means that you cannot take a long time processing JavaScript on the main rendering thread. Long running, or blocking tasks, should be executed with the use of a JavaScript Promise. The execution of a promise allows the main rendering thread to continue while some action is executed in the background. You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of the promise execution is always in one of three possible states.

1. pending - Currently running asynchronously
2. fulfilled - Completed successfully
3. rejected - Failed to complete
We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also in a for loop outside the promise so that both code blocks are running in parallel.

`const delay = (msg, wait) => {`
`  setTimeout(() => {`
`    console.log(msg, wait);`
`  }, 1000 * wait);`
`};`

`new Promise((resolve, reject) => {`
`  // Code executing in the promise`
`  for (let i = 0; i < 3; i++) {`
`    delay('In promise', i);`
`  }`
`});`

`// Code executing after the promise`
`for (let i = 0; i < 3; i++) {`
`  delay('After promise', i);`
`}`

`// OUTPUT:`
`//   In promise 0`
`//   After promise 0`
`//   In promise 1`
`//   After promise 1`
`//   In promise 2`
`//   After promise 2`
#### Resolving and rejecting ####
Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

`const coinToss = new Promise((resolve, reject) => {`
`  setTimeout(() => {`
`    if (Math.random() > 0.5) {`
`      resolve('success');`
`    } else {`
`      reject('error');`
`    }`
`  }, 10000);`
`});`

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

`console.log(coinToss);`
`// OUTPUT: Promise {<pending>}`
If you wait ten seconds and then log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

`console.log(coinToss);`
`// OUTPUT: Promise {<fulfilled>}`