// ? Exercise from CodeWars: Jurassic Word, rank 6kyu

class JurassicWord {
  constructor() {
    this.deadDino = "_C     C}>";
    this.flowers = "iii     iii";
    this.leaves = "|||     |||";
    this.tRex = "VvvvV";
    this.velociraptor = "vvvvv";
    this.brachiosaurus = "uuuuu";
    this.triceratops = "uuVuu";
  }

  foodParts(sceneFood) {
    return { start: sceneFood.slice(0, 2).trim(), end: sceneFood.slice(-3) };
  }

  foodText(scene) {
    const foods = [{ "a dead dino": this.deadDino }, { flowers: this.flowers }, { leaves: this.leaves }];

    for (const food of foods) {
      const [text, value] = Object.entries(food)[0];
      const parts = this.foodParts(value);
      const hasStartFood = scene.startsWith(parts.start);
      const hasEndFood = scene.endsWith(parts.end);

      if (hasStartFood && hasEndFood) {
        return text;
      }
    }

    return "something";
  }

  dinoText(scene, food) {
    const dinos = [
      { "A T-Rex": "VvvvV" },
      { "A velociraptor": "vvvvv" },
      { "A brachiosaurus": "uuuuu" },
      { "A triceratops": "uuVuu" },
    ];

    for (const dino of dinos) {
      const [text, value] = Object.entries(dino)[0];
      const start = food === "a dead dino" ? 2 : 3;

      if (scene.slice(start, -3).includes(value)) {
        return text;
      }
    }

    return "Something";
  }

  lunchTime(scene) {
    const foodText = this.foodText(scene);
    let dinoText = this.dinoText(scene, foodText);

    if (dinoText === "A triceratops") {
      if (foodText === "leaves" || foodText === "a dead dino") {
        dinoText = "Something";
      }
    }

    if (dinoText === "A brachiosaurus") {
      if (foodText === "a dead dino") {
        dinoText = "Something";
      }
    }

    if (dinoText === "A T-Rex" || dinoText === "A velociraptor") {
      if (foodText === "leaves" || foodText === "flowers") {
        dinoText = "Something";
      }
    }

    return `${dinoText} is eating ${foodText}.`;
  }
}

const check = new JurassicWord();
console.log(check.lunchTime("_CVvvvVC}>"));
console.log(check.lunchTime("iiiuuVuuiii"));
console.log(check.lunchTime("|||vvvvv|||"));
console.log(check.lunchTime("|.|uuuuu|||"));
console.log(check.lunchTime("|||uuVuu|||"));
