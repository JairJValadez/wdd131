export let participantCount = 1;

//Template for the Participant Section
function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" value="" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" value="0" required />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select name="grade${count}">
          <option selected value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

// Updates initial participant's IDs to include '1' for consistency & sets up the event listener
export function initParticipants() {
  const addButton = document.getElementById('add');
  const firstParticipant = document.querySelector('.participant1');

  if (firstParticipant) {
    const fnameInput = firstParticipant.querySelector('#fname');
    const fnameLabel = firstParticipant.querySelector('label[for="fname"]');

    const activityInput = firstParticipant.querySelector('#activity');
    const activityLabel = firstParticipant.querySelector('label[for="activity"]');

    const feeInput = firstParticipant.querySelector('#fee'); // Store reference to the fee input
    const feeLabel = firstParticipant.querySelector('label[for="fee"]');

    const dateInput = firstParticipant.querySelector('#date');
    const dateLabel = firstParticipant.querySelector('label[for="date"]');

    const gradeSelect = firstParticipant.querySelector('select');

    fnameInput.id = 'fname1';
    fnameLabel.setAttribute('for', 'fname1');

    activityInput.id = 'activity1';
    activityLabel.setAttribute('for', 'activity1');

    feeInput.id = 'fee1';
    feeLabel.setAttribute('for', 'fee1');
    feeInput.value = 0; 
    
    dateInput.id = 'date1';
    dateLabel.setAttribute('for', 'date1');

    gradeSelect.setAttribute('name', 'grade1');
  }


  addButton.addEventListener('click', () => {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
  });
}