var money = +prompt("Ваш бюджет на месяц?", "");
var time = +prompt("Введите дату в формате YYYY-MM-DD", "");
var appData = {
    budget : money,
    timeData : time,
    expenses : {   
},
    optionalExpenses : {  
},
    income: [],
    savings : false
}
var option1 = +prompt("Введите обязательную статью расходов в этом месяце", "");
var option2 = +prompt("Во сколько обойдется?", "");
var option3 = +prompt("Введите обязательную статью расходов в этом месяце", "");
var option4 = +prompt("Во сколько обойдется?", "");
appData.expenses.option1 = option2;
appData.expenses.option3 = option4;
alert(appData.budget / 30);

