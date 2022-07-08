import { styled } from "@mui/system";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <CustomDiv>
      <Navbar />
      {children}
      <Footer />
    </CustomDiv>
  );
};

export const CustomDiv = styled("div")(({ theme }) => ({
  display: "relative",
  background: theme.palette.gray.main
}));
export default Layout;
