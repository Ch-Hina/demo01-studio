
class Vehicle {
    #brand = "Corolla"
    constructor(brand,model)  {

     this.#brand =brand;
     this.model = model;
    }
   
    drive(){
    console.log(`The ${this.#brand} ${this.model} is driving`);
    }

    start(){
        console.log(`The ${this.#brand} ${this.model} is Start`);
        }

  stop(){
            console.log(`The ${this.#brand} ${this.model} is stop`);
            }
}
    class Car extends Vehicle {
        constructor(brand, model) {
    
            super(brand=brand, model= model)
        }

        brandNew(){
            console.log(`${this.brand }  is Brand new`);
        }

        stop(){
            console.log("Your are stop")
        }
            
        
        
    }


var car =new Car("landcursior", "honda ")



car.stop()

var vehicle = new Vehicle ("Toyota" , "Corolla")

vehicle.stop()

