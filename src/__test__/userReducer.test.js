import reducer from '../store/reducers/userReducer';

describe('get reducer', () => {
  const initialState = {
    users: [],
    loading: true,
    posts: [],
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
