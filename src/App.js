
import Counter from './components/Counter'
import {connect} from 'react-redux'
import { decreaseCounter, increaseCounter } from './redux/actions/test';

function App({decreaseCounter, increaseCounter}) {
  const handleOnClick = fn => {
    fn();
  }

  return (
    <div className="App">
      <Counter handleOnClick={ () => handleOnClick(increaseCounter)} counterText="Increase" />
      <Counter handleOnClick={ () => handleOnClick(decreaseCounter)} counterText="Decrease" />

    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
})

export default connect(null, mapDispatchToProps)(App);

