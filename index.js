//load function
function load() {
  window.location.reload();
}


//clicked function
let string;
function clicked() {


  let roomNumber = document.getElementById("search").value.toUpperCase();
  var sNumber = roomNumber;
  roomNumber = parseInt(roomNumber);
  let token;


  if (sNumber == "3115" || sNumber == "3116A" || sNumber == "3116" || sNumber == "3115B" || sNumber == "3117" || sNumber == "3118") {
    sNumber = "1005";
    token = "1P";
  }//LABS

  if (sNumber.startsWith("13")) {
    if ((roomNumber >= 13101 && roomNumber <= 13116)) {
      sNumber = "1006"
      token = "1B";
    }
  }//BASKETBALL ROOMS

  if (sNumber.startsWith("1")) {
    if (sNumber.startsWith("11") && (roomNumber >= 1101 && roomNumber <= 1114)) {
      sNumber = "1001G";
      token = "1";

    }

    if (sNumber.startsWith("12") && (roomNumber >= 1201 && roomNumber <= 1214)) {
      sNumber = "1001F"
      token = "1";

    }
    if (sNumber.startsWith("13") && (roomNumber >= 1301 && roomNumber <= 1320)) {
      sNumber = "1001S"
      token = "1";

    }

    if (sNumber.startsWith("14") && (roomNumber >= 1401 && roomNumber <= 1415)) {
      sNumber = "1001T"
      token = "1";

    }
  }//ECE BLOCK 


  if (sNumber.startsWith("2")) {
    if (sNumber.startsWith("21") && (roomNumber >= 2101 && roomNumber <= 2112)) {
      sNumber = "2001G"
      token = "2";

    }

    if (sNumber.startsWith("22") && (roomNumber >= 2201 && roomNumber <= 2215)) {
      sNumber = "2001F"
      token = "2";

    }
    if (sNumber.startsWith("23") && (roomNumber >= 2301 && roomNumber <= 3211)) {
      sNumber = "2001S"
      token = "2";

    }

    if (sNumber.startsWith("24") && (roomNumber >= 2401 && roomNumber <= 2414)) {
      sNumber = "2001T"
      token = "2";

    }
  }//IT BLOCK 


  if (sNumber.startsWith("4")) {
    if (sNumber.startsWith("41") && ((roomNumber >= 4101 && roomNumber <= 4112)) || (roomNumber == 4122 || roomNumber == 4124 || roomNumber == 4125 || roomNumber == 4128)) {
      sNumber = "4001G"
      token = "4";

    }

    if (sNumber.startsWith("42") && (roomNumber >= 4201 && roomNumber <= 4215)) {
      sNumber = "4001F"
      token = "4";

    }
    if (sNumber.startsWith("43") && (roomNumber >= 4301 && roomNumber <= 4215)) {
      sNumber = "4001S"
      token = "4";

    }

    if (sNumber.startsWith("44") && (roomNumber >= 4401 && roomNumber <= 4415)) {
      sNumber = "4001T"
      token = "4";

    }
  }//FIRST FLOOR


  if (sNumber.startsWith("8")) {
    if (sNumber.startsWith("81") && (roomNumber >= 8101 && roomNumber <= 8107)) {
      sNumber = "8001G"
      token = "8";

    }

    if (sNumber.startsWith("82") && (roomNumber >= 8201 && roomNumber <= 8207)) {
      sNumber = "8001F"
      token = "8";

    }
    if (sNumber.startsWith("83") && (roomNumber >= 8301 && roomNumber <= 8307)) {
      sNumber = "8001S"
      token = "8";

    }

    if (sNumber.startsWith("84") && (roomNumber >= 8401 && roomNumber <= 8407)) {
      sNumber = "8001T"
      token = "8";

    }
  }//BIO TECH BLOCK


  if (sNumber.startsWith("5")) {
    if ((roomNumber >= 5001 && roomNumber <= 5008) || (roomNumber >= 5101 && roomNumber <= 5103) || (roomNumber >= 5106 && roomNumber <= 5113)) {
      sNumber = "5001G"
      token = "5";
    }
    if ((roomNumber >= 5201 && roomNumber <= 5211)) {
      sNumber = "5001F"
      token = "5";
    }

  }//ADMIN BLOCK



  var coordinates = {
    "1": {
      "lat": 17.455953613855996,
      "long": 78.66597712039948,
      "type": {
        "description": {
          "1001G": "SNIST BLOCK 1\nGROUND FLOOR",
          "1001F": "SNIST BLOCK 1\nFIRST FLOOR",
          "1001S": "SNIST BLOCK 1\nSECOND FLOOR",
          "1001T": "SNIST BLOCK 1\nTHIRD FLOOR",
        }

      },
    },

    "2": {
      "lat": 17.455692627545062,
      "long": 78.6670795083046,
      "type": {
        "description": {
          "2001G": "SNIST BLOCK 2\nGROUND FLOOR",
          "2001F": "SNIST BLOCK 2\nFIRST FLOOR",
          "2001S": "SNIST BLOCK 2\nSECOND FLOOR",
          "2001T": "SNIST BLOCK 2\nTHIRD FLOOR",
        }

      },
    },

    "4": {
      "lat": 17.455498166913493,
      "long": 78.66765215992928,
      "type": {
        "description": {
          "4001G": "SNIST FIRST YEAR BLOCK\nGROUND FLOOR",
          "4001F": "SNIST FIRST YEAR BLOCK\nFIRST FLOOR",
          "4001S": "SNIST FIRST YEAR BLOCK\nSECOND FLOOR",
          "4001T": "SNIST FIRST YEAR BLOCK\nTHIRD FLOOR",
        }

      },
    },

    "8": {
      "lat": 17.45532673434248,
      "long": 78.66764545440672,
      "type": {
        "description": {
          "8001G": "SNIST BIO TECH BLOCK\nGROUND FLOOR",
          "8001F": "SNIST BIO TECH BLOCK\nFIRST FLOOR",
          "8001S": "SNIST BIO TECH BLOCK\nSECOND FLOOR",
          "8001T": "SNIST BIO TECH BLOCK\nTHIRD FLOOR",
        }

      },
    },

    "1P": {
      "lat": 17.4547561441757,
      "long": 78.66547286510468,
      "type": {
        "description": {
          "1005": "NEAR SNIST PARKING",
        }
      },
    },

    "1B": {
      "lat": 17.45716131034895,
      "long": 78.66805851459503,
      "type": {
        "description": {
          "1006": "NEAR BASKET BALL COURT",
        }
      },
    },

    "5": {
      "lat": 17.45522182776426,
      "long": 78.6665028333664,
      "type": {
        "description": {
          "5001G": "SNIST ADMIN BLOCK\nGROUND FLOOR",
          "5001F": "SNIST ADMIN BLOCK\nFIRST FLOOR",
        }

      },
    },


  };

  var lat = coordinates[token]["lat"];
  var lon = coordinates[token]["long"];

  var map = L.map('map').setView([17.454704, 78.666414], 18);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

  L.marker([lat, lon]).addTo(map)
  string = "DIRECTION:\n" + coordinates[token]["type"]["description"][sNumber] + "\nROOM NUMBER:" + roomNumber + "\nPRESS OK TO VIEW MAP";

}

//direction function
function direct() {
  alert(string);
}




