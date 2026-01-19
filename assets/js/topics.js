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
  