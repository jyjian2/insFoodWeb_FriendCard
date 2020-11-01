import React, {Component} from 'react';
import Card from './Card';
import './UserMainPage.css'


class UserMainPage extends Component {
    render() {
        return (
            <div className='Page'>
                <div className='upper-container'>
                    <div className='MainUser'>
                        <Card/>
                    </div>
                </div>
                <div className='lower-container'>
                    <div class="row">
                        <div class="column">
                            <Card/>
                        </div>
                        <div class="column">
                            <Card/>
                        </div>
                        <div class="column">
                            <Card/>
                    </div>
                    <div class="row">
                        <div class="column">
                            <Card/>
                        </div>
                        <div class="column">
                            <Card/>
                        </div>
                        <div class="column">
                            <Card/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
    }
}

export default UserMainPage;