import Item from '../Item';
import {useDispatch, useSelector} from 'react-redux';
import {toggleElement} from '../../actions';

export default function ({broodjes, sauzen}) {

    const toggle = useSelector(state => state.toggle)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Broodjes</h2>
            {broodjes.map(b => {
                return <div>
                    <p key={b.naam}>{b.naam}</p>
                    <p key={b.prijs}>{b.prijs}&euro;</p>
                    <span onClick={() => dispatch(toggleElement())}>{toggle ? '-' : '+'}</span>
                    {toggle ? <Item sauzen={sauzen} /> : ''}
                </div>
            })}
        </div>
    )
}