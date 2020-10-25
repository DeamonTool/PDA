"use strict"

//  Дата и время PDA

let formatTrue = value => { return value < 10 ? value = '0' + value : value }

function dateTime() {
    let date = new Date()

    return `${formatTrue(date.getHours())}:${formatTrue(date.getMinutes())}`
}

let date = new Date()
let day_month_year = ` ${formatTrue(date.getDate())}/${formatTrue(date.getMonth() + 1)}/${date.getFullYear()}`

setInterval(() => document.getElementsByTagName("time")[0].innerHTML = dateTime() + day_month_year, 1000)

//  Уведомления о новой информации

function mainMenuSwitch(index) {
    let list = document.getElementById("main_menu_list").getElementsByTagName("li")

    for (let i = 0; i < 7; i++) i == index ? list[i].style.color = "#e6a000" : list[i].style.color = ""

    if (list[index].classList.length) list[index].classList.toggle("notice")
}

//  Фоновая музыка

document.getElementsByTagName("audio")[0].volume = 0.01

//  Подсказка описания

let tooltip = document.getElementsByClassName("tooltip")[0]
let section = document.getElementsByTagName("section")[0]
let main = document.getElementsByClassName("main")[0]
let tooltip_database = {
    "Задачи" : "Показать информацию по квестам",
    "План" : "Показать карту Зоны",
    "Журнал" : "Показать дневник игрока",
    "Контакты" : "Показать список контактов сталкеров",
    "Ранги" : "Показать рейтинг лучших сталкеров",
    "Данные" : "Показать статистику по прохождению",
    "Справка" : "Показать энциклопедию по Зоне",
    "Активные" : "Показать активные задания",
    "Выполненные" : "Показать выполненные задания",
    "Проваленные" : "Показать проваленные задания",
    "task_title_info" : "Переключить карта/квест",
    "target" : "Перейти",
    "tasks_right_menu_full" : "На карту Зоны",
    "tasks_right_menu_player" : "Центр на Меченом",
    "tasks_right_menu_plus" : "Масштаб +",
    "tasks_right_menu_minus" : "Масштаб -",
    //"" : "",
}

function tooltipData(event) {
    tooltip.style.display = "none"
    tooltip.innerHTML = tooltipName(event.target)

    setTimeout((x = event.clientX, y = event.clientY) => {
        if (x == event.clientX && y == event.clientY) {
            tooltip.style.left = x + 4 - (section.clientWidth - main.clientWidth) / 2 + "px"
            tooltip.style.top = y - 10 - tooltip.clientHeight - (section.clientHeight - main.clientHeight) / 2 + "px"
            tooltip.style.display = "block"
            tooltip.animate([{opacity: 0}, {opacity: 1}], 900)
        }
    }, 600)
}

function tooltipName(element) {
    switch (element.nodeName.toLowerCase()) {
        case "div": return tooltip_database[element.classList[0]]
        case "li": return tooltip_database[element.innerHTML]
    }
}

section.addEventListener("mousemove", () => {tooltip.style.display = "none"})
document.getElementsByClassName("tasks_right_menu_full")[0].addEventListener("mousemove", tooltipData)
document.getElementsByClassName("tasks_right_menu_player")[0].addEventListener("mousemove", tooltipData)
document.getElementsByClassName("tasks_right_menu_plus")[0].addEventListener("mousemove", tooltipData)
document.getElementsByClassName("tasks_right_menu_minus")[0].addEventListener("mousemove", tooltipData)
let main_menu_list = document.getElementById("main_menu_list").getElementsByTagName("li")
let tasks_left_menu_list = document.getElementById("tasks_left_menu_list").getElementsByTagName("li")
let task_title_info = document.getElementsByClassName("task_title_info")
let target = document.getElementsByClassName("target")

for (let i = 0; i < main_menu_list.length; i++) main_menu_list[i].addEventListener("mousemove", tooltipData)
for (let i = 0; i < tasks_left_menu_list.length; i++) tasks_left_menu_list[i].addEventListener("mousemove", tooltipData)
for (let i = 0; i < task_title_info.length; i++) task_title_info[i].addEventListener("mousemove", tooltipData)
for (let i = 0; i < target.length; i++) target[i].addEventListener("mousemove", tooltipData)