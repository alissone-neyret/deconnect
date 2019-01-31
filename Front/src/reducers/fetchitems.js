
export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.error;

    default:
      return state;
  }
}

export function isLoading(state = false, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}
