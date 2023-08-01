/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let userName = ""
let level = 0
let lastResponse = ""

const getBotReply = (msg) => {
  if (level === 0) {
    userName = msg;
    level += 1;
    return `Hello ${userName} lets see if I can help you with your plant today. Is your plant wilting?`
  }

  if (msg === "yes" || msg === "no") {
    lastResponse = msg;

    if (level === 1) {
      level += 1;
      if (lastResponse === "yes") {
        return "Is the Soil dry?"
      } else {
        return "Are the leaves turning yellow?"
      }
    }

    if (level === 2) {
      level += 1
      if (lastResponse === "yes") {
        return "Water it. If it is still unhappy tomorrow ask again"
      } else {
        return "Does the soil smell bad?"
      }
    }

    if (level === 3) {
      level += 1
      if (lastResponse === "yes") {
        return `${userName} it sounds like you have mould. I suggest you pot with new soil.`
      } else {
        return `It might sound funny ${userName}, but your plant is likely too hot or cold. Try moving it to a different location and see how it goes.`
      }
    }
    
  }

  if (msg === "help") {
    return `Hi ${userName}, I see you need some help. Just type 'restart' to start again.` 
  }

  if (msg === "restart") {
    location.reload();
  }

  return "Please reply with help, restart and yes or no answers";
};

export { getBotReply };
