function clicked() {
    let room = 0;
    room += parseInt(document.getElementById("search").value);

    console.log(room)
    document.getElementById("modal").style.display = "flex";
    document.getElementById("main").style.display = "none";
    if (room) {
        document.getElementById("h3").innerText += "\n yesss"
    }

    else {
        document.getElementById("h3").innerText += "\n nooooo"
    }
}
