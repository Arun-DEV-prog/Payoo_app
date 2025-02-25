const add_Btn=document.getElementById("add-Btn");

const sendMoney=document.getElementById('send-money');
const add_money=document.getElementById("add-money")
const cash_out_money=document.getElementById("cash-out")



// history div
const HistoryText=document.getElementById('text');
const histoyTake=document.getElementById('take');
const historMoney=document.getElementById('histor');
const historyDiv=document.getElementById('history-div')

add_Btn.addEventListener('click',(event)=>{
   event.preventDefault();
   const amount=document.getElementById('amount').value;


//    History section create and add
 
   
   
   

   let balance=document.getElementById('balance').innerText;
   const convertBalance=parseFloat(balance)
 
   const convertAmount=parseFloat(amount);
 

   const Div=document.createElement('div');
     Div.style.border="2px solid red";
     Div.style.display="flex";
     Div.style.justifyContent="space-between";
    Div.style.marginBottom="10px"
     Div.style.padding="10px"

     const p1=document.createElement('p');
     p1.innerText="Add money";
     const p2=document.createElement('p');
     p2.innerText=amount;

     Div.appendChild(p1);
     Div.appendChild(p2);
    historyDiv.appendChild(Div);

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
    
     cash_out_money.style.display='block';
     add_money.style.display="none";
      sendMoney.style.display='none';
     historyDiv.style.display='none';
     
})
add_money_btn.addEventListener('click',()=>{
    const add_money=document.getElementById("add-money")
   const cash_out_money=document.getElementById("cash-out")
      add_money.style.display='block';
      cash_out_money.style.display='none';
      cash_out_money.style.display='none';
      historyDiv.style.display='none';
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



      const Div=document.createElement('div');
     Div.style.border="2px solid red";
     Div.style.display="flex";
     Div.style.justifyContent="space-between";
     
     Div.style.padding="10px"

     const p1=document.createElement('p');
     p1.innerText="Cash Out";
     const p2=document.createElement('p');
     p2.innerText=cash_out_amount;

     Div.appendChild(p1);
     Div.appendChild(p2);
    historyDiv.appendChild(Div);
})


// Send money Js 

const transferBtn=document.getElementById('transfer-btn');


     const balance=document.getElementById('balance').innerText;
    const convertBalance=parseFloat(balance)

transferBtn.addEventListener('click',(event)=>{
      event.preventDefault();
        add_money.style.display='none';
        cash_out_money.style.display='none';
        sendMoney.style.display='block';
        historyDiv.style.display='none';
    })


// transfer transcatipn
 const sendBtn=document.getElementById('sendBtn');
sendBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const transferAmount=document.getElementById('transfer-amount').value;
     const contverTransferAmount=parseFloat(transferAmount);
    
       if(transferAmount){
        const sendSub=convertBalance-contverTransferAmount;
        document.getElementById('balance').innerText=sendSub;
       }else{
        alert("Enter valid ammout");
       }
})

historMoney.addEventListener('click',(event)=>{
     event.preventDefault();
    add_money.style.display='none';
    cash_out_money.style.display='none';
    sendMoney.style.display='none';
    historyDiv.style.display='block';
})
