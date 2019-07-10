# Promises-sample-code

Essential for asynchronous programming Promises are vital for abstract a synchronous behaviour for your functions.
The sample codes are simple examples of 
* non-blocking execution
* functions
* callbacks
* promises nesting and changing
* async await.

## Getting Started

I recommend to run the samples using Nodejs, you can install it following the link bellow:

[Node.js](https://nodejs.org/en/) - The official Nodejs website

1-non-blocking.js
```
console.log('Starting up')

setTimeout(() => {
    console.log('Two seconds!')
}, 2000)


setTimeout(() => {
    console.log('Zero seconds!')
}, 0)

console.log('Finishing up')

```

2-callbacks.js
```
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
```

3-promises.js
```
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
```

4-promises-nesting.js
```
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(sum)

    add(sum, 7).then((sum2) => {
        console.log(sum2)

        add(sum2, 11).then((sum3) => {
            console.log(sum3)
        }).catch((error) => {
            console.log(error)
        })

    }).catch((error) => {
        console.log(error)
    })
    
}).catch((error) => {
    console.log(error)
})
```

5-promises-chaining.js
```
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(sum)

    add(sum, 7).then((sum2) => {
        console.log(sum2)

        add(sum2, 11).then((sum3) => {
            console.log(sum3)
        })

    })
    
}).catch((error) => {
    console.log(error)
})
```

6-promises-async-await.js
```


const add = async (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be positive!')
            }
            resolve(a + b)
        }, 2000)
    })
}

const callAdd = async () => {
    //Behaivour looks simple as synchronous function
    const sum = await add(1, 99)
    const sum1 = await add(sum, 12)
    const sum2 = await add(sum1, 7)
    return sum2
}

callAdd().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```


## Authors

* **Woltter Xavier** - *Initial work* - [GitHub Profile](https://github.com/wvxavier)



