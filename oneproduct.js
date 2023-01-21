let mymid=document.getElementById("mid");

let myfirstdiv=document.getElementById("firstdiv");
let seconddivdiv=document.getElementById("seconddiv");
let mythirddiv=document.getElementById("thirddiv");
let myforthdiv=document.getElementById("forthdiv");
let myfifthdiv=document.getElementById("fifthdiv");
let myRoundbox=document.getElementById("Roundbox");


let LSdata=JSON.parse(localStorage.getItem("current"));
if(LSdata==null){
  LSdata={};
}

let mymidimg=document.createElement("img");
mymidimg.setAttribute("src",LSdata.image);

mymid.innerHTML=null;
mymid.append(mymidimg);

myfirstdiv.innerHTML=null;
myfirstdiv.append(mymidimg);


seconddivdiv.innerHTML=null;
seconddivdiv.append(mymidimg);

mythirddiv.innerHTML=null;
mythirddiv.append(mymidimg);

myforthdiv.innerHTML=null;
myforthdiv.append(mymidimg);

myfifthdiv.innerHTML=null;
myfifthdiv.append(mymidimg);

myRoundbox.innerHTML=null;
myRoundbox.append(mymidimg);
