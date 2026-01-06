import Crews from '../model/Crews.js';
import Pairs from '../model/Pairs.js';
import Validator from '../utils/Validator.js';
import OutputView from '../view/OutputView.js';

class MatchingController {
  pairs;

  constructor() {
    this.pairs = { 백엔드: {}, 프론트엔드: {} };
  }

  runPairMatching(course, level, mission) {
    const crews = new Crews(course);
    const shffleCrews = crews.getShuffle();

    if (!this.pairs[course][level]) this.pairs[course][level] = {};

    let pairs;
    let success;

    for (let time = 1; time <= 3; time++) {
      pairs = [];
      success = true;
      for (let i = 0; i < shffleCrews.length - 1; i += 2) {
        const pair = new Pairs(shffleCrews.slice(i, i + 2));

        if (i === shffleCrews.length - 3 && shffleCrews.length % 2 !== 0)
          pair.addCrew(shffleCrews[i + 2]);

        if (!this.#checkUniquPair(pair, course, level, mission)) {
          success = false;
          break;
        }

        pairs.push(pair);
      }
      if (success) break;
    }

    Validator.isValidMachingSuccess(success);

    this.pairs[course][level][mission] = pairs;
    OutputView.printMatchingResult(this.pairs[course][level][mission]);
  }

  #checkUniquPair(pair, course, level, thisMission) {
    const names = pair.getNames();
    const sameLevel = this.pairs[course][level];

    for (const mission in sameLevel) {
      if (thisMission === mission) continue;
      sameLevel[mission].forEach((pair) => {
        if (pair.isSame(names)) return false;
      });
    }

    return true;
  }

  showPairMatching(course, level, mission) {
    const matchingResult = this.pairs[course][level][mission];
    Validator.isExistMatchingResult(matchingResult);
    OutputView.printMatchingResult(this.pairs[course][level][mission]);
  }

  reset() {
    this.pairs = { 백엔드: {}, 프론트엔드: {} };
    OutputView.printReset();
  }
}

export default MatchingController;
