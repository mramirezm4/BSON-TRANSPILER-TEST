const transpiler = require('bson-transpilers');
const input = 'javascript';
const string =`{ item: "motocicleta", anno: Int32(2010), tags: ["pistera", "gasolina"], cil_pot: [Int32("4"), 34.3] }`;

try {
  output = 'java';
  compiledString = transpiler[input][output].compile(string);
  console.log("BSON transpiler (" + input + " --> " + output +"):\n"+ compiledString + "\n");
  
  output = 'csharp';
  compiledString = transpiler[input][output].compile(string);
  console.log("BSON transpiler (" + input + " --> " + output +"):\n"+ compiledString + "\n");
  
  output = 'python';
  compiledString = transpiler[input][output].compile(string);
  console.log("BSON transpiler (" + input + " --> " + output +"):\n"+ compiledString + "\n");
} catch (error) {
  console.error(error);
}

