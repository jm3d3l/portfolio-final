import React from 'react'
import './style.scss'
const ImageViewer = () => {
    return (
        <div className="image-wrapper">
            <div className="image-viewer-container">
                <div className="image img1">image 1</div>
                <div className="image img2">image 2</div>
                <div className="image img3">image 3</div>
            </div>
        </div>
    );
}

export default ImageViewer;