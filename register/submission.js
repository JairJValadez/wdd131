//Calculates the total fees from all participant fee inputs.
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];

  const total = feeElements.reduce((total, feeElement) => {
    const fee = parseFloat(feeElement.value) || 0;
    return total + fee;
  }, 0);

  return total;
}

//Success message HTML.
function successTemplate(info) {
    return `
        <h2>Registration Summary</h2>
        <p>Thank you **${info.adultName}** for registering. You have registered **${info.participantCount}** participants and owe **$${info.feeTotal.toFixed(2)}** in Fees.</p>
        <p>A confirmation email with payment instructions has been sent.</p>
    `;
}


export function submitForm(event, participantCount) {
  event.preventDefault(); 

  const total = totalFees();
  const adultNameInput = document.getElementById('adult_name');
  const adultName = adultNameInput ? adultNameInput.value : 'Valued Customer';
  
  const form = document.querySelector('form');
  const summarySection = document.getElementById('summary');

  const submissionInfo = {
    adultName: adultName,
    participantCount: participantCount,
    feeTotal: total,
  };

  form.style.display = "none";
  summarySection.innerHTML = successTemplate(submissionInfo);
  summarySection.style.display = "block";
}