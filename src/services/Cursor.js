import React, { Component } from 'react';
import Media from 'react-media';

class Cursor extends Component {
    render() {
        return (
            <Media query="(max-width: 480px)">
                {(matches) => {
                    return matches ? 
                        null 
                    : (
                        <>
                            <div className="cursor cursor-1"></div>
                            <div className="cursor cursor-2"></div>
                        </>
                    )
                }}
            </Media>
        );
    }
}

export default Cursor;