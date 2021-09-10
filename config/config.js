const prod = process.env.NODE_ENV === 'production'
module.exports = {
    backendUrl: prod ? 'https://~~' : 'http://localhost:3065',
}