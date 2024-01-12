let a = +prompt("Nhập điểm toán")
if(a<0 || a>10){
    alert("a nhập sai")
}
let b = +prompt("Nhập điểm văn")
if(b<0 || b>10){
    alert("a nhập sai")
}
let c = +prompt("Nhập điểm anh")
if(c<0 || c>10){
    alert("a nhập sai")
}
let avg = (a + b +c)/3
if(isNaN(avg)==false){
    if(avg <= 10 && avg >=8){
        alert("Loại Giỏi")
    }else if(avg<8 && avg >=6.5){
        alert("Loại Khá")
    }else if(avg <6.5 && avg >=5){
        alert("Loại TB")
    }else if(avg <= 5){
        alert("Loại Yếu")
    }
}
