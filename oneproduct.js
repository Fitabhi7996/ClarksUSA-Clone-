/* <!-- Neha's work date 21/1/23 to be added in main--> */

let mymid=document.getElementById("mid");


    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    let forth = document.getElementById("forth");
    let fifth = document.getElementById("fifth");

let roundimg = document.getElementById("roundimg");


let Shoppingbagbtn = document.getElementById("Shoppingbagbtn")

//ADD YOUR CODE HERE:
Shoppingbagbtn.addEventListener("click",()=>{
  //ADD YOUR CODE HERE
  alert("ADD YOUR CODE HERE")
  
})

let LSdata=JSON.parse(localStorage.getItem("current"));
if(LSdata==null){
  LSdata={};
}

let mymidimg=document.createElement("img");
mymidimg.setAttribute("src",LSdata.image);

mymid.innerHTML=null;
mymid.append(mymidimg);

// 

// myRoundbox.innerHTML=null;
// myRoundbox.append(mymidimg);
roundimg.innerHTML=null;
roundimg.setAttribute("src",LSdata.image)

first.innerHTML=null;
first.setAttribute("src",LSdata.image)

second.innerHTML=null;
second.setAttribute("src",LSdata.image)

third.innerHTML=null;
third.setAttribute("src",LSdata.image)

forth.innerHTML=null;
forth.setAttribute("src",LSdata.image)

fifth.innerHTML=null;
fifth.setAttribute("src",LSdata.image)

 /* <!-- Neha's work date 21/1/23 to be added in main--> */