import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Profile from "./Profile";
import { MemoryRouter } from "react-router-dom";
// import { server } from "../utils/mocks/server";
// import { rest } from "msw";
// import { contactsTestData } from "../utils/mocks/testData/contactsTestData";

// import Profiles from "./Profiles";

describe("<Profile />", () => {
  //   beforeEach(() => server.listen());
  //   afterEach(() => server.resetHandlers());
  //   afterAll(() => server.close());

  test("Should Render Component", async () => {
    // server.use(
    //   rest.get(
    //     "https://jsonplaceholder.typicode.com/users",
    //     (req, res, ctx) => {
    //       return res(ctx.status(200), ctx.json(contactsTestData));
    //     }
    //   )
    // );

    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <Profile />
      </MemoryRouter>
    );

    // id: 1,
    // name: "Andrew Jones",
    // username: "ABY",
    // email: "andrew@test.com",

    await waitFor(() => {
      //   screen.getByText(/website/i);
      //   screen.getByText(/Profile page/i);
      //   screen.findByText(/andrew jones/i);
    });

    // const idText = screen.getByText(/1/i);
    // const nameText = screen.getByText(/andrew jones/i);
    // const userName = screen.getByText(/aby/i);
    // const company = screen.getByText(/Ai International/i);

    // expect(idText).toBeInTheDocument();
    // expect(nameText).toBeInTheDocument();
    // expect(userName).toBeInTheDocument();
    // expect(company).toBeInTheDocument();

    // screen.logTestingPlaygroundURL();
  });
});
