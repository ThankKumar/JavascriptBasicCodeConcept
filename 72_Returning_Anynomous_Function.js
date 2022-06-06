function disp(a){
      return function(b){
            return(a+b);
      };
};
disp(10)