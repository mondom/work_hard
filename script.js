'use strict'

const foo = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('bar');
    }, 3000);
  });

  console.log(foo);
  console.log(foo);



  
  