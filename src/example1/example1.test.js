const example1 = require("./example1_after");

test("Deve calcular o valor de uma corrida de taxi em dias normais", function () {
  // Três passos do teste

  // given (dado que) Arrange
  const distance = 1000;
  const date = new Date("2021-07-10T10:00:00");

  // when (quando algo acontecer) Act
  const price = example1.calculateRide(distance, date);

  // then (então algo deve ser verificado) Assert
  expect(price).toBe(2100);
});

test("Deve calcular o valor de uma corrida de taxi nos domingos", function () {
  // Três passos do teste

  // given (dado que) Arrange
  const distance = 1000;
  const date = new Date("2021-07-11T10:00:00");

  // when (quando algo acontecer) Act
  const price = example1.calculateRide(distance, date);

  // then (então algo deve ser verificado) Assert
  expect(price).toBe(2900);
});

test("Deve calcular o preço de uma corrida após as 22h", () => {
  // Três passos do teste

  // given (dado que) Arrange
  const distance = 1000;
  const date = new Date("2021-07-11T22:00:00");

  // when (quando algo acontecer) Act
  const price = example1.calculateRide(distance, date);

  // then (então algo deve ser verificado) Assert
  expect(price).toBe(3900);
});

test("Deve lançar uma exception se a distância for passada com tipo errado", () => {
  // Três passos do teste

  // given (dado que) Arrange
  const date = new Date("2021-07-11T22:00:00");

  // when (quando algo acontecer) Act
  const distance = "1000";

  // then (então algo deve ser verificado) Assert
  expect(() => example1.calculateRide(distance, date)).toThrow(
    new Error("Invalid parameter distance")
  );
});
test("Deve lançar uma exception se a distância for menor ou igual a zero", () => {
  // Três passos do teste

  // given (dado que) Arrange
  const date = new Date("2021-07-11T22:00:00");

  // when (quando algo acontecer) Act
  const distance = -1000;

  // then (então algo deve ser verificado) Assert
  expect(() => example1.calculateRide(distance, date)).toThrow(
    new Error("Distance must be greater than zero")
  );
});

test("Deve lançar uma exception se a data for inválida", () => {
  // Três passos do teste

  // given (dado que) Arrange
  const distance = 1000;

  // when (quando algo acontecer) Act
  const date = "2021-07-11T22:00:00";

  // then (então algo deve ser verificado) Assert
  expect(() => example1.calculateRide(distance, date)).toThrow(
    new Error("Invalid parameter date")
  );
});

test("Deve ser de noite", () => {
  // Três passos do teste

  // given (dado que) Arrange
  const date = new Date("2022-08-08T23:00:00");

  // when (quando algo acontecer) Act
  const isOvernight = example1.isOvernight(date);

  // then (então algo deve ser verificado) Assert
  expect(isOvernight).toBeTruthy();
});

test("Deve ser domingo", () => {
  // Três passos do teste

  // given (dado que) Arrange
  const date = new Date("2022-08-14T22:00:00");

  // when (quando algo acontecer) Act
  const isSunday = example1.isSunday(date);

  // then (então algo deve ser verificado) Assert
  expect(isSunday).toBeTruthy();
});
