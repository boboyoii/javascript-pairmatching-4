import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/messages.js';
import Validator from '../utils/Validator.js';

const InputView = {
  async readFuncNum() {
    const funcNum = await Console.readLineAsync(PROGRESS_MESSAGE.SELECT_MENU);
    Validator.isValidFuncNum(funcNum);
    return funcNum.toUpperCase();
  },
  async readCourseLevelMission() {
    const input = await Console.readLineAsync(
      PROGRESS_MESSAGE.INPUT_COURSE_LEVEL_MISSION
    );
    const [course, level, mission] = input.split(',').map((val) => val.trim());

    Validator.isValidCourse(course);
    Validator.isValidLevel(level);

    return [course, level, mission];
  },
};

export default InputView;
