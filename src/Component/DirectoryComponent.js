import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({style}) {
    return (
        <Card >
            <Link to={`/directory/${style.id}`}>
                <CardImg width="100%" src={style.image} alt={style.name}/>
                <CardImgOverlay className="d-flex align-items-end"> 
                    <CardTitle>{style.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}


   
function Directory(props) {
    const directory = props.styles.map(style => {
        return (
            <div key={style.id} className="col-md-4 mt-3 ">
                <RenderDirectoryItem style={style} />
            </div>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <h1 className="centered">Items that make you slimmer</h1>
            </div>
            <div className="row">
                
                {directory}
            </div>
        </div>
    );
    
}

export default Directory;