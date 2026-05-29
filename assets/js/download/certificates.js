const mockCertificates = {
  "SNP-2026-049": {
    name: "Rahul Kumar Yadav",
    event: "S.N. Pandey Memorial Handball Cup 2026",
    award: "First Place (Winner)",
    serial: "SNP-2026-049",
  },
  "SNP-2026-002": {
    name: "Aishwarya Singh",
    event: "Summer Agility & Skill Handball Camp 2026",
    award: "Elite Excellence Gold Plaque",
    serial: "SNP-2026-002",
  },
  "SNP-2026-118": {
    name: "Sandeep Sharma",
    event: "Panchayat Drinking Water CSR Campaign",
    award: "Distinguished Social Work Volunteer",
    serial: "SNP-2026-118",
  },
};

function fillMockID(id) {
  const input = document.getElementById("cert-id-input");
  input.value = id;
  input.focus();

  // Scroll to the form beautifully
  document
    .querySelector(".search-container")
    .scrollIntoView({ behavior: "smooth" });
}

function fillSampleCert() {
  fillMockID("SNP-2026-049");
  document
    .getElementById("cert-search-form")
    .dispatchEvent(new Event("submit"));
}

function handleCertSearch(e) {
  e.preventDefault();
  const inputVal = document.getElementById("cert-id-input").value.trim();
  const resultBox = document.getElementById("cert-result-container");
  const errorBox = document.getElementById("search-error");

  if (mockCertificates[inputVal]) {
    const data = mockCertificates[inputVal];
    document.getElementById("cert-recipient-name").textContent = data.name;
    document.getElementById("cert-award-type").textContent = data.award;
    document.getElementById("cert-event-title").textContent = data.event;
    document.getElementById("cert-serial-display").textContent = data.serial;

    errorBox.style.display = "none";
    resultBox.style.display = "block";

    // Scroll to result beautifully
    resultBox.scrollIntoView({ behavior: "smooth" });
  } else {
    resultBox.style.display = "none";
    errorBox.style.display = "block";
  }
}
