function tasksLeftMenuSwitch(index) {
    let list_menu = document.getElementById("tasks_left_menu_list").getElementsByTagName("li")
    let list = [
        document.getElementsByClassName("tasks_left_menu_active"),
        document.getElementsByClassName("tasks_left_menu_completed"),
        document.getElementsByClassName("tasks_left_menu_failed")
    ]

    for (let i = 0; i < 3; i++) {
        if (i == index) {
            list_menu[i].style.color = "rgb(230, 160, 0)"
            list[i][0].style.display = "block"
        }
        else {
            list_menu[i].style.color = ""
            list[i][0].style.display = "none"
        }
    }

}