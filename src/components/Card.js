import React, {Component} from 'react';
import RestaurantThumbnail from './RestaurantThumbnail';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <div className='upper-container'>
                    <div className="container">
                        <div className="row">
                            <div className="col align-self-center">
                                <a href="https://www.w3schools.com">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" height="100px" width="100px" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>{this.props.username}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lower-container'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <RestaurantThumbnail name="black dog" url="https://www.blackdogsmoke.com/"
                                picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="23"/>
                            </div>
                            <div className="col">
                                <RestaurantThumbnail name="white dog" url="https://www.blackdogsmoke.com/"
                                picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <RestaurantThumbnail name="white dog" url="https://www.blackdogsmoke.com/"
                                picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                            <div className="col">
                                <RestaurantThumbnail name="black dog" url="https://www.blackdogsmoke.com/"
                                picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="23"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <RestaurantThumbnail name="white dog" url="https://www.blackdogsmoke.com/"
                                picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                            <div className="col">
                                <RestaurantThumbnail name="white dog" url="https://www.blackdogsmoke.com/"
                                picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Card;
