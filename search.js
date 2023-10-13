document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("search-input").value.toLowerCase();
    const searchResults = document.getElementById("search-results");

    // Perform a simple search using an array of sample results
    const results = sampleSearch(query);

    // Display the search results
    displaySearchResults(results, searchResults);
});

function sampleSearch(query) {
    // In this example, we have a sample set of results
    const sampleResults = [
        { title: "Sample Result 1", description: "This is a sample description." },
        { title: "Sample Result 2", description: "Another sample result." },
        // Add more results here
    ];

    return sampleResults.filter((result) =>
        result.title.toLowerCase().includes(query) || result.description.toLowerCase().includes(query)
    );
}

function displaySearchResults(results, container) {
    container.innerHTML = "";

    if (results.length === 0) {
        container.innerHTML = "<p>No results found.</p>";
        return;
    }

    results.forEach((result) => {
        const resultElement = document.createElement("div");
        resultElement.classList.add("result");
        resultElement.innerHTML = `
            <h2>${result.title}</h2>
            <p>${result.description}</p>
        `;
        container.appendChild(resultElement);
    });
}
