import fs from 'fs';
import { COURSES } from '../constants/pairmatching.js';
import { Random } from '@woowacourse/mission-utils';

class Crews {
  #course;
  #names;

  constructor(course) {
    this.#course = COURSES[course];
    this.#names = this.#readCrew();
  }

  #readCrew() {
    const data = fs.readFileSync(`public/${this.#course}-crew.md`, 'utf8');
    return data.split('\n').slice(0, -1);
  }

  getShuffle() {
    const indices = this.#names.map((_, index) => index);
    const shuffledIndices = Random.shuffle(indices);
    const shuffledCrew = shuffledIndices.map((index) => this.#names[index]);
    return shuffledCrew;
  }
}

export default Crews;
