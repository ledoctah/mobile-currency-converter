module.exports = {
    money(value) {
        return (value.replace(/\D/g, '')/100).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").replace(/\./g, ' ').replace(/\,/g, '.').replace(/\ /g, ',');
    }
}