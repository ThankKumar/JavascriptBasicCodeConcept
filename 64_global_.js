let i = 'i am global variable'
console.log(i+'\n');
function shoe(){
      console.log(i+'\n')
      
}shoe()
if(true){
      let j=10;
      console.log(i)
      console.log(j)
}
