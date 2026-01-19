// Select the category filter dropdown
const filterSelect = document.getElementById('topicFilter');

// Select all accordion items (topics)
const accordionItems = document.querySelectorAll('#topicsList .accordion-item');
// Filter topics based on category
filterSelect.addEventListener('change', () => {
    const value = filterSelect.value;
    accordionItems.forEach(item => {
      if (value === 'all' || item.dataset.category === value) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
  // Select all 'Mark as Revised' buttons
const markButtons = document.querySelectorAll('.mark-btn');
// When user clicks 'Mark as Revised', highlight topic and disable button
markButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const body = e.target.closest('.accordion-body');
      body.style.backgroundColor = '#d4edda';
      body.style.transition = 'background-color 0.5s';
      e.target.textContent = 'Revised';
      e.target.disabled = true;
    });
  }); 

  // BUG: Rapid clicking skips background transition
// SOLUTION: Delay background color to ensure transition triggers
/*
markButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const body = e.target.closest('.accordion-body');
    setTimeout(() => {
      body.style.backgroundColor = '#d4edda';
    }, 50);
    body.style.transition = 'background-color 0.5s';
    e.target.textContent = 'Revised';
    e.target.disabled = true;
  });
});
*/

  