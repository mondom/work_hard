'use strict'

const car = {
    model: 'Opel',
    printModel: function() {
      console.log('Your car is: ', this.model);
    },
  };

  car.printModel()
  
  const print = car.printModel.bind(car);
  print();


