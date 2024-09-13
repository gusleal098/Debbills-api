"use strict";
// 1º CENÁRIO - Saber se a biblioteca foi escrita com typescript, se ela possui as definições de tipos
// 2º CENÁRIO - Quando a biblioteca foi escrita com JavaScript não tem suporte pra TypeScript, mas foi feito em um outro pacote as definiçõe de tipos pra poder ser utilizado com TypeScript
// Toda definição de tipo de bibliotecas externas, o @types/nome da biblioteca vem antes
// Na documentação da biblioteca, se tiver o 'DT' ao lado do nome, é porque ela tem definições de tipos
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express")); // npm i -D @types/express
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.listen(3333, () => console.log('🚀 App is running at port 3333!'));
