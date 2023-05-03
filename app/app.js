//Fetching each method by document .querySelector method
// let userName = document.querySelector("#name");
// let userEmailid = document.querySelector("#Emailid");
// let userPhone = document.querySelector("#phoneno");
// let item = document.querySelector("#listOfUsers");
// let submit = document.querySelector(".btn");
// let edit = document.querySelector(".edit-button");
// let form = document.querySelector(".container");
// //Adding eventListener
// item.addEventListener("click", removeItem);
// submit.addEventListener("click", storeUserDetails);
// function storeUserDetails(e) {
//   e.preventDefault();
//   // Get input value
//   let newItem1 = document.getElementById("name").value;
//   var newItem2 = document.getElementById("Emailid").value;
//   let newItem3 = document.getElementById("phoneno").value;
//   let userDetail = {
//     Name: newItem1,
//     Email: newItem2,
//     Phone: newItem3,
//   };
//   // let myObj_serialized = JSON.stringify(userDetail);
//   // localStorage.setItem(newItem2, myObj_serialized);
//   // let myObj_Deserialized = JSON.parse(localStorage.getItem("userDetail"));
//   const data = axios
//     .post(
//       "https://crudcrud.com/api/d4b6f7cecff04180bd4dddf5bef7ad42/appoinmentData",
//       userDetail
//     )
//     .then((respone) => {
//       showUserOnScreen(respone.data);
//       console.log(respone);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   // localStorage.setItem(obj.email, JSON.stringify(obj))
//   // showNewUserOnScreen(obj)

  
// }
// window.addEventListener("DOMContentLoaded", () => {
//   const data = axios
//     .get(
//       "https://crudcrud.com/api/d4b6f7cecff04180bd4dddf5bef7ad42/appoinmentData"
//     )
//     .then((respone) => {
//       console.log(respone);

//       for (var i = 0; i < respone.data.length; i++) {
//         showUserOnScreen(respone.data[i]);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   // const localStorageObj = localStorage;
//   // const localstoragekeys  = Object.keys(localStorageObj)

//   // for(var i =0; i< localstoragekeys.length; i++){
//   //     const key = localstoragekeys[i]
//   //     const userDetailsString = localStorageObj[key];
//   //     const userDetailsObj = JSON.parse(userDetailsString);
//   //     showNewUserOnScreen(userDetailsObj)
//   // }

//   console.log(data);
// });
// function showUserOnScreen(userDetail) {
//   const parentElement = document.querySelector("#listOfUsers");
//   const childElement = `<li id=${user._id}> ${user.Name} - ${user.Email}
//                           <button onclick=deleteUser('${user._id}')> Delete User </button>
//                           <button onclick=editUserDetails('${user.Email}','${user.Name}','${user.Phone}','${user._id}')>Edit User </button>
//                        </li>`;

//   parentElement.innerHTML = parentElement.innerHTML + childElement;
// //   const childElement = document.createElement("li");
// //   childElement.textContent =
// //     userDetail.Name + " " + userDetail.Email + " " + userDetail.Phone;
// //   parentElement.appendChild(childElement);
// //   // Create del button element
// //   var deleteBtn = document.createElement("button");

// //   // Add classes to del button
// //   deleteBtn.className = "btn btn-danger btn-sm float-right delete";
// // childElement.setAttribute('id','user._id');
// //   // Append text node
// //   deleteBtn.appendChild(document.createTextNode(" " + "delete"));

// //   // Append button to li
// //   childElement.appendChild(deleteBtn);

// //   deleteBtn.onclick = () => {
// //     deleteUser(`${user._id}`);
// //   };

// //   //adding edit button to everyonein list

// //   var editBtn = document.createElement("button");
// //   editBtn.className = "edit-button";

