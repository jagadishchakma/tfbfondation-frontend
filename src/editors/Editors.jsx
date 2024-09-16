import Bold from './Bold';
import './editor.css';
import FontSize from './FontSize';
import List from './List';

const Editor = () => {
  
  return (
    <div className="editorBox">
      <FontSize />
      <List />
      <Bold />
      <div contentEditable="true" id="editor">

      </div>
    </div>
  );
};

export default Editor;
