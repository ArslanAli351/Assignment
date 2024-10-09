
const input = document.querySelectorAll("input");
const h1 = document.querySelectorAll("h1")[0];



function Chack() {
    let inputVal = input[0].value;
    if (inputVal >= 90 && inputVal <= 100) {
        h1.innerHTML = "Grade:A"
    }
    else if (inputVal >= 80 && inputVal <= 89) {
        h1.innerHTML = "Grade:B"

    }
    else if (inputVal >= 70 && inputVal <= 79) {
        h1.innerHTML = "Grade:C"

    }
    else if (inputVal >= 60 && inputVal <= 69) {
        h1.innerHTML = "Grade:D"

    }
    else if (inputVal <= 59) {
        h1.innerHTML = "Grade:F"
        h1.id = "head"
    }
    else if (inputVal >= 100) {
        h1.innerHTML = "No grade"
        h1.id = "head"
    }
}