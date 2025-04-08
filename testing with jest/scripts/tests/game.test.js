import expect from "expect";

const { test } = require("picomatch");
const { game, } = require("../game.js");
const { describe } = require("yargs");
const { beforeAll, beforeEach, afterEach } = require("jest-circus");
const { game, newGame, showScore, addTurn, lightsOn, showTurns } = require("../game");
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game.js).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game.js).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game.js).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game.js).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.js.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should be one move in the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should display")
});

describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test("addTurn adds a new to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2)
    });
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
    test("showTurns should update game.turnNumber", () => {
        game.turnNumber = 42;
        showTurn();
        expect(game.turnNumber).toBe(0);
});
});