
const cards =  document.querySelector('.card');


function showMsg(services){
    for (let eachSvc of services){
        let div = document.createElement('div');
        div.className = "cells","changemsg";
        div.innerHTML = `<span>${eachSvc.name} </span> 
                        <img src=${eachSvc.image_url}>
                        <style> img{
                            width : 300px; 
                            height :300px;
                            border: 0.5px #ebb987 solid;
                        }</style>`  
        
        div.addEventListener("mouseover",(e)=>{
            e.target.classList.toggle("changemsg") 
            div.innerHTML = `<span class= "secondmessage"> ${eachSvc.description} </span>
                            <style> img {display : block};  </style> `;  
         })
         div.addEventListener("mouseout",()=>{
            div.innerHTML = `<span>${eachSvc.name} </span> 
                        <img src=${eachSvc.image_url}>
                        <style> img{
                            width : 300px; 
                            height :300px;
                            border: 0.5px #ebb987 solid;
                        }</style>`      
         })
        cards.append(div);
        
    }
}
document.getElementById("main-container")



document.addEventListener('DOMContentLoaded',
fetch("http://localhost:3000/services")
.then((response) => response.json())
.then((services)=> showMsg(services))
)