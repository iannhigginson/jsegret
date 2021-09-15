module.exports = {
 "env": {
  "browser": true,
  "commonjs": true,
  "es6": true
 },
 "extends": "eslint:recommended",
 "parserOptions": {
  "ecmaFeatures": {
   "jsx": true
  },
  "ecmaVersion": 2020,
  "sourceType": "module"
 },
 "plugins": [
  "react"
 ],
 "rules": {
  "indent": [
   "error",
   1
  ],
  "linebreak-style": [
   "error",
   "windows"
  ],
  "quotes": [
   "error",
   "single"
  ],
  "semi": [
   "error",
   "always"
  ]
 }
};
