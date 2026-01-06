import { Console } from '@woowacourse/mission-utils';
import { COURSES, LEVELS, MISSIONS } from '../constants/pairmatching.js';

export const OutputView = {
  printCourseAndMission() {
    Console.print('\n#############################################');
    Console.print(`과정: ${Object.values(COURSES).join(' | ')}`);
    Console.print('미션:');
    LEVELS.forEach((level) =>
      Console.print(`  - ${level}: ${MISSIONS[level].join(' | ')}`)
    );
    Console.print('#############################################');
  },
};

export default OutputView;
