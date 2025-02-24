const add_Btn=document.getElementById("add-Btn");

add_Btn.addEventListener('click',(event)=>{
   event.preventDefault();
   const amount=document.getElementById('amount').value;

   let balance=document.getElementById('balance').innerText;
   const convertBalance=parseFloat(balance)
 
   const convertAmount=parseFloat(amount);
 

   const pinNumber=document.getElementById("pin-number").value;

  const convetPin=parseInt(pinNumber);
   if(convetPin===1234){
       const sum=convertBalance+convertAmount
       document.getElementById('balance').innerText=sum;
   }else{
    console.log('kora jabe na');
   }

})