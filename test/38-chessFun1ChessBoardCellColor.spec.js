import chessFunChessBoardCellColor from "scripts/38-chessFun1ChessBoardCellColor";

const { getCharCode, isEven, determineCellColor, chessBoardCellColor } = chessFunChessBoardCellColor;

describe("Chess Fun #1: Chess Board Cell Colors", () => {
  describe("getCharCode function", () => {
    it("it should get ASCII code for given character", () => {
      const testCharacter = "A";
      const testFunction = getCharCode(testCharacter);

      expect(testFunction).toBe(65);
    });

    it("it should get ASCII code for given character", () => {
      const testCharacter = "Ab";
      const testFunction = getCharCode(testCharacter, 1);

      expect(testFunction).toBe(98);
    });
  });

  describe("isEven function", () => {
    it("it should return true if given number is even otherwise should return false", () => {
      const testNumber = 65;
      const testFunction = isEven(testNumber);

      expect(testFunction).toBe(false);
    });

    it("it should return true if given number is even otherwise should return false", () => {
      const testNumber = 66;
      const testFunction = isEven(testNumber);

      expect(testFunction).toBe(true);
    });
  });

  describe("determineCellColor function", () => {
    it("it should determine chess board cell color according to given coordinate's character code and number", () => {
      const testCharacterCode = 65;
      const testNumber = 1;
      const testFunction = determineCellColor(testCharacterCode, testNumber);

      expect(testFunction).toBe("dark color");
    });

    it("it should determine chess board cell color according to given coordinate's character code and number", () => {
      const testCharacterCode = 66;
      const testNumber = 2;
      const testFunction = determineCellColor(testCharacterCode, testNumber);

      expect(testFunction).toBe("dark color");
    });

    it("it should determine chess board cell color according to given coordinate's character code and number", () => {
      const testCharacterCode = 65;
      const testNumber = 2;
      const testFunction = determineCellColor(testCharacterCode, testNumber);

      expect(testFunction).toBe("light color");
    });

    it("it should determine chess board cell color according to given coordinate's character code and number", () => {
      const testCharacterCode = 66;
      const testNumber = 3;
      const testFunction = determineCellColor(testCharacterCode, testNumber);

      expect(testFunction).toBe("light color");
    });
  });

  describe("chessBoardCellColor function", () => {
    it("it should determine if two chess board cells are the same color according to given cells' coordinates", () => {
      const testCoordinateOne = "C1";
      const testCoordinateTwo = "G8";
      const testFunction = chessBoardCellColor(testCoordinateOne, testCoordinateTwo);

      expect(testFunction).toBe(false);
    });

    it("it should determine if two chess board cells are the same color according to given cells' coordinates", () => {
      const testCoordinateOne = "E5";
      const testCoordinateTwo = "H6";
      const testFunction = chessBoardCellColor(testCoordinateOne, testCoordinateTwo);

      expect(testFunction).toBe(true);
    });
  });
});
