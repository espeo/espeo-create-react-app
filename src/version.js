const { resolve, relative } = require("path");
const { writeFileSync } = require("fs-extra");

console.log("Generating version.ts file");

const date = new Date();
const file = resolve(__dirname, "..", "src", "environments", "version.ts");
writeFileSync(
  file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
export const BUILD_DATE = ${JSON.stringify(
    date.toLocaleString("en-US"),
    null,
    2
  )};
`,
  { encoding: "utf-8" }
);

console.log(`Wrote version to ${relative(resolve(__dirname, ".."), file)}`);
