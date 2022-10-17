import React from "react";
import '../App.css';
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { languageOptions } from "../Constants/languageOptions";
import { makeStyles } from "@material-ui/core/styles";

const color = "white";

const useStyles = makeStyles({
  select: {
    backgroundColor: "#5b606b",
    color: "white",
    borderColor: "black",
    "&:before": {
        borderColor: "black",
      },
      "&:after": {
        borderColor: "black",
      }
  },
  icon: {
    fill: "black"
  }
});

const LanguageDropdown = ({ onSelectChange }) => {
    const classes = useStyles();

    return (
        <FormControl variant="filled" className="language-dropdown" >
            <InputLabel id="language-menu" className="language-text">Language</InputLabel>
            <Select
                placeholder={"Select Language"}
                options={languageOptions}
                defaultValue={languageOptions[0].name}
                onChange={onSelectChange}
                variant="filled"
                className={classes.select}
                inputProps={{
                    classes: {
                        icon: classes.icon,
                        root: classes.root
                    }
                }}
            >
                {languageOptions.map(language => {
                    return (
                        <MenuItem key={language.name} value={language.name}>{language.name}</MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}

export default LanguageDropdown;