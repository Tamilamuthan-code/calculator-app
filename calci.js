let input = document.querySelector(".form-group input")

function addValue(elementVal){
    input.value += elementVal
}

function clearVal(){
    input.value = ""
}

function deleteCharacter(){
    input.value = input.value.slice(0, input.value.length - 1)
}

function evaluateVal(){

    try{
        input.value = eval(input.value)
    }

    catch{
        input.value = "Error"
    }
}