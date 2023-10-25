const incomes = ["salary", "R$ 2000,00", "comission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = [
    "rent",
    "R$ 500,00",
    "energy",
    "R$ 325,55",
    "water",
    "R$ 120,34",
    "food",
    "R$ 1300,62",
    "R$ 898,94"
  ];

 const incomeValue = incomes.filter((value) => value.includes("R$ "));
  
//   const incomesValuesNumber = incomeValue.map((value) => Number(value.replace("R$ ", "").replace(",",".")));
const incomesValuesNumber = incomeValue.map((value) => {
    return Number(value.replace("R$ ", "").replace(",","."));
});

const sumIncomes = incomesValuesNumber.reduce((a, b) => a + b);

//   console.log(incomeValue);
//   console.log(incomesValuesNumber);
  console.log(sumIncomes.toLocaleString("PT-br",{
    style: "currency",
    currency: "BRL",
  }));

  const expensesValue = expenses.filter((value) => value.includes("R$ "));
  
//   const expensessValuesNumber = expensesValue.map((value) => Number(value.replace("R$ ", "").replace(",",".")));
const expensesValuesNumber = expensesValue.map((value) => {
    return Number(value.replace("R$ ", "").replace(",","."));
});

const sumExpenses = expensesValuesNumber.reduce((a, b) => a + b);

//   console.log(expensesValue);
//   console.log(expensesValuesNumber);
  console.log(sumExpenses.toLocaleString("PT-br",{
    style: "currency",
    currency: "BRL",
  }));

  let situation;

  if (sumIncomes > sumExpenses) {
    situation = "Saldo positivo!"
  } else if (sumIncomes < sumExpenses) {
    situation = "Saldo negativo!"
  } else if (sumIncomes === sumExpenses) {
    situation = "Sem saldo e sem dívidas."
  }

  console.log(sumIncomes - sumExpenses);
  console.log(situation);