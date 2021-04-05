import Item from '../Item'
import {useState} from 'react'

export default function ({ foodItems, sauzen }) {

    const [toggleItem, setToggleItem] = useState(false)

    const clickToggle = () => {
        if (toggleItem) {
            setToggleItem(false)
        } else {
            setToggleItem(true)
        }
    }

    const product = foodItems.producten.length

    console.log(product)

  return (
    <div>
      {foodItems.map((n, i1) => {
        return (
            <div>
            <h1 key={i1}>{n.naam}</h1>
            <div key={i1}>
            {foodItems.producten.map((p, i2) => {
                <div>
                    <p key={i2}>{p.naam}</p>
                    <p key={i2}>{p.prijs}&euro;</p>
                    <span onClick={clickToggle}>{toggleItem ? '-' : '+'}</span>
                    {toggleItem ? <Item sauzen={sauzen} /> : ''}
                </div>
            })}
            </div>
        </div>
        )
      })}
      {/* {foodItems.map(i => {
                return <div>
                    <p key={i.producten.naam}>{i.producten.naam}</p>
                    <p key={i.producten.prijs}>{i.producten.prijs}&euro;</p>
                    <span onClick={() => dispatch(toggleElement())}>{toggle ? '-' : '+'}</span>
                    {toggle ? <Item sauzen={sauzen} /> : ''}
                </div>
            })} */}
    </div>
  )
}
