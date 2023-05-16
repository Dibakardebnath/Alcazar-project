const Fetch=async()=>{
try{
    let res= await fetch('http://localhost:3000/Frontpage')
    let data= await res.json();
    console.log(data);
    display(data);
}
catch(err){
    console.log(err);
}
}
Fetch();

function display(data){
    data.forEach((elem,i)=>{
        let div=document.createElement("div");

        var image=document.createElement("img");
        image.setAttribute("src",elem.url);
        image.id="image";
        
        var innerdiv=document.createElement("div");
        innerdiv.id="innerdiv";

        var name=document.createElement("h3");
        name.textContent=elem.name;

        var price=document.createElement("h3");
        price.textContent=elem.cost;

        innerdiv.append(name,price);

        var desc=document.createElement("p");
        desc.textContent=elem.description;
        desc.id="desc"

        div.append(image,innerdiv,desc);
        document.getElementById("location").append(div);
    })
}