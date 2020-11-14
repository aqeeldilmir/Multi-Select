import React from 'react'
import MdArrowDropup from 'react-ionicons/lib/MdArrowDropup'

const SelectField = (props) => {
    return (
        <div>
            <fieldset onClick={props.click} className={props.fieldStyle}>
                <legend className={props.legendStyel}>Language</legend>
                <span className={props.value} >{props.values.length != 0 ? props.values.join(',') : 'No preference'}</span>
                <span className={props.icon}> <MdArrowDropup fontSize="30px" color="#B8B8BA" /></span>
            </fieldset>
        </div>
    )
}

export default SelectField;
