
const input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','result');
input.setAttribute('value','0');
input.setAttribute('onkeypress','eventCheck(event)');
const form=document.createElement('form');
form.setAttribute('id','form');
form.appendChild(input);
const divcalc=document.getElementById('calc');
divcalc.appendChild(form);

const div1=document.createElement('div');
div1.setAttribute('class','row justify-content-center align-items-center');
divcalc.appendChild(div1);
const button1=document.createElement('button');
button1.setAttribute('type','button');
button1.setAttribute('id','1');
button1.setAttribute('class','btn-sm');
button1.setAttribute('onclick','inputOne()');
button1.appendChild(document.createTextNode('1'));
div1.appendChild(button1);
const button2=document.createElement('button');
button2.setAttribute('type','button');
button2.setAttribute('id','2');
button2.setAttribute('class','btn-sm');
button2.setAttribute('onclick','inputTwo()');
button2.appendChild(document.createTextNode('2'));
div1.appendChild(button2);
const button3=document.createElement('button');
button3.setAttribute('type','button');
button3.setAttribute('id','3');
button3.setAttribute('class','btn-sm');
button3.setAttribute('onclick','inputThree()');
button3.appendChild(document.createTextNode('3'));
div1.appendChild(button3);
const buttonadd=document.createElement('button');
buttonadd.setAttribute('type','button');
buttonadd.setAttribute('id','add');
buttonadd.setAttribute('class','btn-sm');
buttonadd.setAttribute('onclick','inputPlus()');
buttonadd.appendChild(document.createTextNode('+'));
div1.appendChild(buttonadd);

const div2=document.createElement('div');
div2.setAttribute('class','row justify-content-center align-items-center');
divcalc.appendChild(div2);
const button4=document.createElement('button');
button4.setAttribute('type','button');
button4.setAttribute('class','btn-sm');
button4.setAttribute('onclick','inputFour()');
button4.appendChild(document.createTextNode('4'));
div2.appendChild(button4);
const button5=document.createElement('button');
button5.setAttribute('type','button');
button5.setAttribute('class','btn-sm');
button5.setAttribute('onclick','inputFive()');
button5.appendChild(document.createTextNode('5'));
div2.appendChild(button5);
const button6=document.createElement('button');
button6.setAttribute('type','button');
button6.setAttribute('class','btn-sm');
button6.setAttribute('onclick','inputSix()');
button6.appendChild(document.createTextNode('6'));
div2.appendChild(button6);
const buttonsub=document.createElement('button');
buttonsub.setAttribute('type','button');
buttonsub.setAttribute('class','btn-sm');
buttonsub.setAttribute('id','subtract');
buttonsub.setAttribute('onclick','inputMinus()');
buttonsub.appendChild(document.createTextNode('-'));
div2.appendChild(buttonsub);

const div3=document.createElement('div');
div3.setAttribute('class','row justify-content-center align-items-center');
divcalc.appendChild(div3);
const button7=document.createElement('button');
button7.setAttribute('type','button');
button7.setAttribute('class','btn-sm');
button7.setAttribute('onclick','inputSeven()');
button7.appendChild(document.createTextNode('7'));
div3.appendChild(button7);
const button8=document.createElement('button');
button8.setAttribute('type','button');
button8.setAttribute('class','btn-sm');
button8.setAttribute('onclick','inputEight()');
button8.appendChild(document.createTextNode('8'));
div3.appendChild(button8);
const button9=document.createElement('button');
button9.setAttribute('type','button');
button9.setAttribute('class','btn-sm');
button9.setAttribute('onclick','inputNine()');
button9.appendChild(document.createTextNode('9'));
div3.appendChild(button9);
const buttonmul=document.createElement('button');
buttonmul.setAttribute('type','button');
buttonmul.setAttribute('id','multiplication');
buttonmul.setAttribute('class','btn-sm');
buttonmul.setAttribute('onclick','inputMul()');
buttonmul.appendChild(document.createTextNode('x'));
div3.appendChild(buttonmul);

