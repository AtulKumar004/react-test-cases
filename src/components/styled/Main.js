import styled from "styled-components";

const Section = styled.div`
  display: flex;
//   flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  background-color: #f8f9fa;
  border: 1px solid blue;
  background: ${(props) => props.background || 'white'};
  color: ${(props) => props.color || 'black'};
`;

export default Section;
