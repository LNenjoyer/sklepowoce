import React from "react";
import './sklep.css';

const Sklep = (props) => (
    <div className="Sklep">
        <img src={props.photo} alt={props.name}/>
        <h3 id="name">{props.name}</h3>
        <p>opis: {props.desc}</p>
        <p>na stanie: {props.num}</p>
        <h2>Cena {props.price} zł</h2>
    </div>
)
export default Sklep;