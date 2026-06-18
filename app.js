// 8. Create a base class Shape and derived classes Rectangle, Circle, and Triangle that implement a method getArea.

// Base class
class Shape {
    getArea() {
      throw new Error("Method 'getArea()' must be implemented in the derived class.");
    }
  }
  
  // Derived class: Rectangle
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  // Derived class: Circle
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Derived class: Triangle
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Example usage
  const rectangle = new Rectangle(5, 10);
  console.log(`Rectangle area: ${rectangle.getArea()}`);
  
  const circle = new Circle(7);
  console.log(`Circle area: ${circle.getArea()}`);
  
  const triangle = new Triangle(6, 8);
  console.log(`Triangle area: ${triangle.getArea()}`);
  