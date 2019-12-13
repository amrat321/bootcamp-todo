"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schema_1 = __importDefault(require("./../model/schema"));
const router = express_1.default.Router();
// get all todos
router.get('/allTodos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield schema_1.default.find({});
    res.send(todos);
}));
router.get('/todo:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield schema_1.default.findOne({});
    res.send(todos);
}));
// add todo value
router.post('/addTodo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield new schema_1.default({
        tittle: req.body.tittle,
        descraption: req.body.descraption
    });
    // save in database
    value.save().then(() => {
        res.send({
            message: "Send Sucesfully!"
        });
    })
        .catch((err) => {
        console.log(err);
    });
}));
// update
router.put('/updateTodo:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.default.findOneAndUpdate({ _id: req.body.id }, { tittle: req.body.tittle, descraption: req.body.descraption });
        res.send({
            message: 'Update Success'
        });
    }
    catch (er) {
        res.send({
            message: er.message
        });
    }
}));
// delete
router.delete('/deleteTodo:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.default.findByIdAndDelete({ _id: req.body.id });
        res.send({
            message: 'Delete Success'
        });
    }
    catch (er) {
        res.send({
            message: er.message
        });
    }
}));
module.exports = router;
