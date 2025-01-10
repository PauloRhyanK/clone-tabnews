const calculadora = require("../models/calculadora.js");

test("Função Calculadora 10 + 10 = 20", () => {
  resp = calculadora.somar(10, 10);
  expect(resp).toBe(20);
});

test("Função Calculadora 500 + 10 = 510", () => {
  resp = calculadora.somar(500, 10);
  expect(resp).toBe(510);
});

test("Função Calculadora 10 + a = false", () => {
  resp = calculadora.somar(10, "a");
  expect(resp).toBe(false);
});

test("Função Calculadora 10 + '10' = false", () => {
  resp = calculadora.somar(10, "10");
  expect(resp).toBe(false);
});

test("Função Calculadora (sem parametros) = false", () => {
  resp = calculadora.somar();
  expect(resp).toBe(false);
});
