/* ==========================================================================
   HACKPACK V2 — MAIN APPLICATION CONTROLLER
   Unified Progress Management, Interactive Tool Challenges, Roadmap & Profile
   ========================================================================== */

/* ========== RUNTIME STATE ========== */
let currentRoadmapId = "basics";
let selectedResourceCategory = "all";
let currentCourseToolId = "nmap";
let currentModalToolId = "nmap";
let activeModalTab = "overview";
let currentActivityAnswers = {}; // { questionId: selectedOptionId }

/* ==========================================================================
   UNIFIED PROGRESS MANAGER (Canonical key: hackpack_progress_v1)
   ========================================================================== */

/**
 * Retrieves the current user progress from localStorage.
 * Handles missing, malformed, or outdated data gracefully.
 */
function getProgress() {
  try {
    const raw = localStorage.getItem('hackpack_progress_v1');
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return getDefaultProgress();
    return {
      version: 1,
      exploredTools: Array.isArray(parsed.exploredTools) ? parsed.exploredTools : [],
      completedRoadmapNodes: (parsed.completedRoadmapNodes && typeof parsed.completedRoadmapNodes === 'object') ? parsed.completedRoadmapNodes : {},
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      quizResults: (parsed.quizResults && typeof parsed.quizResults === 'object') ? parsed.quizResults : {},
      updatedAt: parsed.updatedAt || null
    };
  } catch (err) {
    console.warn('[HackPack] Error parsing progress data, fallback to defaults:', err);
    return getDefaultProgress();
  }
}

function getDefaultProgress() {
  return {
    version: 1,
    exploredTools: [],
    completedRoadmapNodes: {},
    completedLessons: [],
    quizResults: {},
    updatedAt: null
  };
}

/**
 * Persists progress to localStorage and refreshes UI.
 */
function saveProgress(p) {
  try {
    p.updatedAt = new Date().toISOString();
    localStorage.setItem('hackpack_progress_v1', JSON.stringify(p));
    updateAllProgressUI();
  } catch (err) {
    console.error('[HackPack] Failed to save progress:', err);
  }
}

function markToolExplored(toolId) {
  if (!toolId) return;
  const p = getProgress();
  if (!p.exploredTools.includes(toolId)) {
    p.exploredTools.push(toolId);
    saveProgress(p);
  }
}

function isToolExplored(toolId) {
  return getProgress().exploredTools.includes(toolId);
}

function toggleRoadmapNode(roadmapId, nodeNumber) {
  const p = getProgress();
  if (!p.completedRoadmapNodes[roadmapId]) {
    p.completedRoadmapNodes[roadmapId] = [];
  }
  const idx = p.completedRoadmapNodes[roadmapId].indexOf(nodeNumber);
  if (idx === -1) {
    p.completedRoadmapNodes[roadmapId].push(nodeNumber);
  } else {
    p.completedRoadmapNodes[roadmapId].splice(idx, 1);
  }
  saveProgress(p);
  switchRoadmap(roadmapId);
}

function isRoadmapNodeCompleted(roadmapId, nodeNumber) {
  const p = getProgress();
  return Array.isArray(p.completedRoadmapNodes[roadmapId]) && p.completedRoadmapNodes[roadmapId].includes(nodeNumber);
}

function toggleLessonCompleted(lessonId) {
  const p = getProgress();
  const idx = p.completedLessons.indexOf(lessonId);
  if (idx === -1) {
    p.completedLessons.push(lessonId);
  } else {
    p.completedLessons.splice(idx, 1);
  }
  saveProgress(p);
  renderCourseContent();
}

function isLessonCompleted(lessonId) {
  return getProgress().completedLessons.includes(lessonId);
}

function recordQuizResult(toolId, score, total, passed) {
  const p = getProgress();
  p.quizResults[toolId] = {
    score,
    total,
    passed,
    completed: true,
    timestamp: new Date().toISOString()
  };
  saveProgress(p);
}

function getQuizResult(toolId) {
  return getProgress().quizResults[toolId] || null;
}

/**
 * Computes deterministic statistics across all modules.
 */
function getProgressSummary() {
  const p = getProgress();
  const totalTools = typeof tools !== 'undefined' ? tools.length : 12;
  const exploredToolsCount = p.exploredTools.length;

  let totalNodes = 0;
  let completedNodesCount = 0;
  if (typeof roadmapsData !== 'undefined') {
    Object.keys(roadmapsData).forEach(rid => {
      totalNodes += roadmapsData[rid].nodes.length;
      if (Array.isArray(p.completedRoadmapNodes[rid])) {
        completedNodesCount += p.completedRoadmapNodes[rid].length;
      }
    });
  }

  let totalLessons = 0;
  if (typeof coursesData !== 'undefined') {
    Object.keys(coursesData).forEach(cid => {
      totalLessons += coursesData[cid].lessons.length;
    });
  }
  const completedLessonsCount = p.completedLessons.length;

  const totalQuizzes = typeof toolActivities !== 'undefined' ? Object.keys(toolActivities).length : 8;
  const passedQuizzesCount = Object.values(p.quizResults).filter(q => q && q.passed).length;

  // Weighted overall calculation: Tools (20%), Roadmaps (40%), Lessons (30%), Quizzes (10%)
  const toolScore = totalTools > 0 ? (exploredToolsCount / totalTools) * 20 : 0;
  const roadmapScore = totalNodes > 0 ? (completedNodesCount / totalNodes) * 40 : 0;
  const lessonScore = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 30 : 0;
  const quizScore = totalQuizzes > 0 ? (passedQuizzesCount / totalQuizzes) * 10 : 0;
  const overallPercent = Math.min(100, Math.round(toolScore + roadmapScore + lessonScore + quizScore));

  return {
    totalTools,
    exploredToolsCount,
    totalNodes,
    completedNodesCount,
    totalLessons,
    completedLessonsCount,
    totalQuizzes,
    passedQuizzesCount,
    overallPercent
  };
}

