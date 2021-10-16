function clicked() {
    let room = document.getElementById("search").value;

    document.getElementById("modal").style.display = "flex";
    document.getElementById("main").style.display = "none";

    if (document.getElementById("search").value == "") {
        document.getElementById("h3").innerText = "ENTER A ROOM NUMBER..."
        return;
    }



    if (room.length >= 4) {
        document.getElementById("h3").innerText = "\n yesss"
    }

    else {
        document.getElementById("h3").innerText = room;
    }
}

function unclicked() {


    document.getElementById("modal").style.display = "none";
    document.getElementById("main").style.display = "flex";

}
