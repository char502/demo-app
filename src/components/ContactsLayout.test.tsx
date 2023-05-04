import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ContactsLayout } from "./ContactsLayout";

describe("<App />", () => {
  test("Should Render Component", async () => {
    render(
      <ContactsLayout
        id={1}
        name={"Bob"}
        company={"Acme"}
        username={"BMY"}
        phone={"02546 458789"}
        email={"test@test.com"}
        website={"site@somewhere.co.uk"}
      />
    );

    await waitFor(() => {
      screen.getByText(/bob/i);
    });

    const idText = screen.getByText(/bob/i);
    const nameText = screen.getByText(/bob/i);
    const company = screen.getByText(/acme/i);
    const username = screen.getByText(/bmy/i);
    const phone = screen.getByText("02546 458789");
    const email = screen.getByText(/test@test.com/i);
    const website = screen.getByText(/site@somewhere.co.uk/i);

    expect(idText).toBeInTheDocument();
    expect(nameText).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(website).toBeInTheDocument();
  });
});
