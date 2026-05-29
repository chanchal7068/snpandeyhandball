// Form photo upload state
let uploadedPhotoUrl = "";

function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (file) {
    uploadedPhotoUrl = URL.createObjectURL(file);
    document.getElementById("id-preview-photo").src = uploadedPhotoUrl;

    // Update photo drop-zone layout preview text
    const zone = document.querySelector(".photo-upload-zone p");
    zone.textContent = file.name;
    zone.style.color = "var(--color-success)";
  }
}

function generateMemberID(e) {
  e.preventDefault();

  // Pull values
  const firstName = document.getElementById("mem-first-name").value.trim();
  const lastName = document.getElementById("mem-last-name").value.trim();
  const designation = document.getElementById("mem-designation").value;
  const phone = document.getElementById("mem-phone").value.trim();

  // Auto Member Registration ID creation
  const randNum = Math.floor(1000 + Math.random() * 9000);
  const autoID = `SNP-MEM-${randNum}`;

  // Today's Date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Update ID Card display
  document.getElementById("id-preview-name").textContent =
    `${firstName} ${lastName}`;
  document.getElementById("id-preview-role").textContent = designation;
  document.getElementById("id-preview-serial").textContent = autoID;
  document.getElementById("id-preview-date").textContent = formattedDate;
  document.getElementById("id-preview-phone").textContent = phone;

  // Trigger action notification
  alert(
    `Congratulations! You have registered successfully as a member of S.N. Pandey Khel Sansthan Trust!\nYour Member ID is: ${autoID}`,
  );
}
