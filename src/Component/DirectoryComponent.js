import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: [
                {
                    id: 0,
                    name: 'V neck line',
                    image: 'assets/images/v-neck-main.png',
                    elevation: 1233,
                    description: "It strengthens your shoulder line and lengthens your neck and torso."
                },
                {
                    id: 1,
                    name: 'Darker high waist pants',
                    image: 'assets/images/darker-high-waist-pants-main.png',
                    elevation: 877,
                    description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'A line dress',
                    image: 'assets/images/a-line-dress-main.png',
                    elevation: 2901,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                
                {
                    id: 3,
                    name: 'Nude color pointy shoes',
                    image: 'assets/images/nude-colorpointy-shoes.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                },
                {
                    id: 4,
                    name: 'shapewear',
                    image: 'assets/images/shapewear-main.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                },     
                {
                    id: 5,
                    name: 'Blazer or cardigan',
                    image: 'assets/images/blazer-main.png',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                },
            ],
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