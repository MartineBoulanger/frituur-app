import {useDispatch,useSelector} from 'react-redux';
import {incrementCount, decrementCount} from '../actions';

export default function ({sauzen}) {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return <div>
        <label>Saus: </label>
        <select>
            {sauzen.map(s => {
                return <option key={s.naam}>{s.naam}</option>
            })}
        </select>
        <div>
            <button onClick={() => dispatch(decrementCount())}> - </button>
            <p>{counter}</p>
            <button onClick={() => dispatch(incrementCount())}> + </button>
            <button>Voeg toe</button>
        </div>
    </div>
}