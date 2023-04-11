//First Question
/*function add(a){
    return function(b){
        console.log(a+b);

    }
}
let c=+prompt("Enter first  value");
let d=+prompt("Enter Second value");
let Innerfunction=add(c);
Innerfunction(d);*/
//Second Question
/*function recursiveArraySearch(arr, val, i=0) {
    if (i >= arr.length) {
      // Base case: the value is not found in the array
      return -1;
    } else if (arr[i] === val) {
      // Base case: the value is found at index i
      return i;
    } else {
      // Recursive case: search the rest of the array
      return recursiveArraySearch(arr, val, i+1);
    }
  }
  const arr = [1, 2, 3, 4, 5];
const val = 1;
const index = recursiveArraySearch(arr, val);
console.log(index);*/
//Third Question
/*function newPara(text){
    const paRa=document.createElement("p");
    
    paRa.innerText=text;
    document.body.appendChild(paRa);
}
newPara("This para is added");*/
//Fourth Question
/*function newList(text){
const ul=document.querySelector("ul");
const li=document.createElement("li");
li.textContent=text;
ul.appendChild(li);





}
let a=prompt("Enter a Fruit");
newList(a);*/
//Sixth Question
/*function Object(a,b)
{
    localStorage.setItem(a,JSON.stringify(b));
}
let  d={name:"Hamza",age:"18"};
Object("key",d);*/
//Seventh Question
function get(a){

    const b=localStorage.getItem(a);
    return JSON.parse(b);
}
const c=get("key");
console.log(c);





























