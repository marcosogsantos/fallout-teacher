import styled from 'styled-components'

const CodeViewerContent = styled.div`
  position: relative;
  top: 50%;
  height: 100%;
  transform: translateY(-50%);
  padding: 30px;
  border: solid 1px rgba(25, 255, 25,.2);
  border-radius: 2em;

  @media (max-width: 1200px) {
    padding: 10px;
  }
` 
export default CodeViewerContent