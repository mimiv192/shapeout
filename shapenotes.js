class Shape {
constructor (num) {
    console.log ('this is the parent constructor');
    console.log(num);
    }
} 
class Circle extends Shape {
    constructor () {
        super(10);
    }
}

new Circle ();


class Shape {
    constructor (height, width) {

    }
}

class Circle extends Shape {
    constructor () {
        super ();    
    }
}
new Circle ();

// function insertCircle() {
//     new Circle (...randomLocation());
// }

// function randomLocation () {
//     return {
//         Math.floor(Math.random () * MAX)
//         Math.floor(Math.random () * MAX)
//     }
// }


if (left + width > containerWidth)



//         gridContainer.appendChild(this.shape);
//         this.removeShape(); 
//     }
  
//       removeShape () {
//       this.shape.addEventListener ('dblclick', () => {
//           gridContianer. removeChild(this.shape);
//       });
//   }
  