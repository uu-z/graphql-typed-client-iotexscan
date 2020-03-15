import { createClient } from "./iotexClient/createClient";
import { request } from "graphql-request";

export const client = createClient({
  fetcher: ({ query, variables }) =>
    request(
      "https://iotexscan.io/api-gateway/",
      query,
      variables
    ).then(data => ({ data }))
});

const main = async () => {
  const res = await client.chain.query
    .getAccount({
      address: "io1j9q5r9frrvxlzr4nspag726j6mwla59rkcvdwf"
    })
    .execute({
      accountMeta: {
        address: 1,
        balance: 1,
        nonce: 1,
        pendingNonce: 1,
        numActions: 1
      }
    });
  console.log(res);
};

main();
