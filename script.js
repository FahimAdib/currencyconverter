
var amount = document.querySelector('#value')
const curFrom = document.querySelector('#input_from')
const curTo = document.querySelector('#input_to')
const btn = document.querySelector('#convert');
var result = document.querySelector('#result_text')
var letters = /^[A-Za-z]+$/;


btn.onclick = (event) => {
    if(isNaN(amount.value)){
        alert("Invalid Amount")
        return
    }

    if(curTo.value.match(letters) && curFrom.value.match(letters) ){
        fetch(`https://v6.exchangerate-api.com/v6/3c324db48424a7b444b3da8c/latest/USD`)
        .then(res => res.json())
        .then(data => {
            
        var valFrom = data.conversion_rates[curFrom.value.toUpperCase()]
        var valTo = data.conversion_rates[curTo.value.toUpperCase()]
        var output = amount.value * (valTo / valFrom)
            if(isNaN(output)){
                alert("Invalid Currency")
                return
            }
            else{
            result.innerHTML = String(output).substring(0,5) 
        }
        })
    }
    else{
        alert("Invalid Currency")
    }
}
