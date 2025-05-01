
function fnDayName() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date(); 
    const weekDayName = days[today.getDay()]; 
    document.getElementById("current-dayName").innerHTML = weekDayName+" ,";
}

function fnCurrentDate() {
    const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "july","Aug","Sep","Oct","Nov","Dec"];

    const currentDate = new Date();
    const month = monthsName[currentDate.getMonth() + 1];//Month's Name
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const onlyDate = document.getElementById('current-date')
    onlyDate.innerText = `${month}-${day}-${year}`

}
