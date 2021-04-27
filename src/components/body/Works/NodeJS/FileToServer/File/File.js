import React from 'react';

function File(props){
    const kb = 1024;
    const mb = 1048576;
    let actSize = (props.file.size < 102400) ? `${(props.file.size/kb).toFixed(2)} КБ` : `${(props.file.size/mb).toFixed(2)} МБ`;

    return(
        <React.Fragment>
            <p>{props.ind}.</p>
            <p>{props.file.name}</p>
            <p>{actSize}</p>
        </React.Fragment>
    );
}

export default File;