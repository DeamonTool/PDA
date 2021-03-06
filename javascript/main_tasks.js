"use strict" //not neccessary 

//  Переключение меню Активные/Выполненные/Проваленные

let list_menu = document.getElementById("tasks_left_menu_list").getElementsByTagName("li") // every call, every override, remove from func

function tasksLeftMenuSwitch(index) {
    let list = [
        document.getElementsByClassName("tasks_left_menu_active")[0],
        document.getElementsByClassName("tasks_left_menu_completed")[0],
        document.getElementsByClassName("tasks_left_menu_failed")[0]
    ]

    for (let i = 0; i < 3; i++) {
        if (i == index) {
            list_menu[i].style.color = "#e6a000"
            list[i].style.display = "block"
        }
        else {
            list_menu[i].style.color = ""
            list[i].style.display = "none"
        }
    }

}

//  Информация о задании

let info_title = document.getElementsByClassName("task_title_info") // same issue

function tasksLeftMenuInfo(index) {
    let info = document.getElementsByClassName("tasks_right_info")[0].getElementsByTagName("li")
    let target = document.getElementsByClassName("target")
    let menu_info = [
        document.getElementsByClassName("tasks_right_menu_info_title")[0],
        document.getElementsByClassName("tasks_right_map")[0],
        document.getElementsByClassName("tasks_right_info")[0]
    ]
    let menu = [
        document.getElementsByClassName("tasks_right_menu_full")[0],
        document.getElementsByClassName("tasks_right_menu_player")[0],
        document.getElementsByClassName("tasks_right_menu_plus")[0],
        document.getElementsByClassName("tasks_right_menu_minus")[0]
    ]

    for (let i = 0; i < info_title.length; i++) info_title[i].classList.toggle("info_3")

    if (info_title[0].classList.length == 2) { // pizdec, po drugomy nelzya?
        for (let i = 0; i < target.length; i++) target[i].style.display = "none"

        for (let i = 0; i < 4; i++) menu[i].style.display = "none"

        menu_info[0].style.display = "block"
        menu_info[1].style.display = "none"
        menu_info[2].style.display = "block"
    }
    else {
        for (let i = 0; i < target.length; i++) target[i].style.display = "block"

        for (let i = 0; i < 4; i++) menu[i].style.display = "block"

        menu_info[0].style.display = "none"
        menu_info[1].style.display = "block"
        menu_info[2].style.display = "none"
    }

    for (let i = 0; i < info.length; i++) {
        if (i == index) info[i].style.display = "block"
        else info[i].style.display = "none"
    }
}

//  Активное задание

let tasks = document.getElementsByTagName("ol")
let paragraphs = []

for (let i = 0; i < tasks.length; i++) {
    let paragraphs_all = tasks[i].getElementsByTagName("li")

    for (let j = 0; j < paragraphs_all.length; j++) {
        if (!paragraphs_all[j].classList.length || paragraphs_all[j].classList == "mark") paragraphs.push(paragraphs_all[j])
    }
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("dblclick", function () {
        for (let j = 0; j < paragraphs.length; j++) {
            if (paragraphs[j].classList.length || i == j) paragraphs[j].classList.toggle("mark")
        }
    })
}

//  Показать всю карту

function tasksRightMenuFull() {
    let full = document.getElementsByClassName("tasks_right_menu_full")[0]

    full.classList.toggle("full_3")
}

//  Показать игрока

function tasksRightMenuPlayer() {
    let player = document.getElementsByClassName("tasks_right_menu_player")[0]

    player.classList.toggle("player_3")
}

//  Увеличить карту

function tasksRightMenuPlus() {
    let plus = document.getElementsByClassName("tasks_right_menu_plus")[0]
    let minus = document.getElementsByClassName("tasks_right_menu_minus")[0]

    plus.classList.toggle("plus_3")

    if (minus.classList.length == 2) minus.classList.toggle("minus_3")
}

//  Уменьшить карту

function tasksRightMenuMinus() {
    let plus = document.getElementsByClassName("tasks_right_menu_plus")[0]
    let minus = document.getElementsByClassName("tasks_right_menu_minus")[0]

    minus.classList.toggle("minus_3")

    if (plus.classList.length == 2) plus.classList.toggle("plus_3")
}