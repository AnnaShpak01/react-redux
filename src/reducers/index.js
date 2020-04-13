import {
    MAKE_NEWS,
    CHANGE_TEXT,
} from '../actions'

function todos(state = {}, action) {
  switch (action.type) {
    case MAKE_NEWS:
      return { ...state,  news: action.news  }
    case CHANGE_TEXT:
      return  { ...state,  filterText: action.filterText  }
    default:
      return state
  }
}


export default todos