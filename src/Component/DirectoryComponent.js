import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({style}) {
    return (
        <Card >
            <CardImg width="100%" src={style.image} alt={style.name}/>
            <CardImgOverlay>
                <CardTitle>{style.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}


   
function Directory(props) {
    const directory = props.styles.map(style => {
    
        return (
            <div key={style.id} className="col-md-5 m-1">
                <RenderDirectoryItem style={style} />
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

export default Directory;