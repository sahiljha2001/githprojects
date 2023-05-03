const candyname=document.querySelector(".candy-input");
const candydescription=document.querySelector(".candy-description");
const candyprice=document.querySelector(".candy-price");
const candyquantity=document.querySelector(".candy-quantity");
const buy1=document.querySelector("#buy1");
const buy2=document.querySelector("#buy2");
const buy3=document.querySelector("#buy3");
   
const api =
  "https://crudcrud.com/api/e3011647356d47858eaf031f26a997ee/appoinmentData";
async function addcandies(event) {
  event.preventDefault();

  const obj = {
    candyName: candyname.value,
    candyDescription: candydescription.value,
    candyPrice: candyprice.value,
    candyQuantity:candyquantity.value,
    

  };

  try {
    await axios.post(api, obj).then((response) => {
      showcandies(response.data);
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener("DOMContentLoaded", async () => {
  try {
    await axios.get(api).then((response) => {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        showcandies(response.data[i]);
      }
    });
  } catch (error) {
    console.log(error);
  }
});
function showcandies(obj) {
  document.querySelector(".candy-input").value = "";
  document.querySelector(".candy-description").value = "";
  document.querySelector(".candy-price").value = "";
  document.querySelector(".candy-quantity").value = "";
  const parentNode = document.querySelector("#items");

  const childHTML = `<li id=${obj._id}>${obj.candyName}-  ${obj.candyDescription}-  ${obj.candyPrice}-  ${obj.candyQuantity} </li>`;
        //   <button onclick=deletetodos('${obj._id}')> X </button>
        //   <button onclick=updatetodos('${obj._id}')>✔</button>

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
function updatequantity(event){
    if(event.target.id=="buy1"){
             Editchocoquantity(obj)
    }
    else if(event.target.id=="buy2"){

    }
    else{

    }
}