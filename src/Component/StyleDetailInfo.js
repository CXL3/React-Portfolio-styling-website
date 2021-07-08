import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Card, CardImg, CardTitle,CardBody,CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderStyleListing({style}){
    return (
        <div className="col m-1">
            <h3>{style.description}</h3>
        </div>
    )
}

function RenderProducts({product}) {
    if (product) {
        return (
            
                <Card >
                    <a href={product.url}>
                    <CardImg src={product.image} alt={product.name}/>
                    <CardTitle className="text-dark">{product.name}</CardTitle>
                    <CardBody>
                        <CardText className="text-dark">{product.text}</CardText>
                    </CardBody>
                    </a>
                </Card>   
          
        );
    }
    
}


function StyleDetailInfo(props) {
    const listing = props.products.map(product => {
        return (
            <div key={product.id} className="col-4 d-flex align-items-stretch mx-auto mt-3">
                <RenderProducts product={product} />
            </div>
        );
    });

    if (props.style) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col ">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.style.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.style.name}</h2>
                        <hr />
                    </div>
                </div>

                <div className='row'>
                    <RenderStyleListing style={props.style}/>
                </div>
                <div className='row'>
                    {listing}
                </div>
            </div>      
        );
    }
    return <div />;     
}
 
export default StyleDetailInfo;