// let n = parseInt(prompt("number"));
function funTTT1(n1,n2,n3){  //1st fun open
      
      function funTTT2(n1,n2,n3){ //2fun open
            funTTT2 = n1+n2+n3;
           
            function funTTT3(n1,n2,n3){ //3fun open
               funTTT3 = n1+n2+n3;   
            }funTTT3(3,3,3,3)  //3fun close

            funTTT2 = n1+n2+n3;
            document.write(funTTT2);
      }funTTT2(2,2,2,2)  //2fun close
      document.write(funTTT2);
   
      funTTT1 = n1+n2+n3;
      document.write(funTTT1);
}funTTT1(1,1,1,1)    //1st fun close




// document.write(funTTT1);
// document.write(funTTT2);
// document.write(funTTT3);