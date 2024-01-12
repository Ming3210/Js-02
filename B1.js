let a = prompt("Bạn sinh năm bao nhiêu")
let b = 2023
let age=Number(b)-Number(a)
if(isNaN(a)==true && a>0 && b<2024){
    alert("Invalid Input")
}else{
    alert("Tuổi của bạn là " + age)
}
