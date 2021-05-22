import React from 'react';
import './CardStyle.css';

export const CardComponent = (props) => (
    <div className='card-container'>
        <div style={{alignItems:'center'}}>
        <img alt='monster' height='100' width='100' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        </div>
        <h2 > {props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>

)