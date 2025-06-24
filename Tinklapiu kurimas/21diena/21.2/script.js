"use strict";

async function fetchUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    console.log(data.name);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error occured");
    } else {
      console.error(error);
    }
  }
}

fetchUserData(1);
fetchUserData(999);
