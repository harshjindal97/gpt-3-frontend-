import React from 'react'
import "./header.css";
import aipng from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
    return (
        <div>
            <div className='gpt3_header section_padding' id='home'>
                <div className='gpt3_header-content'>
                    <h1 className='gradient-text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <div className='gpt3_header-content_input'>
                        <input type="email" placeholder='Your Email Address' />
                        <button type='button'>Get Started</button>
                    </div>
                    <div className='gpt3_header-content_people'>
                        <img src={people} alt="image" />
                        <p>1600 people requested access a visit in last 24 hours</p>
                    </div>

                </div>
                <div className='gpt3_header-image'>
                    <img src={aipng} alt="ai" />
                </div>
            </div>
        </div>
    )
}

export default Header
