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

function mainMenuSwitch(index) {
    let list = document.getElementById("main_menu_list").getElementsByTagName("li")

    for (let i = 0; i < 7; i++) i == index ? list[i].style.color = "rgb(230, 160, 0)" : list[i].style.color = ""

    if (list[index].classList.length) list[index].classList.toggle("notice_active")
}

setInterval(() => document.getElementsByClassName("date_time")[0].innerHTML = dateTime(), 1000)