import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Profiles from "./Profiles";
import { MemoryRouter } from "react-router-dom";
import { contactsTestData } from "../utils/mocks/testData/contactsTestData";

describe("<Profiles />", () => {
  test("Should Render Component", async () => {
    render(
      <MemoryRouter initialEntries={["/profiles"]}>
        <Profiles />
      </MemoryRouter>
    );

    await waitFor(() => {
      //   screen.findByText(/andrew jones/i);
      screen.findByText(contactsTestData[0].name);
      //screen.getByText(/take me home/i);
    });

    console.log(contactsTestData[0]);

    // const nameText = await screen.findByText(/andrew jones/i);

    // const nameText = await screen.findByText(contactsTestData[0].name);
    // expect(nameText).toBeInTheDocument();
    // contactsTestData.forEach((person) => {
    //   expect(screen.findByText(person.name)).toBeInTheDocument();
    // });

    screen.logTestingPlaygroundURL();
  });
});
