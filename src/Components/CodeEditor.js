import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ onChange, language, code, theme }) => {
    const defaultTheme = "vs-dark";
    const { value, setValue } = useState(code || "");

    const handleEditorChange = (value) => {
        setValue(value);
        onChange("code", value);
    }

    return ( 
        <div className = "rounded-md overflow-hidden w-full h-full shadow-4xl" >
            <Editor 
                height="80vh"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                theme={defaultTheme}
                defaultValue="// some comment"
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default CodeEditor;