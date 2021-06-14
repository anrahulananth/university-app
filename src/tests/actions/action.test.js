import * as actions from '../../actions';

describe('actions', () => {
  it('should create an action to fetch universites', () => {
    const universities = [];
    const expectedAction = {
      type: actions.UNIVERSITIES.GET_NEXT_UNIVERSITIES,
      universities
    };
    const action = actions.getNextUniversities(universities);
    expect(action).toEqual(expectedAction);
  });
});
