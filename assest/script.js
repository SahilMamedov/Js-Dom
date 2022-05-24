// custom task 

let btn = document.getElementById("btn")
let list=document.getElementById("list")
let input=document.getElementById("input")
let btnRemove=document.getElementById("btn-remove")

btn.onclick=function(){
    let checkarr=[];
let inputValue=input.value.trim();

if(inputValue!=""){
    let li=document.createElement("li");
li.innerText=inputValue;

li.classList.add("list-group-item","liList")
list.append(li);
input.value="";
let inputcheck=document.createElement("input");
inputcheck.type="checkbox";
inputcheck.classList="inputcheck"
li.append(inputcheck)

btnRemove.onclick=function(){

    let  inputchecked= document.querySelectorAll(".inputcheck:checked")
         inputchecked.forEach(value => {
          value.parentElement.remove();
             
         });
    }
  }
  }

  // task calculiyator

  // get input
  let number1=document.getElementById("number-1")
  let number2=document.getElementById("number-2")
  let result=document.getElementById("result")

  // get button
  let bolme=document.getElementById("btn-bolme")
  let vurma=document.getElementById("btn-vurma")
  let cixma=document.getElementById("btn-cixma")
  let toplama=document.getElementById("btn-toplama")

  bolme.onclick=function(){
    let num1value= number1.value;
    let num2value=number2.value;
    let sum=num1value / num2value;
    result.value=sum;
    number1.value="";
    number2.value="";
 }
 vurma.onclick=function(){
    let num1value= number1.value;
    let num2value=number2.value;
    let sum=num1value * num2value;
    result.value=sum;
    number1.value="";
    number2.value="";
 }