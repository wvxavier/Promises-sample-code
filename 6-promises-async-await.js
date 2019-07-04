//Set of tools the makes easier to work with promises

//Returns undefined
const doWorkwithoutAsync = () => {

}

console.log(doWorkwithoutAsync())

//Async functions always retunrs a Promise
const exampleDoWorkAsync = async () => {

}

console.log(exampleDoWorkAsync())


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
