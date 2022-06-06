// callee is use to function datatype

function  disp(a1,ma2,a3){
console.log(arguments.callee)
}disp(1,2,3)