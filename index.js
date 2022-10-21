
const cards =  document.querySelector('.card');
//let ul = document.createElement('ul');
//let li = document.createElement('li')
//cards.append(div);

// function toggle(){
// li.classList.toggle("changemsg") 
// document.getElementsByClassName("changemsg").innertext = `${eachSvc.description} `
// }

function showCards(services){
    for (let eachSvc of services){
        let div = document.createElement('div');
        div.className = "changemsg";
        div.addEventListener("mouseover",(e)=>{
            e.target.classList.toggle("changemsg") 
            document.getElementsByClassName("changemsg").innertext = `${eachSvc.description} `
        })
        div.innerHTML = `<span>${eachSvc.name} </span> 
                        <img src=${eachSvc.image_url}
                        width = "250px", 
                        height = "250px">
                        `
        //ul.append(li)
        cards.append(div);
        
    }
}


document.addEventListener('DOMContentLoaded',
fetch("http://localhost:3000/services")
.then((response) => response.json())
.then((services)=> showCards(services))
)