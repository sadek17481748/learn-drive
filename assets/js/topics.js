

// Select the category filter dropdown
const filterSelect = document.getElementById('topicFilter');

// Select all accordion items (topics)
const accordionItems = document.querySelectorAll('#topicsList .accordion-item');

// Filter topics based on category
filterSelect.addEventListener('change', () => {
    const value = filterSelect.value;

    accordionItems.forEach(item => {
        // Collapse any open accordion
        const collapse = item.querySelector('.accordion-collapse');
        if (collapse.classList.contains('show')) {
            collapse.classList.remove('show');
        }

        // Show/hide based on filter
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
        // Apply transition properly with a slight delay
        body.style.transition = 'background-color 0.5s';
        setTimeout(() => {
            body.style.backgroundColor = '#d4edda';
        }, 50);
        e.target.textContent = 'Revised';
        e.target.disabled = true;
    });
});
