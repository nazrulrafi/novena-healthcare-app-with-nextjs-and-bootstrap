import React from 'react';
import CountUp from "react-countup";

function ClientCounter({title,count}) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="counter-stat">
                <i className="icofont-flag"></i>
                <span className="h3 counter">
                    <CountUp end={count} duration={2}/>+
                </span>
                <p>{title}</p>
            </div>
        </div>
    );
}
export default ClientCounter;