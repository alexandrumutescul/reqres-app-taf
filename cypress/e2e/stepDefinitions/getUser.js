import { Given, Then } from "cypress-cucumber-preprocessor/steps";

let singleUserFirstName;

Then(
  "I get single user with id and assert first_name against previously save first_name field",
  (singleUserUrl) => {
    cy.wrap(null).then(() => {
      cy.getShared().then((shared) => {
        let id = shared.id;
        let listUserFirstName = shared.listUserFirstName;
        cy.request(`/api/users/${id}`).then((response) => {
          expect(response.status, "response.status").to.eq(200);
          singleUserFirstName = response.body.data["first_name"];
          expect(listUserFirstName, "listUserFirstName").to.eq(singleUserFirstName);
        });
      });
    });
  }
);
