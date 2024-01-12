let a = +prompt("Bạn muốn xem ngày tháng nào")
if(isNaN(a)==false){
    switch(a){
        case 1,3,7,5,8,10,12:
            alert("31")
            break
        case 4,6,9,11:
            alert("3")
            break
        case 2:
            alert("28")
            break
        default:
            alert("Invalid Input")
            break
    }
}else{
    alert("Invalid Input")
}