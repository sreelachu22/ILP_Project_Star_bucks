function openApplicationModal(jobTitle) {
  // Set the job title in the modal
  document.getElementById("jobTitle").innerText = jobTitle;
  // Show the modal
  $("#applicationModal").modal("show");
}

function submitApplication() {
  // Client-side form validation using HTML5 Constraint Validation API
  if (document.getElementById("applicationForm").checkValidity()) {
    // Gather form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const resume = document.getElementById("resume").files[0];

    // Validate and process the data (you may need to send it to a server)

    // Reset the form
    document.getElementById("applicationForm").reset();

    // Close the modal
    $("#applicationModal").modal("hide");

    // Export data to Excel (you may need to implement server-side logic for this)
    exportToExcel(fullName, email, resume);
  } else {
    // If the form is not valid, show the validation feedback
    document.getElementById("applicationForm").classList.add("was-validated");
  }
}

function exportToExcel(fullName, email, resume) {
  // Create a workbook and worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet([
    {
      "Full Name": fullName,
      Email: email,
      Resume: resume ? resume.name : "Not uploaded",
    },
  ]);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Application Data");

  // Create a blob with the workbook's content
  const blob = XLSX.write(wb, { bookType: "xlsx", type: "blob" });

  // Save the blob as an Excel file
  saveAs(blob, "application_data.xlsx");
}

