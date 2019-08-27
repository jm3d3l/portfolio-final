import React from 'react'
import LandingPage from '../../images/home.JPG';
import Browse from '../../images/browse.JPG';
import Items from '../../images/item.JPG';
import './style.scss'
const ImageViewer = () => {
    return (
        <div className="image-wrapper">
            <div className="image-viewer-container">
                {/* <div className="image img1">image 1</div> 
                <div className="image img2">image 2</div>
                <div className="image img3">image 3</div>*/}
                <img src={LandingPage} className="image img1" />
                <img src={Browse} className="image img2" />
                <img src={Items} className="image img3" />

            </div>
        </div>
    );
}

export default ImageViewer;