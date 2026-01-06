import MatchingController from './controller/MatchingController.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  matchingController;

  constructor() {
    this.matchingController = new MatchingController();
  }

  async run() {
    while (true) {
      const funcNum = await InputView.readFuncNum();
      if (funcNum === 'Q') return;
      else if (funcNum === '1') {
        OutputView.printCourseAndMission();

        const [course, level, mission] =
          await InputView.readCourseLevelMission();

        this.matchingController.runPairMatching(course, level, mission);
      } else if (funcNum === '2') {
        OutputView.printCourseAndMission();

        const [course, level, mission] =
          await InputView.readCourseLevelMission();

        this.matchingController.showPairMatching(course, level, mission);
      } else if (funcNum === '3') this.matchingController.reset();
    }
  }
}

export default App;
