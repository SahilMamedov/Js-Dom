// custom task 

let btn = document.getElementById("btn")
let list=document.getElementById("list")
let input=document.getElementById("input")
let btnRemove=document.getElementById("btn-remove")

btn.onclick=function(){
    
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
    result.value=Number(number1.value) / Number(number2.value);
    number1.value="";
    number2.value="";
 }
 vurma.onclick=function(){
    result.value=Number(number1.value) * Number(number2.value);
    number1.value="";
    number2.value="";
 }
 cixma.onclick=function(){
    result.value=Number(number1.value) - Number(number2.value);
    number1.value="";
    number2.value="";
 }
 toplama.onclick=function(){
    result.value=Number(number1.value) + Number(number2.value);
    number1.value="";
    number2.value="";
 }

 // task 3 new list 

 let newlistBtn=document.getElementById("btn-newlist")

    newlistBtn= addEventListener('click',function(){
      let li = document.querySelectorAll(".li-list")
      let div =document.createElement("div")
      div.className="div"
      let ul = document.createElement("ul")
      ul.className="list"
      div.append(ul)
      let newarr=Array.from(li).map(item=>item.textContent)
      newarr.reduce((item,value)=>{
      
          item.set(value,(item.get(value)||0)+1);
          
          if(item.get(value)===1){
              let newli = document.createElement("li");
              newli.innerText=value;
                   ul.append(newli);
                   document.body.append(ul)
          }
          return item
          },new Map())
    })
  
    
    
    