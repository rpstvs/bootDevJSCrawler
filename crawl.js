const normalizeUrl = (url) => {
const myUrl = new URL (url);


console.log(myUrl.hostname, myUrl.pathname)
}


normalizeUrl("https://boot.dev/path//")

module.exports = {
    normalizeUrl
}
