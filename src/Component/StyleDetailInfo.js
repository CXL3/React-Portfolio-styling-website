import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class StyleDetailInfo extends React.Component {
    
    renderStyleListing(style){
       
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={style.image} alt={style.name} />
                    <CardBody>
                        <CardTitle>{style.name}</CardTitle>
                        <CardText>{style.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );   
    }
    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment =>{
                        return(
                        <div key={comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>)
                        } 
                    )
                } 
                   
                </div>
            );
        }
        return <div />;    

    }
    render() { 
        if (this.props.style) {
            return (
                <div className='row'>
                    {this.renderStyleListing(this.props.style)}
                    {this.renderComments(this.props.style.comments)}
                </div> 
            );
        }
        return <div />;    
    }
}
 
export default StyleDetailInfo;