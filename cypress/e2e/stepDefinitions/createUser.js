import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import moment from "moment";

let dateNow = new Date();
let createUserResponse;
let createUserName;
let singleUserFirstName;

Given(
  "I create user with name {string} and job {string}",
  (userName, userJob) => {
    createUserName = userName;

    cy.request({
      method: "POST",
      url: "/api/users",
      body: {
        name: userName,
        job: userJob,
      },
    }).then((response) => {
      createUserResponse = response;
    });
  }
);

Then(
  "I check response status, id, year of creation and that response duration is below {string}",
  (responseDuration) => {
    let currentYear = moment(dateNow).format("YYYY");
    let responseYear = moment(createUserResponse.body.createdAt).format("YYYY");
    expect(createUserResponse.status, "createUserResponse.status").to.eq(201);
    expect(parseInt(createUserResponse.body.id), "parseInt(createUserResponse.body.id)").to.be.a("number");
    expect(currentYear, "currentYear").to.eq(responseYear);

    // TODO: highly flaky as most of the response time is above 100 ms
    expect(createUserResponse.duration, "createUserResponse.duration").to.below(parseInt(responseDuration));

    // TODO: create bug, user is not created successfully, response status code404, resource not found
    cy.wrap(null).then(() => {
      cy.request(`/api/users/${createUserResponse.body.id}`).then(
        (response) => {
          expect(response.status, "response.status").to.eq(200);
          singleUserFirstName = response.body.data["first_name"];
          expect(createUserName, "createUserName").to.eq(singleUserFirstName);
        }
      );
    });
  }
);
