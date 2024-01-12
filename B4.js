let a = prompt("Nhập 1 số bất kì")
let b
if(isNaN(a)==false){
    b =(a<0) ? alert("Số vừa nhập là số âm") : alert("Số vừa nhập là số dương")
}else alert("Invalid Input")