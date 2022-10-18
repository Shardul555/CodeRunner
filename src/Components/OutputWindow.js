import React, { useState } from "react";
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

let windowColor = "green",
    textColor = "#d9dbdf";

const useStyles = makeStyles({
  root: {
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
    fontSize: 18,
    fontWeight: "bold"
  }
});

const OutputWindow = ({ outputData, outputWindowColor }) => {

    windowColor = outputWindowColor ? outputWindowColor : windowColor;

    const classes = useStyles();

    return (
        <div className="borders">
            <h3 className="no-decor">Output</h3>
            <TextField
              id="filled-multiline-static"
              multiline
              rows={10}
              placeholder="Code Output"
              value={outputData}
              variant="outlined"
              fullWidth
              className={classes.root}
              InputProps={{
                readOnly: true,
                classes: {input: classes.resize}
              }}
            />
        </div>
    );
};

export default OutputWindow;