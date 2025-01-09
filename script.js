        // Fungsi untuk memeriksa bilangan ganjil/genap
        function cekBilangan() {
            // Ambil elemen input
            const numberInput1 = document.getElementById("number1"); 
            const numberInput2 = document.getElementById("number2"); 
            // Ambil nilai input
            const numberValue1 = numberInput1.value.trim(); 
            const numberValue2 = numberInput2.value.trim(); 
            let result;
            // Div untuk menampilkan hasil
            const resultDiv = document.getElementById("result"); 
            const from = document.getElementById('operasi');
            const select = from.options[from.selectedIndex].text;

            // 1. Cek apakah input kosong
            //    Jika kosong, tampilkan pesan kesalahan (gunakan innerHTML)
            // 2. Jika angka valid, periksa apakah angka tersebut ganjil atau genap
            // 3. Tampilkan hasilnya di div result
            // Hasil:
            // Jika angka genap, tampilkan "Angka adalah bilangan genap."
            // Jika angka ganjil, tampilkan "Angka adalah bilangan ganjil."

            //Mulailah melengkapi kode di sini

            if(select == "" || numberValue1 == "" || numberValue2 == ""){
                resultDiv.innerHTML = "Anda Tidak Memasukan Data Yang Cukup";
            }
            else if(select == '+'){
                result = numberValue1 + numberValue2;
                resultDiv.innerHTML = "Hasilnya Adalah : " + result;
            }
            else if(select == '-'){
                result = numberValue1 - numberValue2;
                resultDiv.innerHTML = "Hasilnya Adalah : " + result;
            }
            else if(select == '*'){
                result = numberValue1 * numberValue2;
                resultDiv.innerHTML = "Hasilnya Adalah : " + result;
            }
            else if(select == '/'){
                result = numberValue1 / numberValue2;
                resultDiv.innerHTML = "Hasilnya Adalah : " + result;
            }
            else{
                resultDiv.innerHTML = "Hasil Tidak Valid";
            }

            //Akhir kode

            // Mencegah form submit
            return false;
        }