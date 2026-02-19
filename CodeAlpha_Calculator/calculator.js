let display = document.getElementById("character");
let lastAnswer = "";


document.addEventListener("keydown", (e) => {

   
    if (!isNaN(e.key)) {
        appendValue(e.key);
        return;
    }

    
    if (["+", "-", "*", "/"].includes(e.key)) {
        appendValue(e.key);
        return;
    }

    
    if (e.key === ".") {
        appendValue(".");
        return;
    }

    
    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
        return;
    }

  
    if (e.key === "Backspace") {
        clearEntry();
        return;
    }

    
    if (e.key === "Escape") {
        allClear();
        return;
    }

    
    if (e.key === "%") {
        percent();
        return;
    }
});




function appendValue(value) {
    display.value += value;
}


function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        lastAnswer = result.toString();
    } catch {
        display.value = "Error";
    }
}


function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function allClear() {
    display.value = "";
}


function percent() {
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}


function useAns() {
    display.value += lastAnswer;
}
