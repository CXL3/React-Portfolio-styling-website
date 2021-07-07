import React, { Component } from 'react';
import StyleDetailInfo from './StyleDetailInfo';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


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
                <StyleDetailInfo style={this.state.selectedStyle} />
            </div>
        );
    }
}

export default Directory;