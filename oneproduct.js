/* <!-- Neha's work date 21/1/23 to be added in main--> */

let mymid=document.getElementById("mid");


    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    let forth = document.getElementById("forth");
    let fifth = document.getElementById("fifth");

let roundimg = document.getElementById("roundimg");


let Shoppingbagbtn = document.getElementById("Shoppingbagbtn")


let LSdata=JSON.parse(localStorage.getItem("current"));
if(LSdata==null){
  LSdata={};
}
LSdata.quantity=1;

// //ADD YOUR CODE HERE:
// Shoppingbagbtn.addEventListener("click",()=>{
//   //ADD YOUR CODE HERE
//   alert("ADD YOUR CODE HERE")
  
// })

// let LSdata=JSON.parse(localStorage.getItem("current"));
// if(LSdata==null){
//   LSdata={};
// }

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


// let mymid=document.getElementById("mid");
// let Shoppingbagbtn=document.getElementById("Shoppingbagbtn")

// let myfirstdiv=document.getElementById("firstdiv");
// let seconddivdiv=document.getElementById("seconddiv");
// let mythirddiv=document.getElementById("thirddiv");
// let myforthdiv=document.getElementById("forthdiv");
// let myfifthdiv=document.getElementById("fifthdiv");
// let myRoundbox=document.getElementById("Roundbox");



// let mymidimg=document.createElement("img");
// mymidimg.setAttribute("src",LSdata.image);

// mymid.innerHTML=null;
// mymid.append(mymidimg);

// myfirstdiv.innerHTML=null;
// myfirstdiv.append(mymidimg);


// seconddivdiv.innerHTML=null;
// seconddivdiv.append(mymidimg);

// mythirddiv.innerHTML=null;
// mythirddiv.append(mymidimg);

// myforthdiv.innerHTML=null;
// myforthdiv.append(mymidimg);

// myfifthdiv.innerHTML=null;
// myfifthdiv.append(mymidimg);

// myRoundbox.innerHTML=null;
// myRoundbox.append(mymidimg);

let myCartData=JSON.parse(localStorage.getItem("myCartData")) || [];

Shoppingbagbtn.addEventListener("click",function(){


    let count=0;
    for(let i=0;i<myCartData.length;i++){
      if(LSdata==myCartData[i]){
        count++;
        break;
      }
    }
    if(count==0){
      
        myCartData.push(LSdata);
        localStorage.setItem("myCartData",JSON.stringify(myCartData));
        alert("Added to Shopping Bag");
      
    }else{
        alert("Already Present in Shopping Bag");
    }
    




})





