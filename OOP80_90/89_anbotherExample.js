function mobile(){
      return{
            models:'glaxy',
            modelg:'Mo45',
            price:function(){
                  return('Price : is Rs.2000');
            }
      };
}
      let samsung = mobile();{
            console.log(samsung.models+' '+samsung.price());  
      }
      let lg = mobile();
{
      console.log(lg.modelg+' '+lg.price());    
}
     

