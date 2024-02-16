import React from 'react';
import classNames from 'classnames';
import { playDeathSound } from './sounds'
import { playPickSound } from './sounds'
export function Unit(props) {
    if (props.cl.hp <= 0) {playDeathSound(props)}
    return (
        <div 
            className={classNames("unit", {
                "selectedUnit": props.selected,
                "deadUnit": props.cl.hp < 1 ? true: false
            })}
            onClick={() => {
                    props.onSelect && props.onSelect()
                    playPickSound(props)
                }
            } // при клике он вызывает функцию, которую ему передал родитель
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
            <div className="abilityTime">
                <p className="abilityTimeElem">{props.cl.abilityTime[0]}</p>
                <p className="abilityTimeElem">{props.cl.abilityTime[1]}</p>
                <p className="abilityTimeElem">{props.cl.abilityTime[2]}</p>
                <p className="abilityTimeElem">{props.cl.abilityTime[3]}</p>
            </div>           
        </div>
    )
}
