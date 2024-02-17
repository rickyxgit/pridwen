import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styled from "styled-components";

const Body = styled.div`
  min-height: 100vh;
`;

export default function Projects() {
  return (
    <div>
      <Header />
      <Body>
        <h2> Featured Projects </h2>
      </Body>

      <Footer />
    </div>
  );
}
