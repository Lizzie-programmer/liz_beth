function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const resultDiv = document.getElementById("age-result");
    const ageDisplay = document.getElementById("age");

    if (!birthdate) {
        alert("Please enter a valid birthdate.");
        return;
    }

    // Convert the input birthdate to a Date object
    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();

    // Calculate the difference in years, months, and days
    let ageYears = currentDate.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDateObj.getMonth();
    let ageDays = currentDate.getDate() - birthDateObj.getDate();

    // If the current month is before the birth month, adjust the year and month
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    // If the current day is before the birth day of the month, adjust the month and days
    if (ageDays < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        ageDays += lastMonth.getDate();
        ageMonths--;
    }

    // Display the result
    ageDisplay.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    resultDiv.style.display = "block";
}
