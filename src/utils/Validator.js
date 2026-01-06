import { COURSES, LEVELS, MENUS, MISSIONS } from '../constants/pairmatching.js';

const Validator = {
  isValidFuncNum(num) {
    if (!MENUS.includes(num.toUpperCase()))
      throw new Error('[ERROR] 선택한 기능은 없는 기능입니다.');
  },
  isValidCourse(course) {
    if (!Object.keys(COURSES).includes(course))
      throw new Error('[ERROR] 해당 과정은 없는 과정입니다.');
  },
  isValidLevel(level) {
    if (!LEVELS.includes(level))
      throw new Error('[ERROR] 해당 레벨은 없는 레벨 입니다.');
  },
  isValidMission(level, mission) {
    if (!MISSIONS[level].includes(mission))
      throw new Error('[ERROR] 해당 레벨에 없는 미션입니다.');
  },
};

export default Validator;
