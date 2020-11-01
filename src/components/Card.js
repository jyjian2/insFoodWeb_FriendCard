import React, {Component} from 'react';
import RestaurantThumbnail from './RestaurantThumbnail';
import './Card.css'


class Card extends Component {
    render() {
        return (
            <div className='Card'>
                <div className='upper-container'>
                    <div className='name-container'>
                        <a href="https://www.w3schools.com">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" height="100px" width="100px" />
                        </a>
                        <h4>{this.props.username}</h4>
                    </div>
                </div>
                <div className='lower-container'>
                    <div class="row">
                        <div class="column">
                            <RestaurantThumbnail name="black dog" url="https://www.blackdogsmoke.com/"
                            picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="23"/>
                        </div>
                        <div class="column">
                            <RestaurantThumbnail name="white dog" url="https://www.blackdogsmoke.com/"
                            picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                        </div>
                        <div class="column">
                            <RestaurantThumbnail name="white dog" url="https://www.blackdogsmoke.com/"
                            picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                    </div>
                    <div class="row">
                        <div class="column">
                            <RestaurantThumbnail name="black dog" url="https://www.blackdogsmoke.com/"
                            picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="23"/>
                        </div>
                        <div class="column">
                            <RestaurantThumbnail name="white dog" url="https://www.blackdogsmoke.com/"
                            picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                        </div>
                        <div class="column">
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
