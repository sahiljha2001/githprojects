// let todoname = document.querySelector("#todo-name");
// let todotask = document.querySelector("#todo-task");
// const api =
//   "https://crudcrud.com/api/1b6cb24b7e4f4fcd9a4ceaa7ef5c4929/appoinmentData";

// async function additem(event) {
//   event.preventDefault();

//   const obj = {
//     todoName: todoname.value,
//     todoTask: todotask.value,
//   };

//   try {
//     await axios.post(api, obj).then((response) => {
//       showtodos(response.data);
//       console.log(response);
//     });
//   } catch (error) {
//     console.log(err);
//   }
// }
// window.addEventListener("DOMContentLoaded", async () => {
//   try {
//     await axios.get(api).then((response) => {
//       console.log(response);

//       for (var i = 0; i < response.data.length; i++) {
//         showtodos(response.data[i]);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
// function showtodos(obj) {
//   document.getElementById("todo-name").value = "";
//   document.getElementById("todo-task").value = "";
//   const parentNode = document.getElementById("items");

//   const childHTML = `<li id=${obj._id}>${obj.todoName}-${obj.todoTask}
//           <button onclick=deletetodos('${obj._id}')> X </button>
//           <button onclick=updatetodos('${obj._id}')>✔</button> </li>`;

//   parentNode.innerHTML = parentNode.innerHTML + childHTML;
// }

// async function deletetodos(objId) {
//   try {
//     // console.log("in try", objId);
//     await axios.delete(`${api}/${objId}`).then((response) => {
//       console.log(response);
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   removetodos(objId);
// }

// function removetodos(objId) {
//   const parentNode = document.getElementById("items");
//   const childNodeToBeDeleted = document.getElementById(objId);

//   if (childNodeToBeDeleted) {
//     parentNode.removeChild(childNodeToBeDeleted);
//   }
// }

// async function updatetodos(objId) {
//   // console.log("to do hit hua");
//   try{
//   var data = await axios.get(`${api}/${objId}`);
//   }
//   catch(error){
//     console.log(error);
//   }
//   // console.log(data);
//   const parentNode = document.getElementById("todoDone");

//   const childHTML = `<li id=${data._id}> ${data.todoName} - ${data.todoTask}

//                           <button > 🟩</button>
//                        </li>`;

//   parentNode.innerHTML = parentNode.innerHTML + childHTML;

//   removetodos(objId);
// }
