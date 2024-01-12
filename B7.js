let a = +prompt("Nhập a")
let b = +prompt("Nhập b")
let c = +prompt("Nhập c")
let max, min
if(isNaN(a)==false && isNaN(b)==false && isNaN(c)==false){
    if(a>b && a>c){
        max = a
    }else if(b>c && a>c){
        max = b
    }else{
        max = c
    }
}
alert("Max = "+ max)