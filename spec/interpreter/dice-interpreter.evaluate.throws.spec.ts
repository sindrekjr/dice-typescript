import * as Ast from "../../src/ast";
import * as Interpreter from "../../src/interpreter";
import { MockRandomProvider } from "../helpers/mock-random-provider";

describe("DiceInterpreter", () => {
    describe("evaluate", () => {
        it("throws on unrecognized node type (face).", () => {
            const face = Ast.Factory.create(<any>"Face");

            const dice = Ast.Factory.create(Ast.NodeType.Dice);
            dice.addChild(Ast.Factory.create(Ast.NodeType.Integer).setAttribute("value", 2));
            dice.addChild(Ast.Factory.create(Ast.NodeType.DiceSides).setAttribute("value", 6));

            face.addChild(dice);

            const interpreter = new Interpreter.DiceInterpreter(null, new MockRandomProvider(4));
            const errors: Interpreter.ErrorMessage[] = [];
            expect(interpreter.evaluate(dice, errors)).toBe(8);
        });
    });
});
