let a = prompt("Nhập 1 số")
if(isNaN(a)==false){
    if(a%2===0){
        alert("Bạn vừa nhập số chẵn")
    }else{
        alert("Bạn vừa nhập số lẻ")
    }
}else{
    alert("Invalid Input")
}