export const WITHDROW_MONEY = "WITHDROW_MONEY";
export const DEPOSIT_MONEY = "DEPOSIT_MONEY";

// action 
export const withdrow = (amount) => {
  return {
    type: WITHDROW_MONEY, 
    payload: amount
  }
}

export const deposit = (amount) => {
  return {
    type: DEPOSIT_MONEY, 
    payload: amount
  }
}