import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Profiles from "./Profiles";
import { MemoryRouter } from "react-router-dom";
import { contactsTestData } from "../utils/mocks/testData/contactsTestData";

describe("<Profiles />", () => {
  test("Should Render Component", async () => {
    render(
      <MemoryRouter initialEntries={["/profiles"]}>
        <Profiles profiles={[]} />
      </MemoryRouter>
    );

    const takeMeHomeButton = screen.getByRole("button", {
      name: /take me home/i,
    });

    expect(takeMeHomeButton).toBeInTheDocument();
  });

  test("Should Render profiles as links", async () => {
    render(
      <MemoryRouter initialEntries={["/profiles"]}>
        <Profiles profiles={contactsTestData} />
      </MemoryRouter>
    );

    await waitFor(() => {
      screen.findByText(/andrew jones/i);
    });

    const firstProfileLink = screen.getByRole("link", {
      name: /profile name andrew jones/i,
    });

    const secondProfileLink = screen.getByRole("link", {
      name: /profile name mary poppins/i,
    });

    expect(firstProfileLink).toHaveAttribute("href", "/profile/1");
    expect(secondProfileLink).toHaveAttribute("href", "/profile/2");
  });

  test("Should Render profiles as links", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/profiles"]}>
        <Profiles profiles={contactsTestData} />
      </MemoryRouter>
    );

    await waitFor(() => {
      screen.findByText(/andrew jones/i);
    });

    const firstProfileLink = screen.getByRole("link", {
      name: /profile name andrew jones/i,
    });

    await waitFor(() => user.click(firstProfileLink));

    // Data on profile page once link is clicked
    await waitFor(() => {
      screen.findByText(/aby/i);
      screen.findByText(/ai international/i);
      screen.findByText(/02485 896532/i);
      screen.findByText("andrew@test.com");
      screen.findByText("andysSite@somewhere.co.uk");
      screen.findByText(/1/i);
    });
  });
});
