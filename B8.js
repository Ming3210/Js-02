let a =+prompt("Nhập cân nặng")
let b =+prompt("Nhập chiều cao")
let bmi = a/(b^2)
if(isNaN(bmi)==false){
    if(bmi<18.5){
        alert("Gầy")
    }
    if(bmi>18.5 && bmi<=24.9){
        alert("Bình thường")
    }
    if(bmi>=25){
        alert("Thừa cân")
    }
    if(bmi>25 && bmi <29.9 ){
        alert("Tiền béo phì")
    }
    if(bmi<34.9 && bmi>30){
        alert("Béo phì cấp 1")
    }
    if(bmi<39.9 && bmi>35){
        alert("Béo phì câp II")
    }
    if(bmi>=40){
        alert("Béo phì câp III")
    }
}