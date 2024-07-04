'use strict'

const foo = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('bar');
    }, 3000);
  });

 console.log(foo);

 foo
  .then(result => console.log(result))
  .catch(err => console.error(err));




  
  