import {
  MAKE_NEWS,
  CHANGE_TEXT,
  ERROR_MESSAGE
} from '../actions'


const initialState = {
  filterText: "",
  errorText: "",
  todos: {}
}

function todos(state = initialState, action) {
switch (action.type) {
  case MAKE_NEWS:
    return { ...state,  news: action.news  }
  case CHANGE_TEXT:
    return  { ...state,  filterText: action.filterText  }
  case ERROR_MESSAGE:
    return  { ...state,  errorText: action.errorText  }
  default:
    return state
}
}


export default todos