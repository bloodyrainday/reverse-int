module.exports = function reverse (n) {
    return Number(String(n > 0 ? n : n * (-1)).split("").reverse().join(""))
}
