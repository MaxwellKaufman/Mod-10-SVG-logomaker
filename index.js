const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes/shapes");
const fs = require("fs");

async function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Type 3 letters for your logo",
      name: "text",
    },
    {
      type: "input",
      message: "Type a color for your letters",
      name: "tFill",
    },
    {
      type: "list",
      message: "Choose a shape",
      choices: ["square", "circle", "triangle"],
      name: "shape",
    },
    {
      type: "input",
      message: "Type a color for your shape",
      name: "fill",
    },
  ]);
}

async function createLogo() {
  const logo = await promptUser();

  const { text, tFill, shape, fill } = logo;

  if (text.length === 3) {
    switch (shape) {
      case "circle":
        return new Circle("300", "200", fill, tFill, text, "150", "100", "50");
      case "square":
        return new Square(
          "300",
          "200",
          fill,
          tFill,
          text,
          "100",
          "67",
          "100",
          "100"
        );
      case "triangle":
        return new Triangle(
          "300",
          "200",
          fill,
          tFill,
          text,
          "150,67 100,134 200,134"
        );
    }
  } else {
    console.log("Please type 3 characters for your logo text");
    return null;
  }
}

async function main() {
  const logo = await createLogo();
  if (logo) {
    logo.makeLogo();
  }
}

main();
