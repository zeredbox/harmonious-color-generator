# hsb-harmonic-color : Harmonious color palette generator

Project written for with P5.js library.
**[See the project live on p5js.org](https://editor.p5js.org/zeredbox/full/0QXdu8-SU)**.
Original script from [Simon Tiger](https://editor.p5js.org/simontiger/sketches/MVVT1T01n).

## Generate harmonious color palette
When you choose colours in a completely random way, the result is not always harmonious. The HSB color model (for Hue, Saturation, Brightness) rather than RGB allows, from one colour, to easily find colours that go well together.

The hsb-harmonic-color allows you to : 
- choose a base colour (manually or randomly)
- display the colours that match the base colour in six different modes (complementary, analogous, split complementary, triadic, tetradic, square)
- by moving the mouse over the chosen colour you can see the values in RGB and HSB.

**palette.js** file contains all the elements to be integrated into another project. Examples of calls to palette.js are shown in **sketch.js**.

![hsb harmonic color](/hsb-harmonic.png)

