import globals from "globals";
import pluginJs from "@eslint/js"; 
import daStyle from 'eslint-config-dicodingacademy';
 
// exportdefault [
//   daStyle,
//   // other config style
// ];

export default [ 
    {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}}, 
    {languageOptions: { globals: globals.node }},
    pluginJs.configs.recommended,
];