import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

it("should render and navigate", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const user = userEvent.setup();
  expect(screen.getByText(/home page/i)).toBeInTheDocument();

  await user.click(screen.getByText(/units/i));
  expect(screen.getByText(/units page/i)).toBeInTheDocument();
});
