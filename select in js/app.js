const select1 = document.querySelector(".select1");
const message = document.querySelector(".messsage");

select1.onchange = ()=>{
  let item = select1.value; 
  message.textContent = item;
}