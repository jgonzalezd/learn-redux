import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browseHistory } from 'react-router'

// import root reducer

import rootReducer from './reducers/index'
import comments from './data/comments'
import posts from './data/posts'

// create an object with the defaul data

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browseHistory, store)

export default store
