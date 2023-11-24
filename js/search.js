function searchFunction() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = performSearch(input);
  displayResults(results);
}
document.addEventListener("click", function (event) {
  const searchContainer = document.getElementById("searchResults");
  const dropdown = document.getElementById("searchDropdown");

  if (
    event.target.closest(".search-bar") === null &&
    event.target !== searchContainer &&
    event.target !== dropdown
  ) {
    // Clicked outside the search bar and dropdown, hide the dropdown
    dropdown.style.display = "none";
  }
});
function performSearch(query) {
  // Example: Perform a simple search
  const productList = [
    { name: "Home", link: "home.html" },
    { name: "Gift", link: "gift.html" },
    { name: "Order", link: "order.html" },
    { name: "Pay", link: "signIn_signUp.html" },
    { name: "Careers", link: "careers.html" },
    { name: "Contact Us", link: "contact_pop.html" },
  ];

  return productList.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
}

function displayResults(results) {
  const searchDropdown = document.getElementById("searchDropdown");
  searchDropdown.innerHTML = "";

  if (results.length === 0) {
    searchDropdown.style.display = "none";
  } else {
    searchDropdown.style.display = "block";

    const dropdownContent = document.createElement("div");
    dropdownContent.setAttribute("id", "searchDropdownContent");

    results.forEach((result) => {
      const linkItem = document.createElement("a");
      linkItem.href = result.link;
      linkItem.textContent = result.name;
      dropdownContent.appendChild(linkItem);
    });

    searchDropdown.appendChild(dropdownContent);
  }
}
