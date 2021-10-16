var map = L.map('map').setView([17.454704, 78.666414], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([17.454704, 78.666414]).addTo(map);

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





