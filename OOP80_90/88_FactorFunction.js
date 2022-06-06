// var samsung = {
//       mn:'glaxy',   //same1
//       ram:'3gb',same2

// }
// var lg={
//       mn:'glaxy', //same1
//     ram:'3gb', //same2
// }

// // solve
function mobile(){
      return {
                  model:'galaxy',
                  price:function(){return('Price:Rs.3000');
            }
      };
}
var samsung = mobile();{
      console.log(samsung.model+' '+samsung.price());
}

// another program