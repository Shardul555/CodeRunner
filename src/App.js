import logo from './logo.svg';
import './App.css';
import CodeEditor from './Components/CodeEditor';
import Editor from "@monaco-editor/react";
import { Grid, ListItem, Button } from '@material-ui/core';
import { useState } from 'react';
import LanguageDropdown from './Components/LanguageDropdown';
import { languageOptions } from './Constants/languageOptions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [language, setLanguage] = useState(languageOptions[0]);

  const [code, setCode] = useState("");

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
                  <CustomInput />
                  <Button variant="contained" color="secondary" onClick={() => {alert('clicked');}}>Compile and Run</Button>
                </div>
              </Grid>
              <Grid container direction='column' xs={6} lg={12}>
                <CustomInput />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

function CustomInput({ customInput }) {
  return (
    <div>
      <h3>Custom Input</h3>
    </div>
  );
}

function OutputWindow({ output }) {
  return (
    <div>
      <h3>Output</h3>
    </div>
  );
}

export default App;
