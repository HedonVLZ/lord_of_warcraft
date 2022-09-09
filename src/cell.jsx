import React from 'react';
import PropTypes from 'prop-types';
import { Unit } from './unit';

export function Cell(props) {
    return (
        <button className="cell" onClick={() => props.onCellClick()}>
            { props.plu ? (
                <Unit cl={props.plu.cl} />
            ) : null }
        </button>
    )
}

Cell.propTypes = {
    plu: PropTypes.object,
    onCellClick: PropTypes.func.isRequired,
}
