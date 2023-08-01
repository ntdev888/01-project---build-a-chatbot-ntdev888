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
  });
});

describe("getBotReply", () => {
  it("should reply with 'Harry, no yes'", () => {
    const botReply1 = getBotReply("Harry");
    const expectedReply1 =
      "Hello Harry lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = "Are the leaves turning yellow?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Harry I think your plant needs some food. Nitrogen is an important part of a plants diet. Try some slow release food pallets and place on the soil with water. Check back in a few days.";
    expect(botReply3).toEqual(expectedReply3);
  });
});

describe("getBotReply", () => {
  it("should reply with 'Harry, no no yes'", () => {
    const botReply1 = getBotReply("Harry");
    const expectedReply1 =
      "Hello Harry lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = "Are the leaves turning yellow?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = "Are the leaves sticky?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "You might not see it Harry but it sounds like you have aphids. Look over the plant for any small green or yellow bugs. If there are a lot, visit your local plant store for Neem oil";
    expect(botReply4).toEqual(expectedReply4);
  });
});

describe("getBotReply", () => {
  it("should reply with 'Harry, no no no yes'", () => {
    const botReply1 = getBotReply("Harry");
    const expectedReply1 =
      "Hello Harry lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = "Are the leaves turning yellow?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = "Are the leaves sticky?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 = "Notice any flying insects recently?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("yes");
    const expectedReply5 =
      "Try a pyrethrym spray to see if the plant improves over the coming days.";
    expect(botReply5).toEqual(expectedReply5);
  });
});

describe("getBotReply", () => {
  it("should reply with 'Steve, no no no no'", () => {
    const botReply1 = getBotReply("Steve");
    const expectedReply1 =
      "Hello Steve lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = "Are the leaves turning yellow?";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = "Are the leaves sticky?";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 = "Notice any flying insects recently?";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply("no");
    const expectedReply5 =
      "Steve it sounds like your plant might not be getting enough light. Try relocate it to a sunnier spot and see how it is tomorrow.";
    expect(botReply5).toEqual(expectedReply5);
  });
});

describe("getBotReply", () => {
  it("should reply with 'Steve, help'", () => {
    const botReply1 = getBotReply("Steve");
    const expectedReply1 =
      "Hello Steve lets see if I can help you with your plant today. Is your plant wilting?";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("help");
    const expectedReply2 =
      "Hi Steve, I see you need some help. Just type 'restart' to start again.";
    expect(botReply2).toEqual(expectedReply2);
  });
});
