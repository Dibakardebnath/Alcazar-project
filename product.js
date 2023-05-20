import {nav,footer}from "./component/nav.js";
document.querySelector("nav").innerHTML=nav()
document.querySelector("footer").innerHTML=footer()

var customer=JSON.parse(localStorage.getItem("accounts"))||[]

displayCustomer(customer)
function displayCustomer(customer){
    customer.map(function(ele){
         
        document.getElementById("customerName").innerText=ele.firstName;

    })
}



let container=document.getElementById("location");

function display(data){
  
    container.innerHTML="";
    data.forEach((elem,i)=>{
        let div=document.createElement("div");

        var image=document.createElement("img");
        image.setAttribute("id","img")
        image.setAttribute("src",elem.url);
        image.id="image";
        image.addEventListener("click",function(){
            addfun(elem);
        })
        
        var innerdiv=document.createElement("div");
        innerdiv.id="innerdiv";

        var name=document.createElement("h3");
        name.textContent=elem.name;

        var price=document.createElement("h3");
        price.textContent="₹"+elem.cost+" Night";

        innerdiv.append(name,price);

        var desc=document.createElement("p");
        desc.textContent=elem.description;
        desc.id="desc";

        div.append(image,innerdiv,desc);
        container.append(div);
    })
}
function addfun(elem){
    localStorage.setItem("id",JSON.stringify(elem));
}

const Fetch=async(page,limit=6)=>{
    try{
        let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?_page=${page}&_limit=${limit}`;
        let data= await fetch(link);
        data= await data.json();
        console.log(data);
        display(data);
    }
    catch(err){
        console.log(err);
    }
    }
    const getData1=async(page=1,limit=6)=>{
        try{
            let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?_page=${page}&_limit=${limit}&id=7&id=8&id=9&id=10&id=11&id=12`;
            let data= await fetch(link);
            data= await data.json();
            console.log(data);
            display(data);
        }
        catch(err){
            console.log(err);
        }
        }
        const getData2=async(page=1,limit=6)=>{
            try{
                let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?_page=${page}&_limit=${limit}&id=1&id=2&id=3&id=4&id=5&id=6`;
                let data= await fetch(link);
                data= await data.json();
                console.log(data);
                display(data);
            }
            catch(err){
                console.log(err);
            }
            }
        const getData3=async(page=1,limit=6)=>{
            try{
                let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?_page=${page}&_limit=${limit}&id=13&id=14&id=15&id=16&id=17&id=18`;
                let data= await fetch(link);
                data= await data.json();
                console.log(data);
                display(data);
                }
            catch(err){
                console.log(err);
                }
                }
        const getData4=async(page=1,limit=6)=>{
            try{
                let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?_page=${page}&_limit=${limit}&id=19&id=20&id=219&id=22&id=23&id=24`;
                let data= await fetch(link);
                data= await data.json();
                console.log(data);
                display(data);
                }
            catch(err){
                console.log(err);
                }
            }     
     
        const getData6=async(page=1,limit=6)=>{
            try{
                let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?_page=${page}&_limit=${limit}&id=8&id=12&id=13&id=4&id=15&id=6`;
                let data= await fetch(link);
                data= await data.json();
                console.log(data);
                display(data);
                }
            catch(err){
                console.log(err);
                }
            }     


            const searchdata=async(Country)=>{
               
                try{
                   let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?Country=${Country}`;
                   let data= await fetch(link);
                   data= await data.json();
                   console.log(data);
                   display(data);
                   }
               catch(err){
                   console.log(err);
                   }
           }
    //previous button
    let page=0;
   
    const previous=()=>{
        page-=1;
        if(page===0){
            alert("No Previous Page");
            return;
            }
       
        
      
          
        console.log(page)
        document.getElementById("page-number1").style.backgroundColor=""
        document.getElementById("page-number2").style.backgroundColor=""
        document.getElementById("page-number3").style.backgroundColor=""
        document.getElementById("page-number4").style.backgroundColor=""
        document.getElementById("page-number5").style.backgroundColor=""

        var pgno1=document.getElementById("page-number1");
        var pgno2=document.getElementById("page-number2");
        var pgno3=document.getElementById("page-number3");
        var pgno4=document.getElementById("page-number4");
        var pgno5=document.getElementById("page-number5");
    
        if(page==1){
            pgno1.style.backgroundColor="rgb(19, 158, 212)"
        }
        if(page==2){
            pgno2.style.backgroundColor="rgb(19, 158, 212)"
        }
        if(page==3){
            pgno3.style.backgroundColor="rgb(19, 158, 212)"
        }
        if(page==4){
            pgno4.style.backgroundColor="rgb(19, 158, 212)"
        }
        if(page==5){
            pgno5.style.backgroundColor="rgb(19, 158, 212)"
        }




        Fetch(page,6);
     }
    //next button

    const next=()=>{
        page+=1;
        if(page==5){
            alert("last page");
            return;
            }
        console.log(page)
        document.getElementById("page-number1").style.backgroundColor=""
        document.getElementById("page-number2").style.backgroundColor=""
        document.getElementById("page-number3").style.backgroundColor=""
        document.getElementById("page-number4").style.backgroundColor=""
        // document.getElementById("page-number5").style.backgroundColor=""
       
       
        var pgno1=document.getElementById("page-number1");
        var pgno2=document.getElementById("page-number2");
        var pgno3=document.getElementById("page-number3");
        var pgno4=document.getElementById("page-number4");
        // var pgno5=document.getElementById("page-number5");
    
        if(page==1){
            pgno1.style.backgroundColor="rgb(19, 158, 212)"
        }
        if(page==2){
            pgno2.style.backgroundColor="rgb(19, 158, 212)"
        }
        if(page==3){
            pgno3.style.backgroundColor="rgb(19, 158, 212)"
        }
        if(page==4){
            pgno4.style.backgroundColor="rgb(19, 158, 212)"
        }
        // if(page==5){
        //     pgno5.style.backgroundColor="rgb(19, 158, 212)"
        // }
        
      
        
       
        // pgno.innerText=page;
        Fetch(page,6);
     }
     const firstbtn=()=>{
        let btn=document.getElementById("first");
       
        getData1();
     }
     const secondbtn=()=>{
        let btn=document.getElementById("second");
       
        getData1();
     }
     const thirdbtn=()=>{
        let btn=document.getElementById("third");
       
        getData2();
     }
     const fourbtn=()=>{
        let btn=document.getElementById("four");
       
        getData3();
     }
     const fivebtn=()=>{
        let btn=document.getElementById("five");
       
        getData4();
     }
     const sixbtn=()=>{
        let btn=document.getElementById("six");
        
        getData6();
     }

     const searchfun=(event)=>{
        event.preventDefault()
        console.log("yes")
        let searchData=document.getElementById("input").value;
        console.log(searchData)
        localStorage.setItem("value",JSON.stringify(searchData))
        
        let ans=JSON.parse(localStorage.getItem("id"))
        console.log(ans)
        searchdata(searchData)
        
     }

    document.getElementById("prev").addEventListener("click",previous);
    document.getElementById("next").addEventListener("click",next);
    document.getElementById("first").addEventListener("click",firstbtn);
    document.getElementById("second").addEventListener("click",secondbtn);
    document.getElementById("third").addEventListener("click",thirdbtn);
    document.getElementById("four").addEventListener("click",fourbtn);
    document.getElementById("five").addEventListener("click",fivebtn);
    document.getElementById("six").addEventListener("click",sixbtn);

    document.getElementById("search-btn").addEventListener("click",searchfun);

   
    
    Fetch();