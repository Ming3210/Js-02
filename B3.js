let a = +prompt("Nhập 1 số (2-8)")
if(isNaN(a)==false){
    switch(a){
        case 2:
            alert("Monday")
            break
        case 3:
            alert("Tuesday")
            break
        case 4:
            alert("Wednesday")
            break
        case 5:
            alert("Thursday")
            break
        case 6:
            alert("Friday")
            break
        case 7:
            alert("Saturday")
            break
        case 8:
            alert("Sunday")
            break
        default:
            alert("Invalid Input")
}

}