// ? Exercise from CodeWars: Guess Who?, rank 6kyu
/**
 * Your task is to make a simple class called GuessWho.
 * The computer will try and guess your character, your job is to return back to the computer
 * a list of possible characters so that it can guess successfully.
 * You will need at least one method in the class called  guess, this is where the computer posts the guess.
 *
 * Returns:
 * * ["Correct! in n turns"]. Where n is the amount of turns the computer has taken, if the computer guesses the correct character.
 * * array of possible characters if a computer doesn't guess the correct character or characteristic.
 * * array of possible characters if a computer doesn't guess the correct characteristic.
 */

class GuessWho {
  characteristic = [
    ["Jean-Claude", ["Male", "Glasses", "Brown eyes", "Bald", "White hair", "Small mouth", "Small nose"]],
    ["Pierre", ["Male", "Mustache", "Brown eyes", "Brown hair", "Big mouth", "Small nose"]],
    ["Jean", ["Male", "White hair", "Big nose", "Big mouth", "Blue eyes"]],
    ["Amelie", ["Female", "Hat", "Brown hair", "Small mouth", "Long hair", "Brown eyes", "Small nose"]],
    ["Mirabelle", ["Female", "Black hair", "Earrings", "Small mouth", "Brown eyes", "Big nose"]],
    ["Isabelle", ["Female", "Blonde hair", "Glasses", "Hat", "Small mouth", "Small nose", "Brown eyes"]],
    ["Antonin", ["Male", "Brown eyes", "Black hair", "Small nose", "Big mouth"]],
    ["Bernard", ["Male", "Brown eyes", "Brown hair", "Small nose", "Hat"]],
    ["Owen", ["Male", "Blue eyes", "Blonde hair", "Small nose", "Small mouth"]],
    ["Dylan", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Small mouth", "Bald", "Beard"]],
    ["Herbert", ["Male", "Brown eyes", "Blonde hair", "Big nose", "Small mouth", "Bald"]],
    ["Christine", ["Female", "Blue eyes", "Blonde hair", "Small nose", "Small mouth", "Long hair"]],
    ["Luc", ["Male", "Brown eyes", "White hair", "Small nose", "Small mouth", "Glasses"]],
    ["Cecilian", ["Male", "Brown eyes", "Ginger hair", "Small nose", "Small mouth"]],
    ["Lionel", ["Male", "Brown eyes", "Brown hair", "Big nose", "Big mouth", "Mustache"]],
    ["Benoit", ["Male", "Brown eyes", "Brown hair", "Small mouth", "Small nose", "Mustache", "Beard"]],
    ["Robert", ["Male", "Blue eyes", "Brown hair", "Big nose", "Big mouth"]],
    ["Charline", ["Female", "Brown hair", "White hair", "Small nose", "Big mouth"]],
    ["Renaud", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Mustache"]],
    ["Michel", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Beard"]],
    ["Pierre-Louis", ["Male", "Blue eyes", "Brown hair", "Small nose", "Small mouth", "Bald", "Glasses"]],
    ["Etienne", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Small mouth", "Glasses"]],
    ["Henri", ["Male", "Brown eyes", "White hair", "Small nose", "Big mouth", "Hat"]],
    ["Damien", ["Male", "Brown eyes", "Blonde hair", "Small nose", "Big mouth", "Hat"]],
  ];

  attempts = 0;

  constructor(character) {
    this.character = this.characteristic.find((char) => char[0] === character);
  }

  characterIncludes(character, guess) {
    return character[0] === guess || character[1].includes(guess);
  }

  guess(guess) {
    this.attempts += 1;

    if (this.character[0] === guess) {
      return [`Correct! in ${this.attempts} turns`];
    }

    this.characterIncludes(this.character, guess)
      ? (this.characteristic = this.characteristic.filter((char) => this.characterIncludes(char, guess)))
      : (this.characteristic = this.characteristic.filter((char) => !this.characterIncludes(char, guess)));

    return this.characteristic.map((char) => char[0]);
  }
}

const guessWhoGame = new GuessWho("Amelie");
guessWhoGame.guess("Female");
guessWhoGame.guess("Hat");
guessWhoGame.guess("Isabelle");
