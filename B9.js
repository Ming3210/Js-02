let a = +prompt("Nhập a")
let b = +prompt("Nhập b")
let c = +prompt("Nhập c")
let max, min, mid
if(isNaN(a)==false && isNaN(b)==false && isNaN(c)==false){
    if(a>b && a>c){
        max = a
    }else if(b>c && a>c){
        max = b
    }else{
        max = c
    }
    if(a<b && a<c){
        min = a
    }else if(b<c && a<c){
        min = b
    }else{
        min = c
    }
}
mid = (a+b+c) - (max+min)
alert("Thấp đến cao : " + min+" " + mid+" " + max)