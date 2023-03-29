function Topla(){
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var sum = a+b;
    document.getElementById('result').innerHTML = sum;
    
}

function Cix(){
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var min = a-b;
    document.getElementById('result').innerHTML = min;
    
}

function Vur(){
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var vur = a*b;
    document.getElementById('result').innerHTML = vur;
    
}

function Bol(){
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var div = a/b;
    document.getElementById('result').innerHTML = div.toFixed(2);
    
}

var date = new Date();
var hours = date.getHours();

if(hours >=6 && hours<=12){
    alert('Sabahiniz xeyr');
    document.body.style.backgroundColor='green';
}
else if(hours >=13 && hours<=18){
    alert('Gunortaniz xeyr');
    document.body.style.backgroundColor='yellow';
}
else if(hours >=19 && hours<=23){
    alert('Axshaminiz xeyr');
    document.body.style.backgroundColor='dark';
}
else{
    alert('Geceniz xeyre');
    document.body.style.backgroundColor='black';
}
