import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../actions';

export default function () {

    const toggle = useSelector(state => state.toggle)
    const dispatch = useDispatch()

    return <div>
        <button onClick={() => dispatch(toggle())}>Winkelwagen</button>

        {toggle ? 
              <div>
              <div onClick={() => dispatch(toggle())}></div>
              <h1>Jouw bestelling</h1>
              <div>
                  <label>Naam</label>
                  <label>Aantal</label>
                  <label>Totaal</label>
                  <hr />
              </div>
            <div>
                <p>Totaal:</p>
            <Link to="/afrekenen"><button onClick={() => dispatch(toggle())}>Afrekenen</button></Link>
            </div>
          </div>
         : 
          <div></div>
        }
    </div>
}