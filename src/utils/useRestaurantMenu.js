import { useEffect } from "react"
import { useState } from "react";
import { menu } from "./constants"

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect( ()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(menu + resId)
        const json = await data.json()
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;