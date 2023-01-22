let mycontainer=document.getElementById("K722");
let myfilterKS1=document.getElementById("KS1");
let myfilterKS711=document.getElementById("KS711");
let myfilterKS712=document.getElementById("KS712");
let Forfilter=[];
 
    let myheading=document.getElementById("count");
    let count=0;
 
    let LSdata=JSON.parse(localStorage.getItem("current"));
    if(LSdata==null){
      LSdata={};
    }


    myfilterKS1.addEventListener("change",function(){
        if(myfilterKS1.value=="ascending"){
            let afterfilter= Forfilter.sort((a, b) => {
                const nameA = a.type.toUpperCase();
                const nameB = b.type.toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                
                return 0;
              });
              createDOM(afterfilter);


        }
        if(myfilterKS1.value=="descending"){
            let afterfilter=Forfilter.sort((a, b) => {
                const nameA = a.type.toUpperCase();
                const nameB = b.type.toUpperCase(); 
                if (nameA < nameB) {
                  return 1;
                }
                if (nameA > nameB) {
                  return -1;
                }
              
                
                return 0;
              });
              createDOM(afterfilter);


        }





    })


    myfilterKS712.addEventListener("change",function(){
      
      if(myfilterKS712.value=="0-100"){
        let myfiltered=Forfilter.filter(function(element,index){
          if(element.price >=0 && element.price<100){
            return true;
          }else{
            return false;
          }
          
        })
        createDOM(myfiltered);
        
      }
      if(myfilterKS712.value=="100-200"){
        let myfiltered=Forfilter.filter(function(element,index){
          if(element.price >=100 && element.price<200){
            return true;
          }else{
            return false;
          }
          
        })
        createDOM(myfiltered);
        
      }

      if(myfilterKS712.value==""){
        createDOM(Forfilter);
      }
    })
    
    myfilterKS711.addEventListener("change",function(){
      let myfiltered=Forfilter.filter(function(element,index){
        if(element.material==myfilterKS711.value){
          return true;
        }else{
          return false;
        }
      })
      createDOM(myfiltered);
      if(myfilterKS711.value==""){
        createDOM(Forfilter);
      }
    })





    let request=fetch("https://embarrassed-bull-moccasins.cyclic.app/bestsellers");
    request.then(function(res){
      let reqdata=res.json();
      console.log(reqdata)
      return reqdata;

    })
    .then(function(res){
      
      console.log(res);
      Forfilter=res;
      createDOM(res);

    })
    .catch(function(rej){
      console.log(rej);
    })

 


    function createDOM(data){
        mycontainer.innerHTML=null;

      data.forEach(function(element,index){
        let div=document.createElement("div");

        let myimg=document.createElement("img");
        myimg.setAttribute("src",element.image);

        let mytype=document.createElement("h3");
        mytype.innerText=element.type;

        let mydesc=document.createElement("p");
        mydesc.innerText=element.description;

        let mymaterial=document.createElement("p");
        mymaterial.innerText=element.material;


        let priceandcartdiv=document.createElement("div");





        let myprice=document.createElement("h3");
        myprice.innerText=`$ ${element.price}`;

       let myanchortag=document.createElement("a");
       myanchortag.setAttribute("href","./oneproduct.html")

        
        let myaddtocartbtn=document.createElement("button");
        myaddtocartbtn.innerText="Add to Cart";
        myaddtocartbtn.addEventListener("click",function(){

            LSdata=element;
            
            



          

          localStorage.setItem("current",JSON.stringify(LSdata));

        })
        myanchortag.append(myaddtocartbtn)
        priceandcartdiv.append(myprice,myanchortag)






        div.append(myimg,mytype,mydesc,mymaterial,priceandcartdiv);


        mycontainer.append(div);


      })
      count=data.length;
      myheading.innerHTML=count;



      


    }