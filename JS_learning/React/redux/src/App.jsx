import { useDispatch, useSelector, useStore } from "react-redux";
// import { deposit, withdrow } from "./store/actions/banck-actions";
import Products from "./components/products";
import { deposit, withdraw } from "./redux-tool-kit/slices/bankSlice";

function App() {
  const state = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Bank Account Balance: {state}</h1>
      <button
        onClick={() => {
          dispatch(withdraw(100));
        }}
      >
        Withdorw
      </button>
      <button
        onClick={() => {
          dispatch(deposit(100));
        }}
      >
        Deposit
      </button>
      <Products />
    </div>
  );
}

export default App;
