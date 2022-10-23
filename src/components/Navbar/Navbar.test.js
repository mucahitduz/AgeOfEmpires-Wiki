import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

it("should render navbar", () => {
  const ageOfEmpires = "Age of Empires";
  const home = "Home";
  const units = "Units";
  render(
    <BrowserRouter>
      <Navbar>
        {ageOfEmpires}, {home} , {units}
      </Navbar>
    </BrowserRouter>
  );
});
