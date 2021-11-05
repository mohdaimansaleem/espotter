function load() {
  window.location.reload();
}

function clicked() {
  let roomNumber = document.getElementById("search").value;
  var lat = 0;
  var lon = 0;


  if (roomNumber.startsWith("21") || roomNumber.startsWith("22") || roomNumber.startsWith("23") || roomNumber.startsWith("24")) {
    if (parseInt(roomNumber) >= 2101 && parseInt(roomNumber) <= 2112 || parseInt(roomNumber) >= 2201 && parseInt(roomNumber) <= 2215 || parseInt(roomNumber) >= 2301 && parseInt(roomNumber) <= 2311 || parseInt(roomNumber) >= 2401 && parseInt(roomNumber) <= 2414) {
      roomNumber = "1002"
    }

  }

  if (roomNumber.startsWith("11") || roomNumber.startsWith("12") || roomNumber.startsWith("13") || roomNumber.startsWith("14")) {
    if (parseInt(roomNumber) >= 1101 && parseInt(roomNumber) <= 1114 || parseInt(roomNumber) >= 1201 && parseInt(roomNumber) <= 2214 || parseInt(roomNumber) >= 1301 && parseInt(roomNumber) <=1320 || parseInt(roomNumber) >= 1401 && parseInt(roomNumber) <= 2415) {
      roomNumber = "1001"
    }

  }



  var coordinates = {
    "1001": {
      "lat": 17.455953613855996,
      "long":78.66597712039948,
    },

    "369": {
      "lat": 18.429150914812137,
      "long": 79.12709712982178,
    },
    "1002": {
      "lat": 17.455692627545062,
      "long": 78.6670795083046,

    },

    "1003": {
      "lat": 17.457140840983552,
      "long": 78.66740942001343,
    },

    "2001": {
      "lat": 17.454162523809906,
      "long": 78.6665403842926,
    },
    "2002": {
      "lat": 17.45692079516033,
      "long": 78.6670634150505,

    }
  };

  lat = coordinates[roomNumber]["lat"];
  lon = coordinates[roomNumber]['long'];

  var map = L.map('map').setView([17.454704, 78.666414], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


  L.marker([lat, lon]).addTo(map);

}






