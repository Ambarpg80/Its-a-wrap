/* ===================================== CARDS DISPLAY  ======================================== */
const cards =  document.querySelector('.card');

function showMsg(services){
    for (let eachSvc of services){
        let div = document.createElement('div');
        div.className = "cells","changemsg";
        div.innerHTML = `<span>${eachSvc.occasion} </span> 
                        <img src=${eachSvc.image_url}>
                        <style> .card img{
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
            div.innerHTML = `<span>${eachSvc.occasion} </span> 
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

/* ===================================== HIDE & SHOW AT BOTTOM  ======================================== */
    
const last = document.getElementById("last-container");
const inDiv= document.createElement('div');
inDiv.className = "hidden";
last.append(inDiv);
last.addEventListener("click", ()=>{
    //const inDiv= document.createElement('div');
    inDiv.innerHTML = `<style> .hidden{
                                background: rgb(245 245 245 / 25%);
                                 color: #443d29; 
                                font-size: 30px;
                                padding: 5px;}</style>
                        <p>Wrapping Paper: $5.00 <br>
                            Boxes & Bags<br>
                            X-Small: $5.00 <br>
                            Small: $7.00 <br>
                            Medium: $10.00 <br>
                            Large : $15.00 <br>
                            Accessories : $5.00 <br>`
    //last.append(inDiv);
    if (inDiv.style.display === "none") {
        inDiv.style.display = "block";
    } else {
        inDiv.style.display = "none";
    }

})

/* ===================================== footer ======================================== */
const form = document.querySelector('form')
let   names = document.getElementById('name-box')
let comment = document.getElementById('text-box')

function submitComment(name, comment){
    fetch(`http://localhost:3000/comments`, {
        method : "POST",
        headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({"name": name ,
                              "comment" :  comment
                            })
    })
    const li = document.createElement('li')
    li.innerHTML = `${name}  : ${comment}`;
    document.getElementById('comments').append(li)
}
function submittedComments(comments){
    for (let comment of comments){
    const li = document.createElement('li')
    li.innerHTML = `${names}  : ${comment}`;
    document.getElementById('comments').append(li)
    }
}


form.addEventListener("submit", (e)=>{
    e.preventDefault(),
    submitComment(names.value, comment.value)
})

document.addEventListener('DOMContentLoaded',
fetch("http://localhost:3000/services","http://localhost:3000/comments")
.then((response) => response.json())
.then((services)=> {showMsg(services); 
        submittedComments(comments);
    })
)