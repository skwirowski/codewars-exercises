import caesarCipherFunctions from "scripts/37-firstVariationOnCaesarCipher";

const {
  alphabetChars,
  transformStringToUpperCase,
  shiftCharacters,
  unshiftCharacters,
  findCharacterIndex,
  switchCharacters,
  findDivision,
  divideString,
  movingShift,
  demovingShift,
} = caesarCipherFunctions;

describe("First Variation On Caesar Cipher", () => {
  describe("transformStringToUpperCase function", () => {
    it("it should transform given string to uppercase", () => {
      const testString = "hello from another world";
      const testFunction = transformStringToUpperCase(testString);

      expect(testFunction).toBe("HELLO FROM ANOTHER WORLD");
    });
  });

  describe("shiftCharacters function", () => {
    it("it should slice specified number of characters from the beginning of the given string and place them at the end", () => {
      const testString = "abcdefghijk";
      const testShiftSize = 5;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("fghijkabcde");
    });

    it("it should slice specified number of characters from the beginning of the given string and place them at the end", () => {
      const testString = "abcdefghij";
      const testShiftSize = 0;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("abcdefghij");
    });

    it("it should slice specified number of characters from the beginning of the given string and place them at the end", () => {
      const testString = "abcdefghij";
      const testShiftSize = 10;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("abcdefghij");
    });

    it("it should slice specified number of characters from the beginning of the given string and place them at the end", () => {
      const testString = "abcdefghij";
      const testShiftSize = 2;
      const testFunction = shiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("cdefghijab");
    });
  });

  describe("unshiftCharacters function", () => {
    it("it should slice specified number of characters from the end of the given string and place them at the beginning", () => {
      const testString = "abcdefghijk";
      const testShiftSize = 5;
      const testFunction = unshiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("ghijkabcdef");
    });

    it("it should slice specified number of characters from the end of the given string and place them at the beginning", () => {
      const testString = "abcdefghij";
      const testShiftSize = 0;
      const testFunction = unshiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("abcdefghij");
    });

    it("it should slice specified number of characters from the end of the given string and place them at the beginning", () => {
      const testString = "abcdefghij";
      const testShiftSize = 10;
      const testFunction = unshiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("abcdefghij");
    });

    it("it should slice specified number of characters from the end of the given string and place them at the beginning", () => {
      const testString = "abcdefghij";
      const testShiftSize = 2;
      const testFunction = unshiftCharacters(testString, testShiftSize);

      expect(testFunction).toBe("ijabcdefgh");
    });
  });

  describe("findCharacterIndex function", () => {
    it("it should find index of first occurrence of a specified character in given string", () => {
      const testCharacter = "m";
      const testString = "abcdefghijklmnopqrstuvwxy";
      const testFunction = findCharacterIndex(testCharacter, testString);

      expect(testFunction).toBe(12);
    });

    it("it should find index of first occurrence of a specified character in given string", () => {
      const testCharacter = "z";
      const testString = "abcdefghijklmnopqrstuvwxy";
      const testFunction = findCharacterIndex(testCharacter, testString);

      expect(testFunction).toBe(-1);
    });
  });

  describe("switchCharacters function", () => {
    it("it should perform ciphering given string by shifting each character by shift value increasing by 1 each iteration", () => {
      const testString = "aaaaaaaaaa";
      const testBaseString = alphabetChars;
      const testShiftSize = 1;
      const testCallback = shiftCharacters;
      const testFunction = switchCharacters(testString, testBaseString, testShiftSize, testCallback);

      expect(testFunction).toBe("bcdefghijk");
    });

    it("it should perform ciphering given string by shifting each character by shift value increasing by 1 each iteration", () => {
      const testString = "abcdefghij";
      const testBaseString = alphabetChars;
      const testShiftSize = 1;
      const testCallback = shiftCharacters;
      const testFunction = switchCharacters(testString, testBaseString, testShiftSize, testCallback);

      expect(testFunction).toBe("bdfhjlnprt");
    });
  });

  describe("findDivision function", () => {
    it("it should divide given string by specified divisor and return rounded up quotient", () => {
      const testString = "abcdefghijklmnopqrstuvwxyz";
      const testDivisor = 5;
      const testFunction = findDivision(testString, testDivisor);

      expect(testFunction).toBe(6);
    });
  });

  describe("divideString function", () => {
    it("it should divide string into five pieces that has subsequently non-increasing lengths", () => {
      const testString = "abcdefghijklmnopq";
      const testParts = 5;
      const testFunction = divideString(testString, testParts);

      expect(testFunction).toEqual(["abcd", "efgh", "ijkl", "mnop", "q"]);
    });

    it("it should divide string into five pieces that has subsequently non-increasing lengths", () => {
      const testString = "abcdefghijklmnop";
      const testParts = 5;
      const testFunction = divideString(testString, testParts);

      expect(testFunction).toEqual(["abcd", "efgh", "ijkl", "mnop", ""]);
    });

    it("it should divide string into five pieces that has subsequently non-increasing lengths", () => {
      const testString = "abcdefghijk";
      const testParts = 5;
      const testFunction = divideString(testString, testParts);

      expect(testFunction).toEqual(["abc", "def", "ghi", "jk", ""]);
    });
  });

  describe("movingShift function", () => {
    it("it should cipher and divide given string using specified initial shift value", () => {
      const testString = "I should have known that you would have a perfect answer for me!!!";
      const testShifSize = 1;
      const testFunction = movingShift(testString, testShifSize);

      expect(testFunction).toEqual([
        "J vltasl rlhr ",
        "zdfog odxr ypw",
        " atasl rlhr p ",
        "gwkzzyq zntyhv",
        " lvz wp!!!",
      ]);
    });
  });

  describe("demovingShift function", () => {
    it("it should decipher and join given array using specified initial shift value", () => {
      const testArray = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
      const testShifSize = 1;
      const testFunction = demovingShift(testArray, testShifSize);

      expect(testFunction).toBe("I should have known that you would have a perfect answer for me!!!");
    });
  });
});
