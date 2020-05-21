function correct_format(value) {
    if (value < 10) value = '0' + value;

    return value;
}

function date_time() {
    let current_date_time = new Date();
    let day = correct_format(current_date_time.getDate());
    let month = correct_format(current_date_time.getMonth() + 1);
    let year = current_date_time.getFullYear();
    let hours = correct_format(current_date_time.getHours());
    let minutes = correct_format(current_date_time.getMinutes());
    //let seconds = correct_format(current_date_time.getSeconds());

    return `${hours}:${minutes} ${day}/${month}/${year}`
}

setInterval(() => { document.getElementById("data_time").innerHTML = date_time(); }, 1000);