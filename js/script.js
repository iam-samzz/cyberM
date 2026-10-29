/* ========== STATE MANAGEMENT ========== */
let currentRoadmapId = "basics";
let currentRoadmapTeam = "red";
let selectedResourceCategory = "all";
let currentCourseToolId = "nmap";
let currentCourseTeam = "red";

/* LMS state */
let currentLmsCourseId = null;
let currentLmsLessonId = null;
let lmsCompletedLessons = new Set();
let lmsOpenModules = new Set();
let currentLmsTab = "overview";

/* ========== NAVIGATION CONTROLLER ========== */
function navigateTo(pageId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) targetPage.classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-page') === pageId);
  });

  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (navLinks) navLinks.classList.remove('open');
  if (hamburger) hamburger.classList.remove('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========== TEAM TABS — ROADMAPS ========== */
function updateRoadmapTeamTabsUI() {
  document.querySelectorAll('#roadmapTeamTabs .team-tab').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-team') === currentRoadmapTeam);
  });
}

function setRoadmapTeam(team, btn) {
  currentRoadmapTeam = team;
  updateRoadmapTeamTabsUI();
  renderRoadmapNav();
  const first = Object.values(roadmapsData).find(r => r.team === team) ||
                Object.values(roadmapsData).find(r => r.team === 'foundation');
  if (first) switchRoadmap(first.id);
}

function renderRoadmapNav() {
  const nav = document.getElementById('roadmapNavButtons');
  if (!nav) return;
  const visible = Object.values(roadmapsData).filter(r =>
    r.team === currentRoadmapTeam || r.team === 'foundation'
  );
  nav.innerHTML = visible.map(r => `
    <button class="roadmap-nav-btn ${r.id === currentRoadmapId ? 'active' : ''}" data-roadmap="${r.id}" onclick="switchRoadmap('${r.id}')">
      <span>${r.title}</span>
      ${r.team === 'foundation' ? '<span class="main-tag">Foundation</span>' : ''}
    </button>
  `).join('');
}