/* ==========================================================================
   USER PROFILE MANAGER (Canonical key: hackpack_profile_v1)
   ========================================================================== */

function getProfile() {
  try {
    const raw = localStorage.getItem('hackpack_profile_v1');
    if (!raw) return getDefaultProfile();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return getDefaultProfile();
    return {
      version: 1,
      displayName: sanitizeText(parsed.displayName || "Cyber Practitioner", 40),
      roleTitle: sanitizeText(parsed.roleTitle || "Security Learner", 50),
      bio: sanitizeText(parsed.bio || "Cybersecurity enthusiast tracking defensive and offensive tracks on HackPack.", 240),
      joinedDate: parsed.joinedDate || "October 2026",
      updatedAt: parsed.updatedAt || null
    };
  } catch (err) {
    return getDefaultProfile();
  }
}

function getDefaultProfile() {
  return {
    version: 1,
    displayName: "Cyber Practitioner",
    roleTitle: "Security Learner",
    bio: "Cybersecurity enthusiast tracking defensive and offensive tracks on HackPack.",
    joinedDate: "October 2026",
    updatedAt: null
  };
}

function saveProfile(prof) {
  try {
    prof.updatedAt = new Date().toISOString();
    localStorage.setItem('hackpack_profile_v1', JSON.stringify(prof));
    renderProfile();
    showToast("Profile changes saved successfully!");
  } catch (err) {
    console.error('[HackPack] Failed to save profile:', err);
  }
}

function sanitizeText(str, maxLen) {
  if (typeof str !== 'string') return '';
  const trimmed = str.trim().slice(0, maxLen);
  const div = document.createElement('div');
  div.textContent = trimmed;
  return div.textContent;
}

/* ==========================================================================
   CENTRALIZED UI SYNCHRONIZATION
   ========================================================================== */

function updateAllProgressUI() {
  updateDashboardProgress();
  updateToolsExploredStat();
  renderToolsCategorySummary();

  const profilePage = document.getElementById('page-profile');
  if (profilePage && profilePage.classList.contains('active')) {
    renderProfile();
  }
}

/* ==========================================================================
   NAVIGATION CONTROLLER
   ========================================================================== */

function navigateTo(pageId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-page') === pageId);
  });

  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (navLinks) navLinks.classList.remove('open');
  if (hamburger) hamburger.classList.remove('active');

  // Trigger page-specific refreshes
  if (pageId === 'profile') {
    renderProfile();
  } else if (pageId === 'tools') {
    renderTools();
    updateToolsExploredStat();
  } else if (pageId === 'home') {
    updateDashboardProgress();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   ROADMAP RENDERER & INTERACTIVE COMPLETION
   ========================================================================== */

function switchRoadmap(roadmapId) {
  if (!roadmapsData[roadmapId]) return;
  currentRoadmapId = roadmapId;

  document.querySelectorAll('.roadmap-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-roadmap') === roadmapId);
  });

  const data = roadmapsData[roadmapId];
  const p = getProgress();
  const completedNodes = p.completedRoadmapNodes[roadmapId] || [];
  const totalNodes = data.nodes.length;
  const pct = Math.round((completedNodes.length / totalNodes) * 100);

  const headerEl = document.getElementById('roadmapHeader');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="roadmap-active-header-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ${data.badge}
      </div>
      <h3>${data.title}</h3>
      <p>${data.desc}</p>
      <div class="roadmap-progress-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        ${completedNodes.length} of ${totalNodes} Nodes Completed (${pct}%)
      </div>
    `;
  }

  const nodesContainer = document.getElementById('verticalRoadmapNodes');
  if (!nodesContainer) return;
  nodesContainer.innerHTML = '';

  data.nodes.forEach(node => {
    const isCompleted = isRoadmapNodeCompleted(roadmapId, node.number);
    const nodeCard = document.createElement('div');
    nodeCard.className = `vertical-node-card ${isCompleted ? 'completed' : ''}`;

    let topicsHTML = '';
    if (node.topics && node.topics.length > 0) {
      topicsHTML = `
        <div class="vertical-node-subheading">Core Topics to Cover</div>
        <div class="vertical-topics-grid">
          ${node.topics.map(topic => `
            <div class="vertical-topic-card">
              <div class="vertical-topic-card-title">${topic.category}</div>
              <ul>
                ${topic.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
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
          ${node.tools.map(tool => {
            const safeName = tool.replace(/'/g, "\\'");
            return `<button type="button" class="vertical-tool-chip" onclick="handleRoadmapToolClick('${safeName}')" title="Click to view ${tool} details">${tool}</button>`;
          }).join('')}
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
        <button class="node-complete-btn ${isCompleted ? 'completed' : ''}" onclick="toggleRoadmapNode('${roadmapId}', ${node.number})" title="Toggle node completion status">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          ${isCompleted ? 'Completed ✓' : 'Mark Complete'}
        </button>
      </div>
      <div class="vertical-node-overview">${node.overview}</div>
      ${topicsHTML}
      ${toolsHTML}
    `;

    nodesContainer.appendChild(nodeCard);
  });
}

