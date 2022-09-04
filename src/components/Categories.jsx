import React, {useState} from "react";

const categories = [
    {id: 0, title: "Все"},
    {id: 1, title: "Мясные"},
    {id: 2, title: "Вегетарианская"},
    {id: 3, title: "Гриль"},
    {id: 4, title: "Острые"},
    {id: 5, title: "Закрытые"},
]

export const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="categories">
            <ul>
                {categories.map(c => <li
                    key={c.id}
                    onClick={() => setActiveIndex(c.id)}
                    className={c.id === activeIndex ? "active" : undefined}
                >{c.title}</li>)}
            </ul>
        </div>
    )
}