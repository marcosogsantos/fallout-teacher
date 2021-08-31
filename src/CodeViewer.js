import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import customStyle from './customStyle'
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
