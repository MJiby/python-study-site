import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';

// import "ace-builds/src-min-noconflict/mode-sql"
// import "ace-builds/src-noconflict/theme-chrome"

class CodeEditor extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue, e) {
    console.log(newValue, e);

    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue()); // Outputs the value of the editor
  }
  render() {
    return (
      <ReactAce
        mode="mysql"
        theme="xcode"
        setReadOnly={false}
        onChange={this.onChange}
        style={{ height: '400px' }}
        enableBasicAutocompletion={true} // 아직 안됨.
        enableLiveAutocompletion={true}
        fontSize={15} // 작동 X
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}

export default CodeEditor