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


//  Cash-out toggle
const cash_out_btn=document.getElementById('cash-out-btn');
const add_money_btn=document.getElementById('add-money-btn');
cash_out_btn.addEventListener('click',()=>{
    const add_money=document.getElementById("add-money")
   const cash_out_money=document.getElementById("cash-out")
     cash_out_money.style.display='block';
     add_money.style.display="none";
})
add_money_btn.addEventListener('click',()=>{
    const add_money=document.getElementById("add-money")
   const cash_out_money=document.getElementById("cash-out")
      add_money.style.display='block';
      cash_out_money.style.display='none';
})


// Cash -out money charge

const cashOutBtn=document.getElementById("cash-out-Btn");

cashOutBtn.addEventListener('click',(event)=>{
  event.preventDefault();
    const balance=document.getElementById('balance').innerText;
    const convertBalance=parseFloat(balance)

     const cash_out_amount=document.getElementById('cash-out-amount').value;
      const convetedCashOutAmount=parseFloat(cash_out_amount);
      
      const sub=convertBalance-convetedCashOutAmount;

      document.getElementById('balance').innerText=sub;
})
