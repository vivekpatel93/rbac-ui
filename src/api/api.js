const BASE_URL = "http://localhost:8080";

export const loginApi = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const logApi = async (button) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  await fetch(
    `${BASE_URL}/user/log?button=${button}&role=${role}&userId=1`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const getLogsApi = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/logs/all`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.json();
};
