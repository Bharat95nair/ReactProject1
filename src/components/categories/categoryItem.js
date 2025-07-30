import React from 'react'


export default function categoryItem(props){

    return(
        <div className="col">
            <div>{props.categoryObj.label}</div>
            <img src ={props.categoryObj.img_url} alt='some text'></img>
        </div>
    )

}