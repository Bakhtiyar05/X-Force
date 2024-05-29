document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll('.productCard');
    const pagination = document.getElementById('pagination');
    const nextPageBtn = document.getElementById('nextPage');
    const previousPageBtn = document.getElementById('previousPage');

    let currentPage = 1;
    const cardsPerPage = 1;

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * cardsPerPage;
        const endIndex = pageNumber * cardsPerPage;

        productCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function updatePagination() {
        const totalProducts = productCards.length;
        const totalPages = Math.ceil(totalProducts / cardsPerPage);

        // Remove existing pagination links
        pagination.innerHTML = '';

        // Add Previous button
        const previousBtn = document.createElement('li');
        previousBtn.className = 'page-item';
        if (currentPage === 1) {
            previousBtn.classList.add('disabled');
        }
        previousBtn.innerHTML = '<span class="page-link"><i class="fa-solid fa-chevron-left"></i></span>';
        previousBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(previousBtn);

        // Add numbered pagination links
        let startPage = currentPage - 2 > 0 ? currentPage - 2 : 1;
        let endPage = startPage + 4 <= totalPages ? startPage + 4 : totalPages;

        if (endPage - startPage < 4) {
            startPage = endPage - 4 > 0 ? endPage - 4 : 1;
        }

        for (let i = startPage; i <= endPage; i++) {
            const pageLink = document.createElement('li');
            pageLink.className = 'page-item';
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLink.innerHTML = `<span class="page-link">${i}</span>`;
            pageLink.addEventListener('click', function() {
                currentPage = i;
                showPage(currentPage);
                updatePagination();
            });
            pagination.appendChild(pageLink);
        }

        // Add Next button
        const nextBtn = document.createElement('li');
        nextBtn.className = 'page-item';
        if (currentPage === totalPages) {
            nextBtn.classList.add('disabled');
        }
        nextBtn.innerHTML = '<span class="page-link"><i class="fa-solid fa-chevron-right"></i></span>';
        nextBtn.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(nextBtn);
    }

    // Initially show the first page
    showPage(currentPage);
    updatePagination();
});



emailjs.init("qVAtmAEzb12KDD-fU");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let username = document.getElementById('inputName').value.trim();
        let useremail = document.getElementById('inputEmail').value.trim();
        let message = document.getElementById('inputMessage').value.trim();

        if (!username || !useremail || !message) {
            alert('Zəhmət olmasa bütün xanaları doldurun!.');
            return;
        }

        emailjs.sendForm('service_spnz76a', 'template_bnr7xyj', this)
        .then(function() {
            alert('Mesajınız göndərildi!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Mesajınız göndərilmədi: ' + JSON.stringify(error));
        });
    });




/* Sort by Alphbet and by Price */
/* 
const alphabeticalSelect = document.getElementById('alphabeticalSort');
const priceSelect = document.getElementById('priceSort');

const productCards = document.querySelectorAll('.productCard');

function sortAlphabetically(order) {
    const sortedCards = Array.from(productCards).sort((a, b) => {
        const nameA = a.querySelector('.productName').textContent;
        const nameB = b.querySelector('.productName').textContent;
        return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    const productContainer = document.querySelector('.productCards');
    productContainer.innerHTML = '';
    sortedCards.forEach(card => productContainer.appendChild(card));
}

function sortByPrice(order) {
    const sortedCards = Array.from(productCards).sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.newPrice').textContent);
        const priceB = parseFloat(b.querySelector('.newPrice').textContent);
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    const productContainer = document.querySelector('.productCards');
    productContainer.innerHTML = '';
    sortedCards.forEach(card => productContainer.appendChild(card));
}

alphabeticalSelect.addEventListener('change', function() {
    sortAlphabetically(this.value);
});

priceSelect.addEventListener('change', function() {
    sortByPrice(this.value);
}); */

































