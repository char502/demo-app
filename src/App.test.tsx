import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "./App";

describe("<App />", () => {
  test("Should Render Component", async () => {
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </MemoryRouter>;
  });
});
