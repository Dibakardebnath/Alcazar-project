let page=1;
let container=document.getElementById("location");

function display(data){
    container.innerText="";
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

const Fetch=async(page=1,limit=6)=>{
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
    // const getData5=async(page=1,limit=6)=>{
    //         try{
    //             let link=`https://alcazar-project-beckened-server.onrender.com/Frontpage?_page=${page}&_limit=${limit}&id=7&id=8&id=9&id=10&id=11&id=12`;
    //             let data= await fetch(link);
    //             data= await data.json();
    //                 onsole.log(data);
    //             display(data);
    //             }
    //         catch(err){
    //             console.log(err);
    //             }
    //         }   
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
    //previous button
   
    const previous=()=>{
        if(page===1){
        alert("No Previous Page");
        return;
        }
        let pgno=document.getElementById("page-number");
        pgno.innerText="";
        page-=1;
        pgno.innerText=page;
        Fetch(page,6);
     }
    //next button

    const next=()=>{
        if(page==4){
        alert("last page");
        return;
        }
        let pgno=document.getElementById("page-number");
        pgno.innerText="";
        page+=1;
        pgno.innerText=page;
        Fetch(page,6);
     }
     const firstbtn=()=>{
        let btn=document.getElementById("first");
        // btn.style.backgroundColor="rgb(19, 158, 212)"
        // btn.style.color="white"
        getData1();
     }
     const secondbtn=()=>{
        let btn=document.getElementById("second");
        // btn.style.backgroundColor="rgb(19, 158, 212)"
        // btn.style.color="white"
        getData1();
     }
     const thirdbtn=()=>{
        let btn=document.getElementById("third");
        // btn.style.backgroundColor="rgb(19, 158, 212)"
        // btn.style.color="white"
        getData2();
     }
     const fourbtn=()=>{
        let btn=document.getElementById("four");
        // btn.style.backgroundColor="rgb(19, 158, 212)"
        // btn.style.color="white"
        getData3();
     }
     const fivebtn=()=>{
        let btn=document.getElementById("five");
        // btn.style.backgroundColor="rgb(19, 158, 212)"
        // btn.style.color="white"
        getData4();
     }
     const sixbtn=()=>{
        let btn=document.getElementById("six");
        // btn.style.backgroundColor="rgb(19, 158, 212)"
        // btn.style.color="white"
        getData6();
     }
    document.getElementById("prev").addEventListener("click",previous);
    document.getElementById("next").addEventListener("click",next);
    document.getElementById("first").addEventListener("click",firstbtn);
    document.getElementById("second").addEventListener("click",secondbtn);
    document.getElementById("third").addEventListener("click",thirdbtn);
    document.getElementById("four").addEventListener("click",fourbtn);
    document.getElementById("five").addEventListener("click",fivebtn);
    document.getElementById("six").addEventListener("click",sixbtn);
    

    // let buttons=document.querySelectorAll(".second")
    // for (p in buttons) {
    //     buttons[p].onclick = function() {
    //         console.log('test')
    //         buttons.forEach(function(btn){
    //           btn.classList.remove('second');
    //         })
    //         this.classList.add('second');
    //     }
    // }
    
    Fetch();