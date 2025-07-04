let displayValue = '';

        function appendNumber(number) {
            displayValue += number;
            document.getElementById('display').value = displayValue;
        }

        function appendOperator(operator) {
            if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
                displayValue += operator;
                document.getElementById('display').value = displayValue;
            }
        }

        function clearDisplay() {
            displayValue = '';
            document.getElementById('display').value = displayValue;
        }

        function deleteLast() { // Функція для видалення останнього елемента
            displayValue = displayValue.slice(0, -1);
            document.getElementById('display').value = displayValue;
        }

        function calculate() {
            try {
                displayValue = eval(displayValue);
                document.getElementById('display').value = displayValue;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
        function eval1(){
            var ax=parseFloat(document.getElementById("ax").value);
            var bx=parseFloat(document.getElementById("bx").value);
            var cons=parseFloat(document.getElementById("cons").value);
            var D=(bx*bx)+(-4*ax*cons);
            if(D>0){
                document.getElementById("res").innerHTML=`D = b^2 - 4*a*c = ${bx**2} -4 * ${ax} * ${cons} = `+((bx*bx)-(4*ax*cons))+'<br>';
                document.getElementById("res_").innerHTML=`x1=(-b-√D)/2a = ( - ${bx} - ${Math.sqrt(D)} ) / 2*${ax} = ${-bx-Math.sqrt(D)} / ${2*ax} = `+(-bx-Math.sqrt(D))/2*ax+"<br>";
                document.getElementById("res__").innerHTML=`x2=(-b+√D)/2a = ( - ${bx} + ${Math.sqrt(D)} ) / 2*${ax} = ${-bx+Math.sqrt(D)} / ${2*ax} = `+(-bx+Math.sqrt(D))/2*ax+"<br>"; 
            }
            else if(D==0){
                document.getElementById("res").innerText=`D = b^2 - 4*a*c = ${bx**2} -4 * ${ax} * ${cons} = `+((bx*bx)-(4*ax*cons));
                document.getElementById("res_").innerText=`x=-b/2a =  - ${bx} / 2*${ax} = - ${bx} / ${2*ax} = `+(-bx)/2*ax; 
            }
            else{
                document.getElementById("res_").innerText="Дискрімінант меньше 0";
            }
        }
        function cubichne() {
            var resultDiv = document.getElementById("res1");
            resultDiv.innerHTML = ""; // Очистим содержимое перед началом добавления результатов
            var a = parseFloat(document.getElementById("2a").value);
            var b = parseFloat(document.getElementById("2b").value);
            var c = parseFloat(document.getElementById("2c").value);
            var d = parseFloat(document.getElementById("2d").value);
            var e=false;
            for (var x = -1000; x <= 1000; x++) {
                if (a*x** 3 + b*x ** 2 + c*x + d == 0) {
                    resultDiv.innerHTML += `x = ${x}<br>`; // Добавляем новый результат с помощью +=
                    e=true;
                }   
            }
            if(!e){
                resultDiv.innerHTML="Розв'язків не має"
            }

        }
        function bicvadrat(){
            var ax=parseFloat(document.getElementById("ax_1").value);
            var bx=parseFloat(document.getElementById("bx_1").value);
            var cons=parseFloat(document.getElementById("cons_1").value);
            var D=(bx*bx)+(-4*ax*cons);

            if(D>0){
                document.getElementById("resb1").innerText=`Нехай t=x^2, тоді ${ax}x^4 + ${bx}x^2 + ${cons} = ${ax}t^2 + ${bx}t + ${cons}`;
                document.getElementById("resb2").innerText=`D = b^2 - 4*a*c = ${bx**2} -4 * ${ax} * ${cons} = `+((bx*bx)-(4*ax*cons));
                document.getElementById("resb3").innerText=`t1=(-b-√D)/2a = ( - ${bx} - ${Math.sqrt(D)} ) / 2*${ax} = ${-bx-Math.sqrt(D)} / ${2*ax} = `+(-bx-Math.sqrt(D))/2*ax+"<br>";
                document.getElementById("resb4").innerText=`t2=(-b+√D)/2a = ( - ${bx} + ${Math.sqrt(D)} ) / 2*${ax} = ${-bx+Math.sqrt(D)} / ${2*ax} = `+(-bx+Math.sqrt(D))/2*ax+"<br>";
                var t1=(-bx-Math.sqrt(D))/(2*ax);
                var t2=(-bx+Math.sqrt(D))/(2*ax);
                if(t1>0){
                    document.getElementById("resb5").innerText=`x = √t = √${t1} = ${Math.sqrt(t1)}`;
                }
                else{ 
                    document.getElementById("resb5").innerText=`x = √t = √${t1} = Кореня не існує`;
                }
                if(t2>0){
                    document.getElementById("resb6").innerText=`x = √t = √${t2} = ${Math.sqrt(t2)}`;
                }
                else{
                    document.getElementById("resb6").innerText=`x = √t = √${t2} = Кореня не існує`;
                }
                if(t1<0 && t2<0){
                    document.getElementById("resb5").innerText=`Рівняння розв'язків не має`;
                }
            }
            else if(D==0){
                document.getElementById("resb2").innerText=`D = b^2 - 4*a*c = ${bx**2} -4 * ${ax} * ${cons} = `+((bx*bx)-(4*ax*cons));
                document.getElementById("resb3").innerText=`t=-b/2a =  - ${bx} / 2*${ax} = - ${bx} / ${2*ax} = `+(-bx)/2*ax;
                var t=document.getElementById("resb3").innerText;
            }
            else{
                document.getElementById("resb3").innerText="Дискрімінант меньше 0";
            }
        }