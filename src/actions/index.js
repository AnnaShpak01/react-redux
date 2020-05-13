export const MAKE_NEWS = 'MAKE_NEWS'
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export function makeNews(news) {
    return { type: MAKE_NEWS, news }
  }

export function changeText(filterText) {
    return { type: CHANGE_TEXT, filterText }
  }

export function errorMessage(errorText) {
    return { type: ERROR_MESSAGE, errorText }
  }
