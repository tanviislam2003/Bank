document.getElementById('btn-withdraw').addEventListener('click', function (){
    console.log('withdraw button clicked')
  const withdrawField= document.getElementById("withdraw-field");
  const newWithdrawAmountString= withdrawField.value;
  const newdWithdrawAmount=parseFloat(newWithdrawAmountString);
  console.log(newdWithdrawAmount);

  withdrawField.value='';

  if(isNaN(newdWithdrawAmount)){
    alert('please provide a valid number');
    return;
  }




  const withdrwTotalElement = document.getElementById("withdraw-total");
  const previouswithdrawTotalString = withdrwTotalElement.innerText;
  const previouswithdrawTotal=parseFloat(previouswithdrawTotalString);
  console.log(previouswithdrawTotal);
  
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceTotalString);


   

  if (newdWithdrawAmount > previousBalanceTotal) {
    alert('You dont have that much money');
    return;
  }
  const currentwithdrawTotal= previouswithdrawTotal + newdWithdrawAmount;
  withdrwTotalElement.innerText= currentwithdrawTotal; 
  
  const currentBalanceTotal= previousBalanceTotal- newdWithdrawAmount;
  balanceTotalElement.innerText= currentBalanceTotal;





 
 
})