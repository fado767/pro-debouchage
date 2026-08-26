// Builds the v2 canvas artboards from page-template.js. Run: node make-canvas.js
const fs=require("fs"),path=require("path");const {FR,NL,pageHtml}=require("./page-template.js");
const EN=require("./copy-en.js");
const out=(n,h)=>fs.writeFileSync(path.join(__dirname,n),h,"utf8");
out("Main.dc.html",pageHtml(FR));out("FirstScreen.dc.html",pageHtml(FR));out("Desktop.dc.html",pageHtml(FR,{noBar:true}));
out("MobileNL.dc.html",pageHtml(NL));out("MobileEN.dc.html",pageHtml(EN));
console.log("artboards written");
