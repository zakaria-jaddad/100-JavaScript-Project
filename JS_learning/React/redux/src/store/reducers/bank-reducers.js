import { DEPOSIT_MONEY, WITHDROW_MONEY } from "../actions/banck-actions"

export const bankReducer = (state = 1000, action) => {

    switch (action.type) {
      case WITHDROW_MONEY: 
        return state - action.payload
      case DEPOSIT_MONEY:
        return state + action.payload
      default:
        return state
    }
  }