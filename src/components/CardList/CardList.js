import React from "react";
import {Card} from "../Card/Card"
//import styles from '../Card/Card.module.css'; 

export function Cardlist(props) {
return props.items.map((item) => {
    return (
        <div>
         <Card key={item.id} item={item}/>
        </div>      
        )
        }
    );
}