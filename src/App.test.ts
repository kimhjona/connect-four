import { get_current_player, is_state_valid } from "./helperTestFunctions";

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
  expect(get_current_player(gameState)).toBe("yellow");
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
  expect(get_current_player(gameState)).toBe("red");
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
  expect(is_state_valid(gameState)).toBe(true);
});

it("is state valid? 2", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "red", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
  ];
  expect(is_state_valid(gameState)).toBe(false);
});

it("is state valid? 3", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "red", "red", "yellow"],
  ];
  expect(is_state_valid(gameState)).toBe(false);
});

it("is state valid? 2", () => {
  const gameState = [
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "red", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "red", "none", "yellow"],
  ];
  expect(is_state_valid(gameState)).toBe(false);
});

it("is state valid? 2", () => {
  const gameState = [
    ["none", "none", "none", "none", "red", "yellow"],
    ["none", "none", "none", "red", "yellow", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
    ["none", "none", "none", "none", "none", "red"],
    ["none", "none", "none", "none", "none", "yellow"],
  ];
  expect(is_state_valid(gameState)).toBe(true);
});
