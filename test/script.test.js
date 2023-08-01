// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with 'Harry, yes yes'", () => {
    const botReply1 = getBotReply("Harry");
    const expectedReply1 =
      "Hello Harry lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = "Is the Soil dry?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Water it. If it is still unhappy tomorrow ask again";
    expect(botReply3).toEqual(expectedReply3);
    // Uncomment the following line and update your expectation
    // expect(botReply1).toEqual(expectedReply1);
  });
});

describe("getBotReply", () => {
  it("should reply with 'Harry, yes no yes'", () => {
    const botReply1 = getBotReply("Harry");
    const expectedReply1 =
      "Hello Harry lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = "Is the Soil dry?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = "Does the soil smell bad?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "Harry it sounds like you have mould. I suggest you pot with new soil.";
    expect(botReply4).toEqual(expectedReply4);
    // Uncomment the following line and update your expectation
    // expect(botReply1).toEqual(expectedReply1);
  });
});

describe("getBotReply", () => {
  it("should reply with 'Harry, yes no no'", () => {
    const botReply1 = getBotReply("Harry");
    const expectedReply1 =
      "Hello Harry lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = "Is the Soil dry?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = "Does the soil smell bad?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "It might sound funny Harry, but your plant is likely too hot or cold. Try moving it to a different location and see how it goes.";
    expect(botReply4).toEqual(expectedReply4);
    // Uncomment the following line and update your expectation
    // expect(botReply1).toEqual(expectedReply1);
  });
});

