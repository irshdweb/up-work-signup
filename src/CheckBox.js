import React from 'react';
import Check from './checked.svg';

const CheckBox = (props) => {
  return (
            <div className="check-wrap">
                <input type="checkbox" name={props.name} className="checkbox" id={props.id} />
                <label htmlFor={props.id}>
                    <img src={Check} alt="checked"/>
                </label>
            </div>
            
  )
}

export default CheckBox