const url = require('url')

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
// toString return same result that .href
// console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host)

// Hostname (doesn't include the port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized query params
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

// Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`Name: ${name}, Value: ${value}`))

