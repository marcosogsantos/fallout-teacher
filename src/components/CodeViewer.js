import SyntaxHighlighter from 'react-syntax-highlighter';
import customStyle from '../styles/codeViewerCustomStyle'
const CodeViewer = (props) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      wrapLines={true}
      wrapLongLines="pre-wrap"
      language="javascript"
      style={customStyle}>
      {props.children}
    </SyntaxHighlighter>
  );
};
export default CodeViewer