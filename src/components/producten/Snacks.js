import Item from "../Item";
import {useDispatch, useSelector} from 'react-redux';
import {toggleElement} from '../../actions';

export default function ({snacks, sauzen}) {

    const toggle = useSelector(state => state.toggle)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Snacks</h2>
            {snacks.map(s => {
                return <div>
                    <p key={s.naam}>{s.naam}</p>
                    <p key={s.prijs}>{s.prijs}&euro;</p>
                    <span onClick={() => dispatch(toggleElement())}>{toggle ? '-' : '+'}</span>
                    {toggle ? <Item sauzen={sauzen} /> : ''}
                </div>
            })}
        </div>
    )
}