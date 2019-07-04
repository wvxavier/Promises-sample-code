//Callbacks are the foundation of Node.js
//A callback is a function called at the completion of a given task;
//This prevents any blocking, and allows other code to be run in the meantime.

const doWorkCallback = (callback) => {
 setTimeout(() => {
    callback('This is an error!', undefined)
    //callback(undefined, [1,2,3])
 },2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }
    console.log(result)
})