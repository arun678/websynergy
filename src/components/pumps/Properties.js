import React from "react";

export default function Properties(props) {
  const pumpProperties = props.list.map((el,index) => {
    return (
      <div key={index} className="product-detail detail-model">
        <div className="detail-label">{el.label}:</div>
        <div className="detail-value">{el.value}</div>
      </div>
    );
  });
  return pumpProperties;
}
