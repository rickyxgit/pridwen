import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { useRouter } from "next/router";

import ImageGallery from "@/components/ImageGallery";

import projects from "@/public/projects";

import styled from "styled-components";

const Body = styled.div`
  min-height: 100vh;
  margin-bottom: 40px;
`;

export default function ProjectPage() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const projectName = currentUrl.slice(1).replace(/%20/g, " ");

  let projectIndex = 0; 

  //selecting project
  switch (projectName) {
    case "Laneway house at w 22nd and Blenhiem":
      projectIndex = 1;
      break;
    case "Dunbar and w 32nd":
      projectIndex = 2; 
      break;
    default:
      projectIndex = 0; 
  }

  const imagePaths = [];

  for (let i = 1; i <= projects[projectIndex].numImages; i++) {
    const imagePath = `/images/${projectName}/image${i}.jpg`;
    imagePaths.push(imagePath);
  }

  return (
    <div>
      <Header />
      <Body>
      <ImageGallery images={imagePaths} name={projectName} />
      </Body>
      <Footer />
    </div>
  );
}
