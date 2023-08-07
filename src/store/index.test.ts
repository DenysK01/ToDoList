import store from '.';

describe('redux store init', () => {
  it('should return a configured store object', () => {
    expect(store).toBeDefined();
    expect(store.dispatch).toBeDefined();
  });
});
