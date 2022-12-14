function isValid(cpf) {
  if (!cpf) {
    throw new Error("CPF is required");
  }

  return verifyIfCpfIsValid(cpf);
}

function formatCpf(cpf) {
  const cpfWithoutSpecialCharacters = cpf.replace(/[^\d]+/g, "");

  const cpfLengthIsValid = cpf.length >= 11 && cpf.length <= 14;

  if (!cpfLengthIsValid) {
    throw new Error("Invalid cpf length");
  }

  return cpfWithoutSpecialCharacters;
}

function cpfWithoutVerificationDigits(cpf) {
  return cpf.split("").slice(0, 9);
}

function sumOfCpfDigitsMultipliedByDigitPosition(cpf) {
  return cpf.reduce(function (acc, current, index) {
    const multiplicationFactor = index + 2;
    if (index > 10) return acc;
    const result = multiplicationFactor * Number.parseInt(current);
    return acc + result;
  }, 0);
}

function calculateFirstVerificationDigit(cpf) {
  const cpfWithoutVerificationDigitsArray =
    cpfWithoutVerificationDigits(cpf).reverse();

  const sumOfCpfDigits = sumOfCpfDigitsMultipliedByDigitPosition(
    cpfWithoutVerificationDigitsArray
  );

  return sumOfCpfDigits % 11 < 2 ? 0 : 11 - (sumOfCpfDigits % 11);
}

function calculateSecondVerificationDigit(cpf, firstDigit) {
  const cpfWithoutVerificationDigitsArray = addFirstDigitToCpfArray(
    cpf,
    firstDigit
  );

  const sumOfCpfDigits = cpfWithoutVerificationDigitsArray.reduce(
    (acc, current, index) => {
      const multiplicationFactor = index + 2;
      if (index > 11) return acc;
      const result = multiplicationFactor * Number.parseInt(current);
      return acc + result;
    },
    0
  );

  const sumOfCpfDigitsMultipliedByDigitPositionDividedBy11Rest =
    sumOfCpfDigits % 11;

  if (sumOfCpfDigitsMultipliedByDigitPositionDividedBy11Rest < 2) {
    return 0;
  }

  return 11 - sumOfCpfDigitsMultipliedByDigitPositionDividedBy11Rest;
}

function addFirstDigitToCpfArray(cpf, firstDigit) {
  let cpfWithFirstDigit = cpfWithoutVerificationDigits(cpf);
  cpfWithFirstDigit[9] = firstDigit.toString();
  return cpfWithFirstDigit.reverse();
}

function verifyIfCpfIsValid(cpf) {
  cpf = formatCpf(cpf);

  let cpfDigitArray = cpf.split("");

  const firstDigit = calculateFirstVerificationDigit(cpf);

  const secondDigit = calculateSecondVerificationDigit(cpf, firstDigit);

  return (
    cpfDigitArray[9] === firstDigit.toString() &&
    cpfDigitArray[10] === secondDigit.toString()
  );
}

console.log(isValid("111.444.777-05"));
console.log(isValid("123.456.789-99"));
console.log(isValid("935.411.347-80"));
