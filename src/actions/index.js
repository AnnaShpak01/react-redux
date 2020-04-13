export const MAKE_NEWS = 'MAKE_NEWS'
export const CHANGE_TEXT = 'CHANGE_TEXT'

export function makeNews(news) {
    return { type: MAKE_NEWS, news }
  }

  export function changeText(text) {
    return { type: CHANGE_TEXT, text }
  }
