import { useRouteError } from 'react-router-dom'
import {useState} from 'react'

const Error = () => {

    return (
        <div className='error'>
            <p style={{
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16.8px',
                lineHeight: '19px',
                textAlign: 'center',
                color: '#00A0AB'
            }}>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</p>
            <p>Простите, по вашему запросу <br/>товаров сейчас нет. Задайте запрос <br/>по-другому или измените <br/>характеристики</p>
        </div>
    )
}
export default Error