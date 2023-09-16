async function fetchData() {
  let result = [];
  try {
    const response = await fetch("./mockdata.json");
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  document.getElementById("series").innerHTML = result.items
    .map(({ item }) => {
      console.log(item.meta.title);
      if (item.meta.type === "series") {
        return `<li>${item.meta.title}</li>`;
      } else {
        return `<li>${item.meta.title}</li>`;
      }
    })
    .join("");
}

fetchData();
