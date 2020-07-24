formatTrue = value => { return value < 10 ? value = '0' + value : value }

function dateTime() {
    let date = new Date()

    return `${formatTrue(date.getHours())}:${formatTrue(date.getMinutes())}`
}

function mainMenuSwitch(index) {
    let list = document.getElementById("main_menu_list").getElementsByTagName("li")

    for (let i = 0; i < 7; i++) i == index ? list[i].style.color = "rgb(230, 160, 0)" : list[i].style.color = ""

    if (list[index].classList.length) list[index].classList.toggle("notice_active")
}

let date = new Date()
let day_month_year = ` ${formatTrue(date.getDate())}/${formatTrue(date.getMonth() + 1)}/${date.getFullYear()}`

setInterval(() => document.getElementsByTagName("time")[0].innerHTML = dateTime() + day_month_year, 1000)