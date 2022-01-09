import { createContext, useReducer, useContext } from "react";

let Context = null;
function ModuleContext(props) {
  const { children, initialState, reducer } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  if (Context === null) {
    Context = createContext(initialState);
  }

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

function useModuleContext() {
  const { state, dispatch } = useContext(Context);
  return { state, dispatch };
}

export { Context, useModuleContext };
export default ModuleContext;
