What we will have to do to use redux?

Store
   1.Action
   2.Reducers

React Components
    Child Components

React-Redux Connect
    Provider Component
      Store
      Appliocation Component

If we need data we will have to call :
mapStateToProps(state)  return object

If we need to dispatch some action
mapDispatchToProps(dispatch)   return object


connect(mapStateToProps)(mapDispatchToProps);