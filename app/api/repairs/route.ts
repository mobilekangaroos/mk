export async function GET(request: any) {
  const data = {
    phones: {
      type: "phones",
      models: "Supported models: iPhone 5, iPhone 5S, iPhone X, iPhone 13",
    },
    tablets: {
      type: "tablets",
      models: "Supported models: iPhone 5, iPhone 5S, iPhone X, iPhone 13",
    },
  };

  return new Response(JSON.stringify({ data }), {
    headers: { "Content-Type": "application/json" },
  });
}
