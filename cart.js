let contanier = document.getElementById("contanier");
let addcart = JSON.parse(localStorage.getItem("add-cart")) ||[]
console.log(addcart)
contanier.innerHTML="";
addcart.map(function(ele,i){
    console.log(ele)
  
    let card = document.createElement("div")
     
    let id = document.createElement("h3")
    id.textContent = ele.id 
    let h4 = document.createElement("h4")
     h4.textContent = ele.name
    let username = document.createElement("p")
    username.textContent = ele.username
    let email = document.createElement("p")
    email.textContent= ele.email
    let btn = document.createElement("button")
    btn.textContent = "Remove"
    btn.addEventListener("click",function(){

      remove(ele,i)  //if u clicm on 3rd user, its  index => 2
    })
   
    
     card.append(id,h4,username,email,btn)
     console.log(card)
     contanier.append(card)
    
    })  
    //let removeArr = localStorage.removeItem("remove-cart")|| [];
  
function remove(ele,i){
//console.log("",ele)
let addcart= JSON.parse(localStorage.getItem("add-cart"))
console.log(addcart)
let fillterdData = addcart.filter((el,index)=>{
  // i am returning the all the elements execpt clicked index (i) (i =2)
  return i != index
})

localStorage.setItem("add-cart",JSON.stringify(fillterdData));
console.log(fillterdData)
alert("data remove in cart")
window.location.reload()

}
