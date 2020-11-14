import classes from './App.module.css';
import React, { Component } from "react";
import SelectField from './SelectField'
import DropDown from './DropDown'


class App extends Component {

  state = {
    fieldStyle: [classes.dropdown_toggle],
    legendStyel: [],
    dropDownMenu: [classes.dropdown_menu, classes.c1],
    selectMenu: true,
    listClcik: true,
    language: ["English", "Mandarin", "Hokkien", "Tamil", "Cantonese", "Others"],
    icon: classes.iconB,
    othersChecked: false,
    Otherstyle: "",
    values: [],
    otherLanguage: ""

  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false)
  }

  /*** HAndle Click On the screend and Update Styles */

  handleClick = (e) => {

    if (this.node.contains(e.target)) {
      return
    }
    let height;
    if (this.state.othersChecked) {
      height = this.node.offsetTop > 290 ? classes.dropUp_others : "";

    }
    else {
      height = this.node.offsetTop > 290 ? classes.dropUp : "";
    }

    const field = [classes.dropdown_toggle]
    const legend = [classes.legend]
    const dropDown = [classes.dropdown_menu, classes.c1, height]

    this.setState({
      fieldStyle: [...field],
      legendStyel: [...legend],
      dropDownMenu: [...dropDown],
      selectMenu: !this.state.selectMenu,
      icon: classes.iconB
    })

  }

  /** Handle Drop up and Drop Down and Display of Select Field */

  changeStyle = () => {

    var height;
    if (this.state.othersChecked) {
      height = this.node.offsetTop > 290 ? classes.dropUp_others : "";

    }
    else {
      height = this.node.offsetTop > 290 ? classes.dropUp : "";
    }

    if (this.state.selectMenu) {

      const field = [classes.dropdown_toggle, classes.fieldSet];
      const legend = [classes.legend, classes.legend_color];
      const dropDown = [classes.dropdown_menu, classes.c1, classes.show, height];
      this.setState({
        fieldStyle: [...field],
        legendStyel: [...legend],
        dropDownMenu: [...dropDown],
        selectMenu: !this.state.selectMenu,
        listClcik: false,
        icon: this.node.offsetTop > 290 ? classes.icon : classes.iconB
      })

    } else {

      const field = [classes.dropdown_toggle]
      const legend = [classes.legend]
      const dropDown = [classes.dropdown_menu, classes.c1, height];

      // Hanlde Data and classed of select field dynamically

      this.setState({
        fieldStyle: [...field],
        legendStyel: [...legend],
        dropDownMenu: [...dropDown],
        selectMenu: !this.state.selectMenu,
        listClcik: false,
        icon: classes.iconB
      })

    }
  }


  clcikOnScreen = () => {
    if (!this.state.listClcik)
      this.changeStyle();
  }

  textBoxValuedChanged = (e) => {
    this.setState({
      otherLanguage: e.target.value
    })
  }

  /*** Save Selected Language in the array of languages except other  */

  OnCheckBoxClick = (e) => {

    if (e.target.value != 'Others')
      if (e.target.checked) {
        const arr = [...this.state.values];
        arr.push(e.target.value);
        this.setState({
          values: [...arr]
        })
      } else {
        console.log(e.target.value)
        const arr = [...this.state.values]
        const index = arr.indexOf(e.target.value)
        arr.splice(index, 1);
        this.setState({
          values: [...arr]
        })
      }


    if (e.target.value === "Others") {

      if (e.target.checked) {
        const s = this.node.offsetTop > 290 ? classes.dropUp_others : "";
        this.setState({
          othersChecked: e.target.checked,
          dropDownMenu: [classes.dropdown_menu, classes.c1, s, classes.show],
          Otherstyle: classes.dropdown_menu_others
        })
      }
      else {
        const s = this.node.offsetTop > 290 ? classes.dropUp : "";
        this.setState({
          othersChecked: e.target.checked,
          dropDownMenu: [classes.dropdown_menu, classes.c1, s, classes.show],
          Otherstyle: " ",
          otherLanguage: ""
        })
      }
    }

  }


  /********* Save Other Language on Save Button Click   */


  saveLanguage = () => {
    const arr = [...this.state.values];

    arr.push(this.state.otherLanguage);

    this.setState({
      values: [...arr],
      selectMenu: false,
    });

    this.changeStyle();
  }


  render() {
    return (
      <div className={classes.App}>

        <div ref={node => this.node = node} className={classes.dropdownDiv}>
          <SelectField values={this.state.values} click={this.changeStyle} fieldStyle={this.state.fieldStyle.join(' ')}
            legendStyel={this.state.legendStyel.join(' ')} value={classes.value}
            icon={this.state.icon}
          />
          <DropDown otherLanguage={this.state.otherLanguage}
            textBoxvalue={this.textBoxValuedChanged} Otherstyle={this.state.Otherstyle}
            othersChecked={this.state.othersChecked} checkBoxClick={this.OnCheckBoxClick}
            dropDownMenu={this.state.dropDownMenu.join(" ")} language={this.state.language}
            saveLanguage={this.saveLanguage}
          />
        </div>
      </div >
    );
  }
}

export default App;
