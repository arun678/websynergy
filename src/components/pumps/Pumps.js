import React from 'react'
import Properties from './Properties';
import { withRouter } from 'react-router-dom';

const Pumps = (props) => {
    const { list } = props;
    const renderPumps = list.map((item, index) => {
        return (
            <div key={index} className="product-wrapper">
                <h2 className="product-name" role="button" onClick={() => props.showPumpDetails(item.id)}>
                    {`${item.name} - ${getSerialNumber(item.properties)}`}
                </h2>
                <div className="product-container">
                    <div className="product-image">
                        <img src={item.imgSrc} alt={item.name}/>
                    </div>
                    <div className="product-detail-list">
                        <Properties list={item.properties}></Properties>
                    </div>
                </div>
            </div>
        )
    })
    return renderPumps
}

const getSerialNumber = (properties) => {
    return properties.filter(prop => {
        return prop.id === "serialNumber"
    })[0].value
}

export default withRouter(Pumps)