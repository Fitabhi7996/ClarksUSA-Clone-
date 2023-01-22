let myCartData=JSON.parse(localStorage.getItem("myCartData")) || [];

    let maincontainer=document.getElementById("K131");
    let Subtotal=document.getElementById("Subtotal");
    let Taxes=document.getElementById("Taxes");
    let cupon=document.querySelector("#cupon > input");
    let cuponbtn=document.querySelector("#cupon > button");
    let Numberoftimes=0;




    let totalpay;
    

    createdom(myCartData);




    function createdom(data){
        maincontainer.innerHTML=null;
      let sum=0;



      data.forEach(function(element,index){
        sum=sum+((element.quantity)*(element.price))

        let firstdiv=document.createElement("div");

        let img=document.createElement("img")
        img.setAttribute("src",element.image)

        firstdiv.append(img);

        let seconddiv=document.createElement("div");


        let secondfirstdiv=document.createElement("div"); 
          
        let mytype=document.createElement("h3");
        mytype.innerText=element.type;
        let myprice=document.createElement("h3");
        myprice.innerText=`$ ${element.price}`;

        secondfirstdiv.append(mytype,myprice)
        seconddiv.append(secondfirstdiv)

        let mymaterial=document.createElement("p");
        mymaterial.innerText=element.material;

        let description=document.createElement("p")
        description.innerHTML="Size 7, Medium";

        seconddiv.append(mymaterial,description);

        let secondseconddiv=document.createElement("div");

        

        let plusbtn=document.createElement("button");
        plusbtn.innerHTML='+';
        plusbtn.addEventListener("click",function(){
          element.quantity=element.quantity+1;
          createdom(myCartData);


        })

        let showdiv=document.createElement("div");

        let show=document.createElement("p")
        show.innerHTML=element.quantity;

        showdiv.append(show)





        let minusbtn=document.createElement("button");
        minusbtn.innerHTML='-';

        minusbtn.addEventListener("click",function(){
          
          element.quantity=element.quantity-1;
          createdom(myCartData);
          

        })

        secondseconddiv.append(plusbtn,showdiv,minusbtn)
        seconddiv.append(secondseconddiv)







        let Cancelbtn=document.createElement("button");
        Cancelbtn.innerHTML='Remove';
        Cancelbtn.addEventListener("click",function(){
          let aftercancel=myCartData.filter(function(e,i){
            if(element==e){
              return false;
            }else{
              return true;
            }
          })
          myCartData=aftercancel;
          localStorage.setItem("myCartData",JSON.stringify(myCartData));
          createdom(myCartData);



        })

        seconddiv.append(Cancelbtn)
        maincontainer.append(firstdiv,seconddiv);
       

        











      })
      totalpay
      Subtotal.innerHTML=`$ ${sum}`;
      







    }


    cuponbtn.addEventListener("click",function(){
      if(cupon.value == "Masai30" && Numberoftimes<1){
        totalpay=Math.floor(0.7*totalpay)
        Numberoftimes++;

        
      LSdata.forEach(function(element,index){
        

        let div=document.createElement("div")
        let img=document.createElement("img")
        img.setAttribute("src",element.image)
        let title=document.createElement("h2")
        title.innerHTML=element.title;
        let ingredients=document.createElement("p")
        ingredients.innerHTML=element.ingredients.join(" ");
        let description=document.createElement("p")
        description.innerHTML=element.description;
        let price=document.createElement("h3");
        price.innerHTML=`₹ ${element.price}`;

        let plusbtn=document.createElement("button");
        plusbtn.innerHTML='+';
        plusbtn.addEventListener("click",function(){
          element.qu=element.qu+1;
          createdom(LSdata);


        })

        let show=document.createElement("p")
        show.innerHTML=element.qu;



        let minusbtn=document.createElement("button");
        minusbtn.innerHTML='-';

        minusbtn.addEventListener("click",function(){
          
          element.qu=element.qu-1;
          createdom(LSdata);
          

        })






        let Cancelbtn=document.createElement("button");
        Cancelbtn.innerHTML='Cancel';
        Cancelbtn.addEventListener("click",function(){
          let aftercancel=LSdata.filter(function(e,i){
            if(element==e){
              return false;
            }else{
              return true;
            }
          })
          LSdata=aftercancel;
          localStorage.setItem("buy",JSON.stringify(LSdata));
          createdom(LSdata);



        })
       

        div.append(img,title,ingredients,description,price,plusbtn,show,minusbtn,Cancelbtn);
        menucontainer.append(div);











      })
      
      ordertotal.innerHTML=totalpay;





      }




    })




