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

  return (
    <div>
      <Header />
      <Body>
      <ImageGallery name={projectName}/>
      </Body>
      <Footer />
    </div>
  );
}
