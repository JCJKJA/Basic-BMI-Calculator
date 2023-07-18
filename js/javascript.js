/*/



Empty space up here so code is more in the middle.
Easier on the eyes.



/*/
function isEmpty(IsEmptyTarget){ /*/ This function checks if the function parameter(IsEmptyTarget) is empty. /*/
    if (IsEmptyTarget.value == null || IsEmptyTarget.value == ""){
        console.log(IsEmptyTarget, "Empty")
        return false;
    }else{
        console.log(IsEmptyTarget, "Filled")
        return true;
    }
}

function BMI_calculation(){
    var calcForm = document.forms["form-calculatorInputs"]
    var textBMIResultNum = document.getElementById("text-resultNumber")
    if ( /*/ This checks whether the inputs are empty or not. It works by calling the function "IsEmpty(target)" /*/
        isEmpty(calcForm.elements["inputRadio-kelamin"]) &&
        isEmpty(calcForm.elements["inputNumber-beratBadan"]) &&
        isEmpty(calcForm.elements["inputNumber-usiaTahun"]) &&
        isEmpty(calcForm.elements["inputNumber-tingiBadan"])
        ){ // vvv If the code detect that the form is filled.
        console.log("Form Filled")
        console.log("Caluclation started.")

        var kelamin = calcForm.elements["inputRadio-kelamin"].value
        var beratBadan = calcForm.elements["inputNumber-beratBadan"].value
        var usiaTahun = calcForm.elements["inputNumber-usiaTahun"].value
        var tingiBadan = calcForm.elements["inputNumber-tingiBadan"].value
        var calcResultNum = 0

        console.log(beratBadan)
        console.log(tingiBadan)

        calcResultNum = ((parseInt(beratBadan)) / (parseInt(tingiBadan) * parseInt(tingiBadan) / 10000)).toFixed(1)
        console.log("BMI result: ", calcResultNum)
        textBMIResultNum.innerHTML = calcResultNum
        document.getElementById("calc-emptyWarnText").innerHTML=""

    }else{ // vvv Else. If the code doesn't detect that the form is filled.
        console.log("Empty")
        document.getElementById("calc-emptyWarnText").innerHTML="Mohon isi semua input."
    }
}

function BMI_reset(){
    var calcForm = document.forms["form-calculatorInputs"]
    var textBMIResultNum = document.getElementById("text-resultNumber").innerHTML=""
    document.getElementById("calc-emptyWarnText").innerHTML=""
}