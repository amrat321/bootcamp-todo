"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const database_1 = __importDefault(require("./config/database"));
const db = database_1.default.connection;
db.on('error', console.error.bind(console, 'connection failed'));
db.once('open', function () {
    console.log('succesfully connected');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('started');
});
app.get('/', (req, res) => {
    res.send({
        message: "It is working now!"
    });
});
app.use(express_1.default.json());
app.use('/', require('./src/router'));
