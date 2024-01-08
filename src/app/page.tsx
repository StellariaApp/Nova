import { Wrapper } from "@stellaria/nova";
import { page } from "./styles";
import { Navbar } from "@/components/Navbar";
import { Sections } from "@/page/Sections";

const Home = () => (
  <Wrapper as="main" stylex={page.container}>
    <Sections />
    <Navbar />
  </Wrapper>
);

export default Home;
