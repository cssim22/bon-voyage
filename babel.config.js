module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {targets: {node: 'current'}}] // add this
  ]
};

// module.exports = {
// 	plugins: [
// 		"@babel/plugin-proposal-class-properties",
// 		"@babel/plugin-transform-react-jsx",{
//       "throwIfNamespace": false, // defaults to true
//       "runtime": "automatic", // defaults to classic
//       "importSource": "custom-jsx-library" // defaults to react
//     },
//     '@babel/plugin-transform-runtime', 
//     '@babel/transform-async-to-generator',
//   ],
//   presets: [
//         "@babel/preset-env",
//         "@babel/preset-react"
//     ],
// }
