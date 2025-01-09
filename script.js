function cekBilangan() {
    const numberInput1 = document.getElementById("number1"); 
    const numberInput2 = document.getElementById("number2"); 
    const numberValue1 = parseFloat(numberInput1.value.trim()); 
    const numberValue2 = parseFloat(numberInput2.value.trim()); 
    let result;
    const resultDiv = document.getElementById("result"); 
    const from = document.getElementById('operasi');
    const select = from.options[from.selectedIndex].value;

    if(select === "" || isNaN(numberValue1) || isNaN(numberValue2)){
        resultDiv.innerHTML = "Anda Tidak Memasukan Data Yang Cukup";
    }
    else if(select === '+'){
        result = numberValue1 + numberValue2;
        resultDiv.innerHTML = "Hasilnya Adalah : " + result;
    }
    else if(select === '-'){
        result = numberValue1 - numberValue2;
        resultDiv.innerHTML = "Hasilnya Adalah : " + result;
    }
    else if(select === '*'){
        result = numberValue1 * numberValue2;
        resultDiv.innerHTML = "Hasilnya Adalah : " + result;
    }
    else if(select === '/'){
        if (numberValue2 === 0) {
            resultDiv.innerHTML = "Tidak Bisa Membagi Dengan Nol";
        } else {
            result = numberValue1 / numberValue2;
            resultDiv.innerHTML = "Hasilnya Adalah : " + result;
        }
    }
    else{
        resultDiv.innerHTML = "Hasil Tidak Valid";
    }

    return false;
}