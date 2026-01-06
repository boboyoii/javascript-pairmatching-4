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
}

export default Pairs;
