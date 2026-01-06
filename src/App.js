import InputView from './view/InputView.js';

class App {
  async run() {
    while (true) {
      const funcNum = await InputView.readFuncNum();
      if (funcNum === 'Q') return;
    }
  }
}

export default App;
