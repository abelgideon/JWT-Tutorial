const form = document.getElementById("form");
const data = document.getElementById("data");
const getData = document.getElementById("get-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  try {
    const res = await axios.post("http://localhost:3000/login", formObj);
    localStorage.setItem("token", res.data.token);
    console.log("user signed up");
  } catch (err) {
    localStorage.removeItem("token");
  }
});

getData.addEventListener("click", async (e) => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get("http://localhost:3000/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    data.innerHTML = `<h1>Hello ${res.data.msg}</h1>`;
  } catch (err) {
    data.innerHTML = `<h1>${err.response.data.msg}</h1>`;
  }
});
