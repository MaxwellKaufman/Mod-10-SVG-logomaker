const { Shape, Circle, Square, Triangle } = require("./shapes");

describe("Shape", () => {
  describe("Instance", () => {
    it("should be an instance of Shape class", () => {
      const shape = new Shape();
      expect(shape).toBeInstanceOf(Shape);
    });
  });

  describe("Proper properties", () => {
    it("should set properties properly", async () => {
      const width = "300";
      const height = "200";
      const fill = "pink";
      const tFill = "white";
      const text = "LPS";

      const shape = new Shape(width, height, fill, tFill, text);
      expect(shape.width).toBe(width);
      expect(shape.height).toBe(height);
      expect(shape.fill).toBe(fill);
      expect(shape.tFill).toBe(tFill);
      expect(shape.text).toBe(text);
    });
  });
});

describe("Circle", () => {
  describe("Instance", () => {
    it("should be instance of Circle", async () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe("Inherited properties", () => {
    it("should inherit properties properly", async () => {
      const width = "300";
      const text = "LPS";

      const circle = new Circle(
        width,
        "200",
        "pink",
        "white",
        text,
        "150",
        "100",
        "50"
      );
      expect(circle.width).toBe(width);
      expect(circle.text).toBe(text);
    });
  });

  describe("Render data", () => {
    it("should render circle data", async () => {
      const circle = new Circle(
        "300",
        "200",
        "pink",
        "white",
        "LPS",
        "150",
        "100",
        "50"
      );
      expect(circle.renderCircle()).toBe(
        `<circle cx="150" cy="100" r="50" fill="pink" />`
      );
    });
  });
});

describe("Square", () => {
  describe("Instance", () => {
    it("should be instance of Square", async () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });

  describe("Inherited properties", () => {
    it("should inherit properties properly", async () => {
      const width = "300";
      const text = "LPS";

      const square = new Square(
        width,
        "200",
        "pink",
        "white",
        text,
        "100",
        "100",
        "100",
        "100"
      );
      expect(square.width).toBe(width);
      expect(square.text).toBe(text);
    });
  });

  describe("Render data", () => {
    it("should render square data", async () => {
      const square = new Square(
        "300",
        "200",
        "pink",
        "white",
        "LPS",
        "100",
        "100",
        "100",
        "100"
      );
      expect(square.renderSquare()).toBe(
        `<rect x="100" y="100" width="100" height="100" fill="pink" />`
      );
    });
  });
});

describe("Triangle", () => {
  describe("Instance", () => {
    it("should be instance of Triangle", async () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe("Inherited properties", () => {
    it("should inherit properties properly", async () => {
      const width = "300";
      const text = "LPS";

      const triangle = new Triangle(
        width,
        "200",
        "pink",
        "white",
        text,
        "220,10 325,210 120,210"
      );
      expect(triangle.width).toBe(width);
      expect(triangle.text).toBe(text);
    });
  });

  describe("Render data", () => {
    it("should render triangle data", async () => {
      const triangle = new Triangle(
        "300",
        "200",
        "pink",
        "white",
        "LPS",
        "220,10 325,210 120,210"
      );
      expect(triangle.renderTriangle()).toBe(
        `<polygon points="220,10 325,210 120,210" fill="pink" />`
      );
    });
  });
});
