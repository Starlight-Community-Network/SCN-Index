// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.social-card, .website-showcase').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Animate community cards on scroll
const communityCards = document.querySelectorAll('.community-card');
communityCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(card);
});

// Animate hub cards on scroll
const hubCards = document.querySelectorAll('.hub-card');
hubCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Add staggered animation for hub cards
hubCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Hub card hover effects with glow
hubCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 35px rgba(99, 102, 241, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Add click effects for hub cards
hubCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Create pulse effect
        const pulse = document.createElement('div');
        pulse.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: pulseClick 0.6s ease-out;
            pointer-events: none;
            left: ${e.offsetX - 50}px;
            top: ${e.offsetY - 50}px;
        `;
        
        this.appendChild(pulse);
        
        setTimeout(() => pulse.remove(), 600);
    });
});

// Social card hover effects
const socialCards = document.querySelectorAll('.social-card');
socialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click ripple effect for community cards
communityCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect on click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 10px;
        height: 10px;
        background: rgba(99, 102, 241, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});

// Security functions
function reportPhishing() {
    // Create modal for reporting
    const modal = document.createElement('div');
    modal.className = 'security-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Report Suspicious Activity</h3>
                <button class="close-btn" onclick="this.closest('.security-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p>If you believe you've found a fake site or account:</p>
                <ul>
                    <li>Screenshot the suspicious page</li>
                    <li>Copy the URL</li>
                    <li>Report to our Trust & Safety team</li>
                </ul>
                <div class="report-actions">
                    <a href="mailto:safety@starlightcommunity.network" class="report-link">
                        <i class="fas fa-envelope"></i>
                        Email Trust & Safety
                    </a>
                    <button onclick="window.open('https://discord.gg/BHz2aHuppC', '_blank')" class="discord-report">
                        <i class="fab fa-discord"></i>
                        Report via Discord
                    </button>
                </div>
            </div>
        </div>
    `;
    


    document.body.appendChild(modal);
}

function showVerificationGuide() {
    // Create verification guide modal
    const modal = document.createElement('div');
    modal.className = 'security-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>How to Verify Official Accounts</h3>
                <button class="close-btn" onclick="this.closest('.security-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="verification-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Check URLs Carefully</h4>
                            <p>Look for misspellings or extra characters in the URLs</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Cross-Reference</h4>
                            <p>Compare with the official links on this page<br>
                            <b>Tip:</b> <i>Each one of our socials have redirect via a subdomain Ex.youtube.starlightcommunity.network<i></p>
                        </div>
                    </div>
                </div>
                <div class="verification-tips">
                    <h4>Red Flags to Watch For:</h4>
                    <ul>
                        <li>Requests for passwords or sensitive info</li>
                        <li>URLs that don't match exactly</li>
                        <li>Unsolicited DMs claiming to be official</li>
                        <li>Pressure to act quickly or threats</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// Auto-show security notice on first visit
document.addEventListener('DOMContentLoaded', () => {
    const hasSeenSecurityNotice = localStorage.getItem('securityNoticeSeen');
    if (!hasSeenSecurityNotice) {
        setTimeout(() => {
            const securityCard = document.querySelector('.security-card');
            if (securityCard) {
                securityCard.style.animation = 'securityPulse 2s ease-in-out 3';
                localStorage.setItem('securityNoticeSeen', 'true');
            }
        }, 2000);
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulseClick {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(pulseStyle);