/**
 * Handles clicking a roadmap tool chip.
 * If tool matches the 12 tools, opens modal. Otherwise provides informative fallback.
 */
function handleRoadmapToolClick(toolName) {
  if (!toolName) return;
  const key = toolName.toLowerCase().trim();
  const matchedToolId = toolNameToIdMap[key];

  if (matchedToolId && tools.some(t => t.id === matchedToolId)) {
    openToolModal(matchedToolId);
  } else {
    showToast(`<strong>${toolName}</strong> is a specialized utility covered in external resources and practical labs.`);
  }
}

/* ==========================================================================
   RESOURCES RENDERER & FILTERS
   ========================================================================== */

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

/* ==========================================================================
   COURSES PAGE RENDERER & LESSON COMPLETION
   ========================================================================== */

function renderCourseToolNav() {
  const nav = document.getElementById('courseToolNav');
  if (!nav) return;

  const toolIds = Object.keys(coursesData);
  nav.innerHTML = toolIds.map(id => {
    const c = coursesData[id];
    return `
      <button class="course-tool-btn ${id === currentCourseToolId ? 'active' : ''}" data-course-tool="${id}" onclick="selectCourseTool('${id}')">
        <span class="course-tool-icon">${c.icon}</span>
        <span class="course-tool-name">${c.name}</span>
        <span class="course-tool-level ${c.level.toLowerCase()}">${c.level}</span>
      </button>
    `;
  }).join('');
}

