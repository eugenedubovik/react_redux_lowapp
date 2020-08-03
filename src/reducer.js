import {ON_FIRST_BUTTON_CLICK, ON_SECOND_BUTTON_CLICK, ON_THIRD_BUTTON_CLICK} from './action'

const initialState = {
    lowApp: 0,
  };

  export function lowAppReducer (state = initialState, action) {
      switch (action.type) {
          case ON_FIRST_BUTTON_CLICK: {
              return {
                ...state,
                lowApp: 1                 
              }}
          case ON_SECOND_BUTTON_CLICK: {
              return {
                ...state,
                lowApp: 2                  
              }}
          case ON_THIRD_BUTTON_CLICK: {
              return {
                ...state,
                lowApp: 3                  
              }
          }
          default: return state
      }

}