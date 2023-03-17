import React from 'react';
import PropTypes from 'prop-types';
import { Unit } from './unit';
import { Magic } from './magic';

export function Cell(props) {
    return (
        <button className="cell" onClick={() => props.onCellClick()}>
            {!props.plu ? (null) :
            (props.plu.cl.type === "unitCard") ? <Unit cl={props.plu.cl} /> : <Magic cl={props.plu.cl} />}
        </button>
    )
}

Cell.propTypes = {
    plu: PropTypes.object,
    onCellClick: PropTypes.func.isRequired,
}
