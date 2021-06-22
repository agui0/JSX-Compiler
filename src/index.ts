import { JSXCompiler } from "./compiler";
const path = require("path");
const fs = require("fs");

const compiler = new JSXCompiler.Compiler();
// compileTemplates('auth',true);
// compileTemplates('vform-item',true);
// compileTemplates('vform',true);
compileTemplates('auth');
// compileTemplates('vform-item');
// compileTemplates('vform');
// compileTemplates('ShareImage');
// compiler.compile(`<span class="number">123</span>`)
// console.log(
//   JSON.stringify(
//     compiler.tokens,
//     (key, value) => {
//       if (key === "type") return value.toString();
//       return value;
//     },
//     2
//   )
// );

function compileTemplates(fileName: string) {
  const ast = compiler.compileFile({
    path: path.resolve(__dirname, `templates/${fileName}.dxml`)
  });

  fs.writeFileSync(
    path.resolve(
      __dirname,
      `./targets/${fileName}-AST.json`
    ),
    JSON.stringify(
      ast,
      (key, value) => {
        if (key === "type") return value.toString();
        return value;
      },
      2
    )
  );
}
