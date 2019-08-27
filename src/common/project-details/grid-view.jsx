import React from 'react'


const GridView = ({ item1, item2 }) => {
    return (
        <div className="grid-view-container">
            <div className="item item1">
                {item1}
            </div>
            <div className="item item2">
                <span className="spacer" />
                {item2}
            </div>
        </div>
    );
}

export default GridView;
