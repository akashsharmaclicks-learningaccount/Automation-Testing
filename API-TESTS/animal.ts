import { t } from "testcafe";

fixture`Animals-APIs-Testing`;

test("Complete test of animal-facts API", async (t) => {
  try {
    const result = await t.request({
      url: "https://cat-fact.herokuapp.com/facts",
      method: "GET",
      headers: {
        Accept: "application/json",
        Cookie:
          "connect.sid=s%3Axsj4T6Fyb57Vm3tH8-HyO6DFd228_div.rkjPHS%2F%2BlhPbBkRJOVV247kNX49zPs64eYXFa51M9nM",
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

test("Complete test of dog-breeds API", async (t) => {
  try {
    const result = await t.request({
      url: "https://dog.ceo/api/breeds/list/all",
      method: "GET",
      headers: {
        Accept: "application/json",
        Cookie:
          "connect.sid=s%3Axsj4T6Fyb57Vm3tH8-HyO6DFd228_div.rkjPHS%2F%2BlhPbBkRJOVV247kNX49zPs64eYXFa51M9nM",
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

test("Complete test of Pet-Food-Facts API", async (t) => {
  try {
    const result = await t.request({
      url: "https://world.openpetfoodfacts.org/api/v0/product/20106836.json",
      method: "GET",
      headers: {
        Accept: "application/json",
        Cookie:
          "connect.sid=s%3Axsj4T6Fyb57Vm3tH8-HyO6DFd228_div.rkjPHS%2F%2BlhPbBkRJOVV247kNX49zPs64eYXFa51M9nM",
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

