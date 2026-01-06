import Crews from '../model/Crews.js';
import Pairs from '../model/Pairs.js';

class MatchingController {
  pairs;

  constructor() {
    this.pairs = { 백엔드: {}, 프론트엔드: {} };
  }

  runPairMatching(course, level, mission) {
    const crews = new Crews(course);
    const shffleCrews = crews.getShuffle();

    if (!this.pairs[course][level]) this.pairs[course][level] = {};

    let pairs = [];
    for (let i = 0; i < shffleCrews.length - 1; i += 2) {
      const pair = new Pairs(shffleCrews.slice(i, i + 2));

      if (i === shffleCrews.length - 3 && shffleCrews.length % 2 !== 0)
        pair.addCrew(shffleCrews[i + 2]);

      pairs.push(pair);
    }

    this.pairs[course][level][mission] = pairs;
  }
}

export default MatchingController;
