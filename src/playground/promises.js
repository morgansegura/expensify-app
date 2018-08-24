const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data')
        // resolve({
        //     name: 'Morgan',
        //     age: 26
        // location: {
        //     city: 'San Diego',
        //     country: 'United States'
        // }
        // })
        reject('Something went wrong')
    }, 1500)
})

console.log('before')

promise.then((data) => {
    console.log('1', data)
}).catch((error) => {
    console.warn('warning:', error)
})

console.log('after')
