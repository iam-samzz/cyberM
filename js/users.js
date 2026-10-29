// CyberM — Dummy user data store (merged project1 + project2)
// Persists users in localStorage so signups + progress survive reloads.

(function () {
  const STORAGE_KEY = "cyberm_users";

  const seedUsers = [
    {
      id: "u_1001",
      fullName: "Sarah Miller",
      email: "sarah@cyberm.io",
      password: "cyberm123",
      role: "Cybersecurity Student",
      joinedAt: "2025-11-04",
      avatarInitials: "SM",
      status: "active",
      country: "United States",
      bio: "Blue team enthusiast focused on SOC analysis and threat detection.",
      subscription: {
        active: true,
        plan: "Red + Blue Team Pro",
        status: "Active",
        startedAt: "2025-12-01",
        renewsAt: "2026-12-01",
        courses: ["nmap", "burp", "metasploit", "wireshark", "splunk"]
      },
      progress: {
        nmap: ["nmap-1", "nmap-2", "nmap-3"],
        burp: ["burp-1"],
        wireshark: ["wsh-1", "wsh-2", "wsh-3", "wsh-4"],
        splunk: [],
        metasploit: []
      },
      certificates: [],
      activity: [
        { at: "2026-02-18", note: "Completed lesson: Service Version & OS Detection" },
        { at: "2026-02-15", note: "Started Nmap Essentials" }
      ]
    },
    {
      id: "u_1002",
      fullName: "Alex Rivera",
      email: "alex@cyberm.io",
      password: "cyberm123",
      role: "Aspiring Analyst",
      joinedAt: "2026-01-12",
      avatarInitials: "AR",
      status: "active",
      country: "Portugal",
      bio: "Free-tier learner exploring offensive security fundamentals.",
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
    }
  ];

  function loadUsers() {
    let stored = [];
    try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { stored = []; }

    const map = new Map();
    seedUsers.forEach(u => map.set(u.email.toLowerCase(), JSON.parse(JSON.stringify(u))));
    stored.forEach(u => {
      const key = String(u.email || "").toLowerCase();
      const existing = map.get(key);
      map.set(key, existing ? { ...existing, ...u } : u);
    });
    return [...map.values()];
  }

  function saveUsers(users) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(users)); } catch { /* ignore */ }
  }

  window.CyberUsers = {
    seedUsers,
    loadUsers,
    saveUsers,
    findByEmail(email) {
      const target = String(email || "").toLowerCase();
      return loadUsers().find(u => String(u.email).toLowerCase() === target) || null;
    },
    findById(id) {
      return loadUsers().find(u => u.id === id) || null;
    },
    addUser(user) {
      const users = loadUsers();
      users.push(user);
      saveUsers(users);
      return user;
    },
    updateUser(email, patch) {
      const users = loadUsers();
      const target = String(email || "").toLowerCase();
      const idx = users.findIndex(u => String(u.email).toLowerCase() === target);
      if (idx === -1) return null;
      users[idx] = { ...users[idx], ...patch };
      saveUsers(users);
      return users[idx];
    }
  };
})();