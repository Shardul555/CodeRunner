import './App.css';
import CodeEditor from './Components/CodeEditor';
import { Grid, ListItem, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import LanguageDropdown from './Components/LanguageDropdown';
import { languageOptions } from './Constants/languageOptions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import OutputWindow from './Components/OutputWindow';
import InputWindow from './Components/InputWindow';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [language, setLanguage] = useState(languageOptions[0].name);
  const [code, setCode] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [outputData, setOutputData] = useState("");
  const [outputWindowColor, setOutputWindowColor] = useState("green");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    document.title = 'CodeRunner';
  });

  const onLanguageSelectChange = (sl) => {
    console.log("selected Language: ", sl.target.value);
    setLanguage(sl.target.value);
  };

  const onCodeChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        console.log(code)
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const onCustomInput = (value) => {
    setCustomInput(value.target.value);
    console.log(customInput);
  }

  const handleCompile = () => {
    setProcessing(true);

    const formData = {
      language: language,
      sourceCode: code,
      stdin: customInput
    }

    axios
    .post(process.env.REACT_APP_BACKEND_URL, { formData })
    .then((response) => {
      setProcessing(false);
      if(response.data?.status != "success") {
        setOutputWindowColor("red");
      }
      setOutputData(response.data.stdout);
      console.log("response", response.data);
    })
    .catch((err) => {
      setProcessing(false);
      console.log("compile request error ", err);
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <div className="App">
        <div className="App-header">
          <h2>CodeRunner</h2>
        </div>
        <div className="languageDropDown" xs={4}>
          <LanguageDropdown onSelectChange={onLanguageSelectChange} />
        </div>
        <div>
          <Grid container spacing={2} className="Grid">
            <Grid item xs={12} lg={8}>
              <CodeEditor 
              code={code}
              onChange={onCodeChange}
              language={language}
              />
            </Grid>
            <Grid container alignItems="flex-start" xs={12} lg={4}>
              <Grid container direction="column" xs={6} lg={12}>
                <div>
                  <InputWindow 
                    inputData={customInput}
                    onChange={onCustomInput}
                  />
                  <Button variant="contained" color="secondary" onClick={handleCompile}>{ processing ? "Running.." : "Compile and Run"}</Button>
                </div>
              </Grid>
              <Grid container direction='column' xs={6} lg={12}>
                <OutputWindow
                  outputData={outputData}
                  outputWindowColor={outputWindowColor}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