function switchRoadmap(roadmapId) {
  if (!roadmapsData[roadmapId]) return;
  const data = roadmapsData[roadmapId];

  // If roadmap belongs to a specific team and it differs, switch team tab
  if (data.team !== 'foundation' && data.team !== currentRoadmapTeam) {
    currentRoadmapTeam = data.team;
    updateRoadmapTeamTabsUI();
    renderRoadmapNav();
  } else {
    document.querySelectorAll('.roadmap-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-roadmap') === roadmapId);
    });
  }

  currentRoadmapId = roadmapId;

  const headerEl = document.getElementById('roadmapHeader');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="roadmap-active-header-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ${data.badge}
      </div>
      <h3>${data.title}</h3>
      <p>${data.desc}</p>
    `;
  }

  const nodesContainer = document.getElementById('verticalRoadmapNodes');
  if (!nodesContainer) return;
  nodesContainer.innerHTML = '';

  data.nodes.forEach(node => {
    const nodeCard = document.createElement('div');
    nodeCard.className = 'vertical-node-card';

    let topicsHTML = '';
    if (node.topics && node.topics.length > 0) {
      topicsHTML = `
        <div class="vertical-node-subheading">Core Topics to Cover</div>
        <div class="vertical-topics-grid">
          ${node.topics.map(topic => `
            <div class="vertical-topic-card">
              <div class="vertical-topic-card-title">${topic.category}</div>
              <ul>${topic.items.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
          `).join('')}
        </div>
      `;
    }

    let toolsHTML = '';
    if (node.tools && node.tools.length > 0) {
      toolsHTML = `
        <div class="vertical-tools-row">
          <span class="vertical-tools-label">Key Tools to Master:</span>
          ${node.tools.map(tool => `<span class="vertical-tool-chip">${tool}</span>`).join('')}
        </div>
      `;
    }

    nodeCard.innerHTML = `
      <div class="vertical-node-marker">${node.number}</div>
      <div class="vertical-node-header">
        <div class="vertical-node-title-group">
          <span class="vertical-node-step-tag">Node ${node.number}</span>
          <h4 class="vertical-node-title">${node.title}</h4>
        </div>
      </div>
      <div class="vertical-node-overview">${node.overview}</div>
      ${topicsHTML}
      ${toolsHTML}
    `;
    nodesContainer.appendChild(nodeCard);
  });
}

/* ========== TEAM TABS — COURSES ========== */
function updateCourseTeamTabsUI() {
  document.querySelectorAll('#courseTeamTabs .team-tab').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-team') === currentCourseTeam);
  });
}

function setCourseTeam(team, btn) {
  currentCourseTeam = team;
  updateCourseTeamTabsUI();
  const first = Object.values(coursesData).find(c => c.team === team);
  if (first) currentCourseToolId = first.id;
  renderCourseToolNav();
  renderCourseContent();
}

/* ========== RESOURCES RENDERER & FILTERS ========== */
function renderResources() {
  const grid = document.getElementById('resourceGrid');
  if (!grid) return;

  const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
  const levelTerm = document.getElementById('resourceLevelFilter').value;

  const filtered = resources.filter(res => {
    const matchesCategory = selectedResourceCategory === 'all' || res.category === selectedResourceCategory;
    const matchesLevel = levelTerm === 'all' || res.level === levelTerm;
    const matchesSearch = !searchTerm ||
      res.title.toLowerCase().includes(searchTerm) ||
      res.desc.toLowerCase().includes(searchTerm) ||
      res.source.toLowerCase().includes(searchTerm) ||
      res.skill.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesLevel && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <div class="no-results-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h3>No resources found</h3>
        <p>Try adjusting your search terms or filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(res => `
    <div class="resource-card">
      <div class="resource-card-top">
        <span class="resource-type">${res.type}</span>
        <span class="resource-level ${res.level}">${res.level}</span>
      </div>
      <h3>${res.title}</h3>
      <p>${res.desc}</p>
      <div class="resource-meta">
        <span>By ${res.source}</span>
        <span>•</span>
        <span>${res.skill}</span>
      </div>
      <a href="${res.link}" target="_blank" rel="noopener noreferrer" class="resource-link">
        Open Resource
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </a>
    </div>
  `).join('');
}

function filterResourceCategory(cat, btn) {
  selectedResourceCategory = cat;
  document.querySelectorAll('#resourceCategoryStrip .resource-category').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderResources();
}

/* ========== COURSES PAGE — LANDING VIEW ========== */
function renderCourseToolNav() {
  const nav = document.getElementById('courseToolNav');
  if (!nav) return;
  const visible = Object.values(coursesData).filter(c => c.team === currentCourseTeam);
  nav.innerHTML = visible.map(c => `
    <button class="course-tool-btn ${c.id === currentCourseToolId ? 'active' : ''}" data-course-tool="${c.id}" onclick="selectCourseTool('${c.id}')">
      <span class="course-tool-icon">${c.icon}</span>
      <span class="course-tool-name">${c.name}</span>
      <span class="course-tool-level ${c.level.toLowerCase()}">${c.level}</span>
    </button>
  `).join('');
}

function selectCourseTool(toolId) {
  if (!coursesData[toolId]) return;
  const course = coursesData[toolId];
  if (course.team !== currentCourseTeam) {
    currentCourseTeam = course.team;
    updateCourseTeamTabsUI();
  }
  currentCourseToolId = toolId;
  renderCourseToolNav();
  renderCourseContent();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCourseContent() {
  const container = document.getElementById('courseContent');
  if (!container) return;
  const course = coursesData[currentCourseToolId];
  if (!course) {
    container.innerHTML = '<p class="no-results">Course not found.</p>';
    return;
  }
  const totalLessons = course.modules.reduce((s, m) => s + m.lessons.length, 0);

  container.innerHTML = `
    <div class="course-header-card">
      <div class="course-header-left">
        <div class="course-tool-icon-lg">${course.icon}</div>
        <div>
          <div class="course-header-meta">
            <span class="course-header-category">${course.category}</span>
            <span class="course-header-level ${course.level.toLowerCase()}">${course.level}</span>
            <span class="team-badge ${course.team}">${course.team === 'red' ? 'Red Team' : 'Blue Team'}</span>
          </div>
          <h3 class="course-header-title">${course.name}</h3>
          <p class="course-header-desc">${course.description}</p>
          <div class="course-header-stats">
            <span><strong>${course.modules.length}</strong> Modules</span>
            <span><strong>${totalLessons}</strong> Lessons</span>
            <span><strong>${course.totalDuration}</strong> Total</span>
            <span><strong>${course.instructor}</strong> Instructor</span>
          </div>
        </div>
      </div>
      <div class="course-header-actions">
        <button class="btn btn-primary" onclick="enrollCourse('${course.id}')">
          Enroll Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>

    <div class="course-preview-modules">
      <h4 class="course-preview-heading">Course Curriculum</h4>
      ${course.modules.map((mod, i) => `
        <div class="course-preview-module">
          <div class="course-preview-module-header">
            <span class="course-preview-module-num">Module ${i + 1}</span>
            <span class="course-preview-module-title">${mod.title}</span>
            <span class="course-preview-module-meta">${mod.lessons.length} lessons</span>
          </div>
          <ul class="course-preview-lesson-list">
            ${mod.lessons.map(l => `
              <li>
                <span class="course-preview-lesson-icon">▶</span>
                <span class="course-preview-lesson-title">${l.title}</span>
                <span class="course-preview-lesson-duration">${l.duration}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

/* ========== LMS PLAYER ========== */
function lmsStorageKey(courseId) { return `cyberM_lms_progress_${courseId}`; }

function getCompletedLessons(courseId) {
  try {
    const stored = localStorage.getItem(lmsStorageKey(courseId));
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch { return new Set(); }
}

function saveCompletedLessons(courseId, set) {
  try { localStorage.setItem(lmsStorageKey(courseId), JSON.stringify([...set])); } catch {}
}

function getCourseTotalLessons(course) {
  return course.modules.reduce((s, m) => s + m.lessons.length, 0);
}

function findLessonContext(course, lessonId) {
  for (const mod of course.modules) {
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (lesson) return { module: mod, lesson };
  }
  return null;
}

function enrollCourse(courseId) {
  if (!coursesData[courseId]) return;
  currentLmsCourseId = courseId;
  currentLmsTab = "overview";
  lmsCompletedLessons = getCompletedLessons(courseId);
  const course = coursesData[courseId];
  lmsOpenModules = new Set([course.modules[0].id]);
  currentLmsLessonId = course.modules[0].lessons[0].id;

  document.getElementById('courseLandingView').style.display = 'none';
  document.getElementById('lmsView').style.display = 'block';

  renderLms();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitLms() {
  if (currentLmsCourseId) saveCompletedLessons(currentLmsCourseId, lmsCompletedLessons);
  document.getElementById('lmsView').style.display = 'none';
  document.getElementById('courseLandingView').style.display = 'block';
  renderCourseContent();
}

function renderLms() {
  const course = coursesData[currentLmsCourseId];
  if (!course) return;

  // Topbar
  document.getElementById('lmsTopbarTitle').textContent = course.name;

  // Progress
  const total = getCourseTotalLessons(course);
  const done = course.modules.reduce((s, m) => s + m.lessons.filter(l => lmsCompletedLessons.has(l.id)).length, 0);
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById('lmsProgressFill').style.width = pct + '%';
  document.getElementById('lmsProgressText').textContent = pct + '%';

  // Sidebar title & meta
  document.getElementById('lmsSidebarTitle').textContent = course.name;
  document.getElementById('lmsSidebarMeta').textContent = `${course.modules.length} modules · ${total} lessons · ${course.totalDuration}`;

  // Player
  renderLmsPlayer();
  // Sidebar accordion
  renderLmsSidebar();
  // Tabs
  renderLmsTab();
}

function renderLmsSidebar() {
  const course = coursesData[currentLmsCourseId];
  const accordion = document.getElementById('lmsAccordion');
  if (!accordion) return;

  accordion.innerHTML = course.modules.map((mod, modIdx) => {
    const isOpen = lmsOpenModules.has(mod.id);
    const modDone = mod.lessons.filter(l => lmsCompletedLessons.has(l.id)).length;
    return `
      <div class="lms-module ${isOpen ? 'open' : ''}" data-module="${mod.id}">
        <button class="lms-module-header" onclick="toggleLmsModule('${mod.id}')">
          <div class="lms-module-title-wrap">
            <span class="lms-module-num">Module ${modIdx + 1}</span>
            <span class="lms-module-title">${mod.title}</span>
          </div>
          <div class="lms-module-meta">
            <span class="lms-module-count">${modDone}/${mod.lessons.length}</span>
            <span class="lms-chevron">▾</span>
          </div>
        </button>
        <div class="lms-module-body">
          <ul class="lms-lesson-list">
            ${mod.lessons.map((les, i) => {
              const isActive = les.id === currentLmsLessonId;
              const isDone = lmsCompletedLessons.has(les.id);
              return `
                <li class="lms-lesson ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}">
                  <button class="lms-lesson-btn" onclick="selectLmsLesson('${les.id}')">
                    <span class="lms-lesson-status">${isDone ? '✓' : (i + 1)}</span>
                    <span class="lms-lesson-info">
                      <span class="lms-lesson-title">${les.title}</span>
                      <span class="lms-lesson-duration">${les.duration}</span>
                    </span>
                  </button>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      </div>
    `;
  }).join('');
}

function renderLmsPlayer() {
  const course = coursesData[currentLmsCourseId];
  const ctx = findLessonContext(course, currentLmsLessonId);
  if (!ctx) return;
  const { lesson } = ctx;

  // Find lesson position
  let pos = 0, total = 0;
  course.modules.forEach(m => {
    m.lessons.forEach(l => {
      total++;
      if (l.id === lesson.id) pos = total;
    });
  });

  const isDone = lmsCompletedLessons.has(lesson.id);

  const playerEl = document.getElementById('lmsPlayer');
  playerEl.innerHTML = `
    <div class="lms-video-frame">
      <div class="lms-video-placeholder" data-video-slot="${lesson.id}">
        <div class="lms-video-play-btn">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <span class="lms-video-label">Video Placeholder</span>
        <small class="lms-video-hint">Backend will inject the video source for "${lesson.title}" here</small>
      </div>
      <div class="lms-video-meta">
        <span class="lms-video-lesson-num">Lesson ${pos} of ${total}</span>
        <span class="lms-video-duration">${lesson.duration}</span>
      </div>
    </div>
    <div class="lms-player-actions">
      <button class="btn btn-secondary ${isDone ? 'is-done' : ''}" onclick="markCurrentLessonComplete()">
        ${isDone ? '✓ Marked Complete' : 'Mark as Complete'}
      </button>
      <button class="btn btn-primary" onclick="nextLesson()">
        Next Lesson
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>
  `;

  document.getElementById('lmsCurrentTitle').textContent = lesson.title;
  document.getElementById('lmsCurrentDesc').textContent = lesson.description || '';

  // Update tabs active
  document.querySelectorAll('#lmsTabs .lms-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-lms-tab') === currentLmsTab);
  });
}

function renderLmsTab() {
  const course = coursesData[currentLmsCourseId];
  const ctx = findLessonContext(course, currentLmsLessonId);
  const panel = document.getElementById('lmsTabPanel');
  if (!ctx || !panel) return;
  const { module } = ctx;

  if (currentLmsTab === 'overview') {
    panel.innerHTML = `
      <div class="lms-overview">
        <h4>About this module</h4>
        <p>${module.title} — ${module.lessons.length} lessons covering practical skills you can apply right away.</p>
        <h4>What you'll learn</h4>
        <ul>
          ${module.lessons.map(l => `<li>${l.title}</li>`).join('')}
        </ul>
        <p class="lms-overview-note">All lessons include video placeholders ready for backend integration.</p>
      </div>
    `;
  } else if (currentLmsTab === 'resources') {
    panel.innerHTML = `
      <div class="lms-resources">
        <h4>Downloadable Resources</h4>
        <p class="lms-section-desc">Materials for the module "${module.title}".</p>
        <div class="lms-resource-list">
          ${module.resources.map(r => `
            <div class="lms-resource-item">
              <div class="lms-resource-icon">${r.type}</div>
              <div class="lms-resource-info">
                <span class="lms-resource-name">${r.name}</span>
                <span class="lms-resource-size">${r.size}</span>
              </div>
              <button class="btn btn-secondary lms-dl-btn" onclick="alert('Backend will deliver this file.')">Download</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    panel.innerHTML = `
      <div class="lms-assessment">
        <h4>${module.quiz.title}</h4>
        <p class="lms-section-desc">Test your understanding of "${module.title}".</p>
        ${module.quiz.questions.map((q, qi) => `
          <div class="lms-quiz-question" data-qi="${qi}">
            <div class="lms-quiz-q">${qi + 1}. ${q.q}</div>
            <div class="lms-quiz-options">
              ${q.options.map((opt, oi) => `
                <button class="lms-quiz-option" data-opt-index="${oi}" onclick="checkQuizAnswer(this, ${oi === q.answer}, ${q.answer})">${opt}</button>
              `).join('')}
            </div>
            <div class="lms-quiz-feedback"></div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function switchLmsTab(tab) {
  currentLmsTab = tab;
  document.querySelectorAll('#lmsTabs .lms-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-lms-tab') === tab);
  });
  renderLmsTab();
}

function checkQuizAnswer(btn, isCorrect, correctIndex) {
  const parent = btn.closest('.lms-quiz-question');
  if (!parent) return;
  const options = parent.querySelectorAll('.lms-quiz-option');
  options.forEach(b => {
    b.disabled = true;
    const idx = parseInt(b.dataset.optIndex, 10);
    if (idx === correctIndex) b.classList.add('correct');
  });
  if (!isCorrect) btn.classList.add('incorrect');
  const fb = parent.querySelector('.lms-quiz-feedback');
  fb.textContent = isCorrect ? '✓ Correct!' : '✗ Not quite — correct answer highlighted above.';
  fb.className = 'lms-quiz-feedback ' + (isCorrect ? 'ok' : 'bad');
}

function toggleLmsModule(moduleId) {
  if (lmsOpenModules.has(moduleId)) lmsOpenModules.delete(moduleId);
  else lmsOpenModules.add(moduleId);
  renderLmsSidebar();
}

function selectLmsLesson(lessonId) {
  currentLmsLessonId = lessonId;
  currentLmsTab = "overview";
  // Auto-expand the module that contains this lesson
  const course = coursesData[currentLmsCourseId];
  for (const mod of course.modules) {
    if (mod.lessons.some(l => l.id === lessonId)) {
      lmsOpenModules.add(mod.id);
      break;
    }
  }
  renderLms();
}

function markCurrentLessonComplete() {
  if (!currentLmsLessonId) return;
  if (lmsCompletedLessons.has(currentLmsLessonId)) {
    lmsCompletedLessons.delete(currentLmsLessonId);
  } else {
    lmsCompletedLessons.add(currentLmsLessonId);
  }
  saveCompletedLessons(currentLmsCourseId, lmsCompletedLessons);
  renderLms();
}

function nextLesson() {
  const course = coursesData[currentLmsCourseId];
  const flat = [];
  course.modules.forEach(m => m.lessons.forEach(l => flat.push(l)));
  const idx = flat.findIndex(l => l.id === currentLmsLessonId);
  if (idx >= 0 && idx < flat.length - 1) {
    selectLmsLesson(flat[idx + 1].id);
  } else {
    alert('🎉 You have reached the end of this course!');
  }
}

/* ========== CONTACT FORM CONTROLLER ========== */
function handleContact(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent successfully. We will get back to you within 24 hours.');
  document.getElementById('contactForm').reset();
}

/* ========== ASSISTANT BOT CONTROLLER ========== */
function setupAssistant() {
  const launcher = document.getElementById('assistantLauncher');
  const panel = document.getElementById('assistantPanel');
  const closeBtn = document.getElementById('assistantClose');
  const form = document.getElementById('assistantForm');
  const input = document.getElementById('assistantInput');
  const messages = document.getElementById('assistantMessages');

  if (!launcher || !panel) return;

  launcher.addEventListener('click', () => {
    panel.classList.toggle('active');
    if (panel.classList.contains('active') && messages.children.length === 0) {
      addAssistantMessage('bot', "Hello! Welcome to cyberM. I can help you find learning resources, explore tool courses, or select a vertical career roadmap. What would you like to explore today?");
    }
  });

  closeBtn.addEventListener('click', () => panel.classList.remove('active'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addAssistantMessage('user', text);
    input.value = '';
    setTimeout(() => respondToUser(text), 500);
  });

  const quickActions = document.getElementById('assistantQuickActions');
  if (quickActions) {
    quickActions.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const action = e.target.getAttribute('data-assistant-action');
        if (action === 'career') {
          addAssistantMessage('user', 'Start my cybersecurity journey');
          setTimeout(() => {
            addAssistantMessage('bot', 'Awesome! To start your journey, switch to our Foundation Cybersecurity Basics roadmap. It covers OS fundamentals, networking, core security principles, and hands-on lab setup step-by-step.');
            navigateTo('roadmap');
            switchRoadmap('basics');
          }, 500);
        } else if (action === 'courses') {
          addAssistantMessage('user', 'Explore tool courses');
          setTimeout(() => {
            addAssistantMessage('bot', 'We have video-based courses for tools like Nmap, Burp Suite, Wireshark, Splunk, Metasploit, and more. Taking you to the Courses page now!');
            navigateTo('courses');
          }, 500);
        } else if (action === 'resources') {
          addAssistantMessage('user', 'Find learning resources');
          setTimeout(() => {
            addAssistantMessage('bot', 'We have curated free learning resources including OWASP Top 10, NIST frameworks, PortSwigger Academy, and TryHackMe. Taking you there now!');
            navigateTo('resources');
          }, 500);
        }
      }
    });
  }
}

function addAssistantMessage(sender, text) {
  const messages = document.getElementById('assistantMessages');
  if (!messages) return;
  const msg = document.createElement('div');
  msg.className = `assistant-message ${sender}`;
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function respondToUser(query) {
  const q = query.toLowerCase();
  if (q.includes('course') || q.includes('video') || q.includes('learn tool')) {
    addAssistantMessage('bot', 'Our Courses page has video-based lessons for 12 security tools — Nmap, Burp Suite, Metasploit, Wireshark, Splunk, Hashcat, and more. Taking you there now!');
    navigateTo('courses');
  } else if (q.includes('soc') || q.includes('blue') || q.includes('defense')) {
    addAssistantMessage('bot', 'The SOC Analyst (Blue Team) roadmap focuses on monitoring, log correlation with Splunk/Sentinel, packet analysis with Wireshark, and incident response lifecycle!');
    navigateTo('roadmap');
    switchRoadmap('soc');
  } else if (q.includes('pentest') || q.includes('red') || q.includes('hack') || q.includes('offensive')) {
    addAssistantMessage('bot', 'The Penetration Tester (Red Team) roadmap covers OSINT recon, port scanning with Nmap, web exploitation with Burp Suite, and privilege escalation!');
    navigateTo('roadmap');
    switchRoadmap('pentest');
  } else if (q.includes('cloud') || q.includes('aws') || q.includes('azure')) {
    addAssistantMessage('bot', 'The Cloud Security Engineer roadmap guides you through IAM policies, Infrastructure as Code scanning with Terraform, and continuous CSPM auditing!');
    navigateTo('roadmap');
    switchRoadmap('cloud');
  } else if (q.includes('forensic') || q.includes('dfir') || q.includes('memory')) {
    addAssistantMessage('bot', 'The DFIR Specialist roadmap covers OS registry artifacts, disk imaging, RAM memory forensics with Volatility 3, and malware disassembly with Ghidra!');
    navigateTo('roadmap');
    switchRoadmap('dfir');
  } else if (q.includes('grc') || q.includes('risk') || q.includes('compliance')) {
    addAssistantMessage('bot', 'The GRC Analyst roadmap covers security policies, NIST CSF/ISO 27001 frameworks, quantitative risk assessment, and vendor audits!');
    navigateTo('roadmap');
    switchRoadmap('grc');
  } else {
    addAssistantMessage('bot', "I can guide you through our site! You can explore tool courses, curated learning resources, or follow one of our vertical career roadmaps.");
  }
}

/* ========== THEME TOGGLE ========== */
function updateBrandLogo(theme) {
  const logo = document.getElementById('brandLogo');
  if (!logo) return;
  logo.src = theme === 'dark' ? 'assets/logo-dark-theme.png' : 'assets/logo-light-theme.png';
}

function setupThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const savedTheme = localStorage.getItem('cyberM_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  updateBrandLogo(savedTheme);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cyberM_theme', next);
    updateThemeIcon(next);
    updateBrandLogo(next);
  });
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

/* ========== MOBILE NAVIGATION ========== */
function setupMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
}

/* ========== INITIALIZATION ========== */
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupMobileNav();

  // Roadmap init
  currentRoadmapTeam = "red";
  updateRoadmapTeamTabsUI();
  renderRoadmapNav();
  switchRoadmap('basics');

  // Resources
  renderResources();
  const searchInput = document.getElementById('searchInput');
  const levelFilter = document.getElementById('resourceLevelFilter');
  if (searchInput) searchInput.addEventListener('input', renderResources);
  if (levelFilter) levelFilter.addEventListener('change', renderResources);

  // Courses init
  currentCourseTeam = "red";
  updateCourseTeamTabsUI();
  currentCourseToolId = "nmap";
  renderCourseToolNav();
  renderCourseContent();

  // Assistant
  setupAssistant();
});