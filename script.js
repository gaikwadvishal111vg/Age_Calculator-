const months=[31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculater(){
    let today =new Date();
    let inputDate=new Date(document.getElementById("date-input").value);

    let birthMonth;
    let birthDate;
    let birthYear;

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth(),
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();

    leapYearCheck(currentYear);
    if(birthDetails.year > currentYear || (birthMonth > currentMonth && birthDetails.year === currentYear) || (birthDetails.date > currentDate && birthDetails.month === currentMonth && birthDetails.year === currentYear)){
        alert("NOT BORN YET!!!");
        displayResult("NaN","NaN","NaN");
        return;
    }
    birthYear = currentYear - birthDetails.year;
    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }else{
        birthYear--;
        birthMonth=12+currentMonth-birthDetails.month;
    }
    if(currentDate >= birthDetails.date){
        birthDate = currentDate -birthDetails.date;
    }else{
birthMonth--;
let days=months[currentMonth - 2];
birthDate = days + currentDate - birthDetails.date;
if(birthMonth < 0){
    birthMonth = 11;
    birthYear--;
}
    }
    displayResult(birthDate,birthMonth,birthYear);
}
function displayResult(bDate,bMonth,bYear){
    document.getElementById("year").textContent = bYear;
    document.getElementById("month").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}
function leapYearCheck(year){
    if(year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)){
        months[1] = 29;
    }else{
        months[1]=28;
    }
    

}