//1. Create a class

import Thumbnail from './Thumbnail';
import React from 'react'
export default class ThumbnailList extends React.Component{
    render(){
        
        var list = this.props.thumbnails.map(function(thumbnail, index){
            console.log(thumbnail);
            return <Thumbnail key={index} {...thumbnail}></Thumbnail>
            
        })
        
        return (
            <div>
                {list}
            </div>
        )
    }
}


