import React from 'react'
import { Feature } from '../../components';
import "./features.css";

const Features = ({ title, text }) => {
    return (
        <div className='gpt3_features'>
            <div className='gpt3_features-heading'>
                <h1>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
            </div>
            <div className='gpt3_features-container'>
                <Feature title='Improving end distrusts instantly'
                    text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
                <Feature title='Become the tended active'
                    text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
                <Feature title='Message or am nothing'
                    text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
            </div>
        </div>
    )
}

export default Features
