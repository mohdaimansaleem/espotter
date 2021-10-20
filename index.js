
var a=0,b=0;

function clicked() {
  let roomNumber=document.getElementById("search").value;
  
  var coordinates={
    "1001":{
      "lat":17.455249973437514,
      "long":78.6665028333664,
    },
    "1002":{
      "lat":17.45657025649771,
      "long":78.66678982973099,
      
    },
  
    "1003":{
      "lat": 17.457140840983552,
      "long":78.66740942001343,
    },
 
   "2001":{
    "lat":17.454162523809906,
    "long": 78.6665403842926,
  },
  "2002":{
    "lat":17.45692079516033,
    "long":78.6670634150505,

  }

 

 };

 a=coordinates[roomNumber]["lat"];
 b=coordinates[roomNumber]["long"];


 localStorage.setItem("lat",a);
 localStorage.setItem("long",b);

}


let c=localStorage.getItem('lat');
let d=localStorage.getItem('long');
  var map = L.map('map').setView([17.454704, 78.666414], 100);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);


   L.marker([c,d]).addTo(map)
   localStorage.clear();
