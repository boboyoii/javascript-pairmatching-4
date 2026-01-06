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
    Validator.isValidMission(level, mission);

    return [course, level, mission];
  },
  async readYesOrNo() {
    const answer = await Console.readLineAsync(
      PROGRESS_MESSAGE.INPUT_YES_OR_NO
    );

    Validator.isValidAnswer(answer);
    return answer;
  },
};

export default InputView;
