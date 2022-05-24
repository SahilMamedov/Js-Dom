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
