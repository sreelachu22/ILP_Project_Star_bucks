const scriptURL =
  "https://script.google.com/macros/s/AKfycbyPMR-lSqrbGtOTCiymHyX14Uro2gVID3EzGPdwhF6_1aIIdK28HKR9cdDw09AGRF4/exec";

const form = document.getElementById("applicationForm") as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("Thank you! your form is submitted successfully.");
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
    form.reset();
    (<any>$("#applicationModal")).modal("hide");
  } else {
    form.classList.add("was-validated");
  }
});

async function fetchData(callback: () => void) {
  try {
    const response = await fetch(
      "https://api-generator.retool.com/Z4W4JZ/data"
    );

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    const course = data;
    let randomId: number[] = [];
    const coursesContainer = document.getElementById(
      "coursesContainer"
    ) as HTMLDivElement;

    const row = document.createElement("div");
    row.className = "row justify-content-center";

    for (let i = 0; i < 10; i++) {
      randomId[i] = Math.floor(Math.random() * course.length);
      const courseElement = document.createElement("div");
      courseElement.className = "courseElement col-md-5 mb-4 mx-3";

      const jobTitle = document.createElement("h2");
      jobTitle.textContent = `${course[randomId[i]].Jobs}`;
      const jobDesc = document.createElement("p");
      jobDesc.textContent = `${course[randomId[i]].Description}`;
      const salary = document.createElement("p");
      salary.textContent = `Monthly Compensation: ₹ ${
        course[randomId[i]].Salary
      }`;
      const applyNow = document.createElement("button");
      if (applyNow) {
        applyNow.className = "applyNow section-btn btn btn-primary btn-block";
        applyNow.setAttribute("data-toggle", "modal");
        applyNow.setAttribute("data-target", "#applicationModal");
      }
      applyNow.textContent = "Apply Now";
      courseElement.appendChild(jobTitle);
      courseElement.appendChild(jobDesc);
      courseElement.appendChild(salary);
      courseElement.appendChild(applyNow);
      row.appendChild(courseElement);
    }

    coursesContainer.appendChild(row);

    if (callback) {
      callback();
    }
  } catch (error) {
    console.error("error:", error);
  }
}

fetchData(() => {
  console.log("Data fetched successfully!");
});
