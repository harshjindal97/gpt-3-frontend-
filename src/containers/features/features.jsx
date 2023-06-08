import React from 'react'
import "./features.css";

const Features = ({ title, text }) => {
    return (
        <div className='gpt3_feature-container_feature'>
            <div className='gpt3_feature-container_feature-title'>
                <div />
                <h1>
                    {title}
                </h1>
            </div>

            <div className='gpt3_feature-container_feature-text'>
                {text}
            </div>

        </div>
    )
}

export default Features
