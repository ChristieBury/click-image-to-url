import React, { Component } from 'react';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';


    
 
export default class ClickableImage extends Component {
    render() {
        const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'your-cloud-name-goes-here' });
        return (
            <div>
                <a href={cloudinaryCore.url("https://www.hellcreekmusic.com")}>
                    <Image publicId="hell-creek-logo_azirfh.jpg"  cloudName="your-cloud-name-goes-here">
                        <Transformation quality="auto" width="500" crop="scale" fetchFormat="auto" />
                    </Image>
                </a>
            </div>
        );
    }
}