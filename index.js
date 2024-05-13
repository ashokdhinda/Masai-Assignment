let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  localStorage.setItem("user",JSON.stringify(user))
user.forEach(function(ele){
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
btn.textContent = "Add to cart"
btn.addEventListener("click",function(){
  storeDataIncart(ele)
})

 card.append(id,h4,username,email,btn)
 contanier.append(card)
})  

   let cartArr = JSON.parse(localStorage.getItem("add-cart"))|| [];
function storeDataIncart(ele){
//console.log("add-cart",ele)
cartArr.push(ele)
localStorage.setItem("add-cart",JSON.stringify(cartArr))
alert("data store in cart")
}