let page=1;
let container=document.getElementById("location");

function display(data){
    container.innerText="";
    data.forEach((elem,i)=>{
        let div=document.createElement("div");

        var image=document.createElement("img");
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
        let link=`http://localhost:3000/Frontpage?_page=${page}&_limit=${limit}`;
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
    document.getElementById("prev").addEventListener("click",previous);
    document.getElementById("next").addEventListener("click",next);

    Fetch();
    