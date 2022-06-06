 
var balance=document.getElementById("balance");
var remainingbalnce=JSON.parse(localStorage.getItem("balance"))
balance.innerText=remainingbalnce
var purchase_item=JSON.parse(localStorage.getItem("purchase"));
console.log(purchase_item)
purchase(purchase_item)
function purchase(purchase_item){
    var purchased=document.getElementById("purchased_vouchers")

    purchase_item.forEach(function(ele,index) {

        var div=document.createElement("div");
        div.style.border="1px solid red";
        div.style.height="300px";
        div.style.width="250px";
        div.style.textAlign="center"
        var img=document.createElement("img");
        img.style.width="250px";
        img.style.height="60%"
        img.src=ele.image;
        var price=document.createElement("p")
        price.innerText=ele.price;
        var name= document.createElement("p")
        name.innerText=ele.name;
       div.append(img,name,price);
       purchased.append(div)

  });

  





}