// //   //giving name to editbutton
// //   editBtn.appendChild(document.createTextNode("Edit"));
// //   // Append button to li
// //   childElement.appendChild(editBtn);
// //   editBtn.onclick = () => {
// //     localStorage.removeItem(userDetail.Email);
// //     parentElement.removeChild(childElement);
// //     document.getElementById("name").value = userDetail.Name;
// //     document.getElementById("Emailid").value = userDetail.Email;
// //     document.getElementById("phoneno").value = userDetail.Phone;
// //   };
// }
// function deleteUser(userId) {
//   axios
//     .delete(
//       `https://crudcrud.com/api/d4b6f7cecff04180bd4dddf5bef7ad42/appoinmentData/${userId}`
//     )
//     .then((respone) => {
//       removeItem(userId);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   // console.log(emailId)
//   // localStorage.removeItem(emailId);
//   // removeUserFromScreen(emailId);
// }
// function removeItem(userId) {
//    const parentNode = document.getElementById("listOfUsers");
//    const childNodeToBeDeleted = document.getElementById(userId);
//    if (childNodeToBeDeleted) {
//      parentNode.removeChild(childNodeToBeDeleted);
//    }
// }
 function saveToLocalStorage(event) {
   event.preventDefault();
   const name = event.target.username.value;
   const email = event.target.email.value;
   const phonenumber = event.target.phonenumber.value;
   // localStorage.setItem('name', name);
   // localStorage.setItem('email', email);
   // localStorage.setItem('phonenumber', phonenumber)
   const obj = {
     name,
     email,
     phonenumber,
   };
   const data = axios
     .post(
       "https://crudcrud.com/api/c0bc55e85a5548c5b7b43c11d621a523/appoinmentData",
       obj
     )
     .then((respone) => {
       showNewUserOnScreen(respone.data);
       console.log(respone);
     })
     .catch((err) => {
       console.log(err);
     });
   // localStorage.setItem(obj.email, JSON.stringify(obj))
   // showNewUserOnScreen(obj)
 }

 window.addEventListener("DOMContentLoaded", () => {
   const data = axios
     .get(
       "https://crudcrud.com/api/c0bc55e85a5548c5b7b43c11d621a523/appoinmentData"
     )
     .then((respone) => {
       console.log(respone);

       for (var i = 0; i < respone.data.length; i++) {
         showNewUserOnScreen(respone.data[i]);
       }
     })
     .catch((error) => {
       console.log(error);
     });
   // const localStorageObj = localStorage;
   // const localstoragekeys  = Object.keys(localStorageObj)

   // for(var i =0; i< localstoragekeys.length; i++){
   //     const key = localstoragekeys[i]
   //     const userDetailsString = localStorageObj[key];
   //     const userDetailsObj = JSON.parse(userDetailsString);
   //     showNewUserOnScreen(userDetailsObj)
   //     }

   console.log(data);
 });

 function showNewUserOnScreen(user) {
   document.getElementById("email").value = "";
   document.getElementById("username").value = "";
   document.getElementById("phonenumber").value = "";
   // console.log(localStorage.getItem(user.emailId))
   if (localStorage.getItem(user.email) !== null) {
     removeUserFromScreen(user.email);
   }

   const parentNode = document.getElementById("listOfUsers");
   const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                          <button onclick=deleteUser('${user._id}')> Delete User </button>
                          <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user._id}')>Edit User </button>
                       </li>`;

   parentNode.innerHTML = parentNode.innerHTML + childHTML;
 }

 //Edit User

 function editUserDetails(emailId, name, phonenumber, userId) {
   document.getElementById("email").value = emailId;
   document.getElementById("username").value = name;
   document.getElementById("phonenumber").value = phonenumber;

   deleteUser(userId);
 }

 // deleteUser('abc@gmail.com')

 function deleteUser(userId) {
   axios
     .delete(
       `https://crudcrud.com/api/c0bc55e85a5548c5b7b43c11d621a523/appoinmentData/${userId}`
     )
     .then((respone) => {
       removeUserFromScreen(userId);
     })
     .catch((err) => {
       console.log(err);
     });
   // console.log(emailId)
   // localStorage.removeItem(emailId);
   // removeUserFromScreen(emailId);
 }

 function removeUserFromScreen(userId) {
   const parentNode = document.getElementById("listOfUsers");
   const childNodeToBeDeleted = document.getElementById(userId);
   if (childNodeToBeDeleted) {
     parentNode.removeChild(childNodeToBeDeleted);
   }
 }