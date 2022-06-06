// let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`

 
var url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
var purchasebox=[];
var balance= document.getElementById("wallet_balance");
var users= JSON.parse(localStorage.getItem("user"));
  users.forEach(function(ele,index){
   balance.innerText=ele.Amount


  })
async function data(){
  
 try{   let res = await fetch(url);


   let voucherlist = await res.json();
   console.log(voucherlist[0])
 appenddata(voucherlist[0].vouchers)
 }catch(err){
     console.log(err)
 }

   
 


}
data()
function appenddata(voucher){
    var voucher_list=document.getElementById("voucher_list")

   voucher.forEach(function(ele) {
       var div=document.createElement("div");
       div.style.border="1px solid red";
       div.style.height="300px";
       div.style.width="250px";
       div.style.textAlign="center"
       var img=document.createElement("img");
       img.style.width="300px";
       img.style.height="60%"
       img.src=ele.image;
       var price=document.createElement("p")
       price.innerText=ele.price;
       var name= document.createElement("p")
       name.innerText=ele.name;
       var btn=document.createElement("button");
       btn.setAttribute("class","buy_voucher")
       btn.innerText="Buy";
       btn.addEventListener("click",function(){
           if(ele.price<balance.innerText)
           {
            passs(ele,index)
            alert("Hurray! purchase successful")
            balance.innerText=Number(balance.innerText)-Number(ele.price)
            localStorage.setItem("balance",balance.innerText)
           }
           else{
               alert("Sorry! insufficient balance")
           }
       })
       
       div.append(img,price,name,btn)

       voucher_list.append(div)
       
   }); 

}
function passs(ele,index)
{
  
    purchasebox.push(ele)
    localStorage.setItem("purchase",JSON.stringify(purchasebox));
    console.log(purchasebox)


}