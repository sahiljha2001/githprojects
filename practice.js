// let multiply= function(x,y){
//     console.log(x+y);
// }
// let multiply = function(x){
// return function(y){
//     console.log(x+y);
// }
// }
// let multiplyTwo = multiply.bind(this,2);
// let multiplyTwo = multiply(4);
// multiplyTwo(3);
//  function fun1(a){

// const fun2 = (b) => {

// a = a + b;

// console.log(a)

// }}
// const obj1= {

// "key1": "value1",

// "key2" : "value2",

// "key3" : "value3"

// }

// const obj2 = { ...obj1}

// console.log(obj2)


// fun1(10)(30);

// 

//   function outerfunction() {

// console.log(a);

// var c = 25;



// innerfunction();



// function innerfunction() {

// console.log(b);

// console.log(c);

// }

// }



// var a = 5;

// var b =6



// outerfunction();
  
// 
// function outerfunction() {



// var a = 25;

// console.log(a);



// return function innerfunction() {

// console.log(a);

// console.log(window.a);

// console.log(this.a)

// }

// }



// var a = 5;

// var b =6



//   let  output=outerfunction(); 
//   console.log(output());
// console.log('a')

// console.log('b');

// let a =7;

// var b =11;

// console.log('b');

// let a = 11;

// var b = 7;



// console.log(this.b);

// console.log(window.b)

// console.log(window.a)

// console.log(this.a);
// var number1 = 2;

// var number2 = 5



// function multiply(a, b){

// var answer = a * b; //line 1

// return answer;

// }

// var sum = multiply(number1, number2); // line 2



// console.log(sum) //line 3



// console.log(answer) //line 4
// console.log(printName());

// console.log(a);



// var a = 100;



// var printName = (name) => {

// console.log(name)

// }
// function abc() {

// console.log(a);

// }





// var a = 11;
// abc();

// console.log('f');

// console.log('g');



// setTimeout(()=> console.log('h'), 1000);



// setTimeout(()=> console.log('i'), 0);



// console.log('j');
// console.log('sahil');
// setTimeout(()=>{
//     console.log('heello');
// },2000)




// let n = 5; // you can take input from prompt or change the value
// let string = "";
// // External loop
// for (let i = 0; i < n; i++) {
//   // printing characters
//   for (let j = 0; j <= i; j++) {
//     string += String.fromCharCode(69-i+j);
//   }
//   string += "\n";
// }
// console.log(string);
// let n = 5;
// let string ='';
// for(let i=0;i<n;i++){
    
//     for(let j=0;j<n-i;j++){
//         string+='*';
//     }
//      for(let j=0;j<2*i;j++){

//         string+=' '
//     }
//      for(let j=0;j<n-i;j++){
//         string+='*';
//     }
//     string+='\n';
// }

// for(let k=n-1;k>=0;k--){
    
//     for(let l=0;l<n-k;l++){
//         string+='*';
//     }
//      for(let l=0;l<2*k;l++){

//         string+=' ';
//     }
//      for(let l=0;l<n-k;l++){
//         string+='*';
//     }
//     string+='\n';
// }
// console.log(string);


//call backs function
// const post =[{title: 'sahile', name:1},{
//     title:'namit',name:3
// }
// ]
// function getPost(){

//     setTimeout(() => {
//         let changeName='';
//         post.forEach((pos,index)=> {
            
            
//         });
//     }, 2000);

// }
// let i=0;
// ++i;
// console.log(i);
const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
// 
// create2ndPost().then(value=>
// {
//     deletePost().then(value=>{
//         console.log(value.title);
         
//     },(error)=>{
//         console.log(error);
//     })
//      let p= create3rPost();
//          return p; 
// }).then(value=>{
//     deletePost().then(value=>{
//         console.log(value.title);
        
        
//     },(error)=>{
//         console.log(error);
//     })
//     let ans= deletePost();
//     return ans;
//     }).then(value=>{
    
//         console.log(value.title);
//       let an= deletePost();
//       return an;
//     },(error)=>{
//         console.log(error);
//     }
//     ).then(value=>{
    
//         console.log(value.title);
         
//     },(error)=>{
//         console.log(error);
//     })

const str="here";
console.log(str);