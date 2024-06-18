import { t } from "testcafe";
import { generateUSRandomZipCode } from "../generate-random";
fixture`Zip-Code-APIs-Testing`;

const zipcode = generateUSRandomZipCode();
test("Complete test of Zip-Code API", async (t) => {
  try {
    const result = await t.request({
      url: `http://api.zippopotam.us/us/${zipcode}`,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (result.status === 200) {
      console.log(
        "\x1b[38;2;163;230;53m%s\x1b[0m",
        `Status: ${result.status} ✅`
      );
      console.log(
        "\x1b[38;2;163;230;53m%s\x1b[0m",
        `Response Data Type: ${typeof result.body} ✅`
      );
      console.log(result.body);
    } else if (result.status == 400) {
      console.log(
        "\x1b[38;2;220;38;38m%s\x1b[0m",
        `Status: ${result.status}(Bad request) ❌`
      );
      throw new Error("Test aborted due to Bad request ❌");
    } else if (result.status === 401) {
      console.log(
        "\x1b[38;2;220;38;38m%s\x1b[0m",
        `Status: ${result.status}(Unauthorized access) ❌`
      );
      throw new Error("Test aborted due to Unauthorized access ❌");
    } else if (result.status === 403) {
      console.log(
        "\x1b[38;2;220;38;38m%s\x1b[0m",
        `Status: ${result.status}(Forbidden access) ❌`
      );
      throw new Error("Test aborted due to Forbidden access ❌");
    } else if (result.status === 429) {
      console.log(
        "\x1b[38;2;220;38;38m%s\x1b[0m",
        `Status: ${result.status}(Resource Exhausted) ❌`
      );
      throw new Error("Test aborted due to Resource Exhausted ❌");
    } else if (result.status === 500) {
      console.log(
        "\x1b[38;2;220;38;38m%s\x1b[0m",
        `Status: ${result.status}(Internal Server Error) ❌`
      );
      throw new Error("Test aborted due to Internal Server Error ❌");
    } else if (result.status === 503) {
      console.log(
        "\x1b[38;2;220;38;38m%s\x1b[0m",
        `Status: ${result.status}(Service Unavailable) ❌`
      );
      throw new Error("Test aborted due to Service Unavailable ❌");
    } else if (result.status === 504) {
      console.log(
        "\x1b[38;2;220;38;38m%s\x1b[0m",
        `Status: ${result.status}(Gateway Timeout) ❌`
      );
      throw new Error("Test aborted due to Gateway Timeout ❌");
    } else {
      console.log(
        "\x1b[38;2;230;53;53m%s\x1b[0m",
        `Status: ${result.status} ❌`
      );
      console.log("\x1b[38;2;220;38;38m%s\x1b[0m", `Status: ${result.status}`);
    }
  } catch (error) {
    throw new Error("`❌❌❌ Something went wrong ❌❌❌`");
    console.error("Error making the request:", error);
  }
});


test("Congratulations!", async (t) => {
    console.log(
      "\x1b[33m%s\x1b[0m",
      "Hurray! 🥳 Everything went well with success! 🎉"
    );
  });