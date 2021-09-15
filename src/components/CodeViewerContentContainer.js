import styled from 'styled-components'

const CodeViewerContentContainer = styled.div`
  position: absolute;
  padding: 0;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  padding:  22px;

  @media (max-width: 820px) {
    padding:  5px;
    .language-javascript {
      font-size: 5px !important;
    }
  }
` 
export default CodeViewerContentContainer