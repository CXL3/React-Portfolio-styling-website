import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderStyleListing({style}){
    return (
        <div className="col-md-5 m-1">
            <Card>
                {/* <CardImg top src={style.image} /> */}
                <CardBody>
                    <CardTitle>{style.name}</CardTitle>
                    <CardText>{style.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

// function RenderComments({comments}) {
//     if (comments) {
//         return (
//             <div className="col-md-5 m-1">
//                 <h4>Comments</h4>
//                 {comments.map(comment =>{
//                     return(
//                     <div key={comment.id}>
//                         <p>{comment.text}</p>
//                         <p>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
//                     </div>)
//                     }) 
//                 }       
//             </div>
//         );
//     }
//     return <div />;   
// }    

function StyleDetailInfo(props) {
    if (props.style) {
        return (
            <div className="container">
                <div className='row'>
                    <RenderStyleListing style={props.style}/>
                    {/* <RenderComments comments={props.comments}/> */}
                </div>
            </div>      
        );
    }
    return <div />;     
}
 
export default StyleDetailInfo;