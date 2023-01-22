
// Object Palette
const Palette = {
  getComplementary: function (baseColor) {
    return color(
      (hue(baseColor) + 180) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getAnalogous1: function (baseColor) {
    return color(
      (hue(baseColor) + 330) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getAnalogous2: function (baseColor) {
    return color(
      (hue(baseColor) + 30) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getSplitComp1: function (baseColor) {
    return color(
      (hue(baseColor) + 150) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getSplitComp2: function (baseColor) {
    return color(
      (hue(baseColor) + 210) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getTriadic1: function (baseColor) {
    return color(
      (hue(baseColor) + 120) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getTriadic2: function (baseColor) {
    return color(
      (hue(baseColor) + 240) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getTetradic: function (baseColor) {
    return color(
      (hue(baseColor) + 60) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getSquare1: function (baseColor) {
    return color(
      (hue(baseColor) + 90) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
  getSquare2: function (baseColor) {
    return color(
      (hue(baseColor) + 270) % 360,
      saturation(baseColor),
      brightness(baseColor)
    );
  },
};
