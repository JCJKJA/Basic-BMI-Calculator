/*/



Empty space up here so code is more in the middle.
Easier on the eyes.



/*/
function isEmpty(IsEmptyTarget){ /*/ This function checks if the function parameter(IsEmptyTarget) is empty. /*/
    if (IsEmptyTarget.value == null || IsEmptyTarget.value == ""){
        console.log(IsEmptyTarget, "Empty") //--Debug
        return false;
    }else{
        console.log(IsEmptyTarget, "Filled") //--Debug
        return true;
    }
}

function BMI_calculation(){ // Calculation function. When ran, it will calculate the inputs if there any.
    var calcForm = document.forms["form-calculatorInputs"]
    var textBMIResultNum = document.getElementById("text-resultNumber")
    var textBMIResult_Kelamin = document.getElementById("text-resultKelamin")
    if ( /*/ This checks whether the inputs are empty or not. It works by calling the function "IsEmpty(target)" /*/
        isEmpty(calcForm.elements["inputRadio-kelamin"]) &&
        isEmpty(calcForm.elements["inputNumber-beratBadan"]) &&
        isEmpty(calcForm.elements["inputNumber-usiaTahun"]) &&
        isEmpty(calcForm.elements["inputNumber-tingiBadan"])
        ){ // vvv If the code detect that the form is filled.
        BMI_reset() //Reset function to clear the results and form before doing another calculation. Just in case.
        console.log("Form Filled") //--Debug
        console.log("Caluclation started.") //--Debug

        // Variables are being defined here. When adding new variables, add them here so it looks nice.
        var kelamin = calcForm.elements["inputRadio-kelamin"].value
        var beratBadan = calcForm.elements["inputNumber-beratBadan"].value
        var usiaTahun = calcForm.elements["inputNumber-usiaTahun"].value
        var tingiBadan = calcForm.elements["inputNumber-tingiBadan"].value
        var calcResultNum = 0
        var calcResultKelamin = kelamin

        console.log(beratBadan) //--Debug
        console.log(tingiBadan) //--Debug
        console.log("BMI result: ", calcResultNum) //--Debug

        calcResultNum = ((parseInt(beratBadan)) / (parseInt(tingiBadan) * parseInt(tingiBadan) / 10000)).toFixed(1)
        textBMIResultNum.innerHTML = calcResultNum
        document.getElementById("calc-emptyWarnText").innerHTML=""
        textBMIResult_Kelamin.innerHTML = BMI_resultKelamin(calcResultKelamin)

        BMI_resultDesc(calcResultNum)

    }else{ // vvv Else. If the code doesn't detect that the form is filled.
        console.log("Empty") //--Debug
        document.getElementById("calc-emptyWarnText").innerHTML="Mohon isi semua input."
    }
}

function BMI_reset(){ // Resets the BMI calculator and remove some calculation result texts.
    var calcForm = document.forms["form-calculatorInputs"]
    var textBMIResultNum = document.getElementById("text-resultNumber").innerHTML=""
    var textBMIResultDesc = document.getElementById("text-resultDesc")
    document.getElementById("calc-emptyWarnText").innerHTML=""
    textBMIResultDesc.innerHTML=""
} //a

function BMI_resultDesc(BMIscore){
    if (BMIscore < 18.5){ // Kekurangan
        var textBMIResultNum = document.getElementById("text-resultNumber")
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Anda kekurangan berat badan."
    } else if (BMIscore >= 18.5 && BMIscore <= 24.9){ // Ideal
        var textBMIResultNum = document.getElementById("text-resultNumber")
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Berat badan anda normal (ideal)."
    } else if (BMIscore >= 25.0 && BMIscore <= 29.9){ // Kelebihan
        var textBMIResultNum = document.getElementById("text-resultNumber")
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Anda kelebihan berat badan."
    } else if (BMIscore >= 30){ // Kelebihan
        var textBMIResultNum = document.getElementById("text-resultNumber")
        var textBMIResultDesc = document.getElementById("text-resultDesc")
       //console.log(BMIscore) //--Debug
        textBMIResultDesc.innerHTML = "Anda kegemukan (obesitas)."
    }
}
function BMI_resultKelamin(inputRadioKel_Chosen){
    if (inputRadioKel_Chosen.includes("pria")){
        return "Kelamin: Laki-Laki"
    } else if (inputRadioKel_Chosen.includes("wanita")){
        return "Kelamin: Wanita"
    }
}

function img_toggle(targetimg){
    console.log("Button Pressed") //--Debug
    var targetimg_target = document.getElementById(targetimg)
    if (targetimg_target.style.display == "hidden"){
        targetimg_target.style.display = "block"
    }else{
        targetimg_target.style.display = "hidden"
    }
}




/*/ 
    javascript.js!
    Newlines help me read the code easier, but sometimes I overdo it and it ends up making the code harder to read.

    These comments doesn't really serve any major purpose. I'm just writing random stuff until I can figure out 
    what features I should add and how to add it..
    Update: BMI result descriptions has been added.
/*/