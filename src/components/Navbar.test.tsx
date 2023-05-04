import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("<Navbar />", () => {
  test("Should Render Component", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    const navProfileImage = screen.getByRole("img", {
      name: /profile image/i,
    });
    const mobileMenu = screen.getByRole("button", {
      name: /open main menu/i,
    });

    await waitFor(() => user.click(mobileMenu));

    await waitFor(() => {
      screen.getByRole("img", {
        name: /close cross/i,
      });
    });

    const closeCross = screen.getByRole("img", {
      name: /close cross/i,
    });
    const homeLink = screen.getAllByRole("link", {
      name: /home/i,
    });
    const profilesLink = screen.getAllByRole("link", {
      name: /profiles/i,
    });

    expect(navProfileImage).toBeInTheDocument();
    expect(closeCross).toBeInTheDocument();
    expect(homeLink[1]).toBeInTheDocument();
    expect(profilesLink[1]).toBeInTheDocument();
  });
});
