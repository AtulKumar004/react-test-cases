import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  
  
  background-color: #f8f9fa;

  
  background: ${(props) => props.background || 'white'};
  color: ${(props) => props.color || 'black'};

  

  @media (min-width: 768px) {
    padding: 0 7%;
  }
  @media (min-width: 1024px) {
    padding: 0 10%;
  }

  // @media (max-width: 480px) {
  //   padding: 0 2rem;
  // }

  // @media (max-width: 320px) {
  //   padding: 0 1rem;
  // }
`;

const Container = styled.div`





  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5%;
  padding: 0 5%;
 

  
  
  background-color: #f8f9fa;
  
  background: ${(props) => props.background || 'white'};
  color: ${(props) => props.color || 'black'};

  @media (min-width: 768px) {
    margin: 0 7%;
     padding-top: ${(props) => props?.paddingTop || 0};
  }
     @media (max-width: 768px) {
   background-image: none !important ;
   background-color: #000000 !important;
  }
  @media (min-width: 1024px) {
    margin: 0 10%;
  }

  // @media (max-width: 480px) {
  //   margin: 0 2rem;
  // }

  // @media (max-width: 320px) {
  //   margin: 0 1rem;
  // }
  
`;

export default Section;
export { Container }
