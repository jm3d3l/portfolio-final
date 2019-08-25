import React from 'react'
import Navigationbar from './common/navigationbar/index';
import Banner from './pages/landingPage';
import Grid from '@material-ui/core/Grid';
import ProjectDetails from './common/project-details';
import ImageViewer from './common/image-view/index';
import GridView from './common/project-details/grid-view';
const App = () => {
    return (
         <div className="container">
            <Navigationbar />
            <Banner />
            <p className="previous-project">Previous Project</p>

            <div className="app-project-container">
                <div style={{height: '500px'}}>
                    <GridView item1={<ImageViewer />} item2={<ProjectDetails />} />
                </div>
                <div style={{height: '500px'}}>
                    <GridView item1={<ProjectDetails />} item2={<ImageViewer />} />
                </div>
                
                <div style={{height: '500px'}}>
                    <GridView item1={<ImageViewer />} item2={<ProjectDetails />} />
                </div>
            </div>
        </div>
    )
    }
              
            
             
export default App;