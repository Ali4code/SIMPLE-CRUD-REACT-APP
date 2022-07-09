import { render, screen } from "@testing-library/react";
import SinglePost from "../components/SinglePost";


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));


describe("<SinglePost />", () => {
  describe("render single post", () => {
    it("render content properly", async () => {
      let item = {
        title: "test post title",
        body: "body of test post",
        id: 2,
      };

      render(<SinglePost {...item} />);

      expect(screen.getByTestId("titleText")).toHaveTextContent(item.title);
      expect(screen.getByTestId("bodyText")).toHaveTextContent(item.body);
    });
  });
});
