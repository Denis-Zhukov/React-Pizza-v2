import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import axios from "axios";

export const Home = () => {
    const [pizzas, setPizzas] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const pizzas = await axios.get("https://63178e5682797be77f003077.mockapi.io/items");
            setPizzas(pizzas.data);
            setIsLoading(false)
        })();
    })

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>) :
                        pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
                }
            </div>
        </div>
    );
}