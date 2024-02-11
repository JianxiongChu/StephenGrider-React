import { useReducer, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change-value-to-add";
const DECREMENT_COUNT = "decrement";
const APPLY_VALUE_TO_COUNT = "apply_value_count";

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleChange = (event) => {
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: parseInt(event.target.value),
    });
    // setValueToAdd(parseInt(event.target.value)) || 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: APPLY_VALUE_TO_COUNT,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return { ...state, count: state.count + 1 };
      case SET_VALUE_TO_ADD:
        return { ...state, valueToAdd: action.payload };
      case DECREMENT_COUNT:
        return { ...state, count: state.count - 1 };
      case APPLY_VALUE_TO_COUNT:
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      default:
        return state;
    }
    // if (action.type === "increment") {
    //   return { ...state, count: state.count + 1 };
    // }

    // if ((action.type = "change-value-to-add")) {
    //   return { ...state, valueToAdd: action.payload };
    // }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, valueToAdd: 0 });

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
