import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { useRouter } from "next/router";

import projects from "@/public/projects";

import styled from "styled-components";

const Body = styled.div`
 min-height: 100vh;
`

export default function ProjectPage() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const projectName = currentUrl.slice(1).replace(/%20/g, " ");

  
  const imagePaths = [];
  for (let i = 1; i <= projects[0].numImages; i++) {
    const imagePath = `/images/${projectName}/image${i}.jpg`;
    imagePaths.push(imagePath);
  }

  return (
    <div>
      <Header />
      
      <Body>

      
      <Slider images={imagePaths} name = {projectName}/>
      </Body>
      <Footer />
    </div>
  );
}
