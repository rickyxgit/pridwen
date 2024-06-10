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
    case "3276 w 22nd ave Vancouver":
      projectIndex = 1;
      break;
    case "3576 w 32nd ave Vancouver":
      projectIndex = 2; 
      break;
    case "7660 Malahat ave Richmond":
      projectIndex = 0;
      break; 
    case "78 East 51st ave Vancouver":
      projectIndex = 3; 
      break;
    case "9871 Pinewell Cresent Richmond":
      projectIndex = 4;
      break; 

    case "6515 Leibly ave Burnaby":
      projectIndex = 5;
      break; 
    default:
    
  }

  const imagePaths = [];

  for (let i = 1; i <= projects[projectIndex].numImages; i++) {
    const imagePath = `/images/${projectName}/image${i}.jpg`;
    imagePaths.push(imagePath);
  }

  console.log(projectIndex);

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
