const FILTER_TYPES = {
  FILTER: 'FILTER',
};
const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_TYPES.FILTER: {
      return action.payload.criteria;
    }
    default:
      return state;
  }
};
const filter = (criteria) => ({
  type: FILTER_TYPES.FILTER,
  payload: { criteria },
});

export { filterReducer, filter };
