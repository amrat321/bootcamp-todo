"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://amrat:amrat@cluster0-qwjig.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
exports.default = mongoose_1.default;
