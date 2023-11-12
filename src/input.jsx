import React from 'react';
import PropTypes from 'prop-types';
import "./App.css";

export default class Input extends React.Component {
    render() {
        return (
            <div className="userInput">
                <div>NameOfHero
                    <input value={this.props.player.NameOfHero} disabled={this.props.player.confirmed} onChange={(event) => {
                        this.props.onPlayerChanged({
                            ...this.props.player,
                            NameOfHero: event.target.value,
                        })
                    }}>
                    </input>
                </div>
                <div>ClassOfHero
                    <select value={this.props.player.classOfHero} disabled={this.props.player.confirmed} className="classOfHero" onChange={(event) => {
                        this.props.onPlayerChanged({
                            ...this.props.player,
                            classOfHero: event.target.value,
                        })
                    }}>
                        <option value="necromancer">Necromancer</option>
                        <option value="cleric">Cleric</option>
                    </select>
                </div>
                <div>Race1
                    <select value={this.props.player.race1} disabled={this.props.player.confirmed} onChange={(event) => {
                        this.props.onPlayerChanged({
                            ...this.props.player,
                            race1: event.target.value
                        })
                    }}>
                        <option value="human">Human</option>
                        <option value="scourge">Scourge</option>                    
                        <option value="highElves">HighElves</option>
                        <option value="orcs">Orcs</option>
                    </select> 
                </div>
                <div>Race2
                    <select value={this.props.player.race2} disabled={this.props.player.confirmed} onChange={(event) => {
                        this.props.onPlayerChanged({
                            ...this.props.player,
                            race2: event.target.value
                        })
                    }}>
                        <option value="human">Human</option>
                        <option value="scourge">Scourge</option>
                        <option value="highElves">HighElves</option>
                        <option value="orcs">Orcs</option>
                    </select> 
                </div>
                <button onClick={(event) => {
                        this.props.onPlayerChanged({
                            ...this.props.player,
                            confirmed: true,
                        })
                    }} >accept
                </button> 
            </div>
        )
    }
}

Input.propTypes = {
    player: PropTypes.object.isRequired,
    onPlayerChanged: PropTypes.func.isRequired,
}
