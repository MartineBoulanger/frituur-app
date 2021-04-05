import Item from "../Item";
import {useDispatch, useSelector} from 'react-redux';
import {toggleElement} from '../../actions';

export default function ({frieten, sauzen}) {

    const toggle = useSelector(state => state.toggle)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Frieten</h2>
            {frieten.map(f => {
                return <div>
                    <p key={f.naam}>{f.naam}</p>
                    <p key={f.prijs}>{f.prijs}&euro;</p>
                    <span onClick={() => dispatch(toggleElement())}>{toggle ? '-' : '+'}</span>
                    {toggle ? <Item sauzen={sauzen} /> : ''}
                </div>
            })}
        </div>
    )
}