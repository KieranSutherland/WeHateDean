const insults = [
    "You big fat stinky hairy ugly stupid autistic slime",
    "Your mother is a whore",
    "I know moldy rocks with more intellect than you",
    "You have tiny hands",
    "How's that degree going?"
];

export const insult = (message) => message.channel.send(insults[Math.floor(Math.random() * insults.length)]);