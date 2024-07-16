const makeFetch = async ({
  path,
  body,
  domain,
  method,
}: {
  body: any;
  path: string;
  domain?: string;
  method: string;
}) => {
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body && JSON.stringify(body),
  };

  const res = await fetch(`${domain}/${path}`, opts);

  if (!res.ok) return res;
  return res.json();
};

const makeGet = (domain?: string) => async (path: string) =>
  makeFetch({ domain, path, method: "GET", body: null });

const makePost = (domain?: string) => async (path: string, body: any) =>
  makeFetch({ domain, path, method: "POST", body });

const makePut = (domain?: string) => async (path: string, body: any) =>
  makeFetch({ domain, path, method: "PUT", body });

const makeDelete = (domain?: string) => async (path: string, body: any) =>
  makeFetch({ domain, path, method: "DELETE", body });

export { makeGet, makePost, makeDelete, makePut };

const get = makeGet(process.env.API_URL);
const put = makePut(process.env.API_URL);
const post = makePost(process.env.API_URL);
const Delete = makeDelete(process.env.API_URL);

export { get, post, put, Delete };
