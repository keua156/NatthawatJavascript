/* document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม" +sum;
    alert(sum)

})
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลลบ" +sum;
    alert(sum)

})
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลคูณ" +sum;
    alert(sum)

})
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลหาร" +sum;
    alert(sum)

}) */

function calculator(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม" +sum;
    alert(sum)
}
function calculator2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม" +sum;
    alert(sum)
}
function calculator3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม" +sum;
    alert(sum)
}
function calculator4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม" +sum;
    alert(sum)
}
function myalert(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum  = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม" +sum;
    alert(sum)
}
function BMI(){
    var weight = document.getElementById("weight").value;
    var high = document.getElementById("high").value;
    var sum  = weight / (high / 100 * high / 100 );
    document.getElementById("result").innerHTML = "ค่า BMI : " +sum;
    alert("ค่า BMI : " + sum)
}
const img = document.createElement("img")

img.src = "img/me.jpg";
img.style.width = "200px";  

document.getElementById("mydiv").appendChild(img);