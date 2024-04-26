// Simulated database of results
const resultsDatabase = {
  "2021/2022": {
      "Nursing": {
          "First Semester": {
              "12345": "path/to/result1.pdf",
              "12346": "path/to/result2.pdf"
          },
          "Second Semester": {
              "12345": "path/to/result3.pdf",
              "12346": "path/to/result4.pdf"
          }
      }
  }
  // Add other sessions and results accordingly
};

function fetchResults() {
  const matricNo = document.getElementById("matric-no").value;
  const session = document.getElementById("session").value;
  const program = document.getElementById("program").value;
  const semester = document.getElementById("semester").value;

  const resultPath = resultsDatabase[session]?.[program]?.[semester]?.[matricNo];

  const resultContainer = document.getElementById("result-container");
  if (resultPath) {
      resultContainer.innerHTML = `<iframe src="${resultPath}" width="600" height="400"></iframe>`;
  } else {
      resultContainer.innerHTML = `<p>No result found for the given details. Please check your input and try again.</p>`;
  }
}
