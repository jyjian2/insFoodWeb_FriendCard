import React, {Component} from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class UserMainPage extends Component {
    render() {
        return (
            <div className='Page'>
                <div className='topZone'>
                    <div class="row">
                    <div className='MainUser'>
                        <Card/>
                    </div>
                    </div>
                    
                </div>
                
                <div className='bottomZone'>
                    <div class="row">
                        <div class="col-sm">
                            <Card/>
                        </div>
                        <div class="col-sm">
                            <Card/>
                        </div>
                        <div class="col-sm">
                            <Card/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <Card/>
                        </div>
                        <div class="col-sm">
                            <Card/>
                        </div>
                        <div class="col-sm">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default UserMainPage;