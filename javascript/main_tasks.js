function tasksLeftMenuSwitch(index) {
    let list_menu = document.getElementById("tasks_left_menu_list").getElementsByTagName("li")
    let list = [
        document.getElementsByClassName("tasks_left_menu_active"),
        document.getElementsByClassName("tasks_left_menu_completed"),
        document.getElementsByClassName("tasks_left_menu_failed")
    ]

    for (let i = 0; i < 3; i++) {
        if (i == index) {
            list_menu[i].style.color = "#e6a000"
            list[i][0].style.display = "block"
        }
        else {
            list_menu[i].style.color = ""
            list[i][0].style.display = "none"
        }
    }

}

function tasksRightMenuFull() {
    let full = document.getElementsByClassName("tasks_right_menu_full")

    full[0].classList.toggle("full_3")
}

function tasksRightMenuPlayer() {
    let player = document.getElementsByClassName("tasks_right_menu_player")

    player[0].classList.toggle("player_3")
}

function tasksRightMenuPlus() {
    let plus = document.getElementsByClassName("tasks_right_menu_plus")
    let minus = document.getElementsByClassName("tasks_right_menu_minus")

    plus[0].classList.toggle("plus_3")

    if (minus[0].className.indexOf(" ") > 0) minus[0].classList.toggle("minus_3")
}

function tasksRightMenuMinus() {
    let plus = document.getElementsByClassName("tasks_right_menu_plus")
    let minus = document.getElementsByClassName("tasks_right_menu_minus")

    minus[0].classList.toggle("minus_3")

    if (plus[0].className.indexOf(" ") > 0) plus[0].classList.toggle("plus_3")
}