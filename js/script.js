let Login_btn=document.getElementById('Login-btn');

Login_btn.addEventListener('click',(event)=>{
       
      event.preventDefault();
      const accountNumber=document.getElementById("account-number").value;
     
      const pinNumber=document.getElementById("pin-number").value;
    
         if(accountNumber.length===11){
             if(parseInt(pinNumber)===1234){
                 window.location.href='./main.html'
             }else{
                alert("Enter valid pin number")
             }
         }else{
            alert("Enter valid number");
         }

})
