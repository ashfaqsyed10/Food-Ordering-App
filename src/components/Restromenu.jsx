import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import RestoCategory from './RestoCategory';

const Restromenu = () => {
    const [resinfo, setResinfo] = useState(null)
    const { resId } = useParams()
    useEffect(() => {

        fetchmenu()
    }, [])
    const fetchmenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        console.log(json)
        setResinfo(json.data)
    }

    if (resinfo === null)
        return <Shimmer />;

    const { name, cuisines } = resinfo?.cards[2]?.card?.card?.info
    // const { itemCards } =
    //    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const category = (resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))
    console.log(category)

    return (

        <div className="text-center">
            <h1 className="text-2xl my-6">{name}</h1>
            <h5>
                {cuisines.join(", ")}
            </h5>
            {category.map((categ) => (
                <RestoCategory 
                key={categ?.card?.card.title} data={categ.card.card} />
            ))}
        </div>
    )
}

export default Restromenu
