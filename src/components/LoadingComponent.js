import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const Loading = () =>{
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading....</p>
        </div>
    );
}