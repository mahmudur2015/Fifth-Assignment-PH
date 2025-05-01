//Task-1
document.getElementById("btn-task-one").addEventListener('click', function (event) {
    event.preventDefault();
    fnDisableButton('btn-task-one');
    fnAddition();
    fnSubstraction();
    fnActivityLogMessage("task-one-heading");


})
//Task-2
document.getElementById("btn-task-two").addEventListener('click', function (event) {
    event.preventDefault();
    fnDisableButton('btn-task-two');
    fnAddition();
    fnSubstraction();
    fnActivityLogMessage("task-two-heading");
})
//Task-3
document.getElementById("btn-task-three").addEventListener('click', function (event) {
    event.preventDefault();
    fnDisableButton('btn-task-three');
    fnAddition();
    fnSubstraction();
    fnActivityLogMessage("task-three-heading");
})
//Task-4
document.getElementById("btn-task-four").addEventListener('click', function (event) {
    event.preventDefault();
    fnDisableButton('btn-task-four');
    fnAddition();
    fnSubstraction();
    fnActivityLogMessage("task-four-heading");
})
//Task-5
document.getElementById("btn-task-five").addEventListener('click', function (event) {
    event.preventDefault();
    fnDisableButton('btn-task-five');
    fnAddition();
    fnSubstraction();
    fnActivityLogMessage("task-five-heading");
})
//Task-6
document.getElementById("btn-task-six").addEventListener('click', function (event) {
    event.preventDefault();
    fnDisableButton('btn-task-six');
    fnAddition();
    fnSubstraction();
    fnActivityLogMessage("task-five-heading");
})
//Clear History Button
document.getElementById("btn-clear").addEventListener('click', function (event) {
    event.preventDefault();
    const para = document.querySelectorAll(".dynamicParagraph");
    para.forEach(p => p.innerText = "");

})
// -------------functions start from here -------------
function fnAddition() {
    const taskCnt = parseInt(getInnerTextById("num-count"));
    const addCnt = taskCnt + 1;
    setInnerTextByIdandValue('num-count', addCnt);

}
function fnSubstraction() {
    const taskCnt = parseInt(getInnerTextById("task-count"));
    const substract = taskCnt - 1;
    setInnerTextByIdandValue('task-count', substract);
    if (substract<1) {
        alert("Congress!!! you have completed all the current task..");
    }
}

function fnActivityLogMessage(id) {
    const transContainer = document.getElementById("transaction-container");
    let date = new Date();
    let dt = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hours_12: true
    });
    const boardHeading = document.getElementById(id).innerText;
    const ptg = document.createElement("p");
    ptg.className = "dynamicParagraph";
    ptg.style.paddingTop = "15px";
    ptg.innerText = `You have completed the task ${boardHeading} at ${dt}`
    transContainer.appendChild(ptg);
    return boardHeading;
}