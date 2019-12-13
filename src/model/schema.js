"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.model = new mongoose_1.default.Schema({
    tittle: {
        type: String,
        required: true
    },
    descraption: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});
const User = mongoose_1.default.model('user', exports.model);
exports.default = User;
