class Pairs {
  #names;

  constructor(names) {
    this.#names = names;
  }

  getNames() {
    return [...this.#names];
  }

  addCrew(name) {
    this.#names.push(name);
  }

  isSame(names) {
    return names.every((name) => this.#names.includes(name));
  }
}

export default Pairs;
