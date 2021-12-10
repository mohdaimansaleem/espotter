//load function
function reset() {
  window.location.reload();
}

//clicked function
let userText = "ENTER A VALID ROOM NUMBER";
let token = -1;
function search() {
  
  let roomNumber = document.getElementById("search").value.toUpperCase();
  var stringNumber = roomNumber;
  roomNumber = parseInt(roomNumber);



  if (stringNumber == "3115" || stringNumber == "3116A" || stringNumber == "3116" || stringNumber == "3115B" || stringNumber == "3117" || stringNumber == "3118") {
    stringNumber = "1005";
    token = "1P";
  }//LABS

  if (stringNumber.startsWith("13")) {
    if ((roomNumber >= 13101 && roomNumber <= 13116)) {
      stringNumber = "1006"
      token = "1B";
    }
  }//BASKETBALL ROOMS

  if (stringNumber.startsWith("1")) {
    if (stringNumber.startsWith("11") && (roomNumber >= 1101 && roomNumber <= 1114)) {
      stringNumber = "1001G";
      token = "1";

    }

    if (stringNumber.startsWith("12") && (roomNumber >= 1201 && roomNumber <= 1214)) {
      stringNumber = "1001F"
      token = "1";

    }
    if (stringNumber.startsWith("13") && (roomNumber >= 1301 && roomNumber <= 1320)) {
      stringNumber = "1001S"
      token = "1";

    }

    if (stringNumber.startsWith("14") && (roomNumber >= 1401 && roomNumber <= 1415)) {
      stringNumber = "1001T"
      token = "1";

    }
  }//ECE BLOCK 


  if (stringNumber.startsWith("2")) {
    if (stringNumber.startsWith("21") && (roomNumber >= 2101 && roomNumber <= 2112)) {
      stringNumber = "2001G"
      token = "2";

    }

    if (stringNumber.startsWith("22") && (roomNumber >= 2201 && roomNumber <= 2215)) {
      stringNumber = "2001F"
      token = "2";

    }
    if (stringNumber.startsWith("23") && (roomNumber >= 2301 && roomNumber <= 2311)) {
      stringNumber = "2001S"
      token = "2";

    }

    if (stringNumber.startsWith("24") && (roomNumber >= 2401 && roomNumber <= 2414)) {
      stringNumber = "2001T"
      token = "2";

    }
  }//IT BLOCK 


  if (stringNumber.startsWith("4")) {
    if (stringNumber.startsWith("41") && ((roomNumber >= 4101 && roomNumber <= 4112)) || (roomNumber == 4122 || roomNumber == 4124 || roomNumber == 4125 || roomNumber == 4128)) {
      stringNumber = "4001G"
      token = "4";

    }

    if (stringNumber.startsWith("42") && (roomNumber >= 4201 && roomNumber <= 4215)) {
      stringNumber = "4001F"
      token = "4";

    }
    if (stringNumber.startsWith("43") && (roomNumber >= 4301 && roomNumber <= 4315)) {
      stringNumber = "4001S"
      token = "4";

    }

    if (stringNumber.startsWith("44") && (roomNumber >= 4401 && roomNumber <= 4415)) {
      stringNumber = "4001T"
      token = "4";

    }
  }//FIRST FLOOR


  if (stringNumber.startsWith("8")) {
    if (stringNumber.startsWith("81") && (roomNumber >= 8101 && roomNumber <= 8107)) {
      stringNumber = "8001G"
      token = "8";

    }

    if (stringNumber.startsWith("82") && (roomNumber >= 8201 && roomNumber <= 8207)) {
      stringNumber = "8001F"
      token = "8";

    }
    if (stringNumber.startsWith("83") && (roomNumber >= 8301 && roomNumber <= 8307)) {
      stringNumber = "8001S"
      token = "8";

    }

    if (stringNumber.startsWith("84") && (roomNumber >= 8401 && roomNumber <= 8407)) {
      stringNumber = "8001T"
      token = "8";

    }
  }//BIO TECH BLOCK


  if (stringNumber.startsWith("5")) {
    if ((roomNumber >= 5001 && roomNumber <= 5008) || (roomNumber >= 5101 && roomNumber <= 5103) || (roomNumber >= 5106 && roomNumber <= 5113)) {
      stringNumber = "5001G"
      token = "5";
    }
    if ((roomNumber >= 5201 && roomNumber <= 5211)) {
      stringNumber = "5001F"
      token = "5";
    }

  }//ADMIN BLOCK


  if (stringNumber.startsWith("9") || stringNumber.startsWith("10") || stringNumber.startsWith("11")) {

    if ((roomNumber >= 9101 && roomNumber <= 9115)) {
      stringNumber = "404N"
      token = "10";
    }

    if ((roomNumber >= 10101 && roomNumber <= 10108)) {
      stringNumber = "404N"
      token = "10";
    }
    if ((roomNumber >= 11101 && roomNumber <= 11103)) {
      stringNumber = "404N"
      token = "10";
    }

  }//LABS NEAR BASKETBALL


  if (stringNumber.startsWith("6")) {
    if ((roomNumber >= 6001 && roomNumber <= 6010)) {
      stringNumber = "600"
      token = "6";
    }


  }//THERMAL LABS


  var coordinates = {
    "1": {
      "lat": 17.455953613855996,
      "lon": 78.66597712039948,
      "type": {
        "description": {
          "1001G": "BLOCK 1\nGROUND FLOOR",
          "1001F": "BLOCK 1\nFIRST FLOOR",
          "1001S": "BLOCK 1\nSECOND FLOOR",
          "1001T": "BLOCK 1\nTHIRD FLOOR",
        }

      },
    },

    "2": {
      "lat": 17.455692627545062,
      "lon": 78.6670795083046,
      "type": {
        "description": {
          "2001G": "BLOCK 2\nGROUND FLOOR",
          "2001F": "BLOCK 2\nFIRST FLOOR",
          "2001S": "BLOCK 2\nSECOND FLOOR",
          "2001T": "BLOCK 2\nTHIRD FLOOR",
        }

      },
    },

    "4": {
      "lat": 17.455498166913493,
      "lon": 78.66765215992928,
      "type": {
        "description": {
          "4001G": "FIRST YEAR BLOCK\nGROUND FLOOR",
          "4001F": "FIRST YEAR BLOCK\nFIRST FLOOR",
          "4001S": "FIRST YEAR BLOCK\nSECOND FLOOR",
          "4001T": "FIRST YEAR BLOCK\nTHIRD FLOOR",
        }

      },
    },

    "8": {
      "lat": 17.45532673434248,
      "lon": 78.66764545440672,
      "type": {
        "description": {
          "8001G": "BIO TECH BLOCK\nGROUND FLOOR",
          "8001F": "BIO TECH BLOCK\nFIRST FLOOR",
          "8001S": "BIO TECH BLOCK\nSECOND FLOOR",
          "8001T": "BIO TECH BLOCK\nTHIRD FLOOR",
        }

      },
    },

    "1P": {
      "lat": 17.4547561441757,
      "lon": 78.66547286510468,
      "type": {
        "description": {
          "1005": "NEAR PARKING",
        }
      },
    },

    "1B": {
      "lat": 17.45716131034895,
      "lon": 78.66805851459503,
      "type": {
        "description": {
          "1006": "NEAR BASKETBALL COURT",
        }
      },
    },

    "5": {
      "lat": 17.45522182776426,
      "lon": 78.6665028333664,
      "type": {
        "description": {
          "5001G": "ADMIN BLOCK\nGROUND FLOOR",
          "5001F": "ADMIN BLOCK\nFIRST FLOOR",
        }

      },
    },

    "10": {
      "lat": 17.457647457101128,
      "lon": 78.66761326789856,
      "type": {
        "description": {
          "404N": "NEAR BASKETBALL COURT",
        }

      },
    },

    "6": {
      "lat": 17.457204807742773,
      "lon": 78.6674228310585,
      "type": {
        "description": {
          "600": "NEAR BASKETBALL COURT",
        }

      },
    },

  };



  if (token === -1) {
    modal();
  }
  else {
    var lat = coordinates[token]["lat"];
    var lon = coordinates[token]["lon"];

    document.getElementById("mainbody").style.display = "none";
    document.getElementById("mail").style.display = "none";
    document.getElementById("mapbox").style.display = "flex";
    var map = L.map('map').setView([17.454704, 78.666414], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


    L.marker([lat, lon]).addTo(map)
    userText = "DIRECTION:\n" + coordinates[token]["type"]["description"][stringNumber] + "\nROOM NUMBER: " + roomNumber;

  }

}

function modal() {

  if (token == -1) {




    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btn");
    var span = document.getElementsByClassName("close")[0];
    document.getElementById("usertext").innerText = userText;
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

}

function direct() {
  modal2();
}

function modal2() {

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("btn");
  var span = document.getElementsByClassName("close")[0];
  document.getElementById("usertext").innerText = userText;
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


