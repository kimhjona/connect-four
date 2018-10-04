import { getCurrentPlayer, isStateValid } from "./helperTestFunctions";

it("who's turn is it?", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "none"],
  ];
  expect(getCurrentPlayer(gameState)).toBe("yellow");
});

it("who's turn is it? 2", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
  ];
  expect(getCurrentPlayer(gameState)).toBe("red");
});

it("is state valid?", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
  ];
  expect(isStateValid(gameState)).toBe(true);
});

it("is state valid? with random floating red piece", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "red", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
  ];
  expect(isStateValid(gameState)).toBe(false);
});

it("is state valid? valid columns but too many reds", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "red", "red", "yellow"],
  ];
  expect(isStateValid(gameState)).toBe(false);
});

it("is state valid? another floating red piece", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "red", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "red", "none", "yellow"],
  ];
  expect(isStateValid(gameState)).toBe(false);
});

it("is state valid? valid state", () => {
  const gameState = [
    ["none", "none", "none", "none", "red", "yellow"],
    ["none", "none", "none", "red", "yellow", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
  ];
  expect(isStateValid(gameState)).toBe(true);
});
