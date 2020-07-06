trueFormat = value => { return value < 10 ? value = '0' + value : value }

function dateTime() {
    let date = new Date()
    let minutes = trueFormat(date.getMinutes())
    let hours = trueFormat(date.getHours())
    let day = trueFormat(date.getDate())
    let month = trueFormat(date.getMonth() + 1)
    let year = date.getFullYear()

    return `${hours}:${minutes} ${day}/${month}/${year}`
}

setInterval(() => document.getElementById("data_time").innerHTML = dateTime(), 1000)