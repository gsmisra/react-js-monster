import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='user' src={`https://robohash.org/${props.oUser.id}?set=&size=190x190`} />
        <h2> {props.oUser.name} </h2>
        <h3> {props.oUser.email}</h3>
        <h4> Company: {props.oUserCompanyName}</h4>
    </div>
)