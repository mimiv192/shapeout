document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="new-shapes"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    if (event.target.value === 'triangle') {
        TriangleBtn.click();
    }
    else if (event.target.value === 'rectangle') {
        rectangleBtn.click();
    }
    else if (event.target.value === 'square') {
        squareBtn.click ();
    }
    else if (event.target.value === 'circle') {
        circleBtn.click ();
    }
    
}

function show(aval) {
    if (aval == 'triangle') {
    hiddenDiv.style.display='inline-block';
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
    }
  }

  function show(aval) {
    if (aval == 'rectangle') {
    hiddenDiv.style.display='inline-block';
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
    }
  }

  function show(aval) {
    if (aval == 'square') {
    hiddenDiv.style.display='inline-block';
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
    }
  }

  function show(aval) {
    if (aval == 'circle') {
    hiddenDiv.style.display='inline-block';
    Form.fileURL.focus();
    } 
    else{
    hiddenDiv.style.display='none';
    }
  }

const container = document.querySelector('#container-div');
const circleBtn = document.querySelector('#shape3');
const TriangleBtn = document.querySelector('#shape4');
const rectangleBtn = document.querySelector ('#shape2');
const squareBtn = document.querySelector ('#shape1');


let shapes = []
class Shape {
    constructor(shape) {
        this.element = document.createElement('div');
        this.element.className = shape;
        this.draw();

    }

    draw () {
        container.appendChild(this.element);
    }
}

class Circle extends Shape{
  constructor (radius) {
      super('circle');
      this.element.style.left = `${Math.floor(Math.random)*475+1}`;
      this.element.style.width = `${radius}px`;
      this.element.style.height = `${radius}px`;
      gridContainer
  };
}

circleBtn.addEventListener('click', () => {
    new Circle(100)
    
})

class Triangle extends Shape {
    constructor (height) {
        super ('triangle');

        this.element.style.width = 0;
        this.element.style.height = 0;
    };
}
TriangleBtn.addEventListener('click', () => {
    new Triangle (100)
})

class Rectangle extends Shape {
    constructor (width,height) {
      super ('rectangle')  
        this.width = `${width}px`;
        this.height = `${height}px`;
    };
}
rectangleBtn.addEventListener('click', () => {
    new Rectangle (100)

})

class Square extends Shape {
    constructor (sideLength) {
        super ('square')
        this.sideLength = `${sideLength}px`;
    };
}
squareBtn.addEventListener ('click', () => {
    new Square (100)

})
