import axios from "axios";

const registerUrl = "/api/register";
const updateUrl = "/api/updateuser";
const getuserUrl = "/api/getuser";

export const registerUser = async (data) => {
  const response = await axios.post(registerUrl, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  localStorage.setItem(
    "dribbbleDiamond",
    JSON.stringify({ token: response.data.token })
  );
  return response.data.userData;
};

export const getUserDetails = async () => {
  const response = await axios.get(getuserUrl, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("dribbbleDiamond")).token
      }`,
    },
  });
  return response.data;
};

export const updateUserDetails = async (data) => {
  const response = await axios.put(updateUrl, data, {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("dribbbleDiamond")).token
      }`,
    },
  });
  return response.data;
};
