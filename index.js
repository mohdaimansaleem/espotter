function load() {
  window.location.reload();
}

function clicked() {
 

  let roomNumber = document.getElementById("search").value;
  var lat = 0;
  var lon = 0;


 

  if (roomNumber.startsWith("11") || roomNumber.startsWith("12") || roomNumber.startsWith("13") || roomNumber.startsWith("14")) {
    if (parseInt(roomNumber) >= 1101 && parseInt(roomNumber) <= 1114 || parseInt(roomNumber) >= 1201 && parseInt(roomNumber) <= 2214 || parseInt(roomNumber) >= 1301 && parseInt(roomNumber) <=1320 || parseInt(roomNumber) >= 1401 && parseInt(roomNumber) <= 1415) {
      roomNumber = "1001"
    }
    //ECE BLOCK
  }

  if (roomNumber.startsWith("21") || roomNumber.startsWith("22") || roomNumber.startsWith("23") || roomNumber.startsWith("24")) {
    if (parseInt(roomNumber) >= 2101 && parseInt(roomNumber) <= 2112 || parseInt(roomNumber) >= 2201 && parseInt(roomNumber) <= 2215 || parseInt(roomNumber) >= 2301 && parseInt(roomNumber) <= 2311 || parseInt(roomNumber) >= 2401 && parseInt(roomNumber) <= 2414) {
      roomNumber = "1002"
    }
  //IT BLOCK
  }
  if (roomNumber.startsWith("42") || roomNumber.startsWith("43") || roomNumber.startsWith("44") ) {
    if (parseInt(roomNumber) >= 4201 && parseInt(roomNumber) <= 4215 || parseInt(roomNumber) >= 4301 && parseInt(roomNumber) <= 4315 || parseInt(roomNumber) >= 4401 && parseInt(roomNumber) <=4415) {
      roomNumber = "1003"
    }
     //FIRST YEAR BLOCK
  }

  if (roomNumber.startsWith("81") || roomNumber.startsWith("82") || roomNumber.startsWith("83")|| roomNumber.startsWith("84")) {
    if (parseInt(roomNumber) >= 8101 && parseInt(roomNumber) <= 8107 || parseInt(roomNumber) >= 8201 && parseInt(roomNumber) <= 8207 || parseInt(roomNumber) >= 8301 && parseInt(roomNumber) <=8307|| parseInt(roomNumber) >= 8401 && parseInt(roomNumber) <=8407) {
      roomNumber = "1004"
    }
  // BIOTECH BLOCK
  }



  var coordinates = {
    "1001": {
      "lat": 17.455953613855996,
      "long":78.66597712039948,
    },

    "1003": {
      "lat":  17.455498166913493,
      "long":   78.66765215992928,
    },
    "1002": {
      "lat": 17.455692627545062,
      "long": 78.6670795083046,

    },
    "1004": {
      "lat": 17.45532673434248,
      "long": 78.66764545440672,

    },

  };

  lat = coordinates[roomNumber]["lat"];
  lon = coordinates[roomNumber]["long"];

  var map = L.map('map').setView([17.454704, 78.666414], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


  L.marker([lat, lon]).addTo(map);
  

}






