import { Console } from '@woowacourse/mission-utils';
import { COURSES, LEVELS, MISSIONS } from '../constants/pairmatching.js';

export const OutputView = {
  printCourseAndMission() {
    Console.print('\n#############################################');
    Console.print(`과정: ${Object.keys(COURSES).join(' | ')}`);
    Console.print('미션:');
    LEVELS.forEach((level) =>
      Console.print(`  - ${level}: ${MISSIONS[level].join(' | ')}`)
    );
    Console.print('#############################################');
  },
  printMatchingResult(paris) {
    Console.print('\n페어 매칭 결과입니다.');
    paris.forEach((pair) => Console.print(`${pair.getNames().join(' : ')}`));
    Console.print('');
  },
  printReset() {
    Console.print('\n초기화 되었습니다.\n');
  },
};

export default OutputView;
