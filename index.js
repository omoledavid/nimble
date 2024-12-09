function getYear() {
  const yearCont = document.getElementById("year-container");
  // Get the current date
  const currentDate = new Date();
  // Get the current year
  const currentYear = currentDate.getFullYear();
  yearCont.innerHTML = `©️ ${currentYear} Nimble. All rights reserved`;
}

getYear();


