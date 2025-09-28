# 🔢 100Devs Push Project001: Calculator

## Description
A simple calculator built with HTML, CSS, and JS.

## Features
- Clickable buttons for numbers and operators
- Prevents multiple decimals in a number
- Allows negative numbers (must enter `-` as the first input)
- Prevents inputting multiple operators in a row (last entered operator overwrites others)
- Evaluates expressions with correct order of operations
- Automatically resizes font to fit results on the display
- Clear button to reset everything
- Refactored to use classes for better organization and use of OOP principles

## How It Works
- Calculator class creates a calculator that stores numbers and operators in an array as you click on the web interface 
- Evaluator class is instantiated when `"="` is clicked to evaluate the expression array
- Evaluator loops through array searching for operators and executing them according to mathematical order of operations
- The result is displayed on screen, font size adjusts automatically if needed to fit in the results window

![Calculator Screenshot](screenshot.jpg)

## Project Structure
- `index.html`: main HTML file
- `myStyleSheet.css`: calculator styling
- `main.js`: calculator functions and interaction handling

## Usage
1. Clone or download this repository
2. Open `index.html` in your browser
3. Start clicking buttons to calculate something!

## Limitations and areas for future improvements:
- Keyboard input is not supported
- No parentheses or advanced operations available

## Changelog
- v1.0
    - Initial calculator with functional structure
- v1.1
    - Converted calculator from functional style to class-based structure
    - Fixed display of "Infinity" for division by 0; now displays "Undefined"
