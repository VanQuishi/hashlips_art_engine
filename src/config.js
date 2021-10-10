"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://NewUriToReplace";

// const layerConfigurations = [
//   {
//     growEditionSizeTo: 10,
//     layersOrder: [
//       { name: "Background" },
//       { name: "Eyeball" },
//       { name: "Eye color" },
//       { name: "Iris" },
//       { name: "Shine" },
//       { name: "Bottom lid" },
//       { name: "Top lid" },
//     ],
//   },
// ];

const layerConfigurations = [
  {
    growEditionSizeTo: 4,
    layersOrder: [ 
      { name: "Background" },  
      { name: "Head" }, 
      { name: "Headwear" },   
      { name: "Body" },
      { name: "Shirt" },
      { name: "Pants" },
      { name: "Weapon" },      
      { name: "Card" },
      { name: "Card Symbol" },           
      { name: "Eyes" },
             
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
