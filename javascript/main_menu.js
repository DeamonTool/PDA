function mainMenuNotice(index) {
    let list = document.getElementById("main_menu_list").getElementsByTagName("li")

    for (let i = 0; i < 7; i++) i == index ? list[i].style.color = "rgb(230, 160, 0)" : list[i].style.color = ""

    if (list[index].classList.length) list[index].classList.toggle("notice_active")
}