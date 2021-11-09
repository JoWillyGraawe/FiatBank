document.getElementById("btn").onclick = function(){
    var x = Math.round(document.getElementById("income").value * 5);
    var y = Math.round(document.getElementById("equity").value * (85/15));
    if (x > y){
        document.getElementById("total").value = y;
    }
    else{
        document.getElementById("total").value = x;
    }
}

