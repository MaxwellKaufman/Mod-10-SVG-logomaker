const fs = require("fs");

// Base class for all shapes
class Shape {
  constructor(width, height, fill, tFill, text) {
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.tFill = tFill;
    this.text = text;
  }

  // Method to create the logo file
  makeLogo(shapeMarkup) {
    fs.writeFileSync("logo.svg", shapeMarkup);
  }
}

// Circle shape class
class Circle extends Shape {
  constructor(width, height, fill, tFill, text, cx, cy, r) {
    super(width, height, fill, tFill, text);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }

  // Method to render the circle shape
  renderCircle() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
  }

  // Method to create the logo with circle shape
  makeLogo() {
    const shapeMarkup = `<svg width="${this.width}" height="${
      this.height
    }" version="1.1" xmlns="http://www.w3.org/2000/svg">
                ${this.renderCircle()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
                  this.tFill
                }">${this.text}</text> 
                </svg>`;
    super.makeLogo(shapeMarkup);
  }
}

// Square shape class
class Square extends Shape {
  constructor(width, height, fill, tFill, text, x, y, sWidth, sHeight) {
    super(width, height, fill, tFill, text);
    this.x = x;
    this.y = y;
    this.sWidth = sWidth;
    this.sHeight = sHeight;
  }

  // Method to render the square shape
  renderSquare() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.sWidth}" height="${this.sHeight}" fill="${this.fill}" />`;
  }

  // Method to create the logo with square shape
  makeLogo() {
    const shapeMarkup = `<svg width="${this.width}" height="${
      this.height
    }" version="1.1" xmlns="http://www.w3.org/2000/svg">
                ${this.renderSquare()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
                  this.tFill
                }">${this.text}</text> 
                </svg>`;
    super.makeLogo(shapeMarkup);
  }
}

// Triangle shape class
class Triangle extends Shape {
  constructor(width, height, fill, tFill, text, points) {
    super(width, height, fill, tFill, text);
    this.points = points;
  }

  // Method to render the triangle shape
  renderTriangle() {
    return `<polygon points="${this.points}" fill="${this.fill}" />`;
  }

  // Method to create the logo with triangle shape
  makeLogo() {
    const shapeMarkup = `<svg width="${this.width}" height="${
      this.height
    }" version="1.1" xmlns="http://www.w3.org/2000/svg">
                ${this.renderTriangle()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
                  this.tFill
                }">${this.text}</text> 
                </svg>`;
    super.makeLogo(shapeMarkup);
  }
}

module.exports = {
  Shape,
  Square,
  Circle,
  Triangle,
};
