import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/messages.js';

const InputView = {
  async readFuncNum() {
    const funcNum = await Console.readLineAsync(PROGRESS_MESSAGE.MENU);
    return funcNum.toUpperCase();
  },
};

export default InputView;
