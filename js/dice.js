function rollDice()
{
    var input = document.getElementById('num').value;
    if(!isNaN(input) && input % 1 == 0 && input > 0){
        document.getElementById('result-output').innerHTML = Math.ceil(Math.random()*input);
        document.getElementById('alert').style = "display:none";
    }else{
        document.getElementById('result-output').innerHTML = null;
        document.getElementById('alert').style = "display:block";
    }
}