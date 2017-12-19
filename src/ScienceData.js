import React, { Component } from 'react';
import Science from './Science';
import './App.css'
class ScienceData extends Component{


    render(){
        let scienceArray = [];
        const ScienceClass = new Science();
        scienceArray = ScienceClass.getArrayScience();
        let activeScience = ScienceClass.getActiveScience();



        return (
            activeScience.map((item, index) =>
                <div id={item.id} key={index} onClick={() => {ScienceClass.setStudy(item); }}>{item.name}</div>
            )

        );
    }
}

export default ScienceData;