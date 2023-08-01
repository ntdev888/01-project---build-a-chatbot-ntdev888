/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let userName = "";
let level = 0;
let path = "";

const getBotReply = (msg) => {
  console.log(level);
  if (level === 0) {
    userName = msg;
    level += 1;
    return `Hello ${userName} lets see if I can help you with your plant today. Is your plant wilting?`;
  }

  if (msg === "yes" || msg === "no") {
    if (level === 1) {
      if (msg === "yes") {
        level += 1;
        return "Is the Soil dry?";
      } else {
        level += 1;
        path = "no";
        return "Are the leaves turning yellow?";
      }
    }

    if (level === 2) {
      if (path != "no") {
        level += 1;
        if (msg === "yes") {
          level = 0;
          return "Water it. If it is still unhappy tomorrow ask again";
        } else {
          return "Does the soil smell bad?";
        }
      } else {
        if (msg === "yes") {
          level = 0;
          path = "";
          return `${userName} I think your plant needs some food. Nitrogen is an important part of a plants diet. Try some slow release food pallets and place on the soil with water. Check back in a few days.`;
        } else {
          level += 1;
          return "Are the leaves sticky?";
        }
      }
    }

    if (level === 3) {
      if (path != "no") {
        if (msg === "yes") {
          level = 0;
          path = "";
          return `${userName} it sounds like you have mould. I suggest you pot with new soil.`;
        } else {
          level = 0;
          path = "";
          return `It might sound funny ${userName}, but your plant is likely too hot or cold. Try moving it to a different location and see how it goes.`;
        }
      } else {
        if (msg === "yes") {
          level = 0;
          path = "";
          return `You might not see it ${userName} but it sounds like you have aphids. Look over the plant for any small green or yellow bugs. If there are a lot, visit your local plant store for Neem oil`;
        } else {
          return "Notice any flying insects recently?";
        }
      }
    }
  }

  if (msg === "help") {
    return `Hi ${userName}, I see you need some help. Just type 'restart' to start again.`;
  }

  if (msg === "restart") {
    location.reload();
  }

  return "Please reply with help, restart and yes or no answers";
};

export { getBotReply };
