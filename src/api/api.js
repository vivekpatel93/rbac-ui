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

  await fetch(`${BASE_URL}/user/log?button=${button}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
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

// NEW: Manager Login Activity API
export const managerLoginApi = async () => {
  const token = localStorage.getItem("token");

  await fetch(`${BASE_URL}/manager/login-log`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// NEW: Manager Logout Activity API

export const managerLogoutApi = async () => {
  const token = localStorage.getItem("token");

  await fetch(`${BASE_URL}/manager/logout-log`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// NEW: Admin Get Manager Activity

export const getManagerActivityApi = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/admin/manager-activity`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return res.json();
};

export const logoutApi = async () => {
  const token = localStorage.getItem("token");

  await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
