import React, { Fragment } from 'react';
import './style.scss';
import Banner from './../landingPage/index';
import GridView from '../../common/project-details/grid-view';
import ImageViewer from './../../common/image-view/index';
import ProjectDetails from './../../common/project-details/index';
const HomePage = () => {
    return (
        <Fragment>
            <Banner />
            <p className="previous-project">Previous Project</p>

            <div className="project-container">
                <GridView item1={<ImageViewer />} item2={<ProjectDetails />} />
                <div className="project2-container">
                    <div className="project project1">
                        <ProjectDetails />
                    </div>
                    <div className="project project2">
                        <div className="wrapper">
                            <ImageViewer />
                        </div>

                    </div>
                </div>
                <GridView item1={<ImageViewer />} item2={<ProjectDetails />} />
            </div>
        </Fragment>
    );
}

export default HomePage;