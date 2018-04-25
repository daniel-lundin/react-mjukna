import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/mjukna.js",
  output: {
    file: "dist/react-mjukna.js",
    format: "umd",
    name: "mjukna"
  },
  plugins: [
    resolve({
      module: true,
      modulesOnly: true
    })
  ]
};
