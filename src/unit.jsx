import React from 'react';
import classNames from 'classnames';

export function Unit(props) { // { key: "Peasant", cl: { name: "Peasant", attack: 2, ... }, selected: false, onSelect: () => {setSelectedClass(cl) } }
    return (
        <div 
            className={classNames("unit", {
                "selectedUnit": props.selected // if props.selected is true, it returns "unit selectedUnit", else it returns "unit"
            })}
            onClick={() => props.onSelect && props.onSelect()} // при клике он вызывает функцию, которую ему передал родитель
        >
            <p>{props.cl.name}</p>
            <img src={props.cl.img} />              
            <p className="attack">attack:{props.cl.attack}</p>
            <p className="AS">AS:{props.cl.attackSpeed}</p>
            <p className="hp">hp:{props.cl.hp}</p>
            <p className="armor">armor:{props.cl.armor}</p>
            <p className="cost">cost:{props.cl.cost}</p>
            <img className="ability" src={props.cl.abilityImg[0]} />
            <img className="ability" src={props.cl.abilityImg[1]} />
            <img className="ability" src={props.cl.abilityImg[2]} />
            <img className="ability" src={props.cl.abilityImg[3]} />             
        </div>

    )
}
