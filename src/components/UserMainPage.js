import React, {Component} from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class UserMainPage extends Component {
    render() {
        return (
            <div className='Page'>
                <div className='topZone'>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                            </div>
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                            <div className="col-4">
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottomZone'>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                            <div className="col-4">
                                <Card username="Jia-Yi Jian"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default UserMainPage;
