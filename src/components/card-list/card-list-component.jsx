import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card-component'


export const CardList = props => {   
    return(<div className='card-list'>{
            props.oUserList.map(user =>(
                <Card key={user.id} oUser={user} oUserCompanyName={user.company.name}/>
            ))
        }
    </div>);
};