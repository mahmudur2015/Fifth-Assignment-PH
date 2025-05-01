// reuseable dynamic function

function getInputValueById(id) {
    const value = document.getElementById(id).value;
    return value;
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    return value;
}

function setInnerTextByIdandValue(id, value) {
    document.getElementById(id).innerText = value;
}

function fnDisableButton(id) {
    alert("Board Updated Successfully..");
    const value = document.getElementById(id);
    value.disabled = true;
    value.style.backgroundColor = "silver";
    return value;
}

function fnEnableButton(id) {
    const value = document.getElementById(id).disabled = false;
    return value;
}

function fnChangeBGColor(){
    const randomColor='#' + Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = randomColor;
}