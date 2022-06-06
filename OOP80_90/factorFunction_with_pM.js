function mobile(model_no){
      return{
model:model_no,
price:function(){
      return('Price Is 9000')
}
      };
}
let samsung=mobile('Glaxy');
let nokia=mobile('1200s')
console.log(samsung.model+' '+samsung.price());
console.log(nokia.model+' '+nokia.price());