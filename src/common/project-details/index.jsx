import React from 'react'
import './style.scss'
import AngularLogo from '../../images/angular-logo.png'
const ProjectDetails = () => {
    return (
        <div className="project-wrapper">
            <div className="project-detail-container">
                <div className="title-container">
                    <p id="project-name">Project Name</p>
                    <p id="company-name">Company Name</p>
                </div>
                <span className="spacer" />
                <img src={AngularLogo} height="27" width="27px" alt="" />

            </div>

            <div className="description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tristique leo, a blandit nunc. Curabitur pretium justo ullamcorper lacus bibendum malesuada. Donec mi nisl, sagittis id commodo ultricies, pharetra ac ligula. Donec semper odio ut dictum pretium. Nam ligula tortor, bibendum eget nunc eu, consequat egestas nisi.
            </p>
            </div>
        </div>

    );
}

export default ProjectDetails;