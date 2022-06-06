// var samsung={model:'glaxy'};
// var Lg ={model:'31S10'};
// var nokia={model:'1200G'};

function mobile(model_no){
      return{
            model:model_no,
            price:function(){
                  return('Price=10000');
            }
      };
}
let samsung=mobile('Glaxy');
let nokia=mobile('1210s');
console.log(samsung.model+' '+samsung.price)
console.log(nokia.model+' '+nokia.price)

// some error i update soon