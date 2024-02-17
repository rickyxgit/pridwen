import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { useRouter } from "next/router";

import projects from "@/public/projects";

export default function ProjectPage() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const projectName = currentUrl.slice(1).replace(/_/g, " ");
  const folderTitle = projectName.substring(0, projectName.length - 5);

  console.log(`/images/${folderTitle}/thumbnail.jpg`);
  console.log(projects[0].numImages);
  
  const imagePaths = [];
  for (let i = 1; i <= projects[0].numImages; i++) {
    const imagePath = `/images/${folderTitle}/image${i}.jpg`;
    imagePaths.push(imagePath);
  }

  return (
    <div>
      <Header />
      <div> {projectName}</div>
      <div> {folderTitle}</div>
      <Slider images={imagePaths} />

      <Footer />
    </div>
  );
}
