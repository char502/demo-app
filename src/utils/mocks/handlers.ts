import { rest } from "msw";
import { contactsTestData } from "./testData/contactsTestData";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contactsTestData));
  }),
];
