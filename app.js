// Wedding Planning App JavaScript

// Questions data structure
const questionsData = {
  'Booking & Availability': {
    icon: '📅',
    questions: [
      {
        text: 'Is there availability for April 2026 wedding photography sessions?',
        importance: 'critical',
        why: 'April is peak wedding season in Taiwan; advance booking is essential'
      },
      {
        text: 'How far in advance should we book for April 2026?',
        importance: 'high',
        why: 'Ensures you can secure your preferred date and photographer'
      },
      {
        text: 'What is the deposit amount and when is it due?',
        importance: 'high',
        why: 'Understand financial commitment to reserve your date'
      }
    ]
  },
  'Pricing & Payment': {
    icon: '💰',
    questions: [
      {
        text: 'What are the complete package prices in both TWD and USD?',
        importance: 'critical',
        why: 'Essential for budgeting (current rate 1 USD = 30.70 TWD)'
      },
      {
        text: 'What exactly is included in each package?',
        importance: 'critical',
        why: 'Avoid unexpected costs and understand full value'
      },
      {
        text: 'Are there any additional fees or hidden costs?',
        importance: 'high',
        why: 'Location fees, transportation, and upgrades can add significant costs'
      },
      {
        text: 'What is your payment schedule?',
        importance: 'high',
        why: 'Plan your payment timeline (typically 4 installments)'
      },
      {
        text: 'Can we pay in USD? Is there a currency conversion fee?',
        importance: 'medium',
        why: 'Clarify exchange rate policy for international payments'
      }
    ]
  },
  'Photo Delivery': {
    icon: '📦',
    questions: [
      {
        text: 'How will photos be delivered to New York?',
        importance: 'critical',
        why: 'Essential for overseas clients - digital vs physical delivery'
      },
      {
        text: 'What exactly will we receive?',
        importance: 'critical',
        why: 'Understand all deliverables - digital files, albums, prints, etc'
      },
      {
        text: 'How many total photos? How many edited vs retouched?',
        importance: 'high',
        why: 'Set realistic expectations for final gallery size'
      },
      {
        text: 'What is the timeline for receiving photos?',
        importance: 'high',
        why: 'Plan when you can share photos with family and friends'
      },
      {
        text: 'How much does international shipping cost to New York?',
        importance: 'high',
        why: 'Shipping albums can cost $200-300 USD extra'
      },
      {
        text: 'Do you provide an online gallery? How long is access?',
        importance: 'medium',
        why: 'Convenient for viewing, downloading, and sharing'
      }
    ]
  },
  'Photographer & Team': {
    icon: '📸',
    questions: [
      {
        text: 'Can we choose our photographer and makeup artist?',
        importance: 'high',
        why: 'Ensure you get a style matching your preferences'
      },
      {
        text: 'Will we have a consultation before the shoot?',
        importance: 'high',
        why: 'Important for communicating your vision'
      },
      {
        text: 'Does the photographer speak English?',
        importance: 'medium',
        why: 'Critical for clear communication during shoot'
      },
      {
        text: 'Can we see full galleries from past weddings?',
        importance: 'high',
        why: 'Better than highlights to judge consistent quality'
      }
    ]
  },
  'Dress & Location Selection': {
    icon: '👗',
    questions: [
      {
        text: 'When do we select dresses - same trip as shoot or separate?',
        importance: 'critical',
        why: 'Impacts travel planning and costs'
      },
      {
        text: 'How many dresses can we try during fitting?',
        importance: 'medium',
        why: 'Ensure enough options to find your perfect look'
      },
      {
        text: 'Are there dress selection restrictions by package?',
        importance: 'high',
        why: 'Some premium dresses may require upgrades'
      },
      {
        text: 'Which shooting locations are available?',
        importance: 'high',
        why: 'Understand studio vs outdoor options included'
      },
      {
        text: 'What locations work best for April weather?',
        importance: 'medium',
        why: 'Cherry blossoms may still bloom; weather affects choices'
      }
    ]
  },
  'Shoot Day Logistics': {
    icon: '🎬',
    questions: [
      {
        text: 'What is the complete shoot day timeline?',
        importance: 'medium',
        why: 'Plan your schedule and energy levels'
      },
      {
        text: 'Is transportation provided to shooting locations?',
        importance: 'high',
        why: 'Understand if you need to arrange your own transport'
      },
      {
        text: 'What should we bring on shoot day?',
        importance: 'medium',
        why: 'Comfortable shoes, personal items, props, etc'
      },
      {
        text: 'Are meals provided during long shoots?',
        importance: 'low',
        why: 'Important for 9-hour outdoor shoots'
      },
      {
        text: 'What if we need overtime?',
        importance: 'low',
        why: 'Understand flexibility and extra costs'
      }
    ]
  },
  'Contract & Policies': {
    icon: '📋',
    questions: [
      {
        text: 'Can we review the contract in English?',
        importance: 'critical',
        why: 'Understand all terms before committing'
      },
      {
        text: 'What is your cancellation and refund policy?',
        importance: 'high',
        why: 'Protect your deposit if plans change'
      },
      {
        text: 'What if the photographer cannot make our date?',
        importance: 'medium',
        why: 'Understand backup plan and protections'
      },
      {
        text: 'Who owns the photo copyright?',
        importance: 'medium',
        why: 'Clarify usage rights for personal and social media'
      },
      {
        text: 'Can we see reviews from overseas couples?',
        importance: 'medium',
        why: 'Verify quality for international clients'
      }
    ]
  },
  'Communication': {
    icon: '💬',
    questions: [
      {
        text: 'Best way to communicate from New York?',
        importance: 'high',
        why: 'Establish clear channel (Email, WhatsApp, LINE)'
      },
      {
        text: 'Will we have a dedicated English-speaking coordinator?',
        importance: 'high',
        why: 'Ensures smooth communication throughout process'
      },
      {
        text: 'What info do you need from us before the shoot?',
        importance: 'medium',
        why: 'Prepare all necessary details in advance'
      },
      {
        text: 'How do you handle time zone differences?',
        importance: 'low',
        why: 'Taiwan is 12-13 hours ahead of New York'
      }
    ]
  },
  'Additional Services': {
    icon: '✨',
    questions: [
      {
        text: 'Do you offer videography services?',
        importance: 'medium',
        why: 'Capture motion and audio memories'
      },
      {
        text: 'Can we purchase additional edited photos?',
        importance: 'low',
        why: 'May want more after seeing gallery'
      },
      {
        text: 'Can we add family members to photos?',
        importance: 'low',
        why: 'Additional cost typically TWD 1,500 per person'
      }
    ]
  }
};

