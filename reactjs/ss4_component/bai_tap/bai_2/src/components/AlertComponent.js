import React from 'react';

function AlertComponent(props) {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
            {this.props.text}
        </div>
    );
}

export default AlertComponent;