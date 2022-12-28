import formatNumberAsPrice from "scripts/39-formattingNumberAsPrice";

const {
  isParameterValidNumber,
  isNumberNegative,
  removeMinusSign,
  changeNumberToString,
  isFloatPoint,
  getFirstTwoFractionDigits,
  isFractionPartComplete,
  getWholePartDigits,
  divideStringIntoPartsArray,
  createFractionPart,
  createWholePart,
  numberToPrice,
} = formatNumberAsPrice;

describe("Formatting a number as price", () => {
  describe("isParameterValidNumber function", () => {
    it("it should return true if given parameter is type of number", () => {
      const testParam = 6;
      const testFunction = isParameterValidNumber(testParam);

      expect(testFunction).toBe(true);
    });

    it("it should return false if given parameter is not type of number", () => {
      const testParam = "6";
      const testFunction = isParameterValidNumber(testParam);

      expect(testFunction).toBe(false);
    });
  });

  describe("isNumberNegative function", () => {
    it("it should return true if given number is negative", () => {
      const testParam = -6;
      const testFunction = isNumberNegative(testParam);

      expect(testFunction).toBe(true);
    });

    it("it should return false if given number is positive", () => {
      const testParam = 9;
      const testFunction = isNumberNegative(testParam);

      expect(testFunction).toBe(false);
    });

    it("it should return false if given number equals 0", () => {
      const testParam = 0;
      const testFunction = isNumberNegative(testParam);

      expect(testFunction).toBe(false);
    });
  });

  describe("removeMinusSign function", () => {
    it("it should remove first character from the beginning of the given string", () => {
      const testParam = "-159";
      const testFunction = removeMinusSign(testParam);

      expect(testFunction).toBe("159");
    });
  });

  describe("changeNumberToString function", () => {
    it("it should change given number to type of string", () => {
      const testNumber = 12;
      const testFunction = changeNumberToString(testNumber);

      expect(testFunction).toBeInstanceOf(String);
    });
  });

  describe("isFisFloatPointloat function", () => {
    it("it should look for dot symbol in given string", () => {
      const testString = "123.45";
      const testFunction = isFloatPoint(testString);

      expect(testFunction).toBe(true);
    });

    it("it should look for dot symbol in given string", () => {
      const testString = "6789";
      const testFunction = isFloatPoint(testString);

      expect(testFunction).toBe(false);
    });
  });

  describe("getFirstTwoFractionDigits function", () => {
    it("it should return dot symbol and at most two first fraction digits from given string", () => {
      const testString = "123.45";
      const testFunction = getFirstTwoFractionDigits(testString);

      expect(testFunction).toBe(".45");
    });

    it("it should return dot symbol and at most two first fraction digits from given string", () => {
      const testString = "678.9";
      const testFunction = getFirstTwoFractionDigits(testString);

      expect(testFunction).toBe(".9");
    });
  });

  describe("isFractionPartComplete function", () => {
    it("it should return true if given fraction string is complete meaning it's length equals 3", () => {
      const testString = ".45";
      const testFunction = isFractionPartComplete(testString);

      expect(testFunction).toBe(true);
    });

    it("it should return false if given fraction string is incomplete meaning it's length unequals 3", () => {
      const testString = ".6";
      const testFunction = isFractionPartComplete(testString);

      expect(testFunction).toBe(false);
    });
  });

  describe("getWholePartDigits function", () => {
    it("it should return all whole part digits from given string", () => {
      const testString = "12345.67";
      const testFunction = getWholePartDigits(testString);

      expect(testFunction).toBe("12345");
    });

    it("it should return all whole part digits from given string", () => {
      const testString = "45.1";
      const testFunction = getWholePartDigits(testString);

      expect(testFunction).toBe("45");
    });
  });

  describe("createFractionPart function", () => {
    it("it should return fraction part of price string consisting of two digits and dot symbol", () => {
      const testString = "123";
      const testFunction = createFractionPart(testString);

      expect(testFunction).toBe(".00");
    });

    it("it should return fraction part of price string consisting of two digits and dot symbol", () => {
      const testString = "45.6";
      const testFunction = createFractionPart(testString);

      expect(testFunction).toBe(".60");
    });

    it("it should return fraction part of price string consisting of two digits and dot symbol", () => {
      const testString = "7.89";
      const testFunction = createFractionPart(testString);

      expect(testFunction).toBe(".89");
    });

    it("it should return fraction part of price string consisting of two digits and dot symbol", () => {
      const testString = "7.8943";
      const testFunction = createFractionPart(testString);

      expect(testFunction).toBe(".89");
    });
  });

  describe("divideStringIntoPartsArray function", () => {
    it("it should divide given string into three part pieces array", () => {
      const testString = "123456";
      const testFunction = divideStringIntoPartsArray(testString);

      expect(testFunction).toEqual(["123", "456"]);
    });

    it("it should divide given string into three part pieces array", () => {
      const testString = "1234567";
      const testFunction = divideStringIntoPartsArray(testString);

      expect(testFunction).toEqual(["1", "234", "567"]);
    });
  });

  describe("createWholePart function", () => {
    it("it should return whole part of price string consisting of digits and comma symbol every three digits", () => {
      const testString = "123";
      const testFunction = createWholePart(testString);

      expect(testFunction).toBe("123");
    });

    it("it should return whole part of price string consisting of digits and comma symbol every three digits", () => {
      const testString = "567.89";
      const testFunction = createWholePart(testString);

      expect(testFunction).toBe("567");
    });

    it("it should return whole part of price string consisting of digits and comma symbol every three digits", () => {
      const testString = "12345";
      const testFunction = createWholePart(testString);

      expect(testFunction).toBe("12,345");
    });

    it("it should return whole part of price string consisting of digits and comma symbol each three digits", () => {
      const testString = "12345678";
      const testFunction = createWholePart(testString);

      expect(testFunction).toBe("12,345,678");
    });
  });

  describe("numberToPrice function", () => {
    it("it should format given number to a price format - standard comma for every 3 numbers", () => {
      const testNumber = 1234567;
      const testFunction = numberToPrice(testNumber);

      expect(testFunction).toBe("1,234,567.00");
    });

    it("it should format given number to a price format - dot to separate cents that always has 2 digits", () => {
      const testNumber = 12.3;
      const testFunction = numberToPrice(testNumber);

      expect(testFunction).toBe("12.30");
    });

    it("it should format given number to a price format - dot to separate cents that always has 2 digits", () => {
      const testNumber = 45;
      const testFunction = numberToPrice(testNumber);

      expect(testFunction).toBe("45.00");
    });

    it("it should format given number to a price format - dot to separate cents, cents need to be truncated to 2 decimals", () => {
      const testNumber = 34.567;
      const testFunction = numberToPrice(testNumber);

      expect(testFunction).toBe("34.56");
    });

    it("it should format given number to a price format", () => {
      const testNumber = 123456789.0123;
      const testFunction = numberToPrice(testNumber);

      expect(testFunction).toBe("123,456,789.01");
    });

    it("it should format given number to a price format", () => {
      const testNumber = -1345.23;
      const testFunction = numberToPrice(testNumber);

      expect(testFunction).toBe("-1,345.23");
    });

    it("it should return 'Nan' if given parameter is not valid number", () => {
      const testString = "@";
      const testFunction = numberToPrice(testString);

      expect(testFunction).toBe("NaN");
    });
  });
});
