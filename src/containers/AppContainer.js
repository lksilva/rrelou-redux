import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => {
    dispatch(increment(ownProps.counter))
  },
  decrement: () => {
    dispatch(decrement(ownProps.counter))
  }
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
