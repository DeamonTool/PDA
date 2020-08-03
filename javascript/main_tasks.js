function tasksLeftMenuSwitch(index) {
    let list_menu = document.getElementById("tasks_left_menu_list").getElementsByTagName("li")
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

function tasksLeftMenuInfo(index) {
    let info = document.getElementsByClassName("task_title_info")

    for (let i = 0; i < info.length; i++) info[i].classList.toggle("info_3")
}

function tasksRightMenuFull() {
    let full = document.getElementsByClassName("tasks_right_menu_full")[0]

    full.classList.toggle("full_3")
}

function tasksRightMenuPlayer() {
    let player = document.getElementsByClassName("tasks_right_menu_player")[0]

    player.classList.toggle("player_3")
}

function tasksRightMenuPlus() {
    let plus = document.getElementsByClassName("tasks_right_menu_plus")[0]
    let minus = document.getElementsByClassName("tasks_right_menu_minus")[0]

    plus.classList.toggle("plus_3")

    if (minus.classList.length == 2) minus.classList.toggle("minus_3")
}

function tasksRightMenuMinus() {
    let plus = document.getElementsByClassName("tasks_right_menu_plus")[0]
    let minus = document.getElementsByClassName("tasks_right_menu_minus")[0]

    minus.classList.toggle("minus_3")

    if (plus.classList.length == 2) plus.classList.toggle("plus_3")
}