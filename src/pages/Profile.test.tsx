import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Profile from "./Profile";
import { MemoryRouter } from "react-router-dom";
import { contactsTestData } from "../utils/mocks/testData/contactsTestData";

describe("<Profile />", () => {
  test("Should Render Component", async () => {
    render(
      <MemoryRouter initialEntries={["/profile/2"]}>
        <Profile profiles={contactsTestData} />
      </MemoryRouter>
    );

    await waitFor(() => {
      screen.findByText(/2/i);
      screen.findByText(/mary poppins/i);
    });
  });
});
