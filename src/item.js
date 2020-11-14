import React from 'react'
import classes from './item.module.css'

const item = (props) => {


    return (
        <React.Fragment>
            <li>
                <label ref={props.Ref} for={props.language}>{props.language}</label>
                <span className={classes.round}>
                    <input onChange={props.checkBoxHadler} name="language" type="checkbox" id={props.language} value={props.language} />
                    <label for={props.language}></label>
                </span>
            </li>
            {props.language == "Others" && props.othersChecked ?
                <li style={{ display: "block" }}>
                    <input className={classes.dropdown_toggle_textField}
                        name="OthersInput" type="text" placeholder="Other Language"
                        value={props.otherLanguage} onChange={props.textBoxValuedChanged}
                    />
                    <button onClick={props.saveLanguage} disabled={props.otherLanguage == "" ? true : false} className={classes.dropdown_toggle_btn} type="button" >Save</button>
                </li> : null}

        </React.Fragment>
    )
}

export default item;