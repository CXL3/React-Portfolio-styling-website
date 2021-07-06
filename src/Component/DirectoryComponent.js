import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStyle: null
        };
    }

    onStylesSelect(style) {
        this.setState({selectedStyle: style});
    }
    renderSelectedStyle(style) {
        if (style) {
            return (
                <Card>
                    <CardImg top src={style.image} alt={style.name} />
                    <CardBody>
                        <CardTitle>{style.name}</CardTitle>
                        <CardText>{style.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.styles.map(style => {
            return (
                <div key={style.id} className="col-md-5 m-1">
                     <Card onClick={() => this.onStylesSelect(style)}>
                        <CardImg width="100%" src={style.image} alt={style.name}/>
                        <CardImgOverlay>
                            <CardTitle>{style.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedStyle(this.state.selectedStyle)}
                    </div>
                </div>    
            </div>
        );
    }
}

export default Directory;