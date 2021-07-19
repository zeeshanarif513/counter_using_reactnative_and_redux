import {connect} from 'react-redux';
import * as Actions from '../Constants';

import Counter from '../../components/Counter';



export const incrementCounter = () => (
    {
        type: Actions.INCREMENT,
    }
);

export const decrementCounter = () => (
    {
        type: Actions.DECREMENT,
    }
);

export const multiplyCounter = () => (
    {
        type: Actions.MULTIPLIER,
    }
);

const mapStateToProps = (state) => ({
    count: state.CounterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    multiply: () => dispatch(multiplyCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

