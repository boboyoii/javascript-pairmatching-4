import { MENUS } from '../constants/pairmatching.js';

const Validator = {
  isValidFuncNum(num) {
    if (!MENUS.includes(num.toUpperCase()))
      throw new Error('[ERROR] 선택한 기능은 없는 기능입니다.');
  },
};

export default Validator;
