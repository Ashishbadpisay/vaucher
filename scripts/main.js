var form=document.getElementById("form");
form.addEventListener("submit",myfunc)
var bag=[]
function myfunc()
{
    event.preventDefault()
  var obj={
  Name:form.name.value,
  Email:form.email.value,
  Address:form.address.value,
  Amount:form.amount.value,
}
bag.push(obj);
localStorage.setItem("user",JSON.stringify(bag))

}