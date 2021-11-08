function load() {
  window.location.reload();
}

function clicked() {
 

  let roomNumber = document.getElementById("search").value.toUpperCase();
  var sNumber=roomNumber; 
  roomNumber=parseInt(roomNumber);

  if(sNumber=="3115"|| sNumber=="3116A"|| sNumber=="3116"||sNumber=="3115B"||sNumber=="3117"||sNumber=="3118"){
    sNumber="1005";
  }//labs

  if (sNumber.startsWith("11") || sNumber.startsWith("12") || sNumber.startsWith("13") || sNumber.startsWith("14")) {
    if ((roomNumber >= 1101 && roomNumber <= 1114 )|| (roomNumber >= 1201 && roomNumber <= 2214 ) || (roomNumber >= 1301 && roomNumber <=1320 )|| (roomNumber >= 1401 && roomNumber <= 1415)) {
      sNumber = "1001"
    }
    //ECE BLOCK
  }

  if (sNumber.startsWith("21") || sNumber.startsWith("22") || sNumber.startsWith("23") || sNumber.startsWith("24")) {
    if ((roomNumber >= 2101 && roomNumber <= 2112 )|| (roomNumber >= 2201 && roomNumber <= 2215 )||( roomNumber >= 2301 && roomNumber <= 2311) || (roomNumber >= 2401 && roomNumber <= 2414)) {
      sNumber = "1002"
    }
  //IT BLOCK
  }
  if (sNumber.startsWith("42") || sNumber.startsWith("43") || sNumber.startsWith("44") ) {
    if ((roomNumber >= 4201 && roomNumber <= 4215 )||( roomNumber >= 4301 && roomNumber <= 4315 )|| (roomNumber >= 4401 && roomNumber <=4415)) {
      sNumber = "1003"
    }
     //FIRST YEAR BLOCK
  }

  if (sNumber.startsWith("81") || sNumber.startsWith("82") || sNumber.startsWith("83")|| sNumber.startsWith("84")) {
    if ((roomNumber >= 8101 && roomNumber <= 8107) || (roomNumber >= 8201 && roomNumber <= 8207 )|| (roomNumber >= 8301 && roomNumber <=8307)||( roomNumber >= 8401 && roomNumber <=8407)) {
      sNumber = "1004"
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

    "1005": {
      "lat": 17.4547561441757,
      "long": 78.66547286510468,

    }

  };

  var  lat = coordinates[sNumber]["lat"];
  var  lon = coordinates[sNumber]["long"];
  
  var map = L.map('map').setView([17.454704, 78.666414], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


  L.marker([lat, lon]).addTo(map);
  

}






