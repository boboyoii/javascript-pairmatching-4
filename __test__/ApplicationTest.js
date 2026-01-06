import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

// 입력을 모킹하는 함수
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// 셔플 결과를 모킹하는 함수 (assertShuffleTest 대응)
const mockShuffles = (rows) => {
  MissionUtils.Random.shuffle = jest.fn();
  rows.reduce((acc, row) => {
    return acc.mockReturnValueOnce(row);
  }, MissionUtils.Random.shuffle);
};

// 로그를 캡처하는 함수
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('페어 매칭 테스트', () => {
  const ERROR_MESSAGE = '[ERROR]';

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('짝수 인원 페어 매칭', async () => {
    // given
    const logSpy = getLogSpy();
    // 섞이는 순서를 테스트 코드에서 제어 (자바의 Arrays.asList 역할)
    mockShuffles([['태웅', '백호', '치수', '태섭']]);
    mockQuestions(['1', '백엔드, 레벨1, 자동차경주', 'Q']);

    // when
    const app = new App();
    await app.run();

    // then
    const output = logSpy.mock.calls.join('');
    expect(output).toContain('태웅 : 백호');
    expect(output).toContain('치수 : 태섭');
  });

  test('없는 미션에 대한 예외 처리', async () => {
    // given
    const logSpy = getLogSpy();
    // 잘못된 미션 입력 시나리오
    mockQuestions(['1', '백엔드, 레벨1, 오징어게임', 'Q']);

    // when
    const app = new App();
    try {
      await app.run();
    } catch (error) {
      // 에러 발생 시 처리 (필요한 경우)
    }

    // then
    const output = logSpy.mock.calls.join('');
    expect(output).toContain(ERROR_MESSAGE);
  });
});
