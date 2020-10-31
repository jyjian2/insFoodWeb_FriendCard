import React,{ useState } from 'react';
import './Card.css';

function Card(){

    const [name, setName] = useState('Your Name');
    const [job, setJob] = useState('job Title');
    const [about, setAbout] = useState('Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times. Whether at it unknown warrant herself winding if. Him same none name sake had post love. An busy feel form hand am up help. Parties it brother amongst an fortune of. Twenty behind wicket why age now itself ten.');

    return(
        <div classNmae='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src=" " alt=' ' height="100px" width="100px" />
                </div>
            </div>
            <div calssName="lower-container">
                <h3> { name }</h3>
                <h4> { job } </h4>
                <p> {about} </p>
            </div>

        </div>
    )
}

export default Card;
