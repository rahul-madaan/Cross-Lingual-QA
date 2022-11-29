import styled from 'styled-components';

export const Box = styled.div`
  padding: 5px 6px;
  background: #FC5185;
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 100px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
export const Heading = styled.p`
  font-size: 10px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;