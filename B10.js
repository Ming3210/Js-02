// if :
// Có thể sử dụng để so sánh lớn hơn, nhỏ hơn, = nhau,...
// Mỗi câu lệnh if có một biểu thức điều kiện, với giá trị trả về là true hoặc false
// Biểu thức điều kiện cần trả về giá trị kiểu boolean
// Chỉ có một khối lệnh được thực thi nếu điều kiện đúng
let a
if(isNaN(a)==false){
    if(Number(a)==1) alert("true")
    else if (Number(a) ==0 ) alert("false")
    else alert("Invalid Input")
}
//cho a = 1 chỉ trả về đáp án true, so sánh khi a=1 a=0 và a != 1,0




//switch case
// Chỉ có thể sử dụng để so sánh bằng, hoặc khác nhau
// Tất cả các trường hợp (case) đều so sánh với giá trị của biểu thức điều kiện duy nhất
// Biểu thức điều kiện cần trả về giá trị là kiểu byte, short, char, int hoặc string
// Nếu điều kiện đúng mà không có câu lệnh break thì tất cả các khối lệnh ở phía sau cũng được thực thi

if(isNaN(a)){
    switch(a){
        case 1:
            alert("true")
            break
        case 0:
            alert("false")
        default:
            alert("Invalid Input")
            break
    }
    
}
//Nếu cho a = 0 thì vx tiếp tục đọc lệnh khi a khác 1 và 0 và đều so sánh vs a