// DOM elements
let questionSearch;
let importanceFilter;
let questionsContainer;
let hamburger;
let navMenu;

// State
let questionNumber = 1;

// Initialize the application
function initApp() {
  // Get DOM elements
  questionSearch = document.getElementById('questionSearch');
  importanceFilter = document.getElementById('importanceFilter');
  questionsContainer = document.getElementById('questionsContainer');
  hamburger = document.getElementById('hamburger');
  navMenu = document.getElementById('navMenu');

  // Render questions
  renderQuestions();

  // Add event listeners
  addEventListeners();

  // Handle smooth scrolling for navigation links
  setupSmoothScrolling();

  // Handle mobile menu
  setupMobileMenu();

  console.log('Wedding Planning App initialized successfully!');
}

// Render all questions
function renderQuestions(filterImportance = 'all', searchTerm = '') {
  if (!questionsContainer) return;

  questionsContainer.innerHTML = '';
  questionNumber = 1;

  Object.entries(questionsData).forEach(([categoryName, categoryData]) => {
    const filteredQuestions = categoryData.questions.filter(question => {
      const matchesImportance = filterImportance === 'all' || question.importance === filterImportance;
      const matchesSearch = searchTerm === '' || 
        question.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.why.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesImportance && matchesSearch;
    });

    if (filteredQuestions.length > 0) {
      const categoryElement = createCategoryElement(categoryName, categoryData.icon, filteredQuestions);
      questionsContainer.appendChild(categoryElement);
    }
  });

  // Add click handlers for category toggles
  addCategoryToggleHandlers();
}

