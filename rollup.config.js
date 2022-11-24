import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      del({ targets: ["dist/*"] }),
      postcss(),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
