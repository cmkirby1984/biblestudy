// ============================================
// Bible Study Guide - Interactive Features
// ============================================

(function() {
    'use strict';

    // ============================================
    // Theme Toggle (Dark/Light Mode)
    // ============================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');

            // Animate hamburger menu
            this.classList.toggle('active');
        });
    }

    // Close sidebar when clicking on a link (mobile)
    if (window.innerWidth <= 768) {
        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                sidebar.classList.remove('open');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            });
        });
    }

    // ============================================
    // Search Functionality
    // ============================================
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    const closeSearch = document.getElementById('close-search');

    let searchIndex = [];

    // Build search index from all links in sidebar
    function buildSearchIndex() {
        const allLinks = sidebar.querySelectorAll('a');
        allLinks.forEach(link => {
            searchIndex.push({
                title: link.textContent.trim(),
                url: link.getAttribute('href'),
                type: getLinkType(link)
            });
        });
    }

    function getLinkType(link) {
        const href = link.getAttribute('href');
        if (href.includes('old-testament')) return 'Old Testament';
        if (href.includes('new-testament')) return 'New Testament';
        if (href.includes('quick-reference')) return 'Quick Reference';
        if (href.includes('indexes')) return 'Index';
        if (href.includes('timeline')) return 'Timeline';
        if (href.includes('resources')) return 'Resources';
        return 'Other';
    }

    // Perform search
    function performSearch(query) {
        if (!query || query.length < 2) {
            return [];
        }

        query = query.toLowerCase();

        return searchIndex.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                   item.type.toLowerCase().includes(query);
        });
    }

    // Display search results
    function displaySearchResults(results) {
        searchResultsList.innerHTML = '';

        if (results.length === 0) {
            searchResultsList.innerHTML = '<div class="search-result-item"><p>No results found. Try a different search term.</p></div>';
        } else {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h4>${result.title}</h4>
                    <p>${result.type}</p>
                `;
                resultItem.addEventListener('click', function() {
                    window.location.href = result.url;
                });
                searchResultsList.appendChild(resultItem);
            });
        }

        searchResults.classList.remove('hidden');
    }

    // Search event listeners
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                const results = performSearch(query);
                displaySearchResults(results);
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    const results = performSearch(query);
                    displaySearchResults(results);
                }
            }
        });

        // Real-time search as user types (optional)
        searchInput.addEventListener('input', function() {
            const query = searchInput.value.trim();
            if (query.length >= 2) {
                const results = performSearch(query);
                displaySearchResults(results);
            }
        });
    }

    // Close search
    if (closeSearch) {
        closeSearch.addEventListener('click', function() {
            searchResults.classList.add('hidden');
            searchInput.value = '';
        });
    }

    // Close search when clicking outside
    if (searchResults) {
        searchResults.addEventListener('click', function(e) {
            if (e.target === searchResults) {
                searchResults.classList.add('hidden');
                searchInput.value = '';
            }
        });
    }

    // ============================================
    // Back to Top Button
    // ============================================
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Show/hide back to top button based on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // Smooth Scrolling for All Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // Active Link Highlighting
    // ============================================
    function highlightActiveLink() {
        const currentPath = window.location.pathname;
        const sidebarLinks = sidebar.querySelectorAll('a');

        sidebarLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPath === linkPath || currentPath.includes(linkPath)) {
                link.style.fontWeight = 'bold';
                link.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';

                // Expand the parent details element if link is inside one
                let parent = link.closest('details');
                if (parent) {
                    parent.open = true;
                }
            }
        });
    }

    // ============================================
    // Initialize on Page Load
    // ============================================
    function init() {
        buildSearchIndex();
        highlightActiveLink();

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Press '/' to focus search
            if (e.key === '/' && !searchInput.matches(':focus')) {
                e.preventDefault();
                searchInput.focus();
            }

            // Press 'Escape' to close search
            if (e.key === 'Escape') {
                searchResults.classList.add('hidden');
                searchInput.value = '';
            }
        });

        // Restore scroll position on page load
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }

    // Run initialization when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
