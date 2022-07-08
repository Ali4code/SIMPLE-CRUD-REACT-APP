import { Box } from "@mui/system";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
    <Box height="100vh" display="flex" flexDirection="column">
      <Navbar />
        {children}
      <Footer />
      </Box>
    </>
  );
};

export default Layout;