// Create a category element
function createCategoryElement(categoryName, icon, questions) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'question-category';
  categoryDiv.setAttribute('data-category', categoryName);

  const questionsHtml = questions.map(question => {
    const questionHtml = `
      <div class="question-item">
        <div class="question-header">
          <div class="question-number">${questionNumber}</div>
          <div>
            <div class="question-text">
              ${question.text}
              <span class="importance-badge ${question.importance}">${question.importance}</span>
            </div>
            <div class="question-why">${question.why}</div>
          </div>
        </div>
      </div>
    `;
    questionNumber++;
    return questionHtml;
  }).join('');

  categoryDiv.innerHTML = `
    <div class="category-header">
      <div class="category-title">
        <span class="category-icon">${icon}</span>
        <span>${categoryName} (${questions.length})</span>
      </div>
      <span class="category-toggle">▼</span>
    </div>
    <div class="category-content">
      <div class="question-list">
        ${questionsHtml}
      </div>
    </div>
  `;

  return categoryDiv;
}

// Add event listeners
function addEventListeners() {
  // Search functionality
  if (questionSearch) {
    questionSearch.addEventListener('input', (e) => {
      const searchTerm = e.target.value;
      const filterValue = importanceFilter ? importanceFilter.value : 'all';
      renderQuestions(filterValue, searchTerm);
    });
  }

  // Filter functionality
  if (importanceFilter) {
    importanceFilter.addEventListener('change', (e) => {
      const filterValue = e.target.value;
      const searchTerm = questionSearch ? questionSearch.value : '';
      renderQuestions(filterValue, searchTerm);
    });
  }
}

// Add category toggle handlers
function addCategoryToggleHandlers() {
  const categoryHeaders = document.querySelectorAll('.category-header');
  
  categoryHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const category = header.closest('.question-category');
      category.classList.toggle('active');
    });
  });
}

// Setup smooth scrolling for navigation
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Handle hero buttons
  const heroButtons = document.querySelectorAll('.hero-buttons .btn');
  heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Setup mobile menu
function setupMobileMenu() {
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
}

// Handle scroll effects
function handleScrollEffects() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'var(--shadow-md)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
      }
    });
  }
}

// Intersection Observer for animations
function setupAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe elements that should animate
  const animateElements = document.querySelectorAll(
    '.package-card, .location-card, .delivery-card, .contact-card, .mini-fact-card, .tip-item'
  );

  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// Utility function to debounce function calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced search with debouncing
function setupEnhancedSearch() {
  if (questionSearch) {
    const debouncedSearch = debounce((searchTerm, filterValue) => {
      renderQuestions(filterValue, searchTerm);
    }, 300);

    questionSearch.addEventListener('input', (e) => {
      const searchTerm = e.target.value;
      const filterValue = importanceFilter ? importanceFilter.value : 'all';
      debouncedSearch(searchTerm, filterValue);
    });
  }
}

// Print functionality
function setupPrintFunctionality() {
  // Expand all categories when printing
  window.addEventListener('beforeprint', () => {
    const categories = document.querySelectorAll('.question-category');
    categories.forEach(category => {
      category.classList.add('active');
    });
  });
}

// Keyboard navigation
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
    
    // Ctrl/Cmd + F focuses search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f' && questionSearch) {
      e.preventDefault();
      questionSearch.focus();
    }
  });
}

// Error handling
function setupErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // Could show user-friendly error message here
  });
  
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
  });
}

// Performance monitoring
function setupPerformanceMonitoring() {
  // Log page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
  });
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initApp();
    handleScrollEffects();
    setupAnimations();
    setupEnhancedSearch();
    setupPrintFunctionality();
    setupKeyboardNavigation();
    setupErrorHandling();
    setupPerformanceMonitoring();
  });
} else {
  // DOM is already ready
  initApp();
  handleScrollEffects();
  setupAnimations();
  setupEnhancedSearch();
  setupPrintFunctionality();
  setupKeyboardNavigation();
  setupErrorHandling();
  setupPerformanceMonitoring();
}

// Export for testing or external access
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    questionsData,
    renderQuestions,
    debounce
  };
}