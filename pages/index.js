import Header from "@/components/Header";
import styled from "styled-components";
import myImage from '../media/images/test.jpg';

const HomeImage = styled.div`
  background-image: url(${myImage});
  width: 300px; 
  height: 200px; 
  background-size: cover; 
  background-position: center; 
  border: 2px solid red; 
  background-color: red;
`;



export default function Home() {
  return (
    <div>
      <Header />
     
      <HomeImage />

    
   
    </div>
  );
}
