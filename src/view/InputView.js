import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/messages.js';

const InputView = {
  async readFuncNum() {
    const funcNum = await Console.readLineAsync(PROGRESS_MESSAGE.SELECT_MENU);
    return funcNum.toUpperCase();
  },
  async readCourseLevelMission() {
    const input = await Console.readLineAsync(
      PROGRESS_MESSAGE.INPUT_COURSE_LEVEL_MISSION
    );
    const [course, level, mission] = input.split(', ');
    return [course, level, mission];
  },
};

export default InputView;