function selectCourseTool(toolId) {
  if (!coursesData[toolId]) return;
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

  const completedCount = course.lessons.filter(l => isLessonCompleted(l.id)).length;

  const lessonsHTML = course.lessons.map((lesson, idx) => {
    const isCompleted = isLessonCompleted(lesson.id);
    return `
      <div class="course-lesson-card ${isCompleted ? 'completed' : ''}" data-tool="${course.id}" data-lesson="${lesson.id}">
        <div class="course-video-placeholder" data-video-slot="${lesson.id}">
          <div class="course-video-play">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <span class="course-video-label">Video Placeholder</span>
          <span class="course-video-duration">${lesson.duration}</span>
        </div>
        <div class="course-lesson-body">
          <div class="course-lesson-meta">
            <span class="course-lesson-number">Lesson ${idx + 1}</span>
            <span class="course-lesson-duration">${lesson.duration}</span>
          </div>
          <h4 class="course-lesson-title">${lesson.title}</h4>
          <div class="course-lesson-actions">
            <button class="btn btn-secondary course-lesson-btn" onclick="playLessonPlaceholder('${lesson.id}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Lesson
            </button>
            <button class="course-lesson-complete-btn ${isCompleted ? 'completed' : ''}" onclick="toggleLessonCompleted('${lesson.id}')" title="Mark lesson completed">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              ${isCompleted ? 'Completed ✓' : 'Mark Complete'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="course-header-card">
      <div class="course-header-left">
        <div class="course-tool-icon-lg">${course.icon}</div>
        <div>
          <div class="course-header-meta">
            <span class="course-header-category">${course.category}</span>
            <span class="course-header-level ${course.level.toLowerCase()}">${course.level}</span>
            <span class="course-completed-badge">${completedCount} / ${course.lessons.length} Completed</span>
          </div>
          <h3 class="course-header-title">${course.name}</h3>
          <p class="course-header-desc">${course.description}</p>
          <div class="course-header-stats">
            <span><strong>${course.lessons.length}</strong> Lessons</span>
            <span><strong>${course.totalDuration}</strong> Total Duration</span>
            <span><strong>${course.instructor}</strong> Instructor</span>
          </div>
        </div>
      </div>
      <div class="course-header-actions">
        <button class="btn btn-primary" onclick="navigateTo('contact'); document.getElementById('cSubject').value='tool-training'; document.getElementById('cMessage').value='I want to subscribe to the ${course.name} course.';">
          Subscribe to Course
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>
    <div class="course-lessons-grid">
      ${lessonsHTML}
    </div>
    <div class="course-backend-note">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <p>Video placeholders are ready for backend integration. Each slot has <code>data-video-slot</code> attributes matching the course data.</p>
    </div>
  `;
}

function playLessonPlaceholder(lessonId) {
  const slot = document.querySelector(`[data-video-slot="${lessonId}"]`);
  if (slot) {
    slot.innerHTML = `
      <div class="course-video-backend-msg">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        <p>Video embed slot ready</p>
        <small>Backend team: inject iframe or video source here.</small>
      </div>
    `;
  }
}

/* ==========================================================================
   TOOLS DIRECTORY RENDERER & INTERACTIVE FILTER PILLS
   ========================================================================== */

function renderTools() {
  const grid = document.getElementById('toolsGrid');
  if (!grid) return;

  const searchInput = document.getElementById('toolSearchInput');
  const catFilter = document.getElementById('toolCategoryFilter');
  const levelFilter = document.getElementById('toolLevelFilter');

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const categoryTerm = catFilter ? catFilter.value : 'all';
  const levelTerm = levelFilter ? levelFilter.value : 'all';

  const filtered = tools.filter(t => {
    const matchesCategory = categoryTerm === 'all' || t.category === categoryTerm;
    const matchesLevel = levelTerm === 'all' || t.level === levelTerm;
    const matchesSearch = !searchTerm ||
      t.name.toLowerCase().includes(searchTerm) ||
      t.category.toLowerCase().includes(searchTerm) ||
      t.brief.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const totalCountEl = document.getElementById('totalToolsCount');
  const totalCatEl = document.getElementById('totalCategoriesCount');
  const trendingEl = document.getElementById('trendingToolsCount');
  const resultSummaryEl = document.getElementById('toolsResultSummary');

  if (totalCountEl) totalCountEl.textContent = tools.length;
  if (totalCatEl) totalCatEl.textContent = new Set(tools.map(t => t.category)).size;
  if (trendingEl) trendingEl.textContent = tools.filter(t => t.trending).length;
  if (resultSummaryEl) resultSummaryEl.textContent = `Showing ${filtered.length} of ${tools.length} tools`;

  updateToolsExploredStat();
  renderToolsCategorySummary();

  // Empty state handling
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="tools-no-results">
        <div class="tools-no-results-icon">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h3>No cybersecurity tools found</h3>
        <p>No tools matched your current search and difficulty filters.</p>
        <button class="btn btn-secondary" onclick="resetAllToolFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(t => {
    const explored = isToolExplored(t.id);
    return `
      <div class="tool-card" onclick="openToolModal('${t.id}')">
        <div class="tool-card-topline">
          <span class="tool-level ${t.level.toLowerCase()}">${t.level}</span>
          ${explored ? '<span class="tool-badge-explored">✓ Explored</span>' : ''}
          ${t.trending ? '<span class="tool-trending">Popular</span>' : ''}
        </div>
        <div class="enhanced-tool-title-row">
          <div class="tool-icon">${t.icon}</div>
          <div>
            <h3>${t.name}</h3>
            <p class="tool-cat">${t.category}</p>
          </div>
        </div>
        <p class="tool-brief">${t.brief}</p>
        <button class="view-btn" type="button">
          View Overview & Practice
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    `;
  }).join('');
}

function updateToolsExploredStat() {
  const statEl = document.getElementById('toolsExploredStat');
  if (statEl) {
    const p = getProgress();
    statEl.textContent = `${p.exploredTools.length} / ${tools.length} Explored`;
  }
}

/**
 * Renders quick category filter pills into #toolsCategorySummary.
 */
function renderToolsCategorySummary() {
  const container = document.getElementById('toolsCategorySummary');
  if (!container) return;

  const currentCat = document.getElementById('toolCategoryFilter') ? document.getElementById('toolCategoryFilter').value : 'all';
  const allCategories = ['all', ...Array.from(new Set(tools.map(t => t.category)))];

  container.innerHTML = allCategories.map(cat => {
    const label = cat === 'all' ? `All Domains (${tools.length})` : cat;
    const isActive = currentCat === cat;
    const safeCat = cat.replace(/'/g, "\\'");
    return `<button type="button" class="tool-category-chip ${isActive ? 'active' : ''}" onclick="setToolCategoryFilter('${safeCat}')">${label}</button>`;
  }).join('');
}

function setToolCategoryFilter(category) {
  const select = document.getElementById('toolCategoryFilter');
  if (select) {
    select.value = category;
    renderTools();
  }
}

function resetAllToolFilters() {
  const searchInput = document.getElementById('toolSearchInput');
  const catFilter = document.getElementById('toolCategoryFilter');
  const levelFilter = document.getElementById('toolLevelFilter');

  if (searchInput) searchInput.value = '';
  if (catFilter) catFilter.value = 'all';
  if (levelFilter) levelFilter.value = 'all';

  renderTools();
}

function populateToolCategoryFilter() {
  const select = document.getElementById('toolCategoryFilter');
  if (!select) return;

  // Clear existing options except 'all'
  select.innerHTML = '<option value="all">All categories</option>';
  const categories = Array.from(new Set(tools.map(t => t.category)));
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

/* ==========================================================================
   TOOL MODAL & INTERACTIVE SKILLS CHALLENGE
   ========================================================================== */

function openToolModal(toolId) {
  const tool = tools.find(t => t.id === toolId);
  if (!tool) return;

  currentModalToolId = toolId;
  activeModalTab = 'overview';
  currentActivityAnswers = {};

  // Record exploration immediately into progress manager
  markToolExplored(toolId);
  updateToolsExploredStat();

  // Set modal header & overview
  const titleEl = document.getElementById('modalTitle');
  const overviewEl = document.getElementById('modalOverview');
  const featureListEl = document.getElementById('modalFeatureList');

  if (titleEl) titleEl.textContent = tool.name;
  if (overviewEl) overviewEl.innerHTML = tool.overview;
  if (featureListEl) {
    featureListEl.innerHTML = tool.features.map(f => `<li>${f}</li>`).join('');
  }

  // Check activity status badge
  const badgeEl = document.getElementById('modalTabActivityBadge');
  const savedQuiz = getQuizResult(toolId);
  if (badgeEl) {
    if (savedQuiz && savedQuiz.passed) {
      badgeEl.textContent = `Passed (${savedQuiz.score}/${savedQuiz.total})`;
      badgeEl.style.color = 'var(--success)';
    } else {
      badgeEl.textContent = 'Challenge';
      badgeEl.style.color = '';
    }
  }

  // Reset tab to overview
  switchModalTab('overview');

  // Pre-render activity
  renderToolActivity(toolId);

  // Show modal
  const modal = document.getElementById('toolModal');
  if (modal) modal.classList.add('active');
}

function switchModalTab(tabName) {
  activeModalTab = tabName;

  const overviewBtn = document.getElementById('modalTabOverviewBtn');
  const activityBtn = document.getElementById('modalTabActivityBtn');
  const overviewTab = document.getElementById('modalTabOverview');
  const activityTab = document.getElementById('modalTabActivity');

  if (overviewBtn) overviewBtn.classList.toggle('active', tabName === 'overview');
  if (activityBtn) activityBtn.classList.toggle('active', tabName === 'activity');
  if (overviewTab) overviewTab.classList.toggle('active', tabName === 'overview');
  if (activityTab) activityTab.classList.toggle('active', tabName === 'activity');

  if (tabName === 'activity') {
    renderToolActivity(currentModalToolId);
  }
}

/**
 * Handles the "View Courses" button from within the Tool Detail Modal.
 * Fixes the bug: selects the correct course for the currently viewed tool!
 */
function handleModalViewCourses() {
  const targetId = currentModalToolId;
  closeModal();
  navigateTo('courses');
  if (targetId && coursesData[targetId]) {
    selectCourseTool(targetId);
  }
}

function closeModal() {
  const modal = document.getElementById('toolModal');
  if (modal) modal.classList.remove('active');
}

function enrollTraining() {
  closeModal();
  navigateTo('contact');
  const title = document.getElementById('modalTitle') ? document.getElementById('modalTitle').textContent : 'Tool';
  const sub = document.getElementById('cSubject');
  const msg = document.getElementById('cMessage');
  if (sub) sub.value = 'tool-training';
  if (msg) msg.value = `I want to enroll in ${title} tool training.`;
}

/**
 * Sets up backdrop-click and Escape key listeners for the tool modal.
 */
function setupModalDismissListeners() {
  const overlay = document.getElementById('toolModal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      // Dismiss only if clicked on the overlay itself, not inside the modal content box
      if (e.target === overlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('toolModal');
      if (modal && modal.classList.contains('active')) {
        closeModal();
      }
    }
  });
}

/**
 * Renders frontend-only educational interactive quizzes/scenarios for tools.
 */
function renderToolActivity(toolId) {
  const container = document.getElementById('toolActivityContainer');
  if (!container) return;

  const activity = toolActivities[toolId];
  if (!activity) {
    container.innerHTML = `
      <div class="tool-activity-card" style="text-align: center; padding: 36px 20px;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="color:var(--accent); margin-bottom:12px;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <h4 style="font-size:1.05rem; margin-bottom:6px;">Skill Challenge In Development</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary); max-width:420px; margin:0 auto 16px;">
          Interactive scenario questions for this tool are currently being curated. Test your skills on <strong>Nmap</strong>, <strong>Burp Suite</strong>, <strong>Wireshark</strong>, <strong>Splunk</strong>, or <strong>Metasploit</strong>!
        </p>
        <button class="btn btn-secondary" onclick="handleModalViewCourses()">Go to Video Course</button>
      </div>
    `;
    return;
  }

  const savedResult = getQuizResult(toolId);
  const questionsHTML = activity.questions.map((q, qIdx) => {
    const selectedOpt = currentActivityAnswers[q.id];
    const isAnswered = Boolean(selectedOpt);

    const optionsHTML = q.options.map((opt, optIdx) => {
      const letter = String.fromCharCode(65 + optIdx);
      let btnClass = 'activity-option-btn';
      if (isAnswered) {
        if (opt.correct) btnClass += ' correct';
        else if (selectedOpt === opt.id) btnClass += ' incorrect';
      } else if (selectedOpt === opt.id) {
        btnClass += ' selected';
      }

      return `
        <button type="button" class="${btnClass}" ${isAnswered ? 'disabled' : ''} onclick="selectActivityOption('${toolId}', '${q.id}', '${opt.id}')">
          <span class="activity-option-letter">${letter}</span>
          <span>${opt.text}</span>
        </button>
      `;
    }).join('');

    let feedbackHTML = '';
    if (isAnswered) {
      const isCorrect = q.options.some(o => o.id === selectedOpt && o.correct);
      feedbackHTML = `
        <div class="activity-feedback ${isCorrect ? 'correct' : 'incorrect'}">
          <strong>${isCorrect ? '✓ Correct!' : '✕ Incorrect.'}</strong> ${q.explanation}
        </div>
      `;
    }

    const codeBoxHTML = q.codeSnippet ? `<div class="activity-code-box">${q.codeSnippet}</div>` : '';

    return `
      <div class="tool-activity-card">
        <div class="activity-card-header">
          <span class="activity-type-badge">${q.badge || 'Challenge Question'}</span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">Question ${qIdx + 1} of ${activity.questions.length}</span>
        </div>
        <p class="activity-prompt">${q.prompt}</p>
        ${codeBoxHTML}
        <h4 class="activity-question">${q.question}</h4>
        <div class="activity-options">
          ${optionsHTML}
        </div>
        ${feedbackHTML}
      </div>
    `;
  }).join('');

  // Check if all answered
  const allAnswered = activity.questions.every(q => currentActivityAnswers[q.id]);
  let summaryBannerHTML = '';

  if (allAnswered) {
    let score = 0;
    activity.questions.forEach(q => {
      const sel = currentActivityAnswers[q.id];
      if (q.options.some(o => o.id === sel && o.correct)) {
        score++;
      }
    });
    const passed = score >= activity.passingScore;

    summaryBannerHTML = `
      <div class="activity-summary-banner" style="border-left: 4px solid ${passed ? 'var(--success)' : '#ef7777'};">
        <div>
          <div class="activity-summary-score" style="color: ${passed ? 'var(--success)' : '#ef7777'};">
            ${passed ? '✓ Challenge Passed!' : '✕ Challenge Not Passed'} (Score: ${score} / ${activity.questions.length})
          </div>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">
            ${passed ? 'Great job! Your achievement and progress have been recorded.' : `Pass mark is ${activity.passingScore} correct answers. Review the feedback and try again!`}
          </p>
        </div>
        <button type="button" class="activity-retry-btn" onclick="retryToolActivity('${toolId}')">Retry Challenge</button>
      </div>
    `;
  } else if (savedResult && Object.keys(currentActivityAnswers).length === 0) {
    summaryBannerHTML = `
      <div class="activity-summary-banner" style="margin-bottom:16px; border-left: 4px solid var(--accent);">
        <div>
          <div class="activity-summary-score" style="color:var(--accent);">
            Previous Best: ${savedResult.score} / ${savedResult.total} (${savedResult.passed ? 'Passed' : 'Needs Practice'})
          </div>
          <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">
            Recorded on ${new Date(savedResult.timestamp).toLocaleDateString()}. You can test your skills again below.
          </p>
        </div>
        <button type="button" class="activity-retry-btn" onclick="retryToolActivity('${toolId}')">Reset Test</button>
      </div>
    `;
  }

  container.innerHTML = `
    <div style="margin-bottom:16px;">
      <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:4px;">${activity.title}</h3>
      <p style="font-size:0.85rem; color:var(--text-secondary);">${activity.description}</p>
    </div>
    ${summaryBannerHTML}
    ${questionsHTML}
  `;
}

function selectActivityOption(toolId, questionId, optionId) {
  if (currentActivityAnswers[questionId]) return; // Already answered
  currentActivityAnswers[questionId] = optionId;

  const activity = toolActivities[toolId];
  if (activity) {
    const allAnswered = activity.questions.every(q => currentActivityAnswers[q.id]);
    if (allAnswered) {
      let score = 0;
      activity.questions.forEach(q => {
        const sel = currentActivityAnswers[q.id];
        if (q.options.some(o => o.id === sel && o.correct)) {
          score++;
        }
      });
      const passed = score >= activity.passingScore;
      recordQuizResult(toolId, score, activity.questions.length, passed);
    }
  }

  renderToolActivity(toolId);
}

function retryToolActivity(toolId) {
  currentActivityAnswers = {};
  renderToolActivity(toolId);
}

/* ==========================================================================
   PROFILE VIEW CONTROLLER & ACHIEVEMENTS ENGINE
   ========================================================================== */

function renderProfile() {
  const prof = getProfile();
  const summary = getProgressSummary();
  const p = getProgress();

  // Populate Header Bio Card
  const nameEl = document.getElementById('profileDisplayName');
  const roleEl = document.getElementById('profileRoleBadge');
  const bioEl = document.getElementById('profileBioText');
  const joinedEl = document.getElementById('profileJoinedDate');

  if (nameEl) nameEl.textContent = prof.displayName;
  if (roleEl) roleEl.textContent = prof.roleTitle;
  if (bioEl) bioEl.textContent = prof.bio;
  if (joinedEl) joinedEl.textContent = `Joined: ${prof.joinedDate}`;

  // Populate Overall Progress Metrics
  const pctEl = document.getElementById('profileOverallPct');
  const barEl = document.getElementById('profileOverallBar');
  const toolsEl = document.getElementById('profileToolsMetric');
  const nodesEl = document.getElementById('profileNodesMetric');
  const lessonsEl = document.getElementById('profileLessonsMetric');
  const quizzesEl = document.getElementById('profileQuizzesMetric');

  if (pctEl) pctEl.textContent = `${summary.overallPercent}%`;
  if (barEl) barEl.style.width = `${summary.overallPercent}%`;
  if (toolsEl) toolsEl.textContent = `${summary.exploredToolsCount} / ${summary.totalTools}`;
  if (nodesEl) nodesEl.textContent = `${summary.completedNodesCount} / ${summary.totalNodes}`;
  if (lessonsEl) lessonsEl.textContent = `${summary.completedLessonsCount} / ${summary.totalLessons}`;
  if (quizzesEl) quizzesEl.textContent = `${summary.passedQuizzesCount} / ${summary.totalQuizzes}`;

  // Render Roadmaps Breakdown
  const roadmapsGrid = document.getElementById('profileRoadmapsGrid');
  if (roadmapsGrid && typeof roadmapsData !== 'undefined') {
    roadmapsGrid.innerHTML = Object.keys(roadmapsData).map(rid => {
      const rm = roadmapsData[rid];
      const completed = (p.completedRoadmapNodes[rid] || []).length;
      const total = rm.nodes.length;
      const pct = Math.round((completed / total) * 100);
      return `
        <div class="profile-roadmap-card" onclick="navigateTo('roadmap'); switchRoadmap('${rid}')">
          <div class="profile-roadmap-top">
            <span class="profile-roadmap-name">${rm.title}</span>
            <span class="profile-roadmap-fraction">${completed}/${total} Nodes (${pct}%)</span>
          </div>
          <div class="profile-mini-bar-bg">
            <div class="profile-mini-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Courses Breakdown
  const coursesGrid = document.getElementById('profileCoursesGrid');
  if (coursesGrid && typeof coursesData !== 'undefined') {
    coursesGrid.innerHTML = Object.keys(coursesData).map(cid => {
      const crs = coursesData[cid];
      const completed = crs.lessons.filter(l => isLessonCompleted(l.id)).length;
      const total = crs.lessons.length;
      return `
        <div class="profile-course-card" onclick="navigateTo('courses'); selectCourseTool('${cid}')">
          <div class="profile-course-icon">${crs.icon}</div>
          <div class="profile-course-details">
            <div class="profile-course-title">${crs.name}</div>
            <div class="profile-course-stat">${completed} of ${total} Lessons Completed</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Achievements
  renderAchievements(summary, p);
}

function renderAchievements(summary, p) {
  const grid = document.getElementById('profileAchievementsGrid');
  const countEl = document.getElementById('profileAchievementsCount');
  if (!grid) return;

  const basicsCompletedCount = (p.completedRoadmapNodes['basics'] || []).length;

  const achievementsList = [
    {
      id: "ach-1",
      title: "First Recon",
      desc: "Explore your first security tool in the directory.",
      icon: "🔍",
      unlocked: summary.exploredToolsCount >= 1
    },
    {
      id: "ach-2",
      title: "Arsenal Explorer",
      desc: "Explore at least 6 cybersecurity tools.",
      icon: "🛠️",
      unlocked: summary.exploredToolsCount >= 6
    },
    {
      id: "ach-3",
      title: "Master of Tools",
      desc: "Explore all 12 cybersecurity tools in HackPack.",
      icon: "⚡",
      unlocked: summary.exploredToolsCount >= 12
    },
    {
      id: "ach-4",
      title: "Pathfinder",
      desc: "Complete your first career roadmap learning node.",
      icon: "🗺️",
      unlocked: summary.completedNodesCount >= 1
    },
    {
      id: "ach-5",
      title: "Foundations Master",
      desc: "Complete all 5 nodes of Cybersecurity Basics.",
      icon: "🛡️",
      unlocked: basicsCompletedCount >= 5
    },
    {
      id: "ach-6",
      title: "Lesson Scholar",
      desc: "Complete at least 5 tool course lessons.",
      icon: "🎓",
      unlocked: summary.completedLessonsCount >= 5
    },
    {
      id: "ach-7",
      title: "Skill Validated",
      desc: "Pass your first interactive skills challenge.",
      icon: "🧠",
      unlocked: summary.passedQuizzesCount >= 1
    },
    {
      id: "ach-8",
      title: "Cyber Defender",
      desc: "Pass at least 3 interactive tool skill challenges.",
      icon: "🏆",
      unlocked: summary.passedQuizzesCount >= 3
    }
  ];

  const unlockedCount = achievementsList.filter(a => a.unlocked).length;
  if (countEl) countEl.textContent = `${unlockedCount} of ${achievementsList.length} Unlocked`;

  grid.innerHTML = achievementsList.map(a => `
    <div class="achievement-card ${a.unlocked ? 'unlocked' : 'locked'}">
      <div class="achievement-icon">${a.icon}</div>
      <div class="achievement-body">
        <h4>${a.title}</h4>
        <p>${a.desc}</p>
        <span class="achievement-status-tag">${a.unlocked ? '✓ Unlocked' : 'Locked'}</span>
      </div>
    </div>
  `).join('');
}

function toggleProfileEdit(show) {
  const form = document.getElementById('profileEditForm');
  if (!form) return;

  const isVisible = form.style.display !== 'none';
  const shouldShow = typeof show === 'boolean' ? show : !isVisible;

  form.style.display = shouldShow ? 'flex' : 'none';

  if (shouldShow) {
    const prof = getProfile();
    const nameIn = document.getElementById('profileInputName');
    const roleIn = document.getElementById('profileInputRole');
    const bioIn = document.getElementById('profileInputBio');

    if (nameIn) nameIn.value = prof.displayName;
    if (roleIn) roleIn.value = prof.roleTitle;
    if (bioIn) bioIn.value = prof.bio;
  }
}

function handleProfileSave(e) {
  e.preventDefault();
  const nameIn = document.getElementById('profileInputName');
  const roleIn = document.getElementById('profileInputRole');
  const bioIn = document.getElementById('profileInputBio');

  const displayName = nameIn ? nameIn.value.trim() : 'Cyber Practitioner';
  const roleTitle = roleIn ? roleIn.value.trim() : 'Security Learner';
  const bio = bioIn ? bioIn.value.trim() : '';

  if (!displayName) {
    alert('Please enter a display name.');
    return;
  }

  const prof = getProfile();
  prof.displayName = sanitizeText(displayName, 40);
  prof.roleTitle = sanitizeText(roleTitle || "Security Learner", 50);
  prof.bio = sanitizeText(bio, 240);

  saveProfile(prof);
  toggleProfileEdit(false);
}

/* ==========================================================================
   DASHBOARD / HOME INTEGRATION
   ========================================================================== */

function updateDashboardProgress() {
  const summary = getProgressSummary();

  const sidebarPercent = document.getElementById('sidebarProgressPercent');
  const sidebarBar = document.getElementById('sidebarProgressBar');
  const sidebarStats = document.getElementById('sidebarProgressStats');
  const statProgress = document.getElementById('statLearnerProgressNum');

  if (sidebarPercent) sidebarPercent.textContent = `${summary.overallPercent}%`;
  if (sidebarBar) sidebarBar.style.width = `${summary.overallPercent}%`;
  if (sidebarStats) {
    sidebarStats.innerHTML = `<span>${summary.exploredToolsCount} Tools</span> • <span>${summary.completedLessonsCount} Lessons</span> • <span>${summary.completedNodesCount} Nodes</span>`;
  }
  if (statProgress) statProgress.textContent = `${summary.overallPercent}%`;
}

function resumeLearning() {
  navigateTo('roadmap');
  switchRoadmap(currentRoadmapId || 'basics');
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */

function showToast(message, duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'hackpack-toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent); flex-shrink:0; margin-top:2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
}

/* ==========================================================================
   CONTACT FORM CONTROLLER
   ========================================================================== */

function handleContact(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent successfully. We will get back to you within 24 hours.');
  document.getElementById('contactForm').reset();
}

/* ==========================================================================
   ASSISTANT BOT CONTROLLER
   ========================================================================== */

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
      addAssistantMessage('bot', "Hello! Welcome to HackPack. I can help you find learning resources, explore tool courses, test tools, or follow one of our vertical career roadmaps. What would you like to explore today?");
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
            addAssistantMessage('bot', 'Awesome! To start your journey, switch to our Main Cybersecurity Basics Vertical Roadmap. It covers OS fundamentals, networking, core security principles, and hands-on lab setup step-by-step.');
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
        } else if (action === 'tools') {
          addAssistantMessage('user', 'Explore security tools');
          setTimeout(() => {
            addAssistantMessage('bot', 'Explore our interactive Tools Directory to learn Nmap, Burp Suite, Metasploit, Wireshark, Splunk, and more. Taking you there now!');
            navigateTo('tools');
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
  } else if (q.includes('profile') || q.includes('progress') || q.includes('achievement')) {
    addAssistantMessage('bot', 'Your profile tracks all your explored tools, completed roadmap milestones, course lessons, and verified achievements! Taking you there now.');
    navigateTo('profile');
  } else {
    addAssistantMessage('bot', "I can guide you through our site! You can explore tool courses, curated learning resources, test tools in our directory, or follow one of our vertical career roadmaps.");
  }
}

/* ==========================================================================
   THEME TOGGLE CONTROLLER
   ========================================================================== */

function updateBrandLogo(theme) {
  const logo = document.getElementById('brandLogo');
  if (!logo) return;
  logo.src = theme === 'dark' ? 'assets/logo-dark-theme.png' : 'assets/logo-light-theme.png';
}

function setupThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const savedTheme = localStorage.getItem('hackpack_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  updateBrandLogo(savedTheme);

  btn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('hackpack_theme', newTheme);
    updateThemeIcon(newTheme);
    updateBrandLogo(newTheme);
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

/* ==========================================================================
   MOBILE NAVIGATION TOGGLE
   ========================================================================== */

function setupMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupMobileNav();

  // Initialize Vertical Roadmap
  switchRoadmap('basics');

  // Initialize Resources
  renderResources();
  const searchInput = document.getElementById('searchInput');
  const resourceLevelFilter = document.getElementById('resourceLevelFilter');
  if (searchInput) searchInput.addEventListener('input', renderResources);
  if (resourceLevelFilter) resourceLevelFilter.addEventListener('change', renderResources);

  // Initialize Courses
  renderCourseToolNav();
  renderCourseContent();

  // Initialize Tools Directory
  populateToolCategoryFilter();
  renderTools();
  const toolSearchInput = document.getElementById('toolSearchInput');
  const toolCategoryFilter = document.getElementById('toolCategoryFilter');
  const toolLevelFilter = document.getElementById('toolLevelFilter');
  const resetToolFilters = document.getElementById('resetToolFilters');

  if (toolSearchInput) toolSearchInput.addEventListener('input', renderTools);
  if (toolCategoryFilter) toolCategoryFilter.addEventListener('change', renderTools);
  if (toolLevelFilter) toolLevelFilter.addEventListener('change', renderTools);
  if (resetToolFilters) resetToolFilters.addEventListener('click', resetAllToolFilters);

  // Initialize Modal Dismiss Listeners
  setupModalDismissListeners();

  // Initialize Assistant
  setupAssistant();

  // Synchronize All Progress UI
  updateAllProgressUI();
});