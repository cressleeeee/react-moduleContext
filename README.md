# react-moduleContext
It simplifies the use of useReducer and useContext, and quickly builds a module with context function

## Install 
```
$ npm install --save react-moduleContext
```

## Demo
```
function reducer(state, action) {
  switch (action.type) {
    case "setTheme":
      return { ...state, color: action.payload };
    default:
      return state;
  }
}

function Theme(props) {
  let initState = {
    color: props.color,
  };

  return (
    <ModuleContext initialState={initState} reducer={reducer}>
      {props.children}
    </ModuleContext>
  );
}

 const { state, dispatch } = useModuleContext();
```
