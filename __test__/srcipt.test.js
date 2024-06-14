const getCharacter = require("../script");
const charactersPage12 = require("./charactersPage12.json");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(charactersPage12),
  })
);
describe("mock getCharacter function: ", () => {
  let charactersContainer;
  beforeEach(() => {
    charactersContainer = document.createElement("div");
    charactersContainer.id = "charactersContainer";
    document.body.appendChild(charactersContainer);
  });
  afterEach(() => {
    document.body.removeChild(charactersContainer);
  });
  test("fetches characters correctly from page 12", () => {
    getCharacter();
  });
});
// const script = require("../script");
// const charactersPage12 = require("./charactersPage12.json");

// script.getCharacter = jest.fn(() => console.log("cokolwiek"));
// describe("mock getCharacter function: ", () => {
//   let charactersContainer;
//   beforeEach(() => {
//     charactersContainer = document.createElement("div");
//     charactersContainer.id = "charactersContainer";
//     document.body.appendChild(charactersContainer);
//   });
//   afterEach(() => {
//     document.body.removeChild(charactersContainer);
//   });
//   test("fetches characters correctly from page 12", () => {
//     script.getCharacter();
//   });
// });
