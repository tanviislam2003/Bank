document.getElementById("btn-diposit").addEventListener("click", function () {
  const dipositField = document.getElementById("diposit-field");
  const newdipositAmountString = dipositField.value;
  const newdipositAmount = parseFloat(newdipositAmountString);

  const dipositTotalElement = document.getElementById("diposit-total");
  const previousDipositTotalString = dipositTotalElement.innerText;
  const previousDipositTotal = parseFloat(previousDipositTotalString);

  const currentDipositTotal = previousDipositTotal + newdipositAmount;

  dipositTotalElement.innerText = currentDipositTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotal = previousBalanceTotal + newdipositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  dipositField.value
});
