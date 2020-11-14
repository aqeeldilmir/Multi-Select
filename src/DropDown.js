import React from 'react'
import Item from './item'

const DropDown = (props) => {
    return (
        <div>
            <ul className={props.dropDownMenu}>
                {props.language.map(lang =>
                    <Item othersChecked={props.othersChecked}
                        checkBoxHadler={props.checkBoxClick}
                        language={lang} Otherstyle={props.Otherstyle}
                        otherLanguage={props.otherLanguage} textBoxValuedChanged={props.textBoxvalue}
                        saveLanguage={props.saveLanguage}
                    />)}
            </ul>
        </div>
    )
}

export default DropDown;