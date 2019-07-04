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