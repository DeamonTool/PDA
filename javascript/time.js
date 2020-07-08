formatTrue = value => { return value < 10 ? value = '0' + value : value }

function dateTime() {
    let date = new Date()
    let minutes = formatTrue(date.getMinutes())
    let hours = formatTrue(date.getHours())
    let day = formatTrue(date.getDate())
    let month = formatTrue(date.getMonth() + 1)
    let year = date.getFullYear()

    return `${hours}:${minutes} ${day}/${month}/${year}`
}

setInterval(() => document.getElementsByClassName("date_time")[0].innerHTML = dateTime(), 1000)