import React from 'react'
import "./Brand.css";

import { google, slack, atlassian, dropbox, shopify } from './import';

const Brand = () => {
    return (
        <div className='gpt3_brand'>
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="" />
            </div>
            <div>
                <img src={atlassian} alt="" />
            </div>
            <div>
                <img src={dropbox} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>
        </div>
    )
}

export default Brand
