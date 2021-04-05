import Product from './producten/Product';

export default function ({foodItems, sausItems}) {
    return (
        <div>
            <h1>Ons menu</h1>
            <Product foodItems={foodItems} sauzen={sausItems} />
        </div>
    )
}