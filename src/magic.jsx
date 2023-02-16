import React from 'react';
import classNames from 'classnames';

export function Magic(props) {
    return (
        <div 
            className={classNames("unit", {
                "selectedUnit": props.selected
            })}
            onClick={() => props.onSelect()}
        >
            <p>{props.cl.name}</p>
            <img src={props.cl.img} />              
            <p className="type">type:{props.cl.type}</p>
            <p className="target">target:{props.cl.target}</p>
            <p className="manacost">manacost:{props.cl.manacost}</p>         
        </div>
    )
}