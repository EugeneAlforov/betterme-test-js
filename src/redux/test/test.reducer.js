import { TEST_ACTION } from "./test.actions";


const initialState = {
  test: 'test',
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        state,
      };

    default:
      return state;
  }
}
