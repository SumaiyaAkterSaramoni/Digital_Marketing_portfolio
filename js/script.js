// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animated Counters
function animateCounter(elementId, finalValue, suffix = '', prefix = '') {
    let element = document.getElementById(elementId);
    let current = 0;
    let increment = finalValue / 30;
    let timer = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            current = finalValue;
            clearInterval(timer);
        }
        
        if (suffix === 'M' || suffix === '%') {
            element.textContent = prefix + Math.floor(current) + suffix;
        } else {
            element.textContent = prefix + Math.floor(current) + suffix;
        }
    }, 40);
}

// Start counters when hero section is in view
const observerOptions = {
    threshold: 0.3
};

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Hero stats
            animateCounter('avgRoi', 412, '%');
            animateCounter('clientsServed', 47);
            animateCounter('revenueGenerated', 28, 'M', '$');
            animateCounter('campaignsManaged', 156, '+');
            
            // Dashboard metrics
            animateCounter('metricCtr', 8.7, '%');
            animateCounter('metricCpa', 24.5, '', '$');
            animateCounter('metricRoi', 412, '%');
            animateCounter('metricGrowth', 18.5, '%');
            
            heroObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

heroObserver.observe(document.querySelector('.hero'));

// Performance Chart
const performanceCtx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(performanceCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
            {
                label: 'Revenue Growth',
                data: [450, 520, 610, 720, 810, 920, 1020, 1150, 1280],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            },
            {
                label: 'ROI',
                data: [280, 310, 340, 370, 390, 410, 420, 415, 412],
                borderColor: '#f5576c',
                backgroundColor: 'rgba(245, 87, 108, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        family: "'Montserrat', sans-serif"
                    },
                    padding: 20
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: {
                    size: 14,
                    family: "'Montserrat', sans-serif"
                },
                bodyFont: {
                    size: 13,
                    family: "'Inter', sans-serif"
                },
                padding: 12
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    font: {
                        size: 12,
                        family: "'Inter', sans-serif"
                    }
                }
            },
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    font: {
                        size: 12,
                        family: "'Inter', sans-serif"
                    }
                }
            }
        }
    }
});

// Channel Performance Chart
const channelCtx = document.getElementById('channelPerformanceChart').getContext('2d');
const channelChart = new Chart(channelCtx, {
    type: 'bar',
    data: {
        labels: ['Paid Search', 'Social Media', 'Email', 'Content', 'Affiliate', 'Direct'],
        datasets: [
            {
                label: 'ROAS',
                data: [8.5, 6.2, 12.4, 9.1, 7.8, 10.2],
                backgroundColor: [
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(245, 87, 108, 0.8)',
                    'rgba(79, 172, 254, 0.8)',
                    'rgba(56, 161, 105, 0.8)',
                    'rgba(159, 122, 234, 0.8)',
                    'rgba(245, 158, 11, 0.8)'
                ],
                borderColor: [
                    '#667eea',
                    '#f5576c',
                    '#4facfe',
                    '#38a169',
                    '#9f7aea',
                    '#f59e0b'
                ],
                borderWidth: 2,
                borderRadius: 10
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: {
                    size: 14,
                    family: "'Montserrat', sans-serif"
                },
                bodyFont: {
                    size: 13,
                    family: "'Inter', sans-serif"
                },
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `ROAS: ${context.parsed.y}x`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    font: {
                        size: 12,
                        family: "'Inter', sans-serif"
                    },
                    callback: function(value) {
                        return value + 'x';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 12,
                        family: "'Inter', sans-serif",
                        weight: '600'
                    }
                }
            }
        }
    }
});

// Case Study Carousel
const caseTrack = document.getElementById('caseTrack');
const prevBtn = document.getElementById('prevCase');
const nextBtn = document.getElementById('nextCase');
let casePosition = 0;
const caseWidth = 540; // 500px card + 40px gap

nextBtn.addEventListener('click', () => {
    if (casePosition > -caseWidth * 2) {
        casePosition -= caseWidth;
        caseTrack.style.transform = `translateX(${casePosition}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (casePosition < 0) {
        casePosition += caseWidth;
        caseTrack.style.transform = `translateX(${casePosition}px)`;
    }
});

// Auto-rotate case studies
setInterval(() => {
    if (casePosition <= -caseWidth * 2) {
        casePosition = 0;
    } else {
        casePosition -= caseWidth;
    }
    caseTrack.style.transform = `translateX(${casePosition}px)`;
}, 8000);

// Strategy Form Submission
const strategyForm = document.getElementById('strategyForm');

strategyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll show a success message
    alert(`Thank you for your inquiry, ${company}! A detailed strategy proposal will be sent to ${email} within 24 hours.`);
    
    // Reset form
    strategyForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Trigger animations when sections come into view
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});