import React from 'react';
import './CardListstyle.css'
import {CardComponent} from '../Card/CardComponent';

export const CardList = (props) => {
    return (
        <div className='CardListstyle'>
            {
                props.monsters.map(monster => (
                    <CardComponent key={monster.id} monster={monster}/>
                ))
            }

        </div>
    )

}