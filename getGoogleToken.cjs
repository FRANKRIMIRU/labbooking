const { google } = require("googleapis");
const readline = require("readline");

const oAuth2Client = new google.auth.OAuth2(
  "1087708809474-k19tsdmvd6u0uhrl9csdcroo4nq1ouh9.apps.googleusercontent.com",
  "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",
  "http://localhost:3000"
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Paste the code from the browser URL here: ", async (code) => {
  try {
    const { tokens } = await oAuth2Client.getToken(code.trim());
    console.log("✅ Your tokens:\n", tokens);
  } catch (err) {
    console.error("❌ Error getting token:", err.message);
  } finally {
    rl.close();
  }
});
