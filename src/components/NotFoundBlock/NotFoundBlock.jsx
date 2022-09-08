import React from "react";
import s from "./NotFoundBlock.module.scss"

export const NotFoundBlock = () => (
    <div className={s.root}>
        <h1>
            <span>😒</span>
            <br/>
            Ничего не найдено
        </h1>
        <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
)