// Callbacks
const asyncWithCallback = (callback) => {
    callback(null, { something: 1 })
}

const asyncWithCallbackError = (callback) => {
    callback(new Error('BOOM!'))
}

asyncWithCallback((err, data) => {
    if (err) {
        return console.log(err)
    }

    console.log(data)
})

// Promises
const asyncPromise = () => {
    return Promise.resolve({ something: 1 })
}

const asyncPromiseError = () => {
    return Promise.reject(new Error('BOOM!'))
}

asyncPromise
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })