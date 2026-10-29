// CyberM — Dummy authentication system (session-based, localStorage)

(function () {
  const SESSION_KEY = "cyberm_session";

  function readSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch { return null; }
  }
  function writeSession(session) {
    try { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); } catch { /* ignore */ }
  }
  function clearSession() {
    try { localStorage.removeItem(SESSION_KEY); } catch { /* ignore */ }
  }
  function publicUser(user) {
    if (!user) return null;
    const { password, ...safe } = user;
    return safe;
  }

  window.CyberAuth = {
    isLoggedIn() {
      return !!readSession();
    },

    getCurrentUser() {
      const session = readSession();
      if (!session) return null;
      return window.CyberUsers.findById(session.id) || null;
    },

    getCurrentUserPublic() {
      return publicUser(this.getCurrentUser());
    },

    login(email, password) {
      const user = window.CyberUsers.findByEmail(email);
      if (!user) return { ok: false, error: "No account found with that email." };
      if (user.password !== password) return { ok: false, error: "Incorrect password." };
      writeSession({ id: user.id, email: user.email, at: Date.now() });
      return { ok: true, user: publicUser(user) };
    },

    signup({ fullName, email, password }) {
      const exists = window.CyberUsers.findByEmail(email);
      if (exists) return { ok: false, error: "An account with that email already exists." };

      const user = {
        id: "u_" + Date.now(),
        fullName,
        email,
        password,
        role: "Cybersecurity Student",
        joinedAt: new Date().toISOString().slice(0, 10),
        avatarInitials: fullName
          .split(/\s+/)
          .map(p => p[0] || "")
          .join("")
          .slice(0, 2)
          .toUpperCase(),
        status: "active",
        country: "—",
        bio: "",
        subscription: {
          active: false,
          plan: "Free tier",
          status: "No active subscription",
          startedAt: null,
          renewsAt: null,
          courses: []
        },
        progress: {},
        certificates: [],
        activity: []
      };

      window.CyberUsers.addUser(user);
      writeSession({ id: user.id, email: user.email, at: Date.now() });
      return { ok: true, user: publicUser(user) };
    },

    logout() {
      clearSession();
    },

    isSubscribedTo(courseId) {
      const user = this.getCurrentUser();
      if (!user || !user.subscription) return false;
      return !!user.subscription.active && (user.subscription.courses || []).includes(courseId);
    },

    getProgress(courseId) {
      const user = this.getCurrentUser();
      if (!user || !user.progress) return new Set();
      return new Set(user.progress[courseId] || []);
    },

    saveProgress(courseId, lessonSet) {
      const user = this.getCurrentUser();
      if (!user) return;
      const progress = { ...(user.progress || {}) };
      progress[courseId] = [...lessonSet];
      window.CyberUsers.updateUser(user.email, { progress });
    },

    requireAuth() {
      if (!this.isLoggedIn()) {
        window.location.href = "login.html?next=dashboard.html";
        return false;
      }
      return true;
    }
  };
})();