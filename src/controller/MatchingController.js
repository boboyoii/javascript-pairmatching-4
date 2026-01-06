import Crews from '../model/Crews.js';

class MatchingController {
  pairs;

  constructor() {
    this.pairs = { 백엔드: {}, 프론트엔드: {} };
  }

  runPairMatching(course, level, mission) {
    const crews = new Crews(course);
  }
}

export default MatchingController;
