let myCartData=JSON.parse(localStorage.getItem("myCartData")) || [];

    let maincontainer=document.getElementById("K131");
    let MyShoppingBag=document.getElementById("MyShoppingBag");
    let Subtotal=document.getElementById("Subtotal");
    let Taxes=document.getElementById("Taxes");
    let Estimatedtotal=document.getElementById("Estimatedtotal");
    let cupon=document.getElementById("cupon");
    let cuponbtn=document.getElementById("cuponbtn");
    let Numberoftimes=0;




    let totalpay;
    if(myCartData.length==0){
      MyShoppingBag.innerHTML=null;
      MyShoppingBag.innerHTML=`Your shopping bag is empty`;
    }else{
      MyShoppingBag.innerHTML=null;
      MyShoppingBag.innerHTML=`My Shopping Bag`;
    }
    

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
      Subtotal.innerHTML=null;
        Taxes.innerHTML=null;
        Estimatedtotal.innerHTML=null;
      totalpay=(sum+Math.floor(0.18*sum));

      Subtotal.innerHTML=`$ ${sum}`;
      Taxes.innerHTML=`$ ${Math.floor(0.18*sum)}`;
      Estimatedtotal.innerHTML=`$ ${totalpay}`;

      







    }


    cuponbtn.addEventListener("click",function(){
      if(cupon.value == "CLARKS20" && Numberoftimes<1){
        alert("Promo Code Applied Successfully")
        totalpay=Math.floor(0.8*totalpay)
        Numberoftimes++;
        // let sum=0;

      
        // data.forEach(function(element,index){
        //   sum=sum+((element.quantity)*(element.price))
  
        //   let firstdiv=document.createElement("div");
  
        //   let img=document.createElement("img")
        //   img.setAttribute("src",element.image)
  
        //   firstdiv.append(img);
  
        //   let seconddiv=document.createElement("div");
  
  
        //   let secondfirstdiv=document.createElement("div"); 
            
        //   let mytype=document.createElement("h3");
        //   mytype.innerText=element.type;
        //   let myprice=document.createElement("h3");
        //   myprice.innerText=`$ ${element.price}`;
  
        //   secondfirstdiv.append(mytype,myprice)
        //   seconddiv.append(secondfirstdiv)
  
        //   let mymaterial=document.createElement("p");
        //   mymaterial.innerText=element.material;
  
        //   let description=document.createElement("p")
        //   description.innerHTML="Size 7, Medium";
  
        //   seconddiv.append(mymaterial,description);
  
        //   let secondseconddiv=document.createElement("div");
  
          
  
        //   let plusbtn=document.createElement("button");
        //   plusbtn.innerHTML='+';
        //   plusbtn.addEventListener("click",function(){
        //     element.quantity=element.quantity+1;
        //     createdom(myCartData);
  
  
        //   })
  
        //   let showdiv=document.createElement("div");
  
        //   let show=document.createElement("p")
        //   show.innerHTML=element.quantity;
  
        //   showdiv.append(show)
  
  
  
  
  
        //   let minusbtn=document.createElement("button");
        //   minusbtn.innerHTML='-';
  
        //   minusbtn.addEventListener("click",function(){
            
        //     element.quantity=element.quantity-1;
        //     createdom(myCartData);
            
  
        //   })
  
        //   secondseconddiv.append(plusbtn,showdiv,minusbtn)
        //   seconddiv.append(secondseconddiv)
  
  
  
  
  
  
  
        //   let Cancelbtn=document.createElement("button");
        //   Cancelbtn.innerHTML='Remove';
        //   Cancelbtn.addEventListener("click",function(){
        //     let aftercancel=myCartData.filter(function(e,i){
        //       if(element==e){
        //         return false;
        //       }else{
        //         return true;
        //       }
        //     })
        //     myCartData=aftercancel;
        //     localStorage.setItem("myCartData",JSON.stringify(myCartData));
        //     createdom(myCartData);
  
  
  
        //   })
  
        //   seconddiv.append(Cancelbtn)
        //   maincontainer.append(firstdiv,seconddiv);
         
  
          
  
  
  
  
  
  
  
  
  
  
  
        // })
        
      //   Subtotal.innerHTML=null;
      //   Taxes.innerHTML=null;
        Estimatedtotal.innerHTML=null;
      // totalpay=(sum+Math.floor(0.18*sum))*0.8;

      // Subtotal.innerHTML=`$ ${sum}`;
      // Taxes.innerHTML=`$ ${Math.floor(0.18*sum)}`;
      Estimatedtotal.innerHTML=`$ ${totalpay}`;





      }else if (cupon.value !== "CLARKS20"){
        alert("Apply Correct Promo Code")

      }else if (Numberoftimes>=1){
        alert("Promo Code Already Redeemed")

      }else{
        alert("Apply Correct Promo Code")
      }




    })




