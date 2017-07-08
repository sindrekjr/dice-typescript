import { DefaultRandomProvider } from "./default-random-provider";
import { DiceResult } from "./interpreter";
import { DiceInterpreter } from "./interpreter/dice-interpreter";
import { CharacterStream, Lexer } from "./lexer";
import { DiceLexer } from "./lexer/dice-lexer";
import { Parser } from "./parser";
import { DiceParser } from "./parser/dice-parser";
import { RandomProvider } from "./random-provider";

export class Dice {
    private random: RandomProvider;
    constructor() { }
    roll(input: string | CharacterStream): DiceResult {
        const lexer = this.createLexer(input);
        const parser = this.createParser(lexer);
        const interpreter = this.createInterpreter();
        const exp = parser.parse();
        return interpreter.interpret(exp);
    }

    protected createLexer(input: string | CharacterStream): Lexer {
        return new DiceLexer(input);
    }

    protected createParser(lexer: Lexer): Parser {
        return new DiceParser(lexer);
    }

    protected createInterpreter(): DiceInterpreter {
        return new DiceInterpreter(null, new DefaultRandomProvider())
    }
};
