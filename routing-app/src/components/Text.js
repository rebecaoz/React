import React from 'react';
import { useParams } from "react-router-dom";

const Text = props => {
    const { text } = useParams();
    
    return (
      <div className="panel-default">
        <div className="panel-body">
          <div>{text}</div>
        </div>
      </div>
    );
}
export default Text;