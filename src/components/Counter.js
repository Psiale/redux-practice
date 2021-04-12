import React from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Counter = ({counter, counterText, handleOnClick}) => (
    <> 
        <p>{counter}</p>
        <button onClick={handleOnClick}>{counterText}</button>
    </>
)

const mapStateToProps = state => ({
    counter: state.counter,
});

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    counterText: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, null)(Counter);
