// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.domain);
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='sahil';
// headerTitle.innerHTML='<h3>sahil</h3>';
// headerTitle.style.color='red';
// headerTitle.style.borderBottom ='solid 3px #000';
// GET ELEMENTS BY CLASS NAME
// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[2]);
// item[1].textContent='sahil';
// item[2].style.fontweight='bold';
// item[1].style.backgroundcolor='red';
//  for(let i=0;i<item.length;i++){
//     item[i].style.backgroundcolor='green';
//  }
 //GET ELEMNET BY TAG NAME;
//  var li = document.getElementsByTagName('li');
//  console.log(li);
//  console.log(li[2]);
// li[1].textContent='sahil';
// li[2].style.fontweight='bold';
// li[1].style.backgroundcolor='red';
//  for(let i=0;i<li.length;i++){
//     li[i].style.backgroundcolor='green';
//  }
//GET ELEMENTS BY QUERYSELECTORS
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input = document.querySelector('input');
// input.value ='SEND';
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var firstItem = document.querySelector('.list-group-item:nth-child(2)');
// firstItem.style.backgroundColor='green';
// var secondItem = document.querySelector('.list-group-item:nth-child(3)');

// secondItem.style.display='none';
//GET ELEMENTS BY QUERYSELECTORS


// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent ='hello';
// var even = document.querySelectorAll('li:nth-child(even)');
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
// odd[i].style.backgroundColor='green';
// even[i].style.color='green';
// }
// even[1].style.color='black';



//TRAVERSING THE NODE
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='orange';
// console.log(itemList.parentNode.parentNode);
//parent elements
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor ='orange';
// console.log(itemList.parentElement.parentElement);
// childnodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='pink';

//firstChild
// console.log(itemList.firstChild);
//first Element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';
//lastchild
// console.log(itemList.lastChild);
//last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';
 // nextSibling
//  console.log(itemList.nextSibling);
//  nextElementSibling
//  console.log(itemList.nextElementSibling);
 // previousSibling
//  console.log(itemList.previousSibling);
//  previousElementSibling
//  console.log(itemList.previousElementSibling);
//  itemList.previousElementSibling.style.color ='green';

 // create a div
//  var newDiv = document.createElement('div');
 // add class
//  newDiv.className='hello1';
 // add id
//  newDiv.id ='hello1';
 // add attr
//  newDiv.setAttribute('title ','hello Div');
 // Create text node
 var newDivText =document.createTextNode('Hello world');
 // add text to div
//  newDiv.appendChild(newDivText);
//  var container = document.querySelector('header .container');
//  var h1 = document.quwerySelector('header h1');
//  console.log(newDiv);
//  container.insertBefore(newDiv,h1);







