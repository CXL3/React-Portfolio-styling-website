import React, { Component } from 'react';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const directory = this.state.styles.map(style => {
            return (
                <div className="col">
                    <img src={style.image} alt={style.name} />
                    <h2>{style.name}</h2>
                    <p>{style.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;