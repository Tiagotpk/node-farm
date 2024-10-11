// const fs = require("fs");


// //////////////////// FILES

// //Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `Isso é o que sabemos sobre o Abacate: ${textIn}.\nCriado em: ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("Arquivo criado!");

// // Non-Blocking, Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Seu arquivo foi criado! 😉");
//       });
//     });
//   });
// });
