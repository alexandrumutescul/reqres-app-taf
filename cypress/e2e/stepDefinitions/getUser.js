import { Given, Then } from "cypress-cucumber-preprocessor/steps";

let singleUserLastName;

Then(
  "I get single user with id and assert last_name against previously save last_name field",
  (singleUserUrl) => {
    cy.wrap(null).then(() => {
      cy.getShared().then((shared) => {
        let id = shared.id;
        let listUserLastName = shared.listUserLastName;
        cy.request(`/api/users/${id}`).then((response) => {
          expect(response.status, "response.status").to.eq(200);
          singleUserLastName = response.body.data["last_name"];
          expect(listUserLastName, "listUserLastName").to.eq(singleUserLastName);
        });
      });
    });
  }
);
