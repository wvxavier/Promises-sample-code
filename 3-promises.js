/* What is Promise ?
Designed to manage asynchronous code
They are function callbacks enhancement */ 
const doWorkPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve([1,2,3])
       // reject('This is an error!')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log(error)
})

//                               Fulfilled
//                             / 
// Promisse  --> Pending -- >
//                             \ 
//                               Rejected