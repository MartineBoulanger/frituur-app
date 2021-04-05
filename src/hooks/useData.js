import food from '../externedata/food'
import saus from '../externedata/saus'
import { useEffect, useState } from 'react'

export default function () {
    const [foodItems, setFoodItems] = useState([])
    const [sausItems, setSausItems] = useState([])

    useEffect(() => {
        setFoodItems([food.categorieen])
    }, [])

    useEffect(() => {
        setSausItems([saus.sauzen])
    }, [])

    return [foodItems, sausItems]
}