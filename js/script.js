const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/* =========================================================
   PROJECT DATABASE
   Add future projects HERE only.
   Every project gets its own GitHub URL.
   ========================================================= */
const projects = [
  /*{
    number: "01",
    category: "PYTHON • EDA",
    title: "Diwali Sales Analysis",
    description: "Analyzed customer purchasing behavior, sales trends, product categories and demographic patterns to discover useful business insights.",
    tags: ["python", "analysis"],
    icon: "fa-chart-simple",
    visual: "pv1",
    dataset: "Diwali Sales dataset",
    tools: "Python · Pandas · NumPy · Matplotlib · Seaborn",
    methodology: "EDA → cleaning → visualization → insights",
    insight: "Identified purchasing patterns across customer demographics, product categories and sales behavior.",
    github: "https://github.com/jagdish211/EDA-Project-of-Diwali-Sales-Data"
  },*/
  {
    number: "01",
    category: "PYTHON • EDA",
    title: "IPL Data Analysis",
    description: "Performed missing-value analysis, duplicate detection, filtering, grouping and exploratory analysis on IPL data.",
    tags: ["python", "analysis"],
    icon: "fa-chart-line",
    visual: "pv2",
    dataset: "IPL dataset",
    tools: "Python · Pandas · NumPy · Matplotlib",
    methodology: "Cleaning → filtering → grouping → exploratory analysis",
    insight: "Explored team, match and player-level patterns to understand IPL performance trends.",
    github: "https://github.com/jagdish211/IPL-Data-Analysis-"
  },
  {
  number: "02",
  category: "PYTHON • EDA",
  title: "Zomato Data Analysis",
  description: "Performed data cleaning, missing-value analysis, duplicate detection, filtering, grouping and exploratory analysis on Zomato restaurant data.",
  tags: ["python", "eda", "analysis"],
  icon: "fa-utensils",
  visual: "pv2",
  dataset: "Zomato Restaurant Dataset",
  tools: "Python · Pandas · NumPy · Matplotlib · Seaborn",
  methodology: "Cleaning → preprocessing → filtering → grouping → visualization → analysis",
  insight: "Analyzed restaurant ratings, cuisines, locations, pricing and availability to identify patterns in customer preferences and restaurant trends.",
  github: "https://github.com/jagdish211/Zomato-Data-Analysis"
},
{
  number: "03",
  category: "SQL • DATA ANALYSIS",

  title: "Spotify Data Analysis using SQL",

  description: "Analyzed Spotify data using SQL to explore artists, tracks, albums, playlists, listening history, devices and music preferences.",

  tags: ["sql", "mysql", "spotify", "data-analysis"],

  icon: "fa-music",

  visual: "pv7",

  dataset: "Spotify Music Dataset",

  tools: "SQL · MySQL",

  methodology: "Filtering → grouping → aggregation → joins → subqueries → analysis",

  insight: "Analyzed artists, tracks, playlists, genres and listening records to identify patterns in music consumption and user listening behavior.",

  github: "hhttps://github.com/jagdish211/Spotify-Data-Analysis-Project"
},
{
  number: "04",
  category: "SQL • DATA ANALYSIS",
  title: "Netflix Data Analysis using SQL",
  description: "Analyzed Netflix movies and TV shows using SQL to explore genres, ratings, release years, countries, and content trends.",
  tags: ["sql", "mysql", "netflix", "data-analysis"],
  icon: "fa-database",
  visual: "pv6",
  dataset: "Netflix Movies & TV Shows dataset",
  tools: "SQL · MySQL",
  methodology: "Filter → aggregate → group → subquery → analyze",
  insight: "Used SQL queries to uncover content trends, genre distribution, ratings, release patterns, and country-wise Netflix content.",
  github: "https://github.com/jagdish211/Netflix-SQL-Analytics"
},
{
  number: "05",
  category: "EXCEL • DATA ANALYSIS",
  title: "Sales Data Analysis using Excel",
  description: "Performed data cleaning, formatting, filtering, sorting, pivot table analysis and dashboard creation on sales data using Microsoft Excel.",
  tags: ["excel", "analysis"],
  icon: "fa-file-excel",
  visual: "pv3",
  dataset: "Sales Dataset",
  tools: "Microsoft Excel · Pivot Tables · Charts · Conditional Formatting",
  methodology: "Cleaning → formatting → filtering → pivot tables → visualization → dashboard → analysis",
  insight: "Analyzed sales, revenue, products, regions and customer trends to identify top-performing products and important business patterns.",
  github: "https://github.com/jagdish211/Excel-Sales-Dashboard-Project"
},


  /*{
    number: "03",
    category: "POWER BI • DASHBOARD",
    title: "Sales Dashboard",
    description: "Designed an interactive dashboard for sales performance, revenue, products, regions and customer trends.",
    tags: ["powerbi", "analysis"],
    icon: "fa-chart-column",
    visual: "pv3",
    dataset: "Sales dataset",
    tools: "Power BI · Excel · Data Visualization",
    methodology: "Data preparation → KPIs → dashboard → insights",
    insight: "Created an interactive view of key sales KPIs and business trends.",
    github: "https://github.com/YOUR_USERNAME/YOUR_SALES_DASHBOARD_REPOSITORY"
  },
  {
    number: "04",
    category: "MACHINE LEARNING",
    title: "ML Prediction",
    description: "Built a machine-learning workflow covering preprocessing, feature engineering, training and evaluation.",
    tags: ["python", "ml"],
    icon: "fa-robot",
    visual: "pv4",
    dataset: "Prediction dataset",
    tools: "Python · Pandas · Scikit-learn",
    methodology: "Preprocess → engineer features → train → evaluate",
    insight: "Built a reusable predictive-model workflow from raw data through model evaluation.",
    github: "https://github.com/YOUR_USERNAME/YOUR_ML_REPOSITORY"
  },
  {
    number: "05",
    category: "ML • CLUSTERING",
    title: "Customer Segmentation",
    description: "Segmented customers using behavioral and purchasing patterns to identify meaningful groups.",
    tags: ["python", "ml"],
    icon: "fa-users-viewfinder",
    visual: "pv5",
    dataset: "Customer dataset",
    tools: "Python · Scikit-learn · K-Means",
    methodology: "Prepare → scale → cluster → interpret",
    insight: "Identified customer groups based on behavioral and purchasing characteristics.",
    github: "https://github.com/YOUR_USERNAME/YOUR_CUSTOMER_SEGMENTATION_REPOSITORY"
  },*/
  
  


];

/* =========================================================
   THEME
   ========================================================= */
const themeBtn = $("#themeBtn");
const body = document.body;

function updateThemeIcon() {
  if (!themeBtn) return;
  themeBtn.innerHTML = body.classList.contains("light")
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
}

if (localStorage.getItem("theme") === "light") body.classList.add("light");
updateThemeIcon();

themeBtn?.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
});

/* =========================================================
   MOBILE MENU
   ========================================================= */
const menuBtn = $("#menuBtn");
const navMenu = $("#navMenu");

menuBtn?.addEventListener("click", () => navMenu?.classList.toggle("open"));
$$('#navMenu a').forEach(link => link.addEventListener("click", () => navMenu?.classList.remove("open")));

/* =========================================================
   PROJECT RENDERING
   ========================================================= */
const projectGrid = $("#projectGrid");
const projectCount = $("#projectCount");

function renderProjects(filter = "all") {
  if (!projectGrid) return;

  const visibleProjects = projects.filter(project =>
    filter === "all" || project.tags.includes(filter)
  );

  projectGrid.innerHTML = visibleProjects.map(project => {
    const originalIndex = projects.indexOf(project);
    return `
      <article class="project-card reveal" data-tags="${project.tags.join(" ")}">
        <div class="project-visual ${project.visual}">
          <span class="project-number">${project.number}</span>
          <i class="fa-solid ${project.icon}"></i>
          <span class="project-glow"></span>
        </div>

        <div class="project-body">
          <small>${project.number} / ${project.category}</small>
          <h3>${project.title}</h3>
          <p>${project.description}</p>

          <div class="project-tags">
            ${project.tags.map(tag => `<span>${formatTag(tag)}</span>`).join("")}
          </div>

          <div class="tech">${project.tools}</div>

          <div class="project-actions">
            <button class="details-btn" type="button" data-project="${originalIndex}">
              View Details <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <a class="project-github" href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} GitHub repository">
              GitHub <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (projectCount) projectCount.dataset.count = projects.length;
  observeReveals();
  bindProjectButtons();
}

function formatTag(tag) {
  const labels = {
    python: "Python",
    sql: "SQL",
    ml: "Machine Learning",
    powerbi: "Power BI",
    analysis: "Data Analysis"
  };
  return labels[tag] || tag;
}

function bindProjectButtons() {
  $$(".details-btn").forEach(button => {
    button.addEventListener("click", () => openProjectModal(Number(button.dataset.project)));
  });
}

/* =========================================================
   PROJECT MODAL — GitHub URL is taken from project.github
   ========================================================= */
const modal = $("#projectModal");
const modalGitHub = $("#modalGitHub");

function openProjectModal(index) {
  const project = projects[index];
  if (!project || !modal) return;

  $("#modalTag").textContent = `${project.number} / ${project.category}`;
  $("#modalTitle").textContent = project.title;
  $("#modalDescription").textContent = project.description;
  $("#modalDataset").textContent = project.dataset;
  $("#modalTools").textContent = project.tools;
  $("#modalMethod").textContent = project.methodology;
  $("#modalInsight").textContent = project.insight;

  /* THIS is the important part: each project gets its own URL. */
  modalGitHub.href = project.github;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
}

function closeModal() {
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
}

$("#modalClose")?.addEventListener("click", closeModal);
modal?.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

/* =========================================================
   FILTERS
   ========================================================= */
$$('.filter').forEach(button => {
  button.addEventListener("click", () => {
    $$('.filter').forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter || "all");
  });
});

/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });
  }

  $$(".reveal:not(.visible)").forEach(element => revealObserver.observe(element));
}
observeReveals();

/* =========================================================
   STATS
   ========================================================= */
let counted = false;
const statsSection = $(".stats");

if (statsSection) {
  const statObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting || counted) return;
    counted = true;

    $$('[data-count]').forEach(element => {
      const end = Number(element.dataset.count) || 0;
      let current = 0;
      const step = Math.max(1, Math.ceil(end / 25));
      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        element.textContent = `${current}+`;
      }, 45);
    });
  }, { threshold: 0.5 });

  statObserver.observe(statsSection);
}

/* =========================================================
   TYPING EFFECT
   ========================================================= */
const typingTarget = $("#typingText");
if (typingTarget) {
  const words = ["Data Scientist.", "Data Analyst.", "ML Enthusiast."];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const word = words[wordIndex];
    typingTarget.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex < word.length) {
      charIndex++;
      setTimeout(type, 90);
    } else if (!deleting && charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1500);
    } else if (deleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 45);
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 350);
    }
  }
  type();
}

/* =========================================================
   CONTACT FORM
   ========================================================= */
const contactForm = $("#contactForm");
const contactFrame = $("#contactSubmitFrame");
let contactSubmitting = false;

contactForm?.addEventListener("submit", event => {
  if (contactForm.action.includes("YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL")) {
    event.preventDefault();
    $("#formMsg").textContent = "Form is ready, but Google Apps Script is not connected yet. Follow SETUP_GOOGLE_FORM.md.";
    return;
  }

  if (contactSubmitting) {
    event.preventDefault();
    return;
  }

  contactSubmitting = true;
  $("#formMsg").textContent = "Sending message...";
  const submitButton = contactForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;

  setTimeout(() => {
    $("#formMsg").textContent = "Message sent successfully! Thank you.";
    contactForm.reset();
    if (submitButton) submitButton.disabled = false;
    contactSubmitting = false;
  }, 1200);

  const data = {
    date: new Date().toLocaleString(),
    name: contactForm.elements.name?.value || "",
    email: contactForm.elements.email?.value || "",
    subject: contactForm.elements.subject?.value || "",
    message: contactForm.elements.message?.value || ""
  };
  const key = "jagdishPortfolioContactSubmissions";
  const old = JSON.parse(localStorage.getItem(key) || "[]");
  old.push(data);
  localStorage.setItem(key, JSON.stringify(old));
});

contactFrame?.addEventListener("load", () => {});

/* =========================================================
   BACK TO TOP + YEAR + ACTIVE NAV
   ========================================================= */
$("#topBtn")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
if ($("#year")) $("#year").textContent = new Date().getFullYear();

const sections = $$('section[id]');
const navLinks = $$('#navMenu a');

window.addEventListener("scroll", () => {
  const y = window.scrollY + 180;
  sections.forEach(section => {
    if (y >= section.offsetTop && y < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${section.id}`);
      });
    }
  });
}, { passive: true });

/* =========================================================
   SUBTLE CURSOR GLOW
   ========================================================= */
const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
document.body.appendChild(cursorGlow);

if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", event => {
    cursorGlow.style.transform = `translate3d(${event.clientX - 160}px, ${event.clientY - 160}px, 0)`;
  }, { passive: true });
} else {
  cursorGlow.remove();
}

/* Render projects after all functions are ready. */
renderProjects();
