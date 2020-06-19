import React, { Component } from 'react'
import Table from './Table';
import Form from './Form';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: []
        }

        this.removeCharacter = this.removeCharacter.bind(this);
    }

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            })
        })
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App