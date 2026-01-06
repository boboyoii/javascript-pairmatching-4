import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    while (true) {
      const funcNum = await InputView.readFuncNum();
      if (funcNum === 'Q') return;
      else if (funcNum === '1') {
        OutputView.printCourseAndMission();
        const [course, level, mission] =
          await InputView.readCourseLevelMission();
      } else if (funcNum === '2') console.log('2');
      else if (funcNum === '3') console.log('3');
    }
  }
}

export default App;
