import { Given, Then } from "cypress-cucumber-preprocessor/steps";

let totalPages = 0;
let calculatedTotalPages = 0;
let id;
let listUserFirstName;

Given(
  "I get user list with page= {string} and get data array length and total field value",
  (pageNumber) => {
    cy.request(`/api/users?page=${pageNumber}`).then((response) => {
      expect(response.status).to.eq(200);
      calculatedTotalPages += response.body.data.length;
      totalPages += response.body.total;
    });
  }
);

Then("I check total data field value", () => {
  cy.wrap(null).then(() => {
    expect(calculatedTotalPages).to.eq(totalPages / 2);
  });
});

Given(
  "I get user list with page= {string} and save first_name and id field information form data array with {string}",
  (pageNumber, dataIndex) => {
    cy.request(`/api/users?page=${pageNumber}`).then((response) => {
      expect(response.status).to.eq(200);
      listUserFirstName = response.body.data[dataIndex]["first_name"];
      id = response.body.data[dataIndex].id;

      cy.share({ listUserFirstName: listUserFirstName });
      cy.share({ id: id });
    });
  }
);
