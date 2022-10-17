import React, { useState } from "react";
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const windowColor = "#6a717e",
    textColor = "#d9dbdf";

const useStyles = makeStyles({
  root: {
    backgroundColor:"#1e1e1e",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "dark" + windowColor,
          borderWidth: 3,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "dark" + windowColor
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "dark" + windowColor
    },
    "& .MuiOutlinedInput-input": {
      color: textColor
    },
    "&:hover .MuiOutlinedInput-input": {
      color: textColor
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: textColor
    },
    "& .MuiInputLabel-outlined": {
      color: textColor
    },
    "&:hover .MuiInputLabel-outlined": {
      color: textColor
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: textColor
    }
  },
  resize: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

const InputWindow = ({ inputData, onChange }) => {
    const classes = useStyles();

    const handleInputChange = (value) => {
        onChange(value);
    }

    return (
        <div className="borders">
            <h3 className="no-decor">Custom Input</h3>
            <TextField
              id="filled-multiline-static"
              multiline
              rows={10}
              placeholder="Provide custom input"
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              className={classes.root}
              InputProps={{
                classes: {input: classes.resize}
              }}
            />
        </div>
    );
};

export default InputWindow;