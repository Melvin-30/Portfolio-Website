// Initialize Lucide Icons
lucide.createIcons();

// 1. TYPING ANIMATION IN HERO
const typingText = [
    "Computer Engineering Student",
    "Full Stack Developer",
    "Building with Generative AI",
    "Software Engineer & Gamer"
];

let activeTextIdx = 0;
let activeCharIdx = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;
const typingTarget = document.getElementById("typing-target");

function playTypingAnimation() {
    const currentString = typingText[activeTextIdx];

    if (isDeleting) {
        typingTarget.textContent = currentString.substring(0, activeCharIdx - 1);
        activeCharIdx--;
    } else {
        typingTarget.textContent = currentString.substring(0, activeCharIdx + 1);
        activeCharIdx++;
    }

    if (!isDeleting && activeCharIdx === currentString.length) {
        isDeleting = true;
        setTimeout(playTypingAnimation, pauseTime);
    } else if (isDeleting && activeCharIdx === 0) {
        isDeleting = false;
        activeTextIdx = (activeTextIdx + 1) % typingText.length;
        setTimeout(playTypingAnimation, 500);
    } else {
        setTimeout(playTypingAnimation, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Run animation
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(playTypingAnimation, 500);
});

// 2. SCROLL INDICATORS & ACTIVE TABS + HEADER SHADOW
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const scrollProgress = document.getElementById("scroll-progress");
const mainHeader = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    // Scroll Progress
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + "%";

    // Header shadow on scroll
    if (winScroll > 10) {
        mainHeader.classList.add("scrolled");
    } else {
        mainHeader.classList.remove("scrolled");
    }

    // Active Tab Switching on Scroll
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 120)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-tab") === current) {
            link.classList.add("active");
        }
    });

    mobileNavLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-tab") === current) {
            link.classList.add("active");
        }
    });
});

// Click interaction for tabs - smooth alignment
const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
const hamburger = document.getElementById("hamburger");
const mobileDrawer = document.getElementById("mobile-drawer");

allNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth"
        });
        // Close mobile drawer if open
        if (mobileDrawer.classList.contains("open")) {
            mobileDrawer.classList.remove("open");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
            mobileDrawer.setAttribute("aria-hidden", "true");
        }
    });
});

// Hamburger toggle
hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    mobileDrawer.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileDrawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
});

// Close drawer on outside click
document.addEventListener("click", (e) => {
    if (!mainHeader.contains(e.target) && mobileDrawer.classList.contains("open")) {
        mobileDrawer.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileDrawer.setAttribute("aria-hidden", "true");
    }
});

// 3. CERTIFICATIONS FILTERING
const filterButtons = document.querySelectorAll(".filter-btn");
const certCards = document.querySelectorAll(".cert-card");
const certsGrid = document.getElementById("certs-grid");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Toggle active button class
        filterButtons.forEach(b => {
            b.classList.remove("active");
            b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        const filterValue = btn.getAttribute("data-filter");

        // Apply transition fade effect
        certsGrid.style.opacity = "0";

        setTimeout(() => {
            certCards.forEach(card => {
                const provider = card.getAttribute("data-provider");
                if (filterValue === "all" || provider === filterValue) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
            certsGrid.style.opacity = "1";
        }, 200);
    });
});

// 4. MOCK COPY TO CLIPBOARD IN CODE PANES
const copyBtns = document.querySelectorAll(".code-pane i[data-lucide='copy']");
copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const codeBody = btn.closest(".code-pane").querySelector(".code-text").innerText;
        navigator.clipboard.writeText(codeBody).then(() => {
            const originalIcon = btn.getAttribute("data-lucide");
            btn.setAttribute("data-lucide", "check");
            lucide.createIcons();
            btn.style.color = "var(--console-green)";
            setTimeout(() => {
                btn.setAttribute("data-lucide", "copy");
                lucide.createIcons();
                btn.style.color = "var(--text-muted)";
            }, 2000);
        }).catch(err => {
            console.error("Clipboard copy failed: ", err);
        });
    });
});
