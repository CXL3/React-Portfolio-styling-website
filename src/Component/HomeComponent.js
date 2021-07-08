import React from 'react';
import {Button } from 'reactstrap';
import background from "../img/1.jpg";
import { Link } from 'react-router-dom';
function Home() {

    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            width:'100%',
            height:'100%' 
          }}>
           {/* Can you see one on the page?lol  */}
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <h1 className="ml-4">SlimStyle</h1>
            <h2 className="ml-4">Helping you look slimmer and taller</h2>
            <p>1</p>
            <p>1</p>
            <Button className="bg-danger ml-4">
                <Link to='/directory'>
                    <h4 className="text-white">Learn How</h4>
                </Link>
            </Button>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
        </div> 
    );
}

export default Home;   
