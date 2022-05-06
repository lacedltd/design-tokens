const fs = require("fs");
const path = require("path");
const sd = require("./styleDictionary");
const breakpoints = sd.getStyleDictionary().breakpoints;

if (!breakpoints) {
  throw new Error("breakpoints token is missing");
}

let css =
  `/**\n` +
  ` * Do not edit directly\n` +
  ` * Generated on ${new Date().toUTCString()}\n` +
  ` */\n\n` +
  "/* This file requires PostCSS to work */\n" +
  "/* See https://cssdb.org/#custom-media-queries */\n\n";

for (const breakpoint in breakpoints) {
  const breakpointValue = breakpoints[breakpoint].value;
  const max = `@custom-media --${breakpoint}-max (max-width: ${breakpointValue});\n`;
  const min = `@custom-media --${breakpoint}-min (min-width: ${breakpointValue});\n`;
  css += max + min;
}

fs.writeFileSync(
  path.join(__dirname, "../dist/custom-media.css"),
  css,
  "utf-8"
);