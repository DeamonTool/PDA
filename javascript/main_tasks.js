function barLeftMenuSwitch(index) {
    let list = document.getElementById("bar_left_menu_list").getElementsByTagName("li")

    for (let i = 0; i < 3; i++) i == index ? list[i].style.color = "rgb(230, 160, 0)" : list[i].style.color = ""
}