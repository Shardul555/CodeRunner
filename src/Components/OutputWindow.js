import React from "react";
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
    fontSize: 20
  }
});

const OutputWindow = ({ outputData }) => {

    let statusId = outputData?.status;
    if (statusId != 3) {
        windowColor = "red";
    }

    const classes = useStyles();

    return (
        <div>
            <h3 className="no-decor">Output</h3>
            <TextField
              id="filled-multiline-static"
              multiline
              rows={4}
              defaultValue="Default Value"
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