const { sso } = require("node-expose-sspi");
const https = require("https");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const url = process.argv[2] || "http://localhost:3000";
const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // (NOTE: this will disable client verification)
});

async function login() {
  try {
    const response = await new sso.Client().fetch(url);
    const json = await response.json();
    console.log("json: ", json);
  } catch (e) {
    console.error(e);
  }
}
async function getDati() {
  try {
    const response = await new sso.Client().fetch(
      "https://bressql02/Users/List",
      {
        // agent: httpsAgent,
      }
    );
    // console.log(response);
    let aa = await response.text();
    console.log(aa);
    // const json = await response.json();
  } catch (e) {
    console.error(e);
  }
}

getDati();
