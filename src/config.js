const description =
  "Mysterious Capricorns pixel art design by Johnny Firpo swissmade art launched as a fixed set of 2,000 items Welcome to an alternate reality, a world of mysterious Capricorns created by Swissmade art. Some look normal. Some look weird. And some are a bit mysterious! Each Capricorn is unique and has randomly selected clothing and expressions with varying rarity. A few are super rare and have items that are unique. Data without warranty.";
const baseUri = "./build";

const layersOrder = [
  { name: "Background" },
  { name: "Body" },
  { name: "Collar" },
  { name: "Face" },
  { name: "Caps" },  
  { name: "Backdress" },
];

const format = {
  width: 600,
  height: 600,
};

const background = {
  generate: true,
  brightness: "80%",
};

const uniqueDnaTorrance = 2;

const editionSize = 2000;

module.exports = {
  layersOrder,
  format,
  editionSize,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
};
