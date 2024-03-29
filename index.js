const index = require("./index.json");
const biome = require("./biome.json");
const calls = require("./calls.json");

const utilityNature = require("@random-tables/utility-nature");

module.exports = {
  ...index,
  tableData: {
    biome,
  },
  requirements: [utilityNature],
  calls,
};