const div4=document.createElement('div');
div4.setAttribute('class','row justify-content-center align-items-center');
divcalc.appendChild(div4);
const button00=document.createElement('button');
button00.setAttribute('type','button');
button00.setAttribute('class','btn-sm');
button00.setAttribute('onclick','inputZeroes()');
button00.appendChild(document.createTextNode('00'));
div4.appendChild(button00);
const button0=document.createElement('button');
button0.setAttribute('type','button');
button0.setAttribute('class','btn-sm');
button0.setAttribute('onclick','inputZero()');
button0.appendChild(document.createTextNode('0'));
div4.appendChild(button0);
const buttondot=document.createElement('button');
buttondot.setAttribute('type','button');
buttondot.setAttribute('class','btn-sm');
buttondot.setAttribute('onclick','inputDot()');
buttondot.appendChild(document.createTextNode('.'));
div4.appendChild(buttondot);
const buttondivi=document.createElement('button');
buttondivi.setAttribute('type','button');
buttondivi.setAttribute('id','division');
buttondivi.setAttribute('class','btn-sm');
buttondivi.setAttribute('onclick','inputDiv()');
buttondivi.appendChild(document.createTextNode('/'));
div4.appendChild(buttondivi);

const div5=document.createElement('div');
div5.setAttribute('class','row justify-content-center align-items-center');
divcalc.appendChild(div5);
const buttonback=document.createElement('button');
buttonback.setAttribute('type','button');
buttonback.setAttribute('class','btn-sm');
buttonback.setAttribute('onclick','backSpace()');
buttonback.appendChild(document.createTextNode('BS'));
div5.appendChild(buttonback);
const buttonclear=document.createElement('button');
buttonclear.setAttribute('type','button');
buttonclear.setAttribute('id','clear');
buttonclear.setAttribute('class','btn-sm');
buttonclear.setAttribute('onclick','clearResult()');
buttonclear.appendChild(document.createTextNode('Clr'));
div5.appendChild(buttonclear);
const buttonequal=document.createElement('button');
buttonequal.setAttribute('type','button');
buttonequal.setAttribute('id','equal');
buttonequal.setAttribute('class','btn-sm');
buttonequal.setAttribute('onclick','calculate()');
buttonequal.appendChild(document.createTextNode('='));
div5.appendChild(buttonequal);
const buttonper=document.createElement('button');
buttonper.setAttribute('type','button');
buttonper.setAttribute('class','btn-sm');
buttonper.setAttribute('onclick','calculateper()');
buttonper.appendChild(document.createTextNode('%'));
div5.appendChild(buttonper);

var result=document.getElementById('result');
function setResult(result){
    document.getElementById('result').innerHTML=result;
}

function inputOne(){
    if(result.value==='0'){
        result.value='1';
    }
    else{
        result.value+='1';
    }
    setResult(result);
}
function inputTwo(){
    if(result.value==='0'){
        result.value='2';
    }
    else{
        result.value+='2';
    }
    setResult(result);
}
function inputThree(){
    if(result.value==='0'){
        result.value='3';
    }
    else{
        result.value+='3';
    }
    setResult(result);
}
function inputFour(){
    if(result.value==='0'){
        result.value='4';
    }
    else{
        result.value+='4';
    }
    setResult(result);
}
function inputFive(){
    if(result.value==='0'){
        result.value='5';
    }
    else{
        result.value+='5';
    }
    setResult(result);
}
function inputSix(){
    if(result.value==='0'){
        result.value='6';
    }
    else{
        result.value+='6';
    }
    setResult(result);
}
function inputSeven(){
    if(result.value==='0'){
        result.value='7';
    }
    else{
        result.value+='7';
    }
    setResult(result);
}
function inputEight(){
    if(result.value==='0'){
        result.value='8';
    }
    else{
        result.value+='8';
    }
    setResult(result);
}
function inputNine(){
    if(result.value==='0'){
        result.value='9';
    }
    else{
        result.value+='9';
    }
    setResult(result);
}
function inputZero(){
    if(result.value!=='0')
    {
        result.value+='0';
        setResult(result);
    }   
}
function inputZeroes(){
    if(result.value!=='0')
    {
        result.value+='00';
        setResult(result);
    }
}
function inputDot(){
    result.value+='.';
    setResult(result);
}
function inputPlus(){
    result.value+='+';
    setResult(result);
}
function inputMinus(){
    result.value+='-';
    setResult(result);
}
function inputMul(){
    result.value+='x';
    setResult(result);
}
function inputDiv(){
    result.value+='/';
    setResult(result);
}
function clearResult(){
    result.value='0';
    setResult(result);
}
function backSpace(){
    if(result.value!=='0')
    {
        result.value=result.value.substring(0,result.value.length-1);
        setResult(result);
    }
}
function calculate(){
    result.value=eval(result.value.replace(/x/g,'*'));
    setResult(result);
}
function calculateper(){
    if(!!result.value){
        result.value=String(parseInt(result.value)/100);
    }
    else{
        result.value='0';
    }
    setResult(result);
}

function eventCheck(event){
    if(event.keyCode<48 || event.keyCode>57)
    {
        event.preventDefault();
        alert("Only numbers are allowed")
    }
}