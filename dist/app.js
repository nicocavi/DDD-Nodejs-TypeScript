"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const puerto = 3000;
app.get('/', (req, res) => {
    res.send('Hola Nube Colectiva !');
});
app.listen(puerto, () => {
    return console.log(`El Servidor esta funcionado en el puerto ${puerto}`);
});
//# sourceMappingURL=app.js.map