let addcart= JSON.parse(localStorage.getItem("add-cart"))
//console.log(addcart)

addcart.forEach(function(ele){
    let contanier = document.getElementById("contanier")
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

      remove(ele)
    })
   
    
     card.append(id,h4,username,email,btn)
     contanier.append(card)
    
    })  
    let removeArr = localStorage.removeItem("remove-cart")|| [];
  
function remove(ele){
//console.log("",ele)
removeArr.pop(ele)
localStorage.setItem("remove-cart",JSON.stringify(removeArr))
alert("data remove in cart")
}
