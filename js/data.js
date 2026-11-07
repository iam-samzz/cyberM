//project2

/* ========== RESOURCES DATA (46 ITEMS) ========== */
const resources = [
  { type:"article", category:"web-security", level:"beginner", title:"OWASP Top 10", desc:"Understand the most important web application security risks and how developers can reduce them.", source:"OWASP", link:"https://owasp.org/Top10/", date:"Official guide", skill:"Web Security" },
  { type:"article", category:"fundamentals", level:"beginner", title:"NIST Cybersecurity Framework", desc:"Explore a structured approach to managing cybersecurity risk through Govern, Identify, Protect, Detect, Respond, and Recover.", source:"NIST", link:"https://www.nist.gov/cyberframework", date:"Official framework", skill:"Risk Management" },
  { type:"article", category:"frameworks", level:"intermediate", title:"MITRE ATT&CK Knowledge Base", desc:"Learn how adversary tactics, techniques, and procedures are organized for threat-informed defense.", source:"MITRE", link:"https://attack.mitre.org/", date:"Official knowledge base", skill:"Threat Intelligence" },
  { type:"article", category:"fundamentals", level:"beginner", title:"NIST NICE Learning Resources", desc:"Find curated cybersecurity learning and career-development resources across different skill levels.", source:"NIST NICE", link:"https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content", date:"Learning directory", skill:"Career Foundation" },
  { type:"video", category:"fundamentals", level:"beginner", title:"Cybersecurity Basics", desc:"Start with security concepts, common threats, safe practices, and the role of cybersecurity professionals.", source:"IBM", link:"https://www.youtube.com/results?search_query=IBM+cybersecurity+basics", date:"Video collection", skill:"Security Basics" },
  { type:"video", category:"fundamentals", level:"beginner", title:"Networking for Cybersecurity", desc:"Build knowledge of IP addresses, DNS, TCP/IP, ports, protocols, and network troubleshooting.", source:"NetworkChuck", link:"https://www.youtube.com/results?search_query=NetworkChuck+networking+for+cybersecurity", date:"Video collection", skill:"Networking" },
  { type:"video", category:"web-security", level:"beginner", title:"Web Security Learning Videos", desc:"Use guided video lessons to understand web requests, authentication, common vulnerabilities, and secure design.", source:"freeCodeCamp", link:"https://www.youtube.com/results?search_query=freeCodeCamp+web+security+course", date:"Video collection", skill:"Web Security" },
  { type:"article", category:"web-security", level:"intermediate", title:"PortSwigger Web Security Academy", desc:"Free interactive training on web vulnerabilities with explanations and practical labs.", source:"PortSwigger", link:"https://portswigger.net/web-security", date:"Interactive academy", skill:"Web Testing" },
  { type:"hands-on", category:"hands-on", level:"beginner", title:"TryHackMe Learning Paths", desc:"Follow guided, browser-based cybersecurity labs designed for beginners and progressing learners.", source:"TryHackMe", link:"https://tryhackme.com/", date:"Hands-on platform", skill:"Practical Learning" },
  { type:"hands-on", category:"hands-on", level:"beginner", title:"picoCTF Practice", desc:"Solve beginner-friendly security challenges covering cryptography, web exploitation, forensics, and more.", source:"picoCTF", link:"https://picoctf.org/", date:"Challenge platform", skill:"Problem Solving" },
  { type:"article", category:"defensive-security", level:"intermediate", title:"SANS Free Resources", desc:"Browse security posters, whitepapers, cheat sheets, and practical defensive security guidance.", source:"SANS Institute", link:"https://www.sans.org/free-resources/", date:"Resource library", skill:"Blue Team" },
  { type:"article", category:"defensive-security", level:"intermediate", title:"CISA Cybersecurity Guidance", desc:"Explore practical recommendations for securing systems, identifying threats, and improving resilience.", source:"CISA", link:"https://www.cisa.gov/stopransomware", date:"Official guidance", skill:"Defense" },
  { type:"blog", category:"news", level:"intermediate", title:"Krebs on Security", desc:"Follow investigative reporting and analysis about breaches, fraud, vulnerabilities, and cybercrime.", source:"KrebsOnSecurity", link:"https://krebsonsecurity.com/", date:"Ongoing updates", skill:"Security News" },
  { type:"blog", category:"news", level:"beginner", title:"The Hacker News", desc:"Stay updated with cybersecurity incidents, vulnerabilities, threat research, and industry developments.", source:"The Hacker News", link:"https://thehackernews.com/", date:"Ongoing updates", skill:"Security News" },
  { type:"blog", category:"news", level:"intermediate", title:"Dark Reading", desc:"Read enterprise security news, analysis, and practitioner-focused articles.", source:"Dark Reading", link:"https://www.darkreading.com/", date:"Ongoing updates", skill:"Industry Awareness" },
  { type:"blog", category:"news", level:"advanced", title:"Schneier on Security", desc:"Read long-form commentary and analysis on security, privacy, cryptography, and technology policy.", source:"Schneier", link:"https://www.schneier.com/", date:"Ongoing updates", skill:"Security Analysis" },
  { type:"article", category:"frameworks", level:"beginner", title:"OWASP Top 10 (2021)", desc:"A standard awareness document describing the most critical security risks to web applications.", source:"OWASP", link:"https://owasp.org/Top10/", date:"2021", skill:"Web Security" },
  { type:"article", category:"web-security", level:"intermediate", title:"OWASP Cheat Sheet Series Index", desc:"Practical security guidance covering authentication, authorization, cryptography, XSS, SQL injection and many other security topics.", source:"OWASP", link:"https://cheatsheetseries.owasp.org/Glossary.html", date:"Ongoing", skill:"Cheatsheets" },
  { type:"article", category:"frameworks", level:"intermediate", title:"MITRE ATT&CK Enterprise Matrix", desc:"A globally accessible knowledge base of adversary tactics and techniques based on real-world observations.", source:"MITRE", link:"https://attack.mitre.org/matrices/enterprise/", date:"Ongoing", skill:"Threat Intelligence" },
  { type:"article", category:"frameworks", level:"intermediate", title:"NIST Cybersecurity Framework (CSF) 2.0 Core", desc:"The direct PDF framework publication for managing cybersecurity risk and improving an organization's security posture.", source:"NIST", link:"https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf", date:"2024", skill:"Risk Management" },
  { type:"hands-on", category:"web-security", level:"beginner", title:"PortSwigger Web Security Academy All Materials", desc:"Free interactive training catalog covering web application vulnerabilities through lessons and hands-on labs.", source:"PortSwigger", link:"https://portswigger.net/web-security/all-materials", date:"Ongoing", skill:"Web Security" },
  { type:"hands-on", category:"hands-on", level:"beginner", title:"TryHackMe Hacktivities Path", desc:"Interactive cybersecurity learning paths offering guided rooms, exercises and practical security challenges.", source:"TryHackMe", link:"https://tryhackme.com/hacktivities", date:"Ongoing", skill:"Training" },
  { type:"hands-on", category:"hands-on", level:"beginner", title:"picoCTF Practice Gym", desc:"A free cybersecurity education platform built around Capture The Flag challenges, specifically the practice lab environment.", source:"picoCTF", link:"https://play.picoctf.org/practice", date:"Ongoing", skill:"CTF" },
  { type:"hands-on", category:"hands-on", level:"beginner", title:"OverTheWire Bandit Wargame", desc:"The absolute beginner wargame designed to teach basic Linux command line and security concepts.", source:"OverTheWire", link:"https://overthewire.org/wargames/bandit/", date:"Ongoing", skill:"Linux" },
  { type:"video", category:"web-security", level:"beginner", title:"Hacker101 Video Lessons", desc:"Direct access to free web security video education for learning application security and bug bounty hunting.", source:"HackerOne", link:"https://www.hacker101.com/videos", date:"Ongoing", skill:"Bug Bounty" },
  { type:"hands-on", category:"web-security", level:"intermediate", title:"OWASP Juice Shop GitHub Repository", desc:"The source code and direct download for an intentionally insecure web application designed for security training.", source:"OWASP", link:"https://github.com/juice-shop/juice-shop", date:"Ongoing", skill:"Labs" },
  { type:"article", category:"defensive-security", level:"intermediate", title:"SANS InfoSec Reading Room", desc:"Direct access to thousands of free cybersecurity research papers, whitepapers, and security guides.", source:"SANS Institute", link:"https://www.sans.org/white-papers/", date:"Ongoing", skill:"Documentation" },
  { type:"article", category:"defensive-security", level:"intermediate", title:"NIST National Vulnerability Database Search", desc:"Direct access to query the U.S. government repository of standardized information about publicly known vulnerabilities (CVEs).", source:"NIST", link:"https://nvd.nist.gov/vuln/search", date:"Ongoing", skill:"CVE Database" },
  { type:"article", category:"frameworks", level:"intermediate", title:"MITRE CWE List (Top 25)", desc:"The direct list of the Top 25 Most Dangerous Software Weaknesses published by MITRE.", source:"MITRE", link:"https://cwe.mitre.org/top25/archive/2023/2023_top25_list.html", date:"Ongoing", skill:"CWE" },
  { type:"article", category:"defensive-security", level:"intermediate", title:"CISA Known Exploited Vulnerabilities Catalog", desc:"Direct raw JSON data feed of vulnerabilities that have been exploited in the wild for automated parsing.", source:"CISA", link:"https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json", date:"Ongoing", skill:"Threat Intelligence" },
  { type:"blog", category:"news", level:"intermediate", title:"Microsoft Security Threat Intelligence", desc:"Deep-dive security research, threat actor profiles, and technical analysis from Microsoft.", source:"Microsoft", link:"https://www.microsoft.com/en-us/security/blog/threat-intelligence/", date:"Ongoing", skill:"Threat Intelligence" },
  { type:"blog", category:"news", level:"advanced", title:"Cisco Talos Vulnerability Information", desc:"Direct repository of zero-day vulnerabilities discovered by Talos, including Snort rules for mitigation.", source:"Cisco Talos", link:"https://talosintelligence.com/vulnerability_info", date:"Ongoing", skill:"Malware Research" },
  { type:"article", category:"defensive-security", level:"advanced", title:"Unit 42 Threat Assessment Reports", desc:"Direct access to technical threat assessments and incident response reports from Palo Alto Networks.", source:"Palo Alto Networks", link:"https://unit42.paloaltonetworks.com/threat-assessments/", date:"Ongoing", skill:"Threat Research" },
  { type:"article", category:"defensive-security", level:"advanced", title:"Google Project Zero Issue Tracker", desc:"The active, public issue tracker where Google's Project Zero logs newly discovered zero-day vulnerabilities.", source:"Google", link:"https://issues.chromium.org/issues?q=status:open%20componentid:1368538", date:"Ongoing", skill:"Zero-Day Research" },
  { type:"video", category:"fundamentals", level:"beginner", title:"Professor Messer Security+ (SY0-701) Course", desc:"Direct link to the full, free CompTIA Security+ video training course playlist.", source:"Professor Messer", link:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video-training-course/", date:"2023", skill:"CompTIA Security+" },
  { type:"article", category:"hands-on", level:"intermediate", title:"Metasploit Unleashed Course", desc:"A comprehensive, free ethical hacking course explicitly focused on using the Metasploit Framework.", source:"OffSec", link:"https://www.offsec.com/metasploit-unleashed/introduction/", date:"2011", skill:"Penetration Testing" },
  { type:"article", category:"fundamentals", level:"beginner", title:"Awesome Security GitHub List", desc:"A curated collection of awesome software, libraries, documents, books, and resources related to security.", source:"GitHub Community", link:"https://github.com/sbilly/awesome-security", date:"2014", skill:"Open Source List" },
  { type:"article", category:"web-security", level:"intermediate", title:"OWASP Web Security Testing Guide (WSTG)", desc:"Direct link to the latest stable release of the comprehensive guide for testing web application security.", source:"OWASP", link:"https://owasp.org/www-project-web-security-testing-guide/stable/", date:"Ongoing", skill:"Penetration Testing" },
  { type:"article", category:"frameworks", level:"intermediate", title:"OWASP API Security Top 10 (2023)", desc:"The direct standard document for security risks specifically focused on APIs.", source:"OWASP", link:"https://owasp.org/API-Security/editions/2023/en/0x11-t10/", date:"2023", skill:"API Security" },
  { type:"blog", category:"news", level:"beginner", title:"BleepingComputer Cybersecurity News", desc:"Direct feed to the cybersecurity news section covering ransomware, breaches, and vulnerabilities.", source:"BleepingComputer", link:"https://www.bleepingcomputer.com/news/security/", date:"Ongoing", skill:"Security News" },
  { type:"hands-on", category:"defensive-security", level:"intermediate", title:"CyberDefenders Blue Team Challenges", desc:"Direct access to the hands-on practice labs for blue team training, digital forensics, and incident response.", source:"CyberDefenders", link:"https://cyberdefenders.org/blueteam-ctf-challenges/", date:"Ongoing", skill:"Blue Team" },
  { type:"video", category:"defensive-security", level:"beginner", title:"Splunk Free Security Training", desc:"Direct catalog of free foundational e-learning courses provided by Splunk for SIEM and security monitoring.", source:"Splunk", link:"https://www.splunk.com/en_us/training/free-courses/overview.html", date:"Ongoing", skill:"SIEM & Monitoring" },
  { type:"hands-on", category:"hands-on", level:"intermediate", title:"Hack The Box Academy Catalogue", desc:"Direct access to the interactive learning modules for penetration testing, bug bounty, and defensive security.", source:"Hack The Box", link:"https://academy.hackthebox.com/catalogue", date:"2020", skill:"Offensive Security" },
  { type:"video", category:"fundamentals", level:"advanced", title:"Open Security Training Classes", desc:"Direct repository of open-source training materials for computer security, including slides and videos.", source:"Open Security Training", link:"https://opensecuritytraining.info/Training.html", date:"2011", skill:"Reverse Engineering" },
  { type:"blog", category:"news", level:"beginner", title:"KrebsOnSecurity Archives", desc:"Direct access to in-depth investigative reporting archives concerning major cybercrime and data breaches.", source:"KrebsOnSecurity", link:"https://krebsonsecurity.com/category/data-breaches/", date:"Ongoing", skill:"Cybercrime Analysis" },
  { type:"blog", category:"news", level:"intermediate", title:"Dark Reading: Vulnerabilities & Threats", desc:"Dedicated section of Dark Reading focused entirely on newly discovered vulnerabilities, exploits, and threat actors.", source:"Informa Tech", link:"https://www.darkreading.com/vulnerabilities-threats", date:"Ongoing", skill:"Threats & Exploits" }
];

/* ========== VERTICAL ROADMAPS DATA ========== */
const roadmapsData = {
  basics: {
    id: "basics",
    title: "Cybersecurity Basics (Foundations)",
    isMain: true,
    team: "foundation",
    badge: "Foundation Roadmap",
    desc: "Master the essential building blocks of computing, networks, operating system mechanics, and core defense principles before specializing in professional security domains.",
    nodes: [
      { number: 1, title: "Computer Mechanics & OS Fundamentals", overview: "Before defending or attacking systems, you must understand how operating systems execute processes, manage memory, manage access permissions, and store critical system data.", topics: [ { category: "Windows Internals", items: ["User Accounts & Privileges", "Process Management & Services", "Windows Registry & File System structure"] }, { category: "Linux Administration", items: ["CLI Navigation & File Permissions (chmod, chown)", "Process control (ps, top, kill)", "Package management & system logs"] } ], tools: ["Windows PowerShell", "Linux Terminal", "Command Prompt", "Bash"] },
      { number: 2, title: "Networking & Communication Protocols", overview: "Data flows across networks in structured packets. Understanding network architecture, IP schemes, and core traffic protocols is mandatory for all cybersecurity fields.", topics: [ { category: "Models & Addressing", items: ["OSI 7-Layer & TCP/IP 4-Layer Models", "IPv4 / IPv6 Addressing & Subnetting", "CIDR Notation & Local vs Public IPs"] }, { category: "Core Protocols & Ports", items: ["HTTP (80) / HTTPS (443) & Encryption", "DNS (53) & Domain Resolution", "DHCP (67/68), SSH (22), RDP (3389)"] } ], tools: ["ping", "traceroute", "netstat", "nslookup", "ipconfig / ifconfig"] },
      { number: 3, title: "Core Security Principles & Threats", overview: "Learn the foundational frameworks, attack techniques, and defense strategies used across defensive, offensive, and administrative security roles.", topics: [ { category: "Defense Concepts", items: ["The CIA Triad (Confidentiality, Integrity, Availability)", "Authentication vs Authorization (MFA, RBAC)", "Defense in Depth & Zero Trust Principles"] }, { category: "Threat Landscape", items: ["Malware Types (Viruses, Trojans, Ransomware, Keyloggers)", "Common Vectors (Phishing, Social Engineering, Brute Force)"] } ], tools: ["VirusTotal", "CyberChef", "Hashcalc", "Firewalls"] },
      { number: 4, title: "Hands-on Lab Environment & Packet Analysis", overview: "Set up isolated hypervisors and learn to inspect raw network packets in real-time to analyze standard and suspicious traffic.", topics: [ { category: "Virtualization & Setup", items: ["Setting up isolated VMs (VirtualBox / VMware)", "Deploying Linux distributions (Kali / Ubuntu)", "Basic command-line scripting for log automation"] }, { category: "Traffic Analysis", items: ["Capturing local interface traffic", "Inspecting TCP/UDP headers & payloads", "Following cleartext protocol streams"] } ], tools: ["Wireshark", "VirtualBox", "VMware Workstation", "Nmap"] },
      { number: 5, title: "Specialization & Career Path Selection", overview: "With core fundamentals locked in, select your preferred career specialization (Defensive, Offensive, Cloud, Forensics, or GRC) and work towards target industry certifications.", topics: [ { category: "Career Alignment", items: ["Defensive (SOC Analyst / Incident Response)", "Offensive (Penetration Testing / Red Team)", "Cloud, Forensics & GRC Specializations"] }, { category: "Certifications & Practice", items: ["CompTIA Security+ / Network+", "Practical lab platforms (TryHackMe, picoCTF)", "Building a technical project portfolio"] } ], tools: ["TryHackMe", "picoCTF", "Hack The Box Academy"] }
    ]
  },
  soc: {
    id: "soc",
    title: "SOC Analyst (Defensive Security / Blue Team)",
    isMain: false,
    team: "blue",
    badge: "Blue Team Track",
    desc: "SOC (Security Operations Center) Analysts monitor network traffic, investigate suspicious activity, and stop cyber attacks in real time.",
    nodes: [
      { number: 1, title: "Computer & Networking Basics", overview: "Before protecting a system, you must understand how computers operate and communicate. This node establishes the core foundation of networking protocols, operating system mechanics, and basic scripting.", topics: [ { category: "Networking Fundamentals", items: ["The OSI & TCP/IP Models", "IP Addressing & Subnetting (IPv4/v6, CIDR)"] }, { category: "Core Protocols & Ports", items: ["HTTP (Port 80) / HTTPS (Port 443)", "DNS (Port 53), DHCP (Ports 67/68)", "SSH (Port 22) & RDP (Port 3389)"] }, { category: "Operating Systems & Scripting", items: ["Windows Internals (Registry, Services, Event Logs)", "Linux Admin (chmod, chown, ps, top, kill)", "Troubleshooting CLI (ping, traceroute, netstat, nslookup)"] } ], tools: ["Wireshark", "Windows Command Prompt", "PowerShell", "Linux Terminal"] },
      { number: 2, title: "Security Fundamentals", overview: "This node covers how attackers attempt to break systems and the core concepts and controls used to defend against them.", topics: [ { category: "The Threat Landscape", items: ["Malware Types (Viruses, Trojans, Worms, Ransomware, Keyloggers, Rootkits, Spyware)", "Common Attack Vectors (Phishing, Social Engineering, Drive-by, Brute-force, Credential Stuffing)"] }, { category: "Core Defense Concepts", items: ["The CIA Triad", "Authentication & Authorization (MFA, Passwords, RBAC)", "Defense in Depth & Layered Controls"] }, { category: "Network & Endpoint Defense", items: ["Firewalls (Stateful vs Stateless)", "IDS/IPS Systems (Signature-based vs Anomaly-based)", "Cryptography Basics & Hashing (MD5, SHA-256)"] } ], tools: ["Snort", "Suricata", "VirusTotal"] },
      { number: 3, title: "Log Analysis & SIEM Tools", overview: "Security Analysts use Security Information and Event Management (SIEM) tools to collect, correlate, and analyze millions of logs across an entire company from a single dashboard.", topics: [ { category: "Log Sources & Event Types", items: ["Windows Event Logs (ID 4625 Failed Login, ID 4624 Success Login, ID 4672 Admin Privs, ID 7045 New Service)", "Linux Syslog (/var/log/auth.log, /var/log/syslog)", "Firewall & Network Logs"] }, { category: "SIEM Operations & Querying", items: ["Ingesting and parsing logs into structured data fields", "Writing search queries across datasets", "Building correlation rules and alerts"] }, { category: "Packet Analysis", items: ["Reading .pcap files", "Following TCP streams", "Identifying cleartext leaks & suspicious transfers"] } ], tools: ["Splunk", "Microsoft Sentinel", "Wireshark"] },
      { number: 4, title: "Incident Response & Threat Hunting", overview: "When a SIEM triggers an alert or a breach occurs, the analyst must contain the threat, eradicate it, and hunt for hidden compromises.", topics: [ { category: "Incident Response Lifecycle", items: ["Preparation", "Detection & Analysis", "Containment", "Eradication", "Recovery", "Lessons Learned (NIST / SANS Frameworks)"] }, { category: "Threat Frameworks & Hunting", items: ["MITRE ATT&CK Framework (Tactics, Techniques, and Procedures)", "Proactive Threat Hunting for IoCs"] }, { category: "Ticketing & Documentation", items: ["Writing technical escalation notes", "Documenting timeline steps during active incidents"] } ], tools: ["TheHive", "Request Tracker", "CrowdStrike", "Defender for Endpoint"] }
    ]
  },
  pentest: {
    id: "pentest",
    title: "Penetration Tester (Offensive Security / Red Team)",
    isMain: false,
    team: "red",
    badge: "Red Team Track",
    desc: "Penetration Testers ethically hack networks, web applications, and infrastructure to uncover vulnerabilities before attackers exploit them.",
    nodes: [
      { number: 1, title: "Systems & Scripting", overview: "Offensive security professionals must understand target systems deeply to bypass security controls and automate custom exploits.", topics: [ { category: "Advanced OS Administration", items: ["Linux Deep Dive (Processes, cron jobs, custom services)", "Windows Active Directory Basics (Domain Controllers, LDAP, Kerberos)"] }, { category: "Programming for Pentesting", items: ["Python (Port scanners, web scrapers, automated HTTP requests, exploit payloads)", "Bash & PowerShell scripting for enumeration"] }, { category: "Web Architecture Fundamentals", items: ["HTTP Request Methods (GET, POST, PUT, DELETE)", "Headers, Cookies, Session Tokens, CORS"] } ], tools: ["Python", "Kali Linux", "Parrot OS", "PowerShell"] },
      { number: 2, title: "Reconnaissance & Scanning", overview: "Reconnaissance is the phase where testers collect intelligence about a target's infrastructure and identify exposed attack surfaces.", topics: [ { category: "Passive Reconnaissance (OSINT)", items: ["Subdomains, leaked credentials, employee emails, tech stacks", "Google Dorks, Shodan, Censys, GitHub", "DNS Records enumeration (A, CNAME, MX, TXT, NS)"] }, { category: "Active Reconnaissance & Scanning", items: ["Port scanning mechanics (TCP SYN, UDP, ACK scans)", "Service version detection & OS fingerprinting", "Firewall rule bypass via packet fragmentation"] }, { category: "Vulnerability Scanning", items: ["Mapping open services against known CVE databases"] } ], tools: ["Nmap", "Masscan", "Amass", "Sublist3r", "Nessus", "OpenVAS"] },
      { number: 3, title: "Exploitation & Web Security", overview: "This node covers safely executing exploits against identified vulnerabilities in web applications and network services.", topics: [ { category: "Web Application Vulnerabilities (OWASP Top 10)", items: ["SQL Injection (SQLi)", "Cross-Site Scripting (XSS - Stored, Reflected, DOM)", "Broken Access Control & IDOR", "Server-Side Request Forgery (SSRF)"] }, { category: "Network & System Exploitation", items: ["Matching software versions to public exploits (Exploit-DB)", "Password attacks (Dictionary, Brute-force, Hash cracking, Password Spraying)", "Buffer Overflows (Conceptual & Memory Execution)"] } ], tools: ["Burp Suite", "OWASP ZAP", "Metasploit Framework", "Hashcat", "John the Ripper"] },
      { number: 4, title: "Post-Exploitation & Reporting", overview: "Gaining initial access is only the first step. Post-exploitation involves expanding control across the target environment and delivering a comprehensive vulnerability report to the client.", topics: [ { category: "Privilege Escalation", items: ["Linux (Sudo rights, SUID binaries, kernel exploits)", "Windows (SYSTEM escalation, unquoted service paths, token manipulation)"] }, { category: "Lateral Movement & Persistence", items: ["Moving across AD domains (Pass-the-Hash, PsExec, WinRM)", "Persistent access backdoors (scheduled tasks, custom services, SSH keys)"] }, { category: "Professional Reporting", items: ["CVSS scoring (Impact vs Likelihood)", "Executive Summaries & Step-by-Step Remediation Guides"] } ], tools: ["BloodHound", "Mimikatz", "LinPEAS", "WinPEAS"] }
    ]
  },
  cloud: {
    id: "cloud",
    title: "Cloud Security Engineer",
    isMain: false,
    team: "blue",
    badge: "Cloud Track",
    desc: "Cloud Security Engineers build, secure, and monitor cloud platforms like AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
    nodes: [
      { number: 1, title: "Cloud Architecture Basics", overview: "Before securing cloud infrastructure, you must understand virtualized environments and cloud-native architecture service models.", topics: [ { category: "Cloud Service Models", items: ["IaaS (Infrastructure as a Service - AWS EC2, Azure VMs)", "PaaS (Platform as a Service - Elastic Beanstalk)", "SaaS (Software as a Service - M365, Google Workspace)"] }, { category: "Shared Responsibility & Networking", items: ["Provider responsibilities vs Customer responsibilities", "Virtual Private Clouds (VPC / VNet), Subnets (Public/Private)", "Internet Gateways, NAT Gateways, Security Groups & Network ACLs"] } ], tools: ["AWS Management Console", "Azure Portal", "Google Cloud Console", "AWS CLI", "Azure CLI"] },
      { number: 2, title: "Cloud Access & Identity (IAM)", overview: "Identity is the security perimeter in the cloud. This node covers controlling user permissions, access tokens, and encryption keys.", topics: [ { category: "Identity and Access Management (IAM)", items: ["Users, Groups, Roles, Policies", "Principle of Least Privilege & Assume-Role permissions", "Multi-Factor Authentication (MFA) & Conditional Access"] }, { category: "Secrets & Data Security", items: ["Securing API keys and database connection strings", "Key Management Service (KMS) & Envelope encryption", "Securing Storage Buckets (S3 / Blob) & Rest/Transit encryption"] } ], tools: ["AWS IAM", "Microsoft Entra ID", "AWS KMS", "HashiCorp Vault"] },
      { number: 3, title: "Infrastructure as Code & DevSecOps", overview: "Modern cloud systems are provisioned automatically via code. Security engineers integrate security scans directly into developer deployment pipelines.", topics: [ { category: "IaC Security", items: ["Terraform & CloudFormation template scanning", "Detecting public buckets and unencrypted DBs before deployment"] }, { category: "DevSecOps & Containers", items: ["CI/CD Pipeline Integration (SAST, Secret Detection in GitHub Actions / GitLab)", "Docker security & minimal base images", "Kubernetes security (Network policies, Pod standards, RBAC)"] } ], tools: ["Terraform", "Checkov", "Tfsec", "Trivy", "Grype", "GitGuardian", "TruffleHog"] },
      { number: 4, title: "Cloud Monitoring & Defense", overview: "Continuous visibility is required to detect cloud misconfigurations, unauthorized administrative access, and policy violations across dynamic cloud accounts.", topics: [ { category: "Cloud Telemetry & Audit Logging", items: ["Enabling central logging across multi-region accounts (CloudTrail, VPC Flow Logs, GuardDuty)"] }, { category: "CSPM & Automated Incident Response", items: ["Cloud Security Posture Management (CIS Benchmarks)", "Automated isolation of compromised instances & IAM key revocation via Lambda"] } ], tools: ["AWS CloudTrail", "AWS GuardDuty", "Microsoft Defender for Cloud", "Prowler", "Scout Suite"] }
    ]
  },
  dfir: {
    id: "dfir",
    title: "Digital Forensics & Incident Response (DFIR)",
    isMain: false,
    team: "blue",
    badge: "Forensics Track",
    desc: "DFIR specialists act as cyber crime scene investigators, analyzing digital evidence to determine how breaches occurred and what data was taken.",
    nodes: [
      { number: 1, title: "OS Artifacts & Memory Basics", overview: "Operating systems track almost all user and system activities. This node focuses on knowing where these forensic traces are located.", topics: [ { category: "Windows Forensic Artifacts", items: ["Registry Hives (NTUSER.DAT, SYSTEM, SOFTWARE)", "Execution Evidence (Prefetch, Shimcache, Amcache, UserAssist)", "File Access Evidence (Shellbags, Jump Lists, LNK files)"] }, { category: "Linux, macOS & Volatile Memory", items: ["Shell history (.bash_history), system logs (/var/log/), launch daemons", "RAM concepts (passwords, injected code, active network sockets) vs disk storage"] } ], tools: ["Registry Explorer", "KAPE", "FTK Imager"] },
      { number: 2, title: "Evidence Collection & Disk Forensics", overview: "Forensic evidence must be acquired cleanly without modifying the original source so it holds up in legal proceedings or executive inquiries.", topics: [ { category: "Forensic Soundness & Chain of Custody", items: ["Evidence handling documentation & Hardware Write Blockers", "Cryptographic hash verification (SHA-256) pre and post acquisition"] }, { category: "Disk Imaging & Timeline Creation", items: ["Bit-by-bit physical disk imaging (.E01, .raw, .dd)", "File system parsing (NTFS $MFT, FAT32, EXT4)", "Data Carving deleted files & MACB master timeline sorting"] } ], tools: ["FTK Imager", "X-Ways Forensics", "Autopsy", "EnCase", "Plaso / log2timeline"] },
      { number: 3, title: "Network & Memory Analysis", overview: "Attackers often reside strictly in volatile memory or communicate across networks without leaving obvious files on the hard drive.", topics: [ { category: "Memory Forensics (RAM Analysis)", items: ["Acquiring live RAM captures", "Parsing dumps for unlinked processes, injected DLLs, unpacked malware, and active sockets"] }, { category: "Network Forensics", items: ["Reconstructing transferred files & browsing sessions from .pcap captures", "Extracting DNS request patterns to uncover C2 channels"] } ], tools: ["Volatility 3", "Wireshark", "NetworkMiner", "Zeek"] },
      { number: 4, title: "Malware Analysis", overview: "Analyzing malicious software to determine its purpose, command-and-control addresses, and technical capabilities.", topics: [ { category: "Static Malware Analysis", items: ["File signatures, PE headers, imported DLL functions, embedded strings", "File hash verification against threat databases"] }, { category: "Dynamic Analysis & Reverse Engineering", items: ["Executing malware safely inside instrumented Sandbox environments", "Monitoring file, registry, process, and network callbacks in real-time", "Basic Disassembly & x86/x64 assembly constructs"] } ], tools: ["pestudio", "Process Hacker", "ProcMon", "ANY.RUN", "Cuckoo Sandbox", "Ghidra", "IDA Free"] }
    ]
  },
  grc: {
    id: "grc",
    title: "Governance, Risk & Compliance (GRC) Analyst",
    isMain: false,
    team: "blue",
    badge: "Governance & Risk Track",
    desc: "GRC Analysts manage business risk, write security policies, and ensure companies adhere to legal standards and industry compliance frameworks.",
    nodes: [
      { number: 1, title: "Security Principles & Policies", overview: "GRC links cybersecurity technical controls directly to business operations, legal obligations, and executive governance.", topics: [ { category: "Asset Management & Classification", items: ["Categorizing company assets by criticality (Critical, Major, Minor)", "Data Classification Labels (Public, Internal, Confidential, Restricted)"] }, { category: "Security Policy Development & BIA", items: ["Acceptable Use Policy (AUP), InfoSec Policy, Access Control Policy", "Incident Response & Disaster Recovery Plans", "Business Impact Analysis (RTO and RPO metrics)"] } ], tools: ["Microsoft Office Suite", "Google Workspace", "Confluence"] },
      { number: 2, title: "Frameworks & Regulations", overview: "Companies must follow established security frameworks to prove to customers, auditors, and regulators that their systems are secure.", topics: [ { category: "Security & Control Frameworks", items: ["NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover)", "ISO/IEC 27001 ISMS standard", "CIS Critical Security Controls (Top 18)"] }, { category: "Regulatory Requirements", items: ["GDPR / CCPA (Data privacy laws)", "HIPAA (Protected Health Info)", "PCI-DSS (Credit card payment security)", "SOC 2 Type I & Type II audit reports"] } ], tools: ["Vanta", "Secureframe", "Drata"] },
      { number: 3, title: "Risk Assessment & Management", overview: "Risk management involves identifying system vulnerabilities, estimating potential financial damage, and deciding how the organization should handle those risks.", topics: [ { category: "Risk Analysis & Calculations", items: ["Quantitative Risk Analysis (ALE = Single Loss Expectancy x Annualized Rate)", "Qualitative Risk Matrix (Likelihood vs Impact)"] }, { category: "Risk Treatment & Registers", items: ["Strategies: Mitigate, Transfer, Avoid, Accept", "Maintaining centralized Risk Registers with mitigation deadlines"] } ], tools: ["Risk Register Templates", "LogicManager", "Archer", "ServiceNow GRC"] },
      { number: 4, title: "Auditing & Vendor Management", overview: "Auditing ensures internal systems actually follow company policies, while Vendor Risk Management ensures third-party software suppliers do not introduce security risks.", topics: [ { category: "Internal & External Auditing", items: ["Collecting objective audit evidence & Gap analyses against target frameworks"] }, { category: "Third-Party Risk Management (TPRM) & Metrics", items: ["Issuing Security Questionnaires (SIG, CAIQ)", "Reviewing vendor SOC 2 Type II reports & pentest summaries", "Executive Risk Reporting via Key Risk Indicators (KRIs)"] } ], tools: ["Whistic", "OneTrust", "GRC Dashboards"] }
    ]
  }
};

/* ========== COURSES DATA — MODULE-BASED LMS STRUCTURE ========== */
/*
 * CyberM Official Curriculum Specification:
 * - 21 Red Team Courses (143 Classes)
 * - 23 Blue Team Courses (170 Classes)
 * - Total: 44 Courses, 313 Class-wise Video Topics & Worksheets
 *
 * NOTE: Videos and downloadable worksheet PDFs are awaiting official production / upload.
 * All videoUrl properties are strictly null (no fake URLs).
 * Worksheets provide complete assignment briefs directly in-browser.
 */

const coursesData = {
  "burp": {
    "id": "burp",
    "name": "Burp Suite Fundamentals",
    "icon": "BP",
    "category": "Web Security Testing",
    "team": "red",
    "level": "Beginner",
    "description": "Master essential web application security testing with Burp Suite — proxy setup, request manipulation, decoder, intruder, and professional testing workflows.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "burp-m1",
        "title": "Proxy Configuration & Traffic Interception",
        "lessons": [
          {
            "id": "burp-1",
            "classNum": "Class 01",
            "title": "Introduction to Burp Suite",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Burp Suite purpose, components, and authorized testing scope",
            "worksheet": "Create a glossary of Proxy, Repeater, Intruder, and Scanner",
            "description": "Burp Suite purpose, components, and authorized testing scope"
          },
          {
            "id": "burp-2",
            "classNum": "Class 02",
            "title": "Installation and Proxy Setup",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Install Community Edition and configure a browser proxy",
            "worksheet": "Draw the browser-to-Burp traffic flow",
            "description": "Install Community Edition and configure a browser proxy"
          },
          {
            "id": "burp-3",
            "classNum": "Class 03",
            "title": "Intercepting HTTP Requests",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Inspect requests and responses in a local training app",
            "worksheet": "Label request line, headers, cookies, and body",
            "description": "Inspect requests and responses in a local training app"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Proxy Configuration & Traffic Interception will be available upon official course upload."
        },
        "quiz": {
          "title": "Proxy Configuration & Traffic Interception Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Proxy Configuration & Traffic Interception\"?",
              "options": [
                "Applying controlled, authorized techniques for Introduction to Burp Suite and Installation and Proxy Setup",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Burp Suite Fundamentals, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "burp-m2",
        "title": "Request Manipulation & Analysis Tools",
        "lessons": [
          {
            "id": "burp-4",
            "classNum": "Class 04",
            "title": "Proxy History and Site Map",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review captured traffic and map a test application",
            "worksheet": "Build a small site-map worksheet from lab traffic",
            "description": "Review captured traffic and map a test application"
          },
          {
            "id": "burp-5",
            "classNum": "Class 05",
            "title": "Repeater Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Replay and modify safe requests in a deliberately vulnerable lab",
            "worksheet": "Record baseline and modified responses",
            "description": "Replay and modify safe requests in a deliberately vulnerable lab"
          },
          {
            "id": "burp-6",
            "classNum": "Class 06",
            "title": "Decoder and Comparer",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Decode common web encodings and compare responses",
            "worksheet": "Decode sample URL/Base64 values and compare two responses",
            "description": "Decode common web encodings and compare responses"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Request Manipulation & Analysis Tools will be available upon official course upload."
        },
        "quiz": {
          "title": "Request Manipulation & Analysis Tools Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Request Manipulation & Analysis Tools\"?",
              "options": [
                "Applying controlled, authorized techniques for Proxy History and Site Map and Repeater Basics",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Burp Suite Fundamentals, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "burp-m3",
        "title": "Automated Attacks & Reporting Workflow",
        "lessons": [
          {
            "id": "burp-7",
            "classNum": "Class 07",
            "title": "Intruder Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand positions and controlled tests using lab-only accounts",
            "worksheet": "Prepare a rate-limited test matrix for a local lab",
            "description": "Understand positions and controlled tests using lab-only accounts"
          },
          {
            "id": "burp-8",
            "classNum": "Class 08",
            "title": "Web Testing Workflow",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Document findings, evidence, impact, and remediation",
            "worksheet": "Complete a sample finding report for a training application",
            "description": "Document findings, evidence, impact, and remediation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Automated Attacks & Reporting Workflow will be available upon official course upload."
        },
        "quiz": {
          "title": "Automated Attacks & Reporting Workflow Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Automated Attacks & Reporting Workflow\"?",
              "options": [
                "Applying controlled, authorized techniques for Intruder Fundamentals and Web Testing Workflow",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Burp Suite Fundamentals, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "wireshark-basics": {
    "id": "wireshark-basics",
    "name": "Wireshark Basics",
    "icon": "WSB",
    "category": "Packet Analysis",
    "team": "red",
    "level": "Beginner",
    "description": "Learn foundational packet capture, protocol dissection, and traffic analysis fundamentals from an offensive security perspective.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "wireshark-basics-m1",
        "title": "Capture Foundations & Packet Structure",
        "lessons": [
          {
            "id": "wsb-1",
            "classNum": "Class 01",
            "title": "Introduction to Packet Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Packets, frames, protocols, and capture ethics",
            "worksheet": "Label Ethernet, IP, TCP, and application layers",
            "description": "Packets, frames, protocols, and capture ethics"
          },
          {
            "id": "wsb-2",
            "classNum": "Class 02",
            "title": "Installation and Capture Setup",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Install Wireshark and capture loopback or lab traffic",
            "worksheet": "Record interface and capture-filter settings",
            "description": "Install Wireshark and capture loopback or lab traffic"
          },
          {
            "id": "wsb-3",
            "classNum": "Class 03",
            "title": "Packet Anatomy",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read packet headers and protocol fields",
            "worksheet": "Annotate a sample packet",
            "description": "Read packet headers and protocol fields"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Capture Foundations & Packet Structure will be available upon official course upload."
        },
        "quiz": {
          "title": "Capture Foundations & Packet Structure Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Capture Foundations & Packet Structure\"?",
              "options": [
                "Applying controlled, authorized techniques for Introduction to Packet Analysis and Installation and Capture Setup",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wireshark Basics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "wireshark-basics-m2",
        "title": "Filtering, Protocol Dissection & Reporting",
        "lessons": [
          {
            "id": "wsb-4",
            "classNum": "Class 04",
            "title": "Display Filters",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Filter DNS, HTTP, TCP, and ICMP in sample captures",
            "worksheet": "Complete a display-filter practice sheet",
            "description": "Filter DNS, HTTP, TCP, and ICMP in sample captures"
          },
          {
            "id": "wsb-5",
            "classNum": "Class 05",
            "title": "TCP and DNS Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand handshakes, queries, and responses",
            "worksheet": "Analyze a provided PCAP from a safe lab",
            "description": "Understand handshakes, queries, and responses"
          },
          {
            "id": "wsb-6",
            "classNum": "Class 06",
            "title": "Exporting and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Export objects where appropriate and write a concise analysis",
            "worksheet": "Prepare a one-page packet-analysis report",
            "description": "Export objects where appropriate and write a concise analysis"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Filtering, Protocol Dissection & Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Filtering, Protocol Dissection & Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Filtering, Protocol Dissection & Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Display Filters and TCP and DNS Analysis",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wireshark Basics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "metasploit": {
    "id": "metasploit",
    "name": "Metasploit Framework",
    "icon": "MSF",
    "category": "Exploitation Framework",
    "team": "red",
    "level": "Intermediate",
    "description": "Explore the Metasploit Framework architecture, auxiliary scanning modules, payload concepts, and controlled sandbox validation.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "metasploit-m1",
        "title": "Architecture & Workspace Configuration",
        "lessons": [
          {
            "id": "msf-1",
            "classNum": "Class 01",
            "title": "Framework Overview and Safety",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand modules, payload concepts, sessions, and lab boundaries",
            "worksheet": "Match module types to their purposes",
            "description": "Understand modules, payload concepts, sessions, and lab boundaries"
          },
          {
            "id": "msf-2",
            "classNum": "Class 02",
            "title": "Lab Setup and Workspace",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Set up an isolated practice environment and organize workspaces",
            "worksheet": "Create a lab inventory and scope sheet",
            "description": "Set up an isolated practice environment and organize workspaces"
          },
          {
            "id": "msf-3",
            "classNum": "Class 03",
            "title": "Searching and Inspecting Modules",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Search modules and read options and references",
            "worksheet": "Evaluate a module's documentation in a sandbox",
            "description": "Search modules and read options and references"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Architecture & Workspace Configuration will be available upon official course upload."
        },
        "quiz": {
          "title": "Architecture & Workspace Configuration Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Architecture & Workspace Configuration\"?",
              "options": [
                "Applying controlled, authorized techniques for Framework Overview and Safety and Lab Setup and Workspace",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Metasploit Framework, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "metasploit-m2",
        "title": "Auxiliary Scanning & Exploitation Concepts",
        "lessons": [
          {
            "id": "msf-4",
            "classNum": "Class 04",
            "title": "Auxiliary Modules",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use non-destructive discovery modules against intentionally vulnerable lab targets",
            "worksheet": "Record findings from a local lab target",
            "description": "Use non-destructive discovery modules against intentionally vulnerable lab targets"
          },
          {
            "id": "msf-5",
            "classNum": "Class 05",
            "title": "Exploit Concepts in a Sandbox",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand exploit prerequisites and validation without targeting real systems",
            "worksheet": "Complete a pre-engagement authorization checklist",
            "description": "Understand exploit prerequisites and validation without targeting real systems"
          },
          {
            "id": "msf-6",
            "classNum": "Class 06",
            "title": "Payload and Session Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Learn payload categories and session handling conceptually",
            "worksheet": "Map payload terminology to defensive controls",
            "description": "Learn payload categories and session handling conceptually"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Auxiliary Scanning & Exploitation Concepts will be available upon official course upload."
        },
        "quiz": {
          "title": "Auxiliary Scanning & Exploitation Concepts Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Auxiliary Scanning & Exploitation Concepts\"?",
              "options": [
                "Applying controlled, authorized techniques for Auxiliary Modules and Exploit Concepts in a Sandbox",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Metasploit Framework, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "metasploit-m3",
        "title": "Post-Assessment Verification & Remediation",
        "lessons": [
          {
            "id": "msf-7",
            "classNum": "Class 07",
            "title": "Post-Assessment Evidence",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Collect minimal proof in a lab and avoid destructive actions",
            "worksheet": "Create an evidence log and cleanup checklist",
            "description": "Collect minimal proof in a lab and avoid destructive actions"
          },
          {
            "id": "msf-8",
            "classNum": "Class 08",
            "title": "Reporting and Remediation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Translate lab findings into risk and fixes",
            "worksheet": "Write a sample penetration-test finding and remediation",
            "description": "Translate lab findings into risk and fixes"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Post-Assessment Verification & Remediation will be available upon official course upload."
        },
        "quiz": {
          "title": "Post-Assessment Verification & Remediation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Post-Assessment Verification & Remediation\"?",
              "options": [
                "Applying controlled, authorized techniques for Post-Assessment Evidence and Reporting and Remediation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Metasploit Framework, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "john": {
    "id": "john",
    "name": "John the Ripper",
    "icon": "JTR",
    "category": "Password Cracking",
    "team": "red",
    "level": "Intermediate",
    "description": "Audit password strength, identify hash formats, configure wordlists, and test rule-based transformations in authorized labs.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "john-m1",
        "title": "Hash Fundamentals & Identification",
        "lessons": [
          {
            "id": "jtr-1",
            "classNum": "Class 01",
            "title": "Password Auditing Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand password hashes, salting, and authorized audit scope",
            "worksheet": "Compare hashing and encryption in a worksheet",
            "description": "Understand password hashes, salting, and authorized audit scope"
          },
          {
            "id": "jtr-2",
            "classNum": "Class 02",
            "title": "Installation and Test Data",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Set up John with instructor-provided sample hashes",
            "worksheet": "Verify sample-file format and lab scope",
            "description": "Set up John with instructor-provided sample hashes"
          },
          {
            "id": "jtr-3",
            "classNum": "Class 03",
            "title": "Hash Identification",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Recognize common hash formats using safe sample data",
            "worksheet": "Match sample hash formats to descriptions",
            "description": "Recognize common hash formats using safe sample data"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Hash Fundamentals & Identification will be available upon official course upload."
        },
        "quiz": {
          "title": "Hash Fundamentals & Identification Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Hash Fundamentals & Identification\"?",
              "options": [
                "Applying controlled, authorized techniques for Password Auditing Overview and Installation and Test Data",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for John the Ripper, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "john-m2",
        "title": "Wordlist Attacks, Rule Mangling & Remediation",
        "lessons": [
          {
            "id": "jtr-4",
            "classNum": "Class 04",
            "title": "Wordlist Auditing",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Run a small audit against provided training hashes",
            "worksheet": "Document audit settings and results",
            "description": "Run a small audit against provided training hashes"
          },
          {
            "id": "jtr-5",
            "classNum": "Class 05",
            "title": "Rules and Incremental Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand rule-based and incremental auditing using toy examples",
            "worksheet": "Design a password-strength policy exercise",
            "description": "Understand rule-based and incremental auditing using toy examples"
          },
          {
            "id": "jtr-6",
            "classNum": "Class 06",
            "title": "Results and Remediation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Interpret audit output and recommend stronger authentication",
            "worksheet": "Create a password-audit report and user guidance",
            "description": "Interpret audit output and recommend stronger authentication"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Wordlist Attacks, Rule Mangling & Remediation will be available upon official course upload."
        },
        "quiz": {
          "title": "Wordlist Attacks, Rule Mangling & Remediation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Wordlist Attacks, Rule Mangling & Remediation\"?",
              "options": [
                "Applying controlled, authorized techniques for Wordlist Auditing and Rules and Incremental Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for John the Ripper, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "hydra": {
    "id": "hydra",
    "name": "Hydra",
    "icon": "HY",
    "category": "Authentication Testing",
    "team": "red",
    "level": "Intermediate",
    "description": "Understand authentication protocol testing, rate limiting, defensive logging, and safe credential audits in bounded sandbox environments.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "hydra-m1",
        "title": "Scope, Protocols & Lab Setup",
        "lessons": [
          {
            "id": "hyd-1",
            "classNum": "Class 01",
            "title": "Authentication Testing Ethics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand authorization, lockout risk, and rate limits",
            "worksheet": "Complete an authentication-test scope worksheet",
            "description": "Understand authorization, lockout risk, and rate limits"
          },
          {
            "id": "hyd-2",
            "classNum": "Class 02",
            "title": "Lab Installation and Setup",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Prepare a local intentionally vulnerable service",
            "worksheet": "Draw the isolated lab topology",
            "description": "Prepare a local intentionally vulnerable service"
          },
          {
            "id": "hyd-3",
            "classNum": "Class 03",
            "title": "Protocol Awareness",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review authentication protocols and their defensive implications",
            "worksheet": "Match protocols to secure configuration practices",
            "description": "Review authentication protocols and their defensive implications"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Scope, Protocols & Lab Setup will be available upon official course upload."
        },
        "quiz": {
          "title": "Scope, Protocols & Lab Setup Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Scope, Protocols & Lab Setup\"?",
              "options": [
                "Applying controlled, authorized techniques for Authentication Testing Ethics and Lab Installation and Setup",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Hydra, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "hydra-m2",
        "title": "Controlled Audits, Detection & Defensive Hardening",
        "lessons": [
          {
            "id": "hyd-4",
            "classNum": "Class 04",
            "title": "Controlled Lab Demonstration",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Observe a bounded instructor-led authentication audit in a sandbox",
            "worksheet": "Analyze a pre-generated lab result; no public targets",
            "description": "Observe a bounded instructor-led authentication audit in a sandbox"
          },
          {
            "id": "hyd-5",
            "classNum": "Class 05",
            "title": "Detection and Account Protection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review lockouts, MFA, logging, and rate limiting",
            "worksheet": "Create a defensive control checklist",
            "description": "Review lockouts, MFA, logging, and rate limiting"
          },
          {
            "id": "hyd-6",
            "classNum": "Class 06",
            "title": "Reporting and Cleanup",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Document evidence and restore lab state",
            "worksheet": "Write a safe authentication-assessment report",
            "description": "Document evidence and restore lab state"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Controlled Audits, Detection & Defensive Hardening will be available upon official course upload."
        },
        "quiz": {
          "title": "Controlled Audits, Detection & Defensive Hardening Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Controlled Audits, Detection & Defensive Hardening\"?",
              "options": [
                "Applying controlled, authorized techniques for Controlled Lab Demonstration and Detection and Account Protection",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Hydra, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "gobuster": {
    "id": "gobuster",
    "name": "Gobuster",
    "icon": "GB",
    "category": "Content Discovery",
    "team": "red",
    "level": "Beginner",
    "description": "Discover web paths, virtual hosts, and exposed files with high-speed Go-based enumeration in authorized testing labs.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "gobuster-m1",
        "title": "Reconnaissance Scope & Wordlist Setup",
        "lessons": [
          {
            "id": "gb-1",
            "classNum": "Class 01",
            "title": "Content Discovery Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand directories, files, virtual hosts, and scope",
            "worksheet": "Identify allowed paths in a mock scope",
            "description": "Understand directories, files, virtual hosts, and scope"
          },
          {
            "id": "gb-2",
            "classNum": "Class 02",
            "title": "Installation and Wordlists",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Set up the tool and review wordlist quality",
            "worksheet": "Compare small training wordlists",
            "description": "Set up the tool and review wordlist quality"
          },
          {
            "id": "gb-3",
            "classNum": "Class 03",
            "title": "Directory Discovery in a Local Lab",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Discover intentionally exposed training paths",
            "worksheet": "Classify mock results by severity",
            "description": "Discover intentionally exposed training paths"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Reconnaissance Scope & Wordlist Setup will be available upon official course upload."
        },
        "quiz": {
          "title": "Reconnaissance Scope & Wordlist Setup Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Reconnaissance Scope & Wordlist Setup\"?",
              "options": [
                "Applying controlled, authorized techniques for Content Discovery Concepts and Installation and Wordlists",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Gobuster, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "gobuster-m2",
        "title": "Status Code Interpretation & Virtual Host Routing",
        "lessons": [
          {
            "id": "gb-4",
            "classNum": "Class 04",
            "title": "Status Codes and Response Size",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Interpret HTTP status codes and response patterns",
            "worksheet": "Complete a status-code worksheet",
            "description": "Interpret HTTP status codes and response patterns"
          },
          {
            "id": "gb-5",
            "classNum": "Class 05",
            "title": "Virtual Host Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand host-based routing in a local lab",
            "worksheet": "Map sample host headers to virtual hosts",
            "description": "Understand host-based routing in a local lab"
          },
          {
            "id": "gb-6",
            "classNum": "Class 06",
            "title": "Reporting and Hardening",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Recommend access control and content exposure fixes",
            "worksheet": "Prepare a web-content discovery report",
            "description": "Recommend access control and content exposure fixes"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Status Code Interpretation & Virtual Host Routing will be available upon official course upload."
        },
        "quiz": {
          "title": "Status Code Interpretation & Virtual Host Routing Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Status Code Interpretation & Virtual Host Routing\"?",
              "options": [
                "Applying controlled, authorized techniques for Status Codes and Response Size and Virtual Host Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Gobuster, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "nikto": {
    "id": "nikto",
    "name": "Nikto",
    "icon": "NK",
    "category": "Vulnerability Scanning",
    "team": "red",
    "level": "Beginner",
    "description": "Scan web servers for dangerous files, outdated server software, configuration items, and evaluate findings responsibly.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 30m",
    "modules": [
      {
        "id": "nikto-m1",
        "title": "Server Auditing & Safe Scanning",
        "lessons": [
          {
            "id": "nk-1",
            "classNum": "Class 01",
            "title": "Web Server Assessment Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand server misconfiguration and scanner limitations",
            "worksheet": "List common web-server hardening areas",
            "description": "Understand server misconfiguration and scanner limitations"
          },
          {
            "id": "nk-2",
            "classNum": "Class 02",
            "title": "Installation and Safe Configuration",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Set up Nikto for a local training server",
            "worksheet": "Complete a safe-scan configuration sheet",
            "description": "Set up Nikto for a local training server"
          },
          {
            "id": "nk-3",
            "classNum": "Class 03",
            "title": "Understanding Scan Findings",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Interpret informational and potential vulnerability findings",
            "worksheet": "Classify sample findings by confidence and impact",
            "description": "Interpret informational and potential vulnerability findings"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Server Auditing & Safe Scanning will be available upon official course upload."
        },
        "quiz": {
          "title": "Server Auditing & Safe Scanning Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Server Auditing & Safe Scanning\"?",
              "options": [
                "Applying controlled, authorized techniques for Web Server Assessment Basics and Installation and Safe Configuration",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Nikto, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "nikto-m2",
        "title": "Validation, False Positive Reduction & Reporting",
        "lessons": [
          {
            "id": "nk-4",
            "classNum": "Class 04",
            "title": "False Positives and Validation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Validate findings manually in an authorized lab",
            "worksheet": "Complete a false-positive review table",
            "description": "Validate findings manually in an authorized lab"
          },
          {
            "id": "nk-5",
            "classNum": "Class 05",
            "title": "Remediation and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Recommend updates, headers, and configuration fixes",
            "worksheet": "Write a concise server-assessment report",
            "description": "Recommend updates, headers, and configuration fixes"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Validation, False Positive Reduction & Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Validation, False Positive Reduction & Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Validation, False Positive Reduction & Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for False Positives and Validation and Remediation and Reporting",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Nikto, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "sqlmap": {
    "id": "sqlmap",
    "name": "SQLMap",
    "icon": "SQL",
    "category": "Database Assessment",
    "team": "red",
    "level": "Intermediate",
    "description": "Automate SQL injection detection and validation responsibly in controlled environments with data-minimization practices.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "sqlmap-m1",
        "title": "SQL Injection Mechanics & Scoping",
        "lessons": [
          {
            "id": "sql-1",
            "classNum": "Class 01",
            "title": "SQL Injection Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand query construction, input handling, and parameterization",
            "worksheet": "Identify unsafe query patterns in sample code",
            "description": "Understand query construction, input handling, and parameterization"
          },
          {
            "id": "sql-2",
            "classNum": "Class 02",
            "title": "Lab Setup and Authorization",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use a deliberately vulnerable local application only",
            "worksheet": "Document target scope and reset procedure",
            "description": "Use a deliberately vulnerable local application only"
          },
          {
            "id": "sql-3",
            "classNum": "Class 03",
            "title": "Recognizing Injection Indicators",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review safe examples of error and behavior-based indicators",
            "worksheet": "Classify sample observations",
            "description": "Review safe examples of error and behavior-based indicators"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for SQL Injection Mechanics & Scoping will be available upon official course upload."
        },
        "quiz": {
          "title": "SQL Injection Mechanics & Scoping Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"SQL Injection Mechanics & Scoping\"?",
              "options": [
                "Applying controlled, authorized techniques for SQL Injection Fundamentals and Lab Setup and Authorization",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for SQLMap, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "sqlmap-m2",
        "title": "Tool Concepts, Risk Levels & Lab Validation",
        "lessons": [
          {
            "id": "sql-4",
            "classNum": "Class 04",
            "title": "SQLMap Concepts and Options",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand risk, level, techniques, and safe defaults conceptually",
            "worksheet": "Explain key options without targeting live systems",
            "description": "Understand risk, level, techniques, and safe defaults conceptually"
          },
          {
            "id": "sql-5",
            "classNum": "Class 05",
            "title": "Controlled Lab Validation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Validate a known training vulnerability in a sandbox",
            "worksheet": "Record evidence from instructor-provided lab output",
            "description": "Validate a known training vulnerability in a sandbox"
          },
          {
            "id": "sql-6",
            "classNum": "Class 06",
            "title": "Database Exposure Risks",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand potential impact and data minimization",
            "worksheet": "Complete a data-impact worksheet",
            "description": "Understand potential impact and data minimization"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Tool Concepts, Risk Levels & Lab Validation will be available upon official course upload."
        },
        "quiz": {
          "title": "Tool Concepts, Risk Levels & Lab Validation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Tool Concepts, Risk Levels & Lab Validation\"?",
              "options": [
                "Applying controlled, authorized techniques for SQLMap Concepts and Options and Controlled Lab Validation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for SQLMap, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "sqlmap-m3",
        "title": "Parameterized Defense & Remediation Reporting",
        "lessons": [
          {
            "id": "sql-7",
            "classNum": "Class 07",
            "title": "Defensive Testing",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review parameterized queries and least privilege",
            "worksheet": "Fix a sample vulnerable query",
            "description": "Review parameterized queries and least privilege"
          },
          {
            "id": "sql-8",
            "classNum": "Class 08",
            "title": "Final Assessment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Perform a bounded lab assessment and communicate remediation",
            "worksheet": "Submit a test report and secure-code checklist",
            "description": "Perform a bounded lab assessment and communicate remediation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Parameterized Defense & Remediation Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Parameterized Defense & Remediation Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Parameterized Defense & Remediation Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Defensive Testing and Final Assessment",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for SQLMap, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "netcat": {
    "id": "netcat",
    "name": "Netcat",
    "icon": "NC",
    "category": "Network Swiss Army Knife",
    "team": "red",
    "level": "Beginner",
    "description": "Master TCP/UDP sockets, banner grabbing, port probing, network troubleshooting, and security implications.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 30m",
    "modules": [
      {
        "id": "netcat-m1",
        "title": "Sockets & Connectivity Fundamentals",
        "lessons": [
          {
            "id": "nc-1",
            "classNum": "Class 01",
            "title": "Networking and Netcat Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand sockets, TCP/UDP, and legitimate troubleshooting uses",
            "worksheet": "Label client, server, port, and protocol",
            "description": "Understand sockets, TCP/UDP, and legitimate troubleshooting uses"
          },
          {
            "id": "nc-2",
            "classNum": "Class 02",
            "title": "Installation and Basic Connectivity",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Set up a local loopback exercise",
            "worksheet": "Record connection outcomes in a lab",
            "description": "Set up a local loopback exercise"
          },
          {
            "id": "nc-3",
            "classNum": "Class 03",
            "title": "Listening and Client Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore local-only listener/client behavior",
            "worksheet": "Draw a local socket communication diagram",
            "description": "Explore local-only listener/client behavior"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Sockets & Connectivity Fundamentals will be available upon official course upload."
        },
        "quiz": {
          "title": "Sockets & Connectivity Fundamentals Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Sockets & Connectivity Fundamentals\"?",
              "options": [
                "Applying controlled, authorized techniques for Networking and Netcat Overview and Installation and Basic Connectivity",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Netcat, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "netcat-m2",
        "title": "Service Troubleshooting & Risk Reporting",
        "lessons": [
          {
            "id": "nc-4",
            "classNum": "Class 04",
            "title": "Troubleshooting with Netcat",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Check connectivity to services in a sandbox",
            "worksheet": "Complete a connectivity troubleshooting matrix",
            "description": "Check connectivity to services in a sandbox"
          },
          {
            "id": "nc-5",
            "classNum": "Class 05",
            "title": "Safe Use and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review exposure risks and secure service practices",
            "worksheet": "Write a short network troubleshooting report",
            "description": "Review exposure risks and secure service practices"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Service Troubleshooting & Risk Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Service Troubleshooting & Risk Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Service Troubleshooting & Risk Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Troubleshooting with Netcat and Safe Use and Reporting",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Netcat, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "enum4linux": {
    "id": "enum4linux",
    "name": "Enum4linux",
    "icon": "E4L",
    "category": "Windows/Samba Enumeration",
    "team": "red",
    "level": "Intermediate",
    "description": "Extract information from Windows and Samba systems including shares, user lists, password policies, and groups.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 30m",
    "modules": [
      {
        "id": "enum4linux-m1",
        "title": "SMB Enumeration Principles & Lab Scope",
        "lessons": [
          {
            "id": "e4l-1",
            "classNum": "Class 01",
            "title": "SMB and Windows Enumeration Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand SMB, shares, users, and information exposure",
            "worksheet": "Define key SMB terms",
            "description": "Understand SMB, shares, users, and information exposure"
          },
          {
            "id": "e4l-2",
            "classNum": "Class 02",
            "title": "Lab Setup and Scope",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Prepare a Windows/Samba training environment",
            "worksheet": "Create an asset and permission worksheet",
            "description": "Prepare a Windows/Samba training environment"
          },
          {
            "id": "e4l-3",
            "classNum": "Class 03",
            "title": "Interpreting Enumeration Results",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review instructor-provided sample output",
            "worksheet": "Classify exposed information",
            "description": "Review instructor-provided sample output"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for SMB Enumeration Principles & Lab Scope will be available upon official course upload."
        },
        "quiz": {
          "title": "SMB Enumeration Principles & Lab Scope Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"SMB Enumeration Principles & Lab Scope\"?",
              "options": [
                "Applying controlled, authorized techniques for SMB and Windows Enumeration Concepts and Lab Setup and Scope",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Enum4linux, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "enum4linux-m2",
        "title": "Hardening Checks & Disclosure Reporting",
        "lessons": [
          {
            "id": "e4l-4",
            "classNum": "Class 04",
            "title": "Defensive SMB Configuration",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review guest access, share permissions, and protocol settings",
            "worksheet": "Complete an SMB hardening checklist",
            "description": "Review guest access, share permissions, and protocol settings"
          },
          {
            "id": "e4l-5",
            "classNum": "Class 05",
            "title": "Assessment and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Document excessive disclosure and remediation",
            "worksheet": "Write a sample SMB exposure report",
            "description": "Document excessive disclosure and remediation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Hardening Checks & Disclosure Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Hardening Checks & Disclosure Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Hardening Checks & Disclosure Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Defensive SMB Configuration and Assessment and Reporting",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Enum4linux, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "owasp-testing": {
    "id": "owasp-testing",
    "name": "OWASP Web Security Testing",
    "icon": "OWS",
    "category": "Web Security Methodology",
    "team": "red",
    "level": "Intermediate",
    "description": "Systematic web application security assessments based on the OWASP Top 10 and Web Security Testing Guide (WSTG).",
    "instructor": "cyberM Team",
    "totalDuration": "3h 0m",
    "modules": [
      {
        "id": "owasp-testing-m1",
        "title": "Methodology & Access Control Flaws",
        "lessons": [
          {
            "id": "ows-1",
            "classNum": "Class 01",
            "title": "Web Security Testing Methodology",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand scope, authorization, and test planning",
            "worksheet": "Complete a web-test planning worksheet",
            "description": "Understand scope, authorization, and test planning"
          },
          {
            "id": "ows-2",
            "classNum": "Class 02",
            "title": "Access Control",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review broken access control in a training app",
            "worksheet": "Build an access-control test matrix",
            "description": "Review broken access control in a training app"
          },
          {
            "id": "ows-3",
            "classNum": "Class 03",
            "title": "Cryptographic Failures",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand transport security and sensitive-data handling",
            "worksheet": "Audit a mock configuration",
            "description": "Understand transport security and sensitive-data handling"
          },
          {
            "id": "ows-4",
            "classNum": "Class 04",
            "title": "Injection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Recognize injection risks in sample code",
            "worksheet": "Identify unsafe input handling",
            "description": "Recognize injection risks in sample code"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Methodology & Access Control Flaws will be available upon official course upload."
        },
        "quiz": {
          "title": "Methodology & Access Control Flaws Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Methodology & Access Control Flaws\"?",
              "options": [
                "Applying controlled, authorized techniques for Web Security Testing Methodology and Access Control",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for OWASP Web Security Testing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "owasp-testing-m2",
        "title": "Design, Misconfiguration & Authentication",
        "lessons": [
          {
            "id": "ows-5",
            "classNum": "Class 05",
            "title": "Insecure Design",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review threat modeling and trust boundaries",
            "worksheet": "Create a simple threat model",
            "description": "Review threat modeling and trust boundaries"
          },
          {
            "id": "ows-6",
            "classNum": "Class 06",
            "title": "Security Misconfiguration",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review headers, defaults, and exposed services",
            "worksheet": "Complete a configuration checklist",
            "description": "Review headers, defaults, and exposed services"
          },
          {
            "id": "ows-7",
            "classNum": "Class 07",
            "title": "Authentication Failures",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review MFA, session handling, and credential policy",
            "worksheet": "Assess a mock login design",
            "description": "Review MFA, session handling, and credential policy"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Design, Misconfiguration & Authentication will be available upon official course upload."
        },
        "quiz": {
          "title": "Design, Misconfiguration & Authentication Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Design, Misconfiguration & Authentication\"?",
              "options": [
                "Applying controlled, authorized techniques for Insecure Design and Security Misconfiguration",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for OWASP Web Security Testing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "owasp-testing-m3",
        "title": "Integrity, Logging & Final Assessment",
        "lessons": [
          {
            "id": "ows-8",
            "classNum": "Class 08",
            "title": "Software and Data Integrity",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand dependency and update integrity",
            "worksheet": "Create a dependency review worksheet",
            "description": "Understand dependency and update integrity"
          },
          {
            "id": "ows-9",
            "classNum": "Class 09",
            "title": "Logging and Monitoring",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review event logging and alert coverage",
            "worksheet": "Map events to useful detections",
            "description": "Review event logging and alert coverage"
          },
          {
            "id": "ows-10",
            "classNum": "Class 10",
            "title": "Final Web Assessment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Perform a structured review of a deliberately vulnerable app",
            "worksheet": "Submit findings, evidence, and remediation plan",
            "description": "Perform a structured review of a deliberately vulnerable app"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Integrity, Logging & Final Assessment will be available upon official course upload."
        },
        "quiz": {
          "title": "Integrity, Logging & Final Assessment Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Integrity, Logging & Final Assessment\"?",
              "options": [
                "Applying controlled, authorized techniques for Software and Data Integrity and Logging and Monitoring",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for OWASP Web Security Testing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "linux-privesc": {
    "id": "linux-privesc",
    "name": "Linux Privilege Escalation",
    "icon": "LPE",
    "category": "Host Exploitation & Hardening",
    "team": "red",
    "level": "Advanced",
    "description": "Analyze Linux misconfigurations, SUID binaries, cron jobs, permissions, and evaluate defensive hardening controls.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "linux-privesc-m1",
        "title": "Identity, Processes & Binary Capabilities",
        "lessons": [
          {
            "id": "lpe-1",
            "classNum": "Class 01",
            "title": "Linux Permissions and Identity",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand users, groups, sudo, and file permissions",
            "worksheet": "Solve permission and ownership exercises",
            "description": "Understand users, groups, sudo, and file permissions"
          },
          {
            "id": "lpe-2",
            "classNum": "Class 02",
            "title": "Processes and Services",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review running processes, services, and startup behavior",
            "worksheet": "Analyze a provided process inventory",
            "description": "Review running processes, services, and startup behavior"
          },
          {
            "id": "lpe-3",
            "classNum": "Class 03",
            "title": "SUID and File Capabilities",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand risky permission configurations",
            "worksheet": "Classify sample permission findings",
            "description": "Understand risky permission configurations"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Identity, Processes & Binary Capabilities will be available upon official course upload."
        },
        "quiz": {
          "title": "Identity, Processes & Binary Capabilities Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Identity, Processes & Binary Capabilities\"?",
              "options": [
                "Applying controlled, authorized techniques for Linux Permissions and Identity and Processes and Services",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Linux Privilege Escalation, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "linux-privesc-m2",
        "title": "Scheduled Tasks, Secrets & Kernel Patching",
        "lessons": [
          {
            "id": "lpe-4",
            "classNum": "Class 04",
            "title": "Scheduled Tasks",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review cron and service task security",
            "worksheet": "Audit a mock scheduled-task configuration",
            "description": "Review cron and service task security"
          },
          {
            "id": "lpe-5",
            "classNum": "Class 05",
            "title": "Environment and Secrets",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Identify unsafe secret storage and environment exposure",
            "worksheet": "Complete a secrets-handling checklist",
            "description": "Identify unsafe secret storage and environment exposure"
          },
          {
            "id": "lpe-6",
            "classNum": "Class 06",
            "title": "Kernel and Package Hygiene",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand patching and version-risk review",
            "worksheet": "Create a patch-priority worksheet",
            "description": "Understand patching and version-risk review"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Scheduled Tasks, Secrets & Kernel Patching will be available upon official course upload."
        },
        "quiz": {
          "title": "Scheduled Tasks, Secrets & Kernel Patching Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Scheduled Tasks, Secrets & Kernel Patching\"?",
              "options": [
                "Applying controlled, authorized techniques for Scheduled Tasks and Environment and Secrets",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Linux Privilege Escalation, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "linux-privesc-m3",
        "title": "Hardened Validation & Security Review",
        "lessons": [
          {
            "id": "lpe-7",
            "classNum": "Class 07",
            "title": "Defensive Validation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use a hardened lab image to validate controls",
            "worksheet": "Compare before/after configuration evidence",
            "description": "Use a hardened lab image to validate controls"
          },
          {
            "id": "lpe-8",
            "classNum": "Class 08",
            "title": "Final Hardening Report",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Prioritize findings and remediation",
            "worksheet": "Submit a Linux security review report",
            "description": "Prioritize findings and remediation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Hardened Validation & Security Review will be available upon official course upload."
        },
        "quiz": {
          "title": "Hardened Validation & Security Review Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Hardened Validation & Security Review\"?",
              "options": [
                "Applying controlled, authorized techniques for Defensive Validation and Final Hardening Report",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Linux Privilege Escalation, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "web-pentest": {
    "id": "web-pentest",
    "name": "Web Penetration Testing",
    "icon": "WPT",
    "category": "Offensive Web Assessment",
    "team": "red",
    "level": "Advanced",
    "description": "Execute end-to-end web penetration tests covering authentication, authorization, business logic, APIs, and reporting.",
    "instructor": "cyberM Team",
    "totalDuration": "3h 0m",
    "modules": [
      {
        "id": "web-pentest-m1",
        "title": "Engagement Scoping & Identity Controls",
        "lessons": [
          {
            "id": "wpt-1",
            "classNum": "Class 01",
            "title": "Engagement Planning and Scope",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Define rules of engagement and safe test boundaries",
            "worksheet": "Create a sample rules-of-engagement document",
            "description": "Define rules of engagement and safe test boundaries"
          },
          {
            "id": "wpt-2",
            "classNum": "Class 02",
            "title": "Application Mapping",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Map roles, workflows, and entry points in a lab app",
            "worksheet": "Build an application inventory",
            "description": "Map roles, workflows, and entry points in a lab app"
          },
          {
            "id": "wpt-3",
            "classNum": "Class 03",
            "title": "Authentication and Sessions",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review login, MFA, reset, and session controls",
            "worksheet": "Complete an authentication test matrix",
            "description": "Review login, MFA, reset, and session controls"
          },
          {
            "id": "wpt-4",
            "classNum": "Class 04",
            "title": "Authorization Testing",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Test role boundaries using seeded lab accounts",
            "worksheet": "Build a role-permission matrix",
            "description": "Test role boundaries using seeded lab accounts"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Engagement Scoping & Identity Controls will be available upon official course upload."
        },
        "quiz": {
          "title": "Engagement Scoping & Identity Controls Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Engagement Scoping & Identity Controls\"?",
              "options": [
                "Applying controlled, authorized techniques for Engagement Planning and Scope and Application Mapping",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Web Penetration Testing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "web-pentest-m2",
        "title": "Input Vulnerabilities & Business Logic",
        "lessons": [
          {
            "id": "wpt-5",
            "classNum": "Class 05",
            "title": "Input Handling and Injection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review input validation and safe test cases",
            "worksheet": "Analyze sample vulnerable code",
            "description": "Review input validation and safe test cases"
          },
          {
            "id": "wpt-6",
            "classNum": "Class 06",
            "title": "File Upload and Path Handling",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review upload validation and path traversal defenses",
            "worksheet": "Complete a secure-upload checklist",
            "description": "Review upload validation and path traversal defenses"
          },
          {
            "id": "wpt-7",
            "classNum": "Class 07",
            "title": "Business Logic Testing",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Identify workflow and abuse-case risks",
            "worksheet": "Create abuse-case scenarios",
            "description": "Identify workflow and abuse-case risks"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Input Vulnerabilities & Business Logic will be available upon official course upload."
        },
        "quiz": {
          "title": "Input Vulnerabilities & Business Logic Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Input Vulnerabilities & Business Logic\"?",
              "options": [
                "Applying controlled, authorized techniques for Input Handling and Injection and File Upload and Path Handling",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Web Penetration Testing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "web-pentest-m3",
        "title": "API Security, Risk Rating & Retest Notes",
        "lessons": [
          {
            "id": "wpt-8",
            "classNum": "Class 08",
            "title": "API Security Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review API authentication, authorization, and data exposure",
            "worksheet": "Assess a mock API specification",
            "description": "Review API authentication, authorization, and data exposure"
          },
          {
            "id": "wpt-9",
            "classNum": "Class 09",
            "title": "Evidence and Risk Rating",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Capture minimal evidence and prioritize impact",
            "worksheet": "Write two sample findings",
            "description": "Capture minimal evidence and prioritize impact"
          },
          {
            "id": "wpt-10",
            "classNum": "Class 10",
            "title": "Final Assessment and Retest",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Complete a lab-only assessment and verify fixes",
            "worksheet": "Submit final report and retest notes",
            "description": "Complete a lab-only assessment and verify fixes"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for API Security, Risk Rating & Retest Notes will be available upon official course upload."
        },
        "quiz": {
          "title": "API Security, Risk Rating & Retest Notes Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"API Security, Risk Rating & Retest Notes\"?",
              "options": [
                "Applying controlled, authorized techniques for API Security Basics and Evidence and Risk Rating",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Web Penetration Testing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "nmap": {
    "id": "nmap",
    "name": "Nmap Network Discovery & Port Scanning",
    "icon": "NMP",
    "category": "Reconnaissance & Scanning",
    "team": "red",
    "level": "Beginner",
    "description": "Master host discovery, port scanning, service and OS detection, NSE scripts, and professional network inventory.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "nmap-m1",
        "title": "Network Discovery Foundations",
        "lessons": [
          {
            "id": "nmap-1",
            "classNum": "Class 01",
            "title": "Nmap Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Purpose, scan concepts, target scope and responsible use",
            "worksheet": "Nmap terminology and scope worksheet",
            "description": "Purpose, scan concepts, target scope and responsible use"
          },
          {
            "id": "nmap-2",
            "classNum": "Class 02",
            "title": "Installation and Lab Setup",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Install Nmap and prepare an isolated practice network",
            "worksheet": "Record lab topology and setup",
            "description": "Install Nmap and prepare an isolated practice network"
          },
          {
            "id": "nmap-3",
            "classNum": "Class 03",
            "title": "Host Discovery",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand host discovery methods using lab targets",
            "worksheet": "Interpret sample host-discovery output",
            "description": "Understand host discovery methods using lab targets"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Network Discovery Foundations will be available upon official course upload."
        },
        "quiz": {
          "title": "Network Discovery Foundations Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Network Discovery Foundations\"?",
              "options": [
                "Applying controlled, authorized techniques for Nmap Fundamentals and Installation and Lab Setup",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Nmap Network Discovery & Port Scanning, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "nmap-m2",
        "title": "Port Scanning & Service Versioning",
        "lessons": [
          {
            "id": "nmap-4",
            "classNum": "Class 04",
            "title": "Port Scanning Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand TCP/UDP ports and scan states",
            "worksheet": "Classify open, closed and filtered sample results",
            "description": "Understand TCP/UDP ports and scan states"
          },
          {
            "id": "nmap-5",
            "classNum": "Class 05",
            "title": "Service and Version Detection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Identify services and versions on intentionally vulnerable lab hosts",
            "worksheet": "Analyze sanitized service-detection output",
            "description": "Identify services and versions on intentionally vulnerable lab hosts"
          },
          {
            "id": "nmap-6",
            "classNum": "Class 06",
            "title": "NSE Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand Nmap Scripting Engine categories and safe script selection",
            "worksheet": "Review safe NSE script categories",
            "description": "Understand Nmap Scripting Engine categories and safe script selection"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Port Scanning & Service Versioning will be available upon official course upload."
        },
        "quiz": {
          "title": "Port Scanning & Service Versioning Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Port Scanning & Service Versioning\"?",
              "options": [
                "Applying controlled, authorized techniques for Port Scanning Concepts and Service and Version Detection",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Nmap Network Discovery & Port Scanning, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "nmap-m3",
        "title": "Output Documentation & Network Assessment",
        "lessons": [
          {
            "id": "nmap-7",
            "classNum": "Class 07",
            "title": "Output Formats and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Save, compare and document scan results",
            "worksheet": "Create a concise authorized-scan report",
            "description": "Save, compare and document scan results"
          },
          {
            "id": "nmap-8",
            "classNum": "Class 08",
            "title": "Final Lab and Assessment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Perform a scoped inventory of a local training network",
            "worksheet": "Submit scope, findings and remediation notes",
            "description": "Perform a scoped inventory of a local training network"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Output Documentation & Network Assessment will be available upon official course upload."
        },
        "quiz": {
          "title": "Output Documentation & Network Assessment Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Output Documentation & Network Assessment\"?",
              "options": [
                "Applying controlled, authorized techniques for Output Formats and Reporting and Final Lab and Assessment",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Nmap Network Discovery & Port Scanning, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "subdomain-discovery": {
    "id": "subdomain-discovery",
    "name": "Subdomain & Attack Surface Discovery (Amass, Subfinder)",
    "icon": "SUB",
    "category": "Reconnaissance & OSINT",
    "team": "red",
    "level": "Intermediate",
    "description": "Map external attack surfaces using Amass and Subfinder with DNS validation, data deduplication, and asset inventories.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "subdomain-discovery-m1",
        "title": "Passive Discovery & Tool Architecture",
        "lessons": [
          {
            "id": "sub-1",
            "classNum": "Class 01",
            "title": "Reconnaissance Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Define scope, passive discovery and asset inventory",
            "worksheet": "Create an asset-scope checklist",
            "description": "Define scope, passive discovery and asset inventory"
          },
          {
            "id": "sub-2",
            "classNum": "Class 02",
            "title": "Subfinder Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand subdomain discovery and source configuration",
            "worksheet": "Review sample subdomain results",
            "description": "Understand subdomain discovery and source configuration"
          },
          {
            "id": "sub-3",
            "classNum": "Class 03",
            "title": "Amass Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore asset mapping and data-source concepts",
            "worksheet": "Map a sample domain dataset",
            "description": "Explore asset mapping and data-source concepts"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Passive Discovery & Tool Architecture will be available upon official course upload."
        },
        "quiz": {
          "title": "Passive Discovery & Tool Architecture Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Passive Discovery & Tool Architecture\"?",
              "options": [
                "Applying controlled, authorized techniques for Reconnaissance Concepts and Subfinder Fundamentals",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Subdomain & Attack Surface Discovery (Amass, Subfinder), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "subdomain-discovery-m2",
        "title": "DNS Validation, Deduplication & Inventory",
        "lessons": [
          {
            "id": "sub-4",
            "classNum": "Class 04",
            "title": "Validation and DNS Context",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand DNS resolution and validation workflows",
            "worksheet": "Classify sample DNS records",
            "description": "Understand DNS resolution and validation workflows"
          },
          {
            "id": "sub-5",
            "classNum": "Class 05",
            "title": "Deduplication and Documentation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Normalize findings and remove duplicates",
            "worksheet": "Prepare an asset inventory worksheet",
            "description": "Normalize findings and remove duplicates"
          },
          {
            "id": "sub-6",
            "classNum": "Class 06",
            "title": "Final Scoped Assessment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Build a passive-first inventory for an approved lab domain",
            "worksheet": "Submit scope and asset report",
            "description": "Build a passive-first inventory for an approved lab domain"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for DNS Validation, Deduplication & Inventory will be available upon official course upload."
        },
        "quiz": {
          "title": "DNS Validation, Deduplication & Inventory Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"DNS Validation, Deduplication & Inventory\"?",
              "options": [
                "Applying controlled, authorized techniques for Validation and DNS Context and Deduplication and Documentation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Subdomain & Attack Surface Discovery (Amass, Subfinder), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "web-content-discovery": {
    "id": "web-content-discovery",
    "name": "Web Content Discovery (ffuf, Feroxbuster)",
    "icon": "FF",
    "category": "Web Fuzzing & Content Discovery",
    "team": "red",
    "level": "Intermediate",
    "description": "High-performance web fuzzing and recursive content discovery with ffuf and Feroxbuster, managing rate limits and filters.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "web-content-discovery-m1",
        "title": "Fuzzing Architecture & Request Templates",
        "lessons": [
          {
            "id": "fuf-1",
            "classNum": "Class 01",
            "title": "Content Discovery Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand routes, directories, wordlists and scope",
            "worksheet": "Create a web content discovery glossary",
            "description": "Understand routes, directories, wordlists and scope"
          },
          {
            "id": "fuf-2",
            "classNum": "Class 02",
            "title": "ffuf Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand request templates, filters and result interpretation",
            "worksheet": "Interpret a sanitized ffuf output",
            "description": "Understand request templates, filters and result interpretation"
          },
          {
            "id": "fuf-3",
            "classNum": "Class 03",
            "title": "Feroxbuster Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore recursive content discovery concepts",
            "worksheet": "Build a safe lab discovery plan",
            "description": "Explore recursive content discovery concepts"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Fuzzing Architecture & Request Templates will be available upon official course upload."
        },
        "quiz": {
          "title": "Fuzzing Architecture & Request Templates Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Fuzzing Architecture & Request Templates\"?",
              "options": [
                "Applying controlled, authorized techniques for Content Discovery Basics and ffuf Fundamentals",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Web Content Discovery (ffuf, Feroxbuster), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "web-content-discovery-m2",
        "title": "Wordlist Strategy, Rate Limiting & Reporting",
        "lessons": [
          {
            "id": "fuf-4",
            "classNum": "Class 04",
            "title": "Wordlists and False Positives",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Choose wordlists and recognize noisy results",
            "worksheet": "Compare sample result sets",
            "description": "Choose wordlists and recognize noisy results"
          },
          {
            "id": "fuf-5",
            "classNum": "Class 05",
            "title": "Rate Limits and Safe Testing",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use lab-only targets, rate limits and stop conditions",
            "worksheet": "Write a safe testing checklist",
            "description": "Use lab-only targets, rate limits and stop conditions"
          },
          {
            "id": "fuf-6",
            "classNum": "Class 06",
            "title": "Final Lab and Report",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Document findings from a deliberately vulnerable local web app",
            "worksheet": "Submit a concise content-discovery report",
            "description": "Document findings from a deliberately vulnerable local web app"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Wordlist Strategy, Rate Limiting & Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Wordlist Strategy, Rate Limiting & Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Wordlist Strategy, Rate Limiting & Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Wordlists and False Positives and Rate Limits and Safe Testing",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Web Content Discovery (ffuf, Feroxbuster), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "nuclei": {
    "id": "nuclei",
    "name": "Nuclei Vulnerability Template Scanning",
    "icon": "NCL",
    "category": "Template-Based Scanning",
    "team": "red",
    "level": "Intermediate",
    "description": "Conduct community-template security scans using Nuclei, parse YAML templates, and validate findings safely.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "nuclei-m1",
        "title": "YAML Templates & Matcher Logic",
        "lessons": [
          {
            "id": "ncl-1",
            "classNum": "Class 01",
            "title": "Nuclei Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand templates, workflows and scan scope",
            "worksheet": "Explain template metadata",
            "description": "Understand templates, workflows and scan scope"
          },
          {
            "id": "ncl-2",
            "classNum": "Class 02",
            "title": "Template Structure",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read template fields and matching logic at a high level",
            "worksheet": "Annotate a sample template",
            "description": "Read template fields and matching logic at a high level"
          },
          {
            "id": "ncl-3",
            "classNum": "Class 03",
            "title": "Safe Template Selection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Select non-destructive checks for a training target",
            "worksheet": "Build an approved template shortlist",
            "description": "Select non-destructive checks for a training target"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for YAML Templates & Matcher Logic will be available upon official course upload."
        },
        "quiz": {
          "title": "YAML Templates & Matcher Logic Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"YAML Templates & Matcher Logic\"?",
              "options": [
                "Applying controlled, authorized techniques for Nuclei Overview and Template Structure",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Nuclei Vulnerability Template Scanning, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "nuclei-m2",
        "title": "Execution Controls, Validation & Reporting",
        "lessons": [
          {
            "id": "ncl-4",
            "classNum": "Class 04",
            "title": "Running Lab Assessments",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand rate limits, tags and result formats",
            "worksheet": "Review sample scan output",
            "description": "Understand rate limits, tags and result formats"
          },
          {
            "id": "ncl-5",
            "classNum": "Class 05",
            "title": "Validation and False Positives",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Manually verify findings without intrusive actions",
            "worksheet": "Complete a finding-validation worksheet",
            "description": "Manually verify findings without intrusive actions"
          },
          {
            "id": "ncl-6",
            "classNum": "Class 06",
            "title": "Reporting and Remediation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Prioritize findings and recommend fixes",
            "worksheet": "Prepare a vulnerability report",
            "description": "Prioritize findings and recommend fixes"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Execution Controls, Validation & Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Execution Controls, Validation & Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Execution Controls, Validation & Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Running Lab Assessments and Validation and False Positives",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Nuclei Vulnerability Template Scanning, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "active-directory": {
    "id": "active-directory",
    "name": "Active Directory Assessment (BloodHound)",
    "icon": "AD",
    "category": "Identity & Access Assessment",
    "team": "red",
    "level": "Advanced",
    "description": "Analyze Active Directory trust graphs, privileged groups, attack path mapping with BloodHound, and tiered defense hygiene.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "active-directory-m1",
        "title": "Directory Trusts & Graph Relationships",
        "lessons": [
          {
            "id": "ad-1",
            "classNum": "Class 01",
            "title": "Active Directory Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand domains, users, groups and trust relationships",
            "worksheet": "Draw a sample directory structure",
            "description": "Understand domains, users, groups and trust relationships"
          },
          {
            "id": "ad-2",
            "classNum": "Class 02",
            "title": "Identity and Access Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review permissions, delegation and privileged groups",
            "worksheet": "Classify sample permissions",
            "description": "Review permissions, delegation and privileged groups"
          },
          {
            "id": "ad-3",
            "classNum": "Class 03",
            "title": "BloodHound Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand graph-based relationship analysis",
            "worksheet": "Label a sample graph",
            "description": "Understand graph-based relationship analysis"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Directory Trusts & Graph Relationships will be available upon official course upload."
        },
        "quiz": {
          "title": "Directory Trusts & Graph Relationships Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Directory Trusts & Graph Relationships\"?",
              "options": [
                "Applying controlled, authorized techniques for Active Directory Fundamentals and Identity and Access Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Active Directory Assessment (BloodHound), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "active-directory-m2",
        "title": "Data Collection & Attack Path Analysis",
        "lessons": [
          {
            "id": "ad-4",
            "classNum": "Class 04",
            "title": "Data Collection in a Lab",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review approved lab collection concepts and data handling",
            "worksheet": "Create a lab collection checklist",
            "description": "Review approved lab collection concepts and data handling"
          },
          {
            "id": "ad-5",
            "classNum": "Class 05",
            "title": "Attack Path Interpretation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Recognize risky relationships in a prebuilt dataset",
            "worksheet": "Identify sample risky paths",
            "description": "Recognize risky relationships in a prebuilt dataset"
          },
          {
            "id": "ad-6",
            "classNum": "Class 06",
            "title": "Privilege Hygiene",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand least privilege and tiered administration",
            "worksheet": "Create a remediation checklist",
            "description": "Understand least privilege and tiered administration"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Data Collection & Attack Path Analysis will be available upon official course upload."
        },
        "quiz": {
          "title": "Data Collection & Attack Path Analysis Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Data Collection & Attack Path Analysis\"?",
              "options": [
                "Applying controlled, authorized techniques for Data Collection in a Lab and Attack Path Interpretation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Active Directory Assessment (BloodHound), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "active-directory-m3",
        "title": "Telemetry Detection & Tiered Remediation",
        "lessons": [
          {
            "id": "ad-7",
            "classNum": "Class 07",
            "title": "Detection Opportunities",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Identify logging and monitoring opportunities",
            "worksheet": "Map sample activity to telemetry",
            "description": "Identify logging and monitoring opportunities"
          },
          {
            "id": "ad-8",
            "classNum": "Class 08",
            "title": "Final Assessment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Analyze a provided directory graph and recommend fixes",
            "worksheet": "Submit a defensive findings report",
            "description": "Analyze a provided directory graph and recommend fixes"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Telemetry Detection & Tiered Remediation will be available upon official course upload."
        },
        "quiz": {
          "title": "Telemetry Detection & Tiered Remediation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Telemetry Detection & Tiered Remediation\"?",
              "options": [
                "Applying controlled, authorized techniques for Detection Opportunities and Final Assessment",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Active Directory Assessment (BloodHound), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "windows-protocol": {
    "id": "windows-protocol",
    "name": "Windows Protocol Assessment (Impacket, NetExec)",
    "icon": "WPA",
    "category": "Enterprise Protocol Security",
    "team": "red",
    "level": "Advanced",
    "description": "Evaluate SMB, LDAP, Kerberos, and NTLM protocol interactions with Impacket and NetExec for secure enterprise hardening.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "windows-protocol-m1",
        "title": "Protocol Mechanics & Assessment Toolkits",
        "lessons": [
          {
            "id": "wpa-1",
            "classNum": "Class 01",
            "title": "Windows Protocol Foundations",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand SMB, LDAP, Kerberos and NTLM concepts",
            "worksheet": "Protocol comparison worksheet",
            "description": "Understand SMB, LDAP, Kerberos and NTLM concepts"
          },
          {
            "id": "wpa-2",
            "classNum": "Class 02",
            "title": "Impacket Toolkit Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand common library utilities and safe lab use",
            "worksheet": "Match utilities to protocol concepts",
            "description": "Understand common library utilities and safe lab use"
          },
          {
            "id": "wpa-3",
            "classNum": "Class 03",
            "title": "NetExec Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand assessment use cases and scope controls",
            "worksheet": "Review a sanitized tool output",
            "description": "Understand assessment use cases and scope controls"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Protocol Mechanics & Assessment Toolkits will be available upon official course upload."
        },
        "quiz": {
          "title": "Protocol Mechanics & Assessment Toolkits Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Protocol Mechanics & Assessment Toolkits\"?",
              "options": [
                "Applying controlled, authorized techniques for Windows Protocol Foundations and Impacket Toolkit Overview",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Windows Protocol Assessment (Impacket, NetExec), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "windows-protocol-m2",
        "title": "Authentication Risks, Event Auditing & Hardening",
        "lessons": [
          {
            "id": "wpa-4",
            "classNum": "Class 04",
            "title": "Authentication and Permissions",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Study authentication flows and access-control risks",
            "worksheet": "Analyze a sample access matrix",
            "description": "Study authentication flows and access-control risks"
          },
          {
            "id": "wpa-5",
            "classNum": "Class 05",
            "title": "Logging and Detection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review Windows event sources relevant to lab activity",
            "worksheet": "Create a detection telemetry checklist",
            "description": "Review Windows event sources relevant to lab activity"
          },
          {
            "id": "wpa-6",
            "classNum": "Class 06",
            "title": "Final Lab Review",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Analyze pre-generated lab evidence and document remediation",
            "worksheet": "Submit protocol-security report",
            "description": "Analyze pre-generated lab evidence and document remediation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Authentication Risks, Event Auditing & Hardening will be available upon official course upload."
        },
        "quiz": {
          "title": "Authentication Risks, Event Auditing & Hardening Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Authentication Risks, Event Auditing & Hardening\"?",
              "options": [
                "Applying controlled, authorized techniques for Authentication and Permissions and Logging and Detection",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Windows Protocol Assessment (Impacket, NetExec), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "cloud-security": {
    "id": "cloud-security",
    "name": "Cloud Security Assessment (Prowler, ScoutSuite)",
    "icon": "CS",
    "category": "Cloud Posture & Auditing",
    "team": "red",
    "level": "Intermediate",
    "description": "Audit multi-cloud infrastructure posture with Prowler and ScoutSuite across IAM, storage buckets, and security controls.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "cloud-security-m1",
        "title": "Shared Responsibility & Multi-Cloud Posture",
        "lessons": [
          {
            "id": "csa-1",
            "classNum": "Class 01",
            "title": "Cloud Security Foundations",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand shared responsibility, IAM and cloud assets",
            "worksheet": "Cloud responsibility worksheet",
            "description": "Understand shared responsibility, IAM and cloud assets"
          },
          {
            "id": "csa-2",
            "classNum": "Class 02",
            "title": "Prowler Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand cloud posture checks and report structure",
            "worksheet": "Interpret a sample findings report",
            "description": "Understand cloud posture checks and report structure"
          },
          {
            "id": "csa-3",
            "classNum": "Class 03",
            "title": "ScoutSuite Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore multi-service cloud configuration review",
            "worksheet": "Map findings to cloud services",
            "description": "Explore multi-service cloud configuration review"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Shared Responsibility & Multi-Cloud Posture will be available upon official course upload."
        },
        "quiz": {
          "title": "Shared Responsibility & Multi-Cloud Posture Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Shared Responsibility & Multi-Cloud Posture\"?",
              "options": [
                "Applying controlled, authorized techniques for Cloud Security Foundations and Prowler Overview",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Cloud Security Assessment (Prowler, ScoutSuite), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "cloud-security-m2",
        "title": "IAM Risk Prioritization & Remediation",
        "lessons": [
          {
            "id": "csa-4",
            "classNum": "Class 04",
            "title": "Identity and Storage Risks",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review least privilege, public access and key management",
            "worksheet": "Complete a cloud control checklist",
            "description": "Review least privilege, public access and key management"
          },
          {
            "id": "csa-5",
            "classNum": "Class 05",
            "title": "Prioritization and Remediation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Rank misconfigurations and recommend fixes",
            "worksheet": "Write remediation actions",
            "description": "Rank misconfigurations and recommend fixes"
          },
          {
            "id": "csa-6",
            "classNum": "Class 06",
            "title": "Final Cloud Review",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Assess a deliberately misconfigured sandbox report",
            "worksheet": "Submit cloud posture summary",
            "description": "Assess a deliberately misconfigured sandbox report"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for IAM Risk Prioritization & Remediation will be available upon official course upload."
        },
        "quiz": {
          "title": "IAM Risk Prioritization & Remediation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"IAM Risk Prioritization & Remediation\"?",
              "options": [
                "Applying controlled, authorized techniques for Identity and Storage Risks and Prioritization and Remediation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Cloud Security Assessment (Prowler, ScoutSuite), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "hashcat": {
    "id": "hashcat",
    "name": "Hashcat Password Hash Auditing",
    "icon": "HC",
    "category": "Password Recovery & Auditing",
    "team": "red",
    "level": "Intermediate",
    "description": "Perform offline password hash recovery and strength verification with Hashcat, rules, masks, and defense recommendations.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "hashcat-m1",
        "title": "Hashing Standards & Hashcat Modes",
        "lessons": [
          {
            "id": "hsh-1",
            "classNum": "Class 01",
            "title": "Password Storage Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand hashing, salts and password storage",
            "worksheet": "Compare hashing and encryption",
            "description": "Understand hashing, salts and password storage"
          },
          {
            "id": "hsh-2",
            "classNum": "Class 02",
            "title": "Hashcat Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand supported modes and safe lab boundaries",
            "worksheet": "Identify sample hash formats",
            "description": "Understand supported modes and safe lab boundaries"
          },
          {
            "id": "hsh-3",
            "classNum": "Class 03",
            "title": "Wordlists and Rules Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore password policy and audit methodology",
            "worksheet": "Create a password policy worksheet",
            "description": "Explore password policy and audit methodology"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Hashing Standards & Hashcat Modes will be available upon official course upload."
        },
        "quiz": {
          "title": "Hashing Standards & Hashcat Modes Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Hashing Standards & Hashcat Modes\"?",
              "options": [
                "Applying controlled, authorized techniques for Password Storage Fundamentals and Hashcat Overview",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Hashcat Password Hash Auditing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "hashcat-m2",
        "title": "Audit Output Analysis & Password Policy Defense",
        "lessons": [
          {
            "id": "hsh-4",
            "classNum": "Class 04",
            "title": "Audit Output Interpretation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Interpret sample offline audit results",
            "worksheet": "Summarize sample audit evidence",
            "description": "Interpret sample offline audit results"
          },
          {
            "id": "hsh-5",
            "classNum": "Class 05",
            "title": "Defensive Password Controls",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review MFA, lockout, hashing and password managers",
            "worksheet": "Recommend account protections",
            "description": "Review MFA, lockout, hashing and password managers"
          },
          {
            "id": "hsh-6",
            "classNum": "Class 06",
            "title": "Final Assessment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Evaluate a synthetic password audit dataset",
            "worksheet": "Submit password hygiene recommendations",
            "description": "Evaluate a synthetic password audit dataset"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Audit Output Analysis & Password Policy Defense will be available upon official course upload."
        },
        "quiz": {
          "title": "Audit Output Analysis & Password Policy Defense Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Audit Output Analysis & Password Policy Defense\"?",
              "options": [
                "Applying controlled, authorized techniques for Audit Output Interpretation and Defensive Password Controls",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Hashcat Password Hash Auditing, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "splunk": {
    "id": "splunk",
    "name": "Splunk Fundamentals",
    "icon": "SPL",
    "category": "SIEM & SOC Analytics",
    "team": "blue",
    "level": "Beginner",
    "description": "Collect, search, and analyze security event data using Splunk SPL, dashboards, alert rules, and SOC monitoring practices.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "splunk-m1",
        "title": "SIEM Foundations & Data Ingestion",
        "lessons": [
          {
            "id": "spl-1",
            "classNum": "Class 01",
            "title": "Introduction to SIEM and Splunk",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand SIEM, events, indexes, and dashboards",
            "worksheet": "Draw a basic log-to-alert workflow",
            "description": "Understand SIEM, events, indexes, and dashboards"
          },
          {
            "id": "spl-2",
            "classNum": "Class 02",
            "title": "Installation and Data Inputs",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore a training instance and sample log ingestion",
            "worksheet": "Map sample log sources",
            "description": "Explore a training instance and sample log ingestion"
          },
          {
            "id": "spl-3",
            "classNum": "Class 03",
            "title": "Searching with SPL",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use basic search, fields, and time ranges",
            "worksheet": "Complete SPL search exercises on sample data",
            "description": "Use basic search, fields, and time ranges"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for SIEM Foundations & Data Ingestion will be available upon official course upload."
        },
        "quiz": {
          "title": "SIEM Foundations & Data Ingestion Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"SIEM Foundations & Data Ingestion\"?",
              "options": [
                "Applying controlled, authorized techniques for Introduction to SIEM and Splunk and Installation and Data Inputs",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Splunk Fundamentals, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "splunk-m2",
        "title": "SPL Analysis & SOC Dashboards",
        "lessons": [
          {
            "id": "spl-4",
            "classNum": "Class 04",
            "title": "Filtering and Transforming Events",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use stats, table, sort, and eval concepts",
            "worksheet": "Summarize a sample authentication log",
            "description": "Use stats, table, sort, and eval concepts"
          },
          {
            "id": "spl-5",
            "classNum": "Class 05",
            "title": "Dashboards and Visualizations",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Build a simple monitoring dashboard",
            "worksheet": "Sketch a dashboard for failed logins",
            "description": "Build a simple monitoring dashboard"
          },
          {
            "id": "spl-6",
            "classNum": "Class 06",
            "title": "Alerts and Notables",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand alert conditions and triage",
            "worksheet": "Create an alert logic worksheet",
            "description": "Understand alert conditions and triage"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for SPL Analysis & SOC Dashboards will be available upon official course upload."
        },
        "quiz": {
          "title": "SPL Analysis & SOC Dashboards Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"SPL Analysis & SOC Dashboards\"?",
              "options": [
                "Applying controlled, authorized techniques for Filtering and Transforming Events and Dashboards and Visualizations",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Splunk Fundamentals, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "splunk-m3",
        "title": "Detection Use Cases & SIEM Capstone",
        "lessons": [
          {
            "id": "spl-7",
            "classNum": "Class 07",
            "title": "Security Monitoring Use Cases",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review authentication, endpoint, and network detections",
            "worksheet": "Map use cases to log sources",
            "description": "Review authentication, endpoint, and network detections"
          },
          {
            "id": "spl-8",
            "classNum": "Class 08",
            "title": "Final SIEM Project",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Build a small dashboard and explain findings",
            "worksheet": "Submit dashboard plan and analyst report",
            "description": "Build a small dashboard and explain findings"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Detection Use Cases & SIEM Capstone will be available upon official course upload."
        },
        "quiz": {
          "title": "Detection Use Cases & SIEM Capstone Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Detection Use Cases & SIEM Capstone\"?",
              "options": [
                "Applying controlled, authorized techniques for Security Monitoring Use Cases and Final SIEM Project",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Splunk Fundamentals, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "wazuh": {
    "id": "wazuh",
    "name": "Wazuh SIEM",
    "icon": "WZH",
    "category": "Open-Source SIEM & XDR",
    "team": "blue",
    "level": "Intermediate",
    "description": "Deploy and manage Wazuh SIEM/XDR, agent enrollment, decoders, file integrity monitoring, and vulnerability detection.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "wazuh-m1",
        "title": "Wazuh Deployment & Agent Management",
        "lessons": [
          {
            "id": "wzh-1",
            "classNum": "Class 01",
            "title": "Wazuh Architecture",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand manager, agents, indexer, and dashboard",
            "worksheet": "Label the Wazuh architecture",
            "description": "Understand manager, agents, indexer, and dashboard"
          },
          {
            "id": "wzh-2",
            "classNum": "Class 02",
            "title": "Lab Deployment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Deploy or inspect a contained training environment",
            "worksheet": "Complete deployment checklist",
            "description": "Deploy or inspect a contained training environment"
          },
          {
            "id": "wzh-3",
            "classNum": "Class 03",
            "title": "Agent Enrollment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand endpoint enrollment and groups",
            "worksheet": "Create an endpoint inventory",
            "description": "Understand endpoint enrollment and groups"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Wazuh Deployment & Agent Management will be available upon official course upload."
        },
        "quiz": {
          "title": "Wazuh Deployment & Agent Management Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Wazuh Deployment & Agent Management\"?",
              "options": [
                "Applying controlled, authorized techniques for Wazuh Architecture and Lab Deployment",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wazuh SIEM, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "wazuh-m2",
        "title": "Decoders, Integrity & Vulnerabilities",
        "lessons": [
          {
            "id": "wzh-4",
            "classNum": "Class 04",
            "title": "Log Collection and Decoders",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review event sources and parsing",
            "worksheet": "Map sample events to fields",
            "description": "Review event sources and parsing"
          },
          {
            "id": "wzh-5",
            "classNum": "Class 05",
            "title": "File Integrity Monitoring",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand baseline and change alerts",
            "worksheet": "Analyze a sample file-change alert",
            "description": "Understand baseline and change alerts"
          },
          {
            "id": "wzh-6",
            "classNum": "Class 06",
            "title": "Vulnerability Detection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review software inventory and vulnerability findings",
            "worksheet": "Prioritize sample vulnerabilities",
            "description": "Review software inventory and vulnerability findings"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Decoders, Integrity & Vulnerabilities will be available upon official course upload."
        },
        "quiz": {
          "title": "Decoders, Integrity & Vulnerabilities Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Decoders, Integrity & Vulnerabilities\"?",
              "options": [
                "Applying controlled, authorized techniques for Log Collection and Decoders and File Integrity Monitoring",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wazuh SIEM, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "wazuh-m3",
        "title": "Alert Triage & Endpoint Response Report",
        "lessons": [
          {
            "id": "wzh-7",
            "classNum": "Class 07",
            "title": "Rules and Alert Triage",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Interpret rules, severity, and false positives",
            "worksheet": "Complete a triage worksheet",
            "description": "Interpret rules, severity, and false positives"
          },
          {
            "id": "wzh-8",
            "classNum": "Class 08",
            "title": "Final Monitoring Project",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Monitor lab endpoints and document response",
            "worksheet": "Submit a mini SOC report",
            "description": "Monitor lab endpoints and document response"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Alert Triage & Endpoint Response Report will be available upon official course upload."
        },
        "quiz": {
          "title": "Alert Triage & Endpoint Response Report Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Alert Triage & Endpoint Response Report\"?",
              "options": [
                "Applying controlled, authorized techniques for Rules and Alert Triage and Final Monitoring Project",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wazuh SIEM, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "snort": {
    "id": "snort",
    "name": "Snort IDS/IPS",
    "icon": "SNT",
    "category": "Network Intrusion Detection",
    "team": "blue",
    "level": "Intermediate",
    "description": "Configure Snort IDS/IPS sensors, inspect rule structure, tune alert signatures, and prevent malicious traffic.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "snort-m1",
        "title": "Sensor Architecture & Rule Anatomy",
        "lessons": [
          {
            "id": "snt-1",
            "classNum": "Class 01",
            "title": "IDS and IPS Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand signatures, sensors, and inline monitoring",
            "worksheet": "Compare IDS and IPS",
            "description": "Understand signatures, sensors, and inline monitoring"
          },
          {
            "id": "snt-2",
            "classNum": "Class 02",
            "title": "Installation and Lab Topology",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Set up an isolated sensor and sample traffic",
            "worksheet": "Draw the sensor placement",
            "description": "Set up an isolated sensor and sample traffic"
          },
          {
            "id": "snt-3",
            "classNum": "Class 03",
            "title": "Rule Structure",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand rule headers, options, and metadata",
            "worksheet": "Annotate sample training rules",
            "description": "Understand rule headers, options, and metadata"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Sensor Architecture & Rule Anatomy will be available upon official course upload."
        },
        "quiz": {
          "title": "Sensor Architecture & Rule Anatomy Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Sensor Architecture & Rule Anatomy\"?",
              "options": [
                "Applying controlled, authorized techniques for IDS and IPS Fundamentals and Installation and Lab Topology",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Snort IDS/IPS, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "snort-m2",
        "title": "Alert Correlation & Signature Tuning",
        "lessons": [
          {
            "id": "snt-4",
            "classNum": "Class 04",
            "title": "Alert Generation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review alerts from provided PCAP files",
            "worksheet": "Classify alerts by event type",
            "description": "Review alerts from provided PCAP files"
          },
          {
            "id": "snt-5",
            "classNum": "Class 05",
            "title": "Rule Tuning",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand thresholds, suppressions, and false positives",
            "worksheet": "Tune a sample noisy rule on paper",
            "description": "Understand thresholds, suppressions, and false positives"
          },
          {
            "id": "snt-6",
            "classNum": "Class 06",
            "title": "Traffic Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate alerts with packet evidence",
            "worksheet": "Complete an alert-to-packet worksheet",
            "description": "Correlate alerts with packet evidence"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Alert Correlation & Signature Tuning will be available upon official course upload."
        },
        "quiz": {
          "title": "Alert Correlation & Signature Tuning Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Alert Correlation & Signature Tuning\"?",
              "options": [
                "Applying controlled, authorized techniques for Alert Generation and Rule Tuning",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Snort IDS/IPS, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "snort-m3",
        "title": "Inline Prevention & Detection Reporting",
        "lessons": [
          {
            "id": "snt-7",
            "classNum": "Class 07",
            "title": "Prevention and Response",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review safe blocking strategy and change control",
            "worksheet": "Create an incident escalation checklist",
            "description": "Review safe blocking strategy and change control"
          },
          {
            "id": "snt-8",
            "classNum": "Class 08",
            "title": "Final IDS Project",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Analyze a lab PCAP and explain detections",
            "worksheet": "Submit rules rationale and findings",
            "description": "Analyze a lab PCAP and explain detections"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Inline Prevention & Detection Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Inline Prevention & Detection Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Inline Prevention & Detection Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Prevention and Response and Final IDS Project",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Snort IDS/IPS, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "suricata": {
    "id": "suricata",
    "name": "Suricata",
    "icon": "SUR",
    "category": "Next-Gen Network Security",
    "team": "blue",
    "level": "Intermediate",
    "description": "Deploy multi-threaded Suricata for network security monitoring, parse EVE JSON telemetry, and write custom signatures.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "suricata-m1",
        "title": "Suricata Deployment & Rule Syntax",
        "lessons": [
          {
            "id": "sur-1",
            "classNum": "Class 01",
            "title": "Suricata Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand IDS, IPS, and network security monitoring modes",
            "worksheet": "Compare deployment modes",
            "description": "Understand IDS, IPS, and network security monitoring modes"
          },
          {
            "id": "sur-2",
            "classNum": "Class 02",
            "title": "Installation and Configuration",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review a contained lab configuration",
            "worksheet": "Complete a configuration checklist",
            "description": "Review a contained lab configuration"
          },
          {
            "id": "sur-3",
            "classNum": "Class 03",
            "title": "Rules and Signatures",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand signature syntax and rule sources",
            "worksheet": "Annotate sample rules",
            "description": "Understand signature syntax and rule sources"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Suricata Deployment & Rule Syntax will be available upon official course upload."
        },
        "quiz": {
          "title": "Suricata Deployment & Rule Syntax Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Suricata Deployment & Rule Syntax\"?",
              "options": [
                "Applying controlled, authorized techniques for Suricata Overview and Installation and Configuration",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Suricata, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "suricata-m2",
        "title": "EVE JSON Telemetry, Tuning & Response",
        "lessons": [
          {
            "id": "sur-4",
            "classNum": "Class 04",
            "title": "EVE JSON and Logging",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read structured event output",
            "worksheet": "Parse a sample EVE event",
            "description": "Read structured event output"
          },
          {
            "id": "sur-5",
            "classNum": "Class 05",
            "title": "Alert Tuning and PCAP Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review sample traffic and reduce false positives",
            "worksheet": "Complete a PCAP alert worksheet",
            "description": "Review sample traffic and reduce false positives"
          },
          {
            "id": "sur-6",
            "classNum": "Class 06",
            "title": "Final Detection Exercise",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explain a lab detection and response path",
            "worksheet": "Submit a concise detection report",
            "description": "Explain a lab detection and response path"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for EVE JSON Telemetry, Tuning & Response will be available upon official course upload."
        },
        "quiz": {
          "title": "EVE JSON Telemetry, Tuning & Response Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"EVE JSON Telemetry, Tuning & Response\"?",
              "options": [
                "Applying controlled, authorized techniques for EVE JSON and Logging and Alert Tuning and PCAP Analysis",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Suricata, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "linux-security": {
    "id": "linux-security",
    "name": "Linux Security",
    "icon": "LS",
    "category": "OS Hardening & Defense",
    "team": "blue",
    "level": "Beginner",
    "description": "Hardening Linux distributions, managing permissions, securing SSH, configuring host firewalls, and monitoring audit logs.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "linux-security-m1",
        "title": "Permissions, Accounts & Access Control",
        "lessons": [
          {
            "id": "ls-1",
            "classNum": "Class 01",
            "title": "Linux Security Foundations",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand users, groups, permissions, and updates",
            "worksheet": "Complete Linux security vocabulary",
            "description": "Understand users, groups, permissions, and updates"
          },
          {
            "id": "ls-2",
            "classNum": "Class 02",
            "title": "User and Access Management",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review least privilege and account lifecycle",
            "worksheet": "Audit a mock user list",
            "description": "Review least privilege and account lifecycle"
          },
          {
            "id": "ls-3",
            "classNum": "Class 03",
            "title": "File Permissions",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Apply safe permissions and ownership",
            "worksheet": "Solve chmod/chown exercises",
            "description": "Apply safe permissions and ownership"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Permissions, Accounts & Access Control will be available upon official course upload."
        },
        "quiz": {
          "title": "Permissions, Accounts & Access Control Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Permissions, Accounts & Access Control\"?",
              "options": [
                "Applying controlled, authorized techniques for Linux Security Foundations and User and Access Management",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Linux Security, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "linux-security-m2",
        "title": "SSH, Host Firewall & Patch Management",
        "lessons": [
          {
            "id": "ls-4",
            "classNum": "Class 04",
            "title": "SSH Hardening",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review key authentication and secure SSH settings",
            "worksheet": "Complete an SSH hardening checklist",
            "description": "Review key authentication and secure SSH settings"
          },
          {
            "id": "ls-5",
            "classNum": "Class 05",
            "title": "Firewall Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand host firewalls and default-deny concepts",
            "worksheet": "Design a basic host firewall policy",
            "description": "Understand host firewalls and default-deny concepts"
          },
          {
            "id": "ls-6",
            "classNum": "Class 06",
            "title": "Updates and Package Hygiene",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review patching and trusted repositories",
            "worksheet": "Create a patch schedule",
            "description": "Review patching and trusted repositories"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for SSH, Host Firewall & Patch Management will be available upon official course upload."
        },
        "quiz": {
          "title": "SSH, Host Firewall & Patch Management Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"SSH, Host Firewall & Patch Management\"?",
              "options": [
                "Applying controlled, authorized techniques for SSH Hardening and Firewall Basics",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Linux Security, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "linux-security-m3",
        "title": "Audit Telemetry & Hardening Baseline",
        "lessons": [
          {
            "id": "ls-7",
            "classNum": "Class 07",
            "title": "Audit Logs and Monitoring",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read authentication and system logs",
            "worksheet": "Analyze sample auth log entries",
            "description": "Read authentication and system logs"
          },
          {
            "id": "ls-8",
            "classNum": "Class 08",
            "title": "Final Linux Hardening",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Apply a baseline to a training VM",
            "worksheet": "Submit a hardening checklist",
            "description": "Apply a baseline to a training VM"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Audit Telemetry & Hardening Baseline will be available upon official course upload."
        },
        "quiz": {
          "title": "Audit Telemetry & Hardening Baseline Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Audit Telemetry & Hardening Baseline\"?",
              "options": [
                "Applying controlled, authorized techniques for Audit Logs and Monitoring and Final Linux Hardening",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Linux Security, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "windows-security": {
    "id": "windows-security",
    "name": "Windows Security",
    "icon": "WSK",
    "category": "Windows Hardening & Telemetry",
    "team": "blue",
    "level": "Beginner",
    "description": "Harden Windows endpoints, manage Defender and firewalls, examine Security Event Viewer logs, and restrict PowerShell execution.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "windows-security-m1",
        "title": "Accounts, Defender & Host Firewalls",
        "lessons": [
          {
            "id": "wsk-1",
            "classNum": "Class 01",
            "title": "Windows Security Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand accounts, groups, services, and policies",
            "worksheet": "Label core Windows security components",
            "description": "Understand accounts, groups, services, and policies"
          },
          {
            "id": "wsk-2",
            "classNum": "Class 02",
            "title": "Local Users and Groups",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review least privilege and account controls",
            "worksheet": "Audit a mock user/group list",
            "description": "Review least privilege and account controls"
          },
          {
            "id": "wsk-3",
            "classNum": "Class 03",
            "title": "Windows Defender and Firewall",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand endpoint protection and firewall profiles",
            "worksheet": "Create a baseline checklist",
            "description": "Understand endpoint protection and firewall profiles"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Accounts, Defender & Host Firewalls will be available upon official course upload."
        },
        "quiz": {
          "title": "Accounts, Defender & Host Firewalls Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Accounts, Defender & Host Firewalls\"?",
              "options": [
                "Applying controlled, authorized techniques for Windows Security Overview and Local Users and Groups",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Windows Security, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "windows-security-m2",
        "title": "Event Viewer Telemetry & PowerShell Controls",
        "lessons": [
          {
            "id": "wsk-4",
            "classNum": "Class 04",
            "title": "Event Viewer Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read Security and System events",
            "worksheet": "Interpret sample event IDs supplied by instructor",
            "description": "Read Security and System events"
          },
          {
            "id": "wsk-5",
            "classNum": "Class 05",
            "title": "PowerShell Security Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand safe administration and execution policy",
            "worksheet": "Review safe sample commands",
            "description": "Understand safe administration and execution policy"
          },
          {
            "id": "wsk-6",
            "classNum": "Class 06",
            "title": "Patch and Update Management",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review update rings and vulnerability remediation",
            "worksheet": "Create a patch-priority plan",
            "description": "Review update rings and vulnerability remediation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Event Viewer Telemetry & PowerShell Controls will be available upon official course upload."
        },
        "quiz": {
          "title": "Event Viewer Telemetry & PowerShell Controls Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Event Viewer Telemetry & PowerShell Controls\"?",
              "options": [
                "Applying controlled, authorized techniques for Event Viewer Basics and PowerShell Security Basics",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Windows Security, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "windows-security-m3",
        "title": "Remote Access Protection & Final Hardening",
        "lessons": [
          {
            "id": "wsk-7",
            "classNum": "Class 07",
            "title": "Account and RDP Hardening",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review MFA, RDP exposure, and account lockout",
            "worksheet": "Complete a remote-access checklist",
            "description": "Review MFA, RDP exposure, and account lockout"
          },
          {
            "id": "wsk-8",
            "classNum": "Class 08",
            "title": "Final Windows Hardening",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Apply a baseline in a training VM",
            "worksheet": "Submit configuration and evidence report",
            "description": "Apply a baseline in a training VM"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Remote Access Protection & Final Hardening will be available upon official course upload."
        },
        "quiz": {
          "title": "Remote Access Protection & Final Hardening Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Remote Access Protection & Final Hardening\"?",
              "options": [
                "Applying controlled, authorized techniques for Account and RDP Hardening and Final Windows Hardening",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Windows Security, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "osquery": {
    "id": "osquery",
    "name": "OSQuery",
    "icon": "OSQ",
    "category": "Endpoint Telemetry",
    "team": "blue",
    "level": "Intermediate",
    "description": "Query endpoints as relational SQL databases, monitor processes, sockets, user sessions, and build scheduled detections.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "osquery-m1",
        "title": "SQL Endpoint Queries & Fleet Architecture",
        "lessons": [
          {
            "id": "osq-1",
            "classNum": "Class 01",
            "title": "OSQuery Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand endpoint telemetry and SQL-style queries",
            "worksheet": "Map endpoint tables to use cases",
            "description": "Understand endpoint telemetry and SQL-style queries"
          },
          {
            "id": "osq-2",
            "classNum": "Class 02",
            "title": "Installation and Fleet Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review agent and fleet-management architecture",
            "worksheet": "Draw an endpoint telemetry flow",
            "description": "Review agent and fleet-management architecture"
          },
          {
            "id": "osq-3",
            "classNum": "Class 03",
            "title": "Querying Endpoint State",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore safe read-only queries on sample data",
            "worksheet": "Complete query interpretation exercises",
            "description": "Explore safe read-only queries on sample data"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for SQL Endpoint Queries & Fleet Architecture will be available upon official course upload."
        },
        "quiz": {
          "title": "SQL Endpoint Queries & Fleet Architecture Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"SQL Endpoint Queries & Fleet Architecture\"?",
              "options": [
                "Applying controlled, authorized techniques for OSQuery Concepts and Installation and Fleet Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for OSQuery, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "osquery-m2",
        "title": "Process Inventory, Scheduling & Triage",
        "lessons": [
          {
            "id": "osq-4",
            "classNum": "Class 04",
            "title": "Processes and Network Inventory",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review process and connection telemetry",
            "worksheet": "Analyze a mock endpoint inventory",
            "description": "Review process and connection telemetry"
          },
          {
            "id": "osq-5",
            "classNum": "Class 05",
            "title": "Detection and Scheduling",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand scheduled queries and alert logic",
            "worksheet": "Design a simple detection worksheet",
            "description": "Understand scheduled queries and alert logic"
          },
          {
            "id": "osq-6",
            "classNum": "Class 06",
            "title": "Final Endpoint Investigation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Investigate a supplied endpoint dataset",
            "worksheet": "Submit an endpoint triage report",
            "description": "Investigate a supplied endpoint dataset"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Process Inventory, Scheduling & Triage will be available upon official course upload."
        },
        "quiz": {
          "title": "Process Inventory, Scheduling & Triage Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Process Inventory, Scheduling & Triage\"?",
              "options": [
                "Applying controlled, authorized techniques for Processes and Network Inventory and Detection and Scheduling",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for OSQuery, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "sysmon": {
    "id": "sysmon",
    "name": "Sysmon",
    "icon": "SYS",
    "category": "Windows Event Enrichment",
    "team": "blue",
    "level": "Intermediate",
    "description": "Capture deep Windows telemetry with Sysmon XML configurations, monitor process creation, network callbacks, and driver loads.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "sysmon-m1",
        "title": "Configuration Baselines & Process Events",
        "lessons": [
          {
            "id": "sys-1",
            "classNum": "Class 01",
            "title": "Sysmon Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand Windows telemetry and event enrichment",
            "worksheet": "Map Sysmon to endpoint visibility",
            "description": "Understand Windows telemetry and event enrichment"
          },
          {
            "id": "sys-2",
            "classNum": "Class 02",
            "title": "Installation and Configuration",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review a safe baseline configuration",
            "worksheet": "Complete a configuration review",
            "description": "Review a safe baseline configuration"
          },
          {
            "id": "sys-3",
            "classNum": "Class 03",
            "title": "Process and Network Events",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand process creation and network connection events",
            "worksheet": "Interpret sample event records",
            "description": "Understand process creation and network connection events"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Configuration Baselines & Process Events will be available upon official course upload."
        },
        "quiz": {
          "title": "Configuration Baselines & Process Events Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Configuration Baselines & Process Events\"?",
              "options": [
                "Applying controlled, authorized techniques for Sysmon Overview and Installation and Configuration",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Sysmon, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "sysmon-m2",
        "title": "File/Registry Telemetry, Forwarding & Triage",
        "lessons": [
          {
            "id": "sys-4",
            "classNum": "Class 04",
            "title": "File and Registry Events",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review file creation and registry modification telemetry",
            "worksheet": "Classify sample events",
            "description": "Review file creation and registry modification telemetry"
          },
          {
            "id": "sys-5",
            "classNum": "Class 05",
            "title": "Event Forwarding and Detection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand forwarding and SIEM correlation",
            "worksheet": "Map events to detection use cases",
            "description": "Understand forwarding and SIEM correlation"
          },
          {
            "id": "sys-6",
            "classNum": "Class 06",
            "title": "Final Investigation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Analyze a supplied Sysmon event set",
            "worksheet": "Submit a timeline and findings",
            "description": "Analyze a supplied Sysmon event set"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for File/Registry Telemetry, Forwarding & Triage will be available upon official course upload."
        },
        "quiz": {
          "title": "File/Registry Telemetry, Forwarding & Triage Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"File/Registry Telemetry, Forwarding & Triage\"?",
              "options": [
                "Applying controlled, authorized techniques for File and Registry Events and Event Forwarding and Detection",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Sysmon, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "elk-stack": {
    "id": "elk-stack",
    "name": "ELK Stack",
    "icon": "ELK",
    "category": "Log Analysis & SIEM",
    "team": "blue",
    "level": "Intermediate",
    "description": "Ingest and visualize logs with Elasticsearch, Logstash, and Kibana, creating detection rules and correlation pipelines.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "elk-stack-m1",
        "title": "Architecture & Data Parsing Pipelines",
        "lessons": [
          {
            "id": "elk-1",
            "classNum": "Class 01",
            "title": "Elastic Stack Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand Elasticsearch, Logstash, and Kibana roles",
            "worksheet": "Draw the data pipeline",
            "description": "Understand Elasticsearch, Logstash, and Kibana roles"
          },
          {
            "id": "elk-2",
            "classNum": "Class 02",
            "title": "Lab Setup and Data Ingestion",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review a training deployment and sample data",
            "worksheet": "Map source-to-index flow",
            "description": "Review a training deployment and sample data"
          },
          {
            "id": "elk-3",
            "classNum": "Class 03",
            "title": "Parsing and Ingest Pipelines",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand fields, mappings, and parsing",
            "worksheet": "Normalize a sample log",
            "description": "Understand fields, mappings, and parsing"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Architecture & Data Parsing Pipelines will be available upon official course upload."
        },
        "quiz": {
          "title": "Architecture & Data Parsing Pipelines Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Architecture & Data Parsing Pipelines\"?",
              "options": [
                "Applying controlled, authorized techniques for Elastic Stack Overview and Lab Setup and Data Ingestion",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for ELK Stack, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "elk-stack-m2",
        "title": "Kibana Querying, Dashboards & Alerting",
        "lessons": [
          {
            "id": "elk-4",
            "classNum": "Class 04",
            "title": "Searching in Kibana",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use filters, queries, and time ranges",
            "worksheet": "Complete search exercises",
            "description": "Use filters, queries, and time ranges"
          },
          {
            "id": "elk-5",
            "classNum": "Class 05",
            "title": "Visualizations and Dashboards",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Build charts and operational dashboards",
            "worksheet": "Sketch a SOC dashboard",
            "description": "Build charts and operational dashboards"
          },
          {
            "id": "elk-6",
            "classNum": "Class 06",
            "title": "Detection Rules and Alerts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand rule logic and alert lifecycle",
            "worksheet": "Write detection logic in plain language",
            "description": "Understand rule logic and alert lifecycle"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Kibana Querying, Dashboards & Alerting will be available upon official course upload."
        },
        "quiz": {
          "title": "Kibana Querying, Dashboards & Alerting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Kibana Querying, Dashboards & Alerting\"?",
              "options": [
                "Applying controlled, authorized techniques for Searching in Kibana and Visualizations and Dashboards",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for ELK Stack, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "elk-stack-m3",
        "title": "Multi-Source Correlation & SOC Project",
        "lessons": [
          {
            "id": "elk-7",
            "classNum": "Class 07",
            "title": "Investigation and Correlation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate events across data sources",
            "worksheet": "Create a simple incident timeline",
            "description": "Correlate events across data sources"
          },
          {
            "id": "elk-8",
            "classNum": "Class 08",
            "title": "Final SIEM Project",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Present a dashboard and investigation",
            "worksheet": "Submit project report",
            "description": "Present a dashboard and investigation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Multi-Source Correlation & SOC Project will be available upon official course upload."
        },
        "quiz": {
          "title": "Multi-Source Correlation & SOC Project Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Multi-Source Correlation & SOC Project\"?",
              "options": [
                "Applying controlled, authorized techniques for Investigation and Correlation and Final SIEM Project",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for ELK Stack, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "incident-response": {
    "id": "incident-response",
    "name": "Incident Response",
    "icon": "IR",
    "category": "Incident Handling & DFIR",
    "team": "blue",
    "level": "Advanced",
    "description": "Master the full incident response lifecycle from detection and containment to eradication, evidence collection, and recovery.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "incident-response-m1",
        "title": "Lifecycle, Playbooks & Incident Triage",
        "lessons": [
          {
            "id": "ir-1",
            "classNum": "Class 01",
            "title": "Incident Response Lifecycle",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand preparation, detection, containment, eradication, recovery, lessons learned",
            "worksheet": "Label lifecycle stages",
            "description": "Understand preparation, detection, containment, eradication, recovery, lessons learned"
          },
          {
            "id": "ir-2",
            "classNum": "Class 02",
            "title": "Preparation and Playbooks",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Define roles, contacts, evidence, and playbooks",
            "worksheet": "Draft a ransomware tabletop playbook",
            "description": "Define roles, contacts, evidence, and playbooks"
          },
          {
            "id": "ir-3",
            "classNum": "Class 03",
            "title": "Detection and Triage",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Assess severity, scope, and confidence",
            "worksheet": "Complete a triage decision worksheet",
            "description": "Assess severity, scope, and confidence"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Lifecycle, Playbooks & Incident Triage will be available upon official course upload."
        },
        "quiz": {
          "title": "Lifecycle, Playbooks & Incident Triage Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Lifecycle, Playbooks & Incident Triage\"?",
              "options": [
                "Applying controlled, authorized techniques for Incident Response Lifecycle and Preparation and Playbooks",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Incident Response, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "incident-response-m2",
        "title": "Evidence Handling, Containment & Recovery",
        "lessons": [
          {
            "id": "ir-4",
            "classNum": "Class 04",
            "title": "Evidence Preservation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand chain of custody and volatile evidence",
            "worksheet": "Fill a sample evidence log",
            "description": "Understand chain of custody and volatile evidence"
          },
          {
            "id": "ir-5",
            "classNum": "Class 05",
            "title": "Containment Strategies",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Compare isolation and service continuity trade-offs",
            "worksheet": "Choose containment actions in scenarios",
            "description": "Compare isolation and service continuity trade-offs"
          },
          {
            "id": "ir-6",
            "classNum": "Class 06",
            "title": "Eradication and Recovery",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Plan clean restoration and validation",
            "worksheet": "Build a recovery checklist",
            "description": "Plan clean restoration and validation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Evidence Handling, Containment & Recovery will be available upon official course upload."
        },
        "quiz": {
          "title": "Evidence Handling, Containment & Recovery Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Evidence Handling, Containment & Recovery\"?",
              "options": [
                "Applying controlled, authorized techniques for Evidence Preservation and Containment Strategies",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Incident Response, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "incident-response-m3",
        "title": "Crisis Communications & Tabletop Simulation",
        "lessons": [
          {
            "id": "ir-7",
            "classNum": "Class 07",
            "title": "Communication and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Prepare stakeholder updates and incident records",
            "worksheet": "Draft an incident status report",
            "description": "Prepare stakeholder updates and incident records"
          },
          {
            "id": "ir-8",
            "classNum": "Class 08",
            "title": "Tabletop Final Exercise",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Work through a simulated incident",
            "worksheet": "Submit timeline, decisions, and lessons learned",
            "description": "Work through a simulated incident"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Crisis Communications & Tabletop Simulation will be available upon official course upload."
        },
        "quiz": {
          "title": "Crisis Communications & Tabletop Simulation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Crisis Communications & Tabletop Simulation\"?",
              "options": [
                "Applying controlled, authorized techniques for Communication and Reporting and Tabletop Final Exercise",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Incident Response, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "digital-forensics": {
    "id": "digital-forensics",
    "name": "Digital Forensics",
    "icon": "DF",
    "category": "Forensic Investigation",
    "team": "blue",
    "level": "Advanced",
    "description": "Acquire disk images, preserve chain of custody, parse Windows/Linux system artifacts, and reconstruct master timelines.",
    "instructor": "cyberM Team",
    "totalDuration": "3h 0m",
    "modules": [
      {
        "id": "digital-forensics-m1",
        "title": "Integrity, Imaging & File-System Fundamentals",
        "lessons": [
          {
            "id": "df-1",
            "classNum": "Class 01",
            "title": "Forensics Principles and Legal Scope",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand authorization, integrity, and chain of custody",
            "worksheet": "Complete an evidence-handling form",
            "description": "Understand authorization, integrity, and chain of custody"
          },
          {
            "id": "df-2",
            "classNum": "Class 02",
            "title": "Evidence Acquisition Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review forensic imaging and write blockers",
            "worksheet": "Compare acquisition approaches",
            "description": "Review forensic imaging and write blockers"
          },
          {
            "id": "df-3",
            "classNum": "Class 03",
            "title": "Hashing and Evidence Integrity",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand cryptographic hashes for integrity",
            "worksheet": "Verify sample evidence hashes",
            "description": "Understand cryptographic hashes for integrity"
          },
          {
            "id": "df-4",
            "classNum": "Class 04",
            "title": "Disk and File-System Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review partitions, metadata, and artifacts",
            "worksheet": "Label a mock disk layout",
            "description": "Review partitions, metadata, and artifacts"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Integrity, Imaging & File-System Fundamentals will be available upon official course upload."
        },
        "quiz": {
          "title": "Integrity, Imaging & File-System Fundamentals Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Integrity, Imaging & File-System Fundamentals\"?",
              "options": [
                "Applying controlled, authorized techniques for Forensics Principles and Legal Scope and Evidence Acquisition Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Digital Forensics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "digital-forensics-m2",
        "title": "Timeline Reconstruction & Host Artifacts",
        "lessons": [
          {
            "id": "df-5",
            "classNum": "Class 05",
            "title": "Timeline Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate timestamps and activity",
            "worksheet": "Build a timeline from sample artifacts",
            "description": "Correlate timestamps and activity"
          },
          {
            "id": "df-6",
            "classNum": "Class 06",
            "title": "Windows Artifacts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review event logs, registry, and user artifacts",
            "worksheet": "Analyze a supplied artifact set",
            "description": "Review event logs, registry, and user artifacts"
          },
          {
            "id": "df-7",
            "classNum": "Class 07",
            "title": "Linux Artifacts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review auth logs, shell history, and system artifacts",
            "worksheet": "Analyze a supplied Linux evidence set",
            "description": "Review auth logs, shell history, and system artifacts"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Timeline Reconstruction & Host Artifacts will be available upon official course upload."
        },
        "quiz": {
          "title": "Timeline Reconstruction & Host Artifacts Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Timeline Reconstruction & Host Artifacts\"?",
              "options": [
                "Applying controlled, authorized techniques for Timeline Analysis and Windows Artifacts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Digital Forensics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "digital-forensics-m3",
        "title": "Memory Concepts, Peer Review & Final Case",
        "lessons": [
          {
            "id": "df-8",
            "classNum": "Class 08",
            "title": "Memory Forensics Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand volatile memory and acquisition constraints",
            "worksheet": "Classify memory artifact types",
            "description": "Understand volatile memory and acquisition constraints"
          },
          {
            "id": "df-9",
            "classNum": "Class 09",
            "title": "Reporting and Peer Review",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Write reproducible, evidence-based conclusions",
            "worksheet": "Complete a forensic report template",
            "description": "Write reproducible, evidence-based conclusions"
          },
          {
            "id": "df-10",
            "classNum": "Class 10",
            "title": "Final Case Study",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Analyze a curated training evidence package",
            "worksheet": "Submit findings and chain-of-custody record",
            "description": "Analyze a curated training evidence package"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Memory Concepts, Peer Review & Final Case will be available upon official course upload."
        },
        "quiz": {
          "title": "Memory Concepts, Peer Review & Final Case Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Memory Concepts, Peer Review & Final Case\"?",
              "options": [
                "Applying controlled, authorized techniques for Memory Forensics Concepts and Reporting and Peer Review",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Digital Forensics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "threat-hunting": {
    "id": "threat-hunting",
    "name": "Threat Hunting",
    "icon": "TH",
    "category": "Proactive Cyber Defense",
    "team": "blue",
    "level": "Advanced",
    "description": "Proactively search networks and endpoints for advanced persistent threats using hypothesis-driven telemetry hunting.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "threat-hunting-m1",
        "title": "Hunt Hypotheses & Telemetry Mapping",
        "lessons": [
          {
            "id": "th-1",
            "classNum": "Class 01",
            "title": "Threat Hunting Foundations",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand hypotheses, telemetry, and hunt cycles",
            "worksheet": "Write a hunt hypothesis",
            "description": "Understand hypotheses, telemetry, and hunt cycles"
          },
          {
            "id": "th-2",
            "classNum": "Class 02",
            "title": "Data Sources and Visibility",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Map endpoint, identity, DNS, and network logs",
            "worksheet": "Build a telemetry coverage matrix",
            "description": "Map endpoint, identity, DNS, and network logs"
          },
          {
            "id": "th-3",
            "classNum": "Class 03",
            "title": "Behavioral Indicators",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand behavior-based indicators and context",
            "worksheet": "Classify sample behaviors",
            "description": "Understand behavior-based indicators and context"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Hunt Hypotheses & Telemetry Mapping will be available upon official course upload."
        },
        "quiz": {
          "title": "Hunt Hypotheses & Telemetry Mapping Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Hunt Hypotheses & Telemetry Mapping\"?",
              "options": [
                "Applying controlled, authorized techniques for Threat Hunting Foundations and Data Sources and Visibility",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Threat Hunting, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "threat-hunting-m2",
        "title": "Endpoint, Identity & Network Investigation",
        "lessons": [
          {
            "id": "th-4",
            "classNum": "Class 04",
            "title": "Hypothesis-Driven Hunting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Turn a hypothesis into testable queries",
            "worksheet": "Create a hunt plan",
            "description": "Turn a hypothesis into testable queries"
          },
          {
            "id": "th-5",
            "classNum": "Class 05",
            "title": "Endpoint Hunting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review process, persistence, and account activity datasets",
            "worksheet": "Analyze a mock endpoint timeline",
            "description": "Review process, persistence, and account activity datasets"
          },
          {
            "id": "th-6",
            "classNum": "Class 06",
            "title": "Network and Identity Hunting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate DNS, authentication, and network events",
            "worksheet": "Complete a correlation worksheet",
            "description": "Correlate DNS, authentication, and network events"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Endpoint, Identity & Network Investigation will be available upon official course upload."
        },
        "quiz": {
          "title": "Endpoint, Identity & Network Investigation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Endpoint, Identity & Network Investigation\"?",
              "options": [
                "Applying controlled, authorized techniques for Hypothesis-Driven Hunting and Endpoint Hunting",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Threat Hunting, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "threat-hunting-m3",
        "title": "Triage, Escalation & Detection Engineering",
        "lessons": [
          {
            "id": "th-7",
            "classNum": "Class 07",
            "title": "Triage and Escalation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Separate benign activity from suspicious patterns",
            "worksheet": "Write an escalation note",
            "description": "Separate benign activity from suspicious patterns"
          },
          {
            "id": "th-8",
            "classNum": "Class 08",
            "title": "Final Hunt Report",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Present hypothesis, evidence, and gaps",
            "worksheet": "Submit a hunt report and detection recommendations",
            "description": "Present hypothesis, evidence, and gaps"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Triage, Escalation & Detection Engineering will be available upon official course upload."
        },
        "quiz": {
          "title": "Triage, Escalation & Detection Engineering Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Triage, Escalation & Detection Engineering\"?",
              "options": [
                "Applying controlled, authorized techniques for Triage and Escalation and Final Hunt Report",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Threat Hunting, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "malware-analysis": {
    "id": "malware-analysis",
    "name": "Malware Analysis Basics",
    "icon": "MA",
    "category": "Reverse Engineering & Analysis",
    "team": "blue",
    "level": "Advanced",
    "description": "Analyze malicious binaries using safe sandbox environments, static metadata extraction, dynamic observation, and IOC generation.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "malware-analysis-m1",
        "title": "Safety, Static & Dynamic Sandbox Analysis",
        "lessons": [
          {
            "id": "ma-1",
            "classNum": "Class 01",
            "title": "Malware Analysis Safety",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand isolated labs, snapshots, and handling rules",
            "worksheet": "Complete a malware-lab safety checklist",
            "description": "Understand isolated labs, snapshots, and handling rules"
          },
          {
            "id": "ma-2",
            "classNum": "Class 02",
            "title": "Static Analysis Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review hashes, strings, metadata, and file types",
            "worksheet": "Analyze instructor-provided benign sample metadata",
            "description": "Review hashes, strings, metadata, and file types"
          },
          {
            "id": "ma-3",
            "classNum": "Class 03",
            "title": "Dynamic Analysis Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand sandbox observations and behavioral indicators",
            "worksheet": "Interpret a prerecorded sandbox report",
            "description": "Understand sandbox observations and behavioral indicators"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Safety, Static & Dynamic Sandbox Analysis will be available upon official course upload."
        },
        "quiz": {
          "title": "Safety, Static & Dynamic Sandbox Analysis Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Safety, Static & Dynamic Sandbox Analysis\"?",
              "options": [
                "Applying controlled, authorized techniques for Malware Analysis Safety and Static Analysis Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Malware Analysis Basics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "malware-analysis-m2",
        "title": "Process Behaviors, Persistence & Network IoCs",
        "lessons": [
          {
            "id": "ma-4",
            "classNum": "Class 04",
            "title": "Windows Process Behavior",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review processes, files, registry, and network indicators",
            "worksheet": "Classify sample behavior observations",
            "description": "Review processes, files, registry, and network indicators"
          },
          {
            "id": "ma-5",
            "classNum": "Class 05",
            "title": "Persistence Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand common persistence categories defensively",
            "worksheet": "Map persistence artifacts to detection sources",
            "description": "Understand common persistence categories defensively"
          },
          {
            "id": "ma-6",
            "classNum": "Class 06",
            "title": "Network Indicators",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review domains, IPs, and protocol indicators from sanitized reports",
            "worksheet": "Create an indicator worksheet",
            "description": "Review domains, IPs, and protocol indicators from sanitized reports"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Process Behaviors, Persistence & Network IoCs will be available upon official course upload."
        },
        "quiz": {
          "title": "Process Behaviors, Persistence & Network IoCs Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Process Behaviors, Persistence & Network IoCs\"?",
              "options": [
                "Applying controlled, authorized techniques for Windows Process Behavior and Persistence Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Malware Analysis Basics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "malware-analysis-m3",
        "title": "Endpoint Containment & Technical Reporting",
        "lessons": [
          {
            "id": "ma-7",
            "classNum": "Class 07",
            "title": "Detection and Containment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand endpoint controls and safe response",
            "worksheet": "Draft a containment checklist",
            "description": "Understand endpoint controls and safe response"
          },
          {
            "id": "ma-8",
            "classNum": "Class 08",
            "title": "Final Analysis Report",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Summarize evidence, confidence, and remediation",
            "worksheet": "Submit a report based on a sanitized sample",
            "description": "Summarize evidence, confidence, and remediation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Endpoint Containment & Technical Reporting will be available upon official course upload."
        },
        "quiz": {
          "title": "Endpoint Containment & Technical Reporting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Endpoint Containment & Technical Reporting\"?",
              "options": [
                "Applying controlled, authorized techniques for Detection and Containment and Final Analysis Report",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Malware Analysis Basics, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "firewall-mgmt": {
    "id": "firewall-mgmt",
    "name": "Firewall Management",
    "icon": "FW",
    "category": "Perimeter Security",
    "team": "blue",
    "level": "Beginner",
    "description": "Design stateful firewall rules, network segmentation zones, rule ordering, log analysis, and change-control workflows.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "firewall-mgmt-m1",
        "title": "Stateful Filtering & Policy Architecture",
        "lessons": [
          {
            "id": "fwm-1",
            "classNum": "Class 01",
            "title": "Firewall Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand stateful filtering, zones, and policy",
            "worksheet": "Draw a simple network-zone diagram",
            "description": "Understand stateful filtering, zones, and policy"
          },
          {
            "id": "fwm-2",
            "classNum": "Class 02",
            "title": "Rules and Policy Design",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Apply least privilege and rule ordering",
            "worksheet": "Write a sample allow/deny policy",
            "description": "Apply least privilege and rule ordering"
          },
          {
            "id": "fwm-3",
            "classNum": "Class 03",
            "title": "Host and Network Firewalls",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Compare endpoint and perimeter controls",
            "worksheet": "Map controls to network assets",
            "description": "Compare endpoint and perimeter controls"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Stateful Filtering & Policy Architecture will be available upon official course upload."
        },
        "quiz": {
          "title": "Stateful Filtering & Policy Architecture Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Stateful Filtering & Policy Architecture\"?",
              "options": [
                "Applying controlled, authorized techniques for Firewall Fundamentals and Rules and Policy Design",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Firewall Management, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "firewall-mgmt-m2",
        "title": "Log Auditing, Change Control & Lab Project",
        "lessons": [
          {
            "id": "fwm-4",
            "classNum": "Class 04",
            "title": "Logging and Monitoring",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand allowed/blocked logs and review",
            "worksheet": "Analyze sample firewall logs",
            "description": "Understand allowed/blocked logs and review"
          },
          {
            "id": "fwm-5",
            "classNum": "Class 05",
            "title": "Change Management and Troubleshooting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review approvals, rollback, and rule testing",
            "worksheet": "Complete a firewall change request",
            "description": "Review approvals, rollback, and rule testing"
          },
          {
            "id": "fwm-6",
            "classNum": "Class 06",
            "title": "Final Firewall Project",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Design and review a small lab firewall policy",
            "worksheet": "Submit policy, test plan, and rollback steps",
            "description": "Design and review a small lab firewall policy"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Log Auditing, Change Control & Lab Project will be available upon official course upload."
        },
        "quiz": {
          "title": "Log Auditing, Change Control & Lab Project Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Log Auditing, Change Control & Lab Project\"?",
              "options": [
                "Applying controlled, authorized techniques for Logging and Monitoring and Change Management and Troubleshooting",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Firewall Management, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "wireshark": {
    "id": "wireshark",
    "name": "Wireshark Network Analysis",
    "icon": "WNA",
    "category": "Deep Packet Inspection",
    "team": "blue",
    "level": "Beginner",
    "description": "Perform deep defensive packet analysis with Wireshark, dissect DNS/HTTP/TCP flows, and detect anomalous traffic patterns.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "wireshark-m1",
        "title": "Network Monitoring & Protocol Inspection",
        "lessons": [
          {
            "id": "wsh-1",
            "classNum": "Class 01",
            "title": "Network Monitoring Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand packet capture, network layers, and monitoring scope",
            "worksheet": "Label the OSI/TCP-IP layers",
            "description": "Understand packet capture, network layers, and monitoring scope"
          },
          {
            "id": "wsh-2",
            "classNum": "Class 02",
            "title": "Installation and Capture Setup",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Install Wireshark and capture traffic in an isolated lab",
            "worksheet": "Record interface and capture settings",
            "description": "Install Wireshark and capture traffic in an isolated lab"
          },
          {
            "id": "wsh-3",
            "classNum": "Class 03",
            "title": "Packet and Protocol Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read Ethernet, IP, TCP, UDP, and ICMP fields",
            "worksheet": "Annotate a sample packet",
            "description": "Read Ethernet, IP, TCP, UDP, and ICMP fields"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Network Monitoring & Protocol Inspection will be available upon official course upload."
        },
        "quiz": {
          "title": "Network Monitoring & Protocol Inspection Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Network Monitoring & Protocol Inspection\"?",
              "options": [
                "Applying controlled, authorized techniques for Network Monitoring Fundamentals and Installation and Capture Setup",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wireshark Network Analysis, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "wireshark-m2",
        "title": "Session Stream Analysis & Display Filters",
        "lessons": [
          {
            "id": "wsh-4",
            "classNum": "Class 04",
            "title": "DNS and HTTP Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Interpret DNS lookups and safe HTTP training traffic",
            "worksheet": "Analyze a provided PCAP worksheet",
            "description": "Interpret DNS lookups and safe HTTP training traffic"
          },
          {
            "id": "wsh-5",
            "classNum": "Class 05",
            "title": "TCP Sessions and Troubleshooting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand handshakes, retransmissions, and resets",
            "worksheet": "Identify common TCP behaviors in sample captures",
            "description": "Understand handshakes, retransmissions, and resets"
          },
          {
            "id": "wsh-6",
            "classNum": "Class 06",
            "title": "Display Filters",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use filters to focus on relevant traffic",
            "worksheet": "Complete filter-writing exercises",
            "description": "Use filters to focus on relevant traffic"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Session Stream Analysis & Display Filters will be available upon official course upload."
        },
        "quiz": {
          "title": "Session Stream Analysis & Display Filters Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Session Stream Analysis & Display Filters\"?",
              "options": [
                "Applying controlled, authorized techniques for DNS and HTTP Analysis and TCP Sessions and Troubleshooting",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wireshark Network Analysis, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "wireshark-m3",
        "title": "Threat Indicators & Investigation Report",
        "lessons": [
          {
            "id": "wsh-7",
            "classNum": "Class 07",
            "title": "Suspicious Traffic Indicators",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Recognize unusual patterns in instructor-provided sanitized captures",
            "worksheet": "Classify sample indicators and possible benign causes",
            "description": "Recognize unusual patterns in instructor-provided sanitized captures"
          },
          {
            "id": "wsh-8",
            "classNum": "Class 08",
            "title": "Final Network Investigation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate packet evidence and summarize findings",
            "worksheet": "Submit a network-analysis report",
            "description": "Correlate packet evidence and summarize findings"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Threat Indicators & Investigation Report will be available upon official course upload."
        },
        "quiz": {
          "title": "Threat Indicators & Investigation Report Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Threat Indicators & Investigation Report\"?",
              "options": [
                "Applying controlled, authorized techniques for Suspicious Traffic Indicators and Final Network Investigation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Wireshark Network Analysis, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "zeek": {
    "id": "zeek",
    "name": "Zeek Network Security Monitoring",
    "icon": "ZK",
    "category": "Network Security Monitoring",
    "team": "blue",
    "level": "Intermediate",
    "description": "Monitor enterprise network metadata with Zeek, analyze connection/DNS/SSL logs, write detection scripts, and integrate with SIEM.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "zeek-m1",
        "title": "Sensor Architecture & Core Protocol Logs",
        "lessons": [
          {
            "id": "zk-1",
            "classNum": "Class 01",
            "title": "Zeek Architecture",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand sensors, logs and event-driven analysis",
            "worksheet": "Map Zeek data flow",
            "description": "Understand sensors, logs and event-driven analysis"
          },
          {
            "id": "zk-2",
            "classNum": "Class 02",
            "title": "Installation and Lab Setup",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Prepare a local monitoring lab with sample traffic",
            "worksheet": "Document lab setup",
            "description": "Prepare a local monitoring lab with sample traffic"
          },
          {
            "id": "zk-3",
            "classNum": "Class 03",
            "title": "Core Network Logs",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read connection, DNS, HTTP and SSL/TLS logs",
            "worksheet": "Interpret sample log records",
            "description": "Read connection, DNS, HTTP and SSL/TLS logs"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Sensor Architecture & Core Protocol Logs will be available upon official course upload."
        },
        "quiz": {
          "title": "Sensor Architecture & Core Protocol Logs Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Sensor Architecture & Core Protocol Logs\"?",
              "options": [
                "Applying controlled, authorized techniques for Zeek Architecture and Installation and Lab Setup",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Zeek Network Security Monitoring, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "zeek-m2",
        "title": "Metadata Correlation & Notice Scripting",
        "lessons": [
          {
            "id": "zk-4",
            "classNum": "Class 04",
            "title": "Protocol Analysis",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate protocol metadata across events",
            "worksheet": "Complete a log-correlation worksheet",
            "description": "Correlate protocol metadata across events"
          },
          {
            "id": "zk-5",
            "classNum": "Class 05",
            "title": "Scripting Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand Zeek scripts and notice generation",
            "worksheet": "Annotate a simple detection concept",
            "description": "Understand Zeek scripts and notice generation"
          },
          {
            "id": "zk-6",
            "classNum": "Class 06",
            "title": "Threat Hunting with Zeek",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Hunt through instructor-provided sanitized logs",
            "worksheet": "Record evidence and hypotheses",
            "description": "Hunt through instructor-provided sanitized logs"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Metadata Correlation & Notice Scripting will be available upon official course upload."
        },
        "quiz": {
          "title": "Metadata Correlation & Notice Scripting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Metadata Correlation & Notice Scripting\"?",
              "options": [
                "Applying controlled, authorized techniques for Protocol Analysis and Scripting Concepts",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Zeek Network Security Monitoring, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "zeek-m3",
        "title": "SIEM Ingestion & Traffic Investigation",
        "lessons": [
          {
            "id": "zk-7",
            "classNum": "Class 07",
            "title": "Integration and Alerting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand SIEM ingestion and enrichment",
            "worksheet": "Design a basic integration diagram",
            "description": "Understand SIEM ingestion and enrichment"
          },
          {
            "id": "zk-8",
            "classNum": "Class 08",
            "title": "Final Investigation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Investigate a supplied network-traffic dataset",
            "worksheet": "Submit a network investigation report",
            "description": "Investigate a supplied network-traffic dataset"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for SIEM Ingestion & Traffic Investigation will be available upon official course upload."
        },
        "quiz": {
          "title": "SIEM Ingestion & Traffic Investigation Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"SIEM Ingestion & Traffic Investigation\"?",
              "options": [
                "Applying controlled, authorized techniques for Integration and Alerting and Final Investigation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Zeek Network Security Monitoring, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "velociraptor": {
    "id": "velociraptor",
    "name": "Velociraptor Endpoint Detection & Response",
    "icon": "VEL",
    "category": "Digital Forensics & EDR",
    "team": "blue",
    "level": "Advanced",
    "description": "Hunt and respond to enterprise threats across thousands of endpoints with Velociraptor VQL queries and artifact collection.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "velociraptor-m1",
        "title": "Visibility Architecture & Artifact Collection",
        "lessons": [
          {
            "id": "vel-1",
            "classNum": "Class 01",
            "title": "Endpoint Visibility Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand endpoint telemetry and response lifecycle",
            "worksheet": "Map endpoint evidence sources",
            "description": "Understand endpoint telemetry and response lifecycle"
          },
          {
            "id": "vel-2",
            "classNum": "Class 02",
            "title": "Velociraptor Architecture",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore clients, server, hunts and artifacts",
            "worksheet": "Label platform components",
            "description": "Explore clients, server, hunts and artifacts"
          },
          {
            "id": "vel-3",
            "classNum": "Class 03",
            "title": "Artifact Collection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review safe collection from test endpoints",
            "worksheet": "Choose artifacts for a scenario",
            "description": "Review safe collection from test endpoints"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Visibility Architecture & Artifact Collection will be available upon official course upload."
        },
        "quiz": {
          "title": "Visibility Architecture & Artifact Collection Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Visibility Architecture & Artifact Collection\"?",
              "options": [
                "Applying controlled, authorized techniques for Endpoint Visibility Concepts and Velociraptor Architecture",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Velociraptor Endpoint Detection & Response, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "velociraptor-m2",
        "title": "VQL Query Syntax & Hunt Management",
        "lessons": [
          {
            "id": "vel-4",
            "classNum": "Class 04",
            "title": "VQL Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand query structure and endpoint data",
            "worksheet": "Interpret sample VQL results",
            "description": "Understand query structure and endpoint data"
          },
          {
            "id": "vel-5",
            "classNum": "Class 05",
            "title": "Hunt Management",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Plan scoped hunts and evidence handling",
            "worksheet": "Create a hunt plan",
            "description": "Plan scoped hunts and evidence handling"
          },
          {
            "id": "vel-6",
            "classNum": "Class 06",
            "title": "Incident Triage",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate endpoint findings with an incident timeline",
            "worksheet": "Build a timeline worksheet",
            "description": "Correlate endpoint findings with an incident timeline"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for VQL Query Syntax & Hunt Management will be available upon official course upload."
        },
        "quiz": {
          "title": "VQL Query Syntax & Hunt Management Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"VQL Query Syntax & Hunt Management\"?",
              "options": [
                "Applying controlled, authorized techniques for VQL Fundamentals and Hunt Management",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Velociraptor Endpoint Detection & Response, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "velociraptor-m3",
        "title": "Containment Protocols & DFIR Analysis",
        "lessons": [
          {
            "id": "vel-7",
            "classNum": "Class 07",
            "title": "Containment and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review response approvals and documentation",
            "worksheet": "Draft an incident action log",
            "description": "Review response approvals and documentation"
          },
          {
            "id": "vel-8",
            "classNum": "Class 08",
            "title": "Final Investigation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Analyze a provided endpoint evidence bundle",
            "worksheet": "Submit a DFIR summary",
            "description": "Analyze a provided endpoint evidence bundle"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Containment Protocols & DFIR Analysis will be available upon official course upload."
        },
        "quiz": {
          "title": "Containment Protocols & DFIR Analysis Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Containment Protocols & DFIR Analysis\"?",
              "options": [
                "Applying controlled, authorized techniques for Containment and Reporting and Final Investigation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Velociraptor Endpoint Detection & Response, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "yara-sigma": {
    "id": "yara-sigma",
    "name": "YARA & Sigma Detection Engineering",
    "icon": "Y&S",
    "category": "Detection Engineering",
    "team": "blue",
    "level": "Intermediate",
    "description": "Write, validate, and tune YARA file signatures and Sigma generic log rules mapped to MITRE ATT&CK techniques.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "yara-sigma-m1",
        "title": "Detection Lifecycle & YARA Signatures",
        "lessons": [
          {
            "id": "ys-1",
            "classNum": "Class 01",
            "title": "Detection Engineering Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand indicators, telemetry and rule lifecycle",
            "worksheet": "Detection lifecycle worksheet",
            "description": "Understand indicators, telemetry and rule lifecycle"
          },
          {
            "id": "ys-2",
            "classNum": "Class 02",
            "title": "YARA Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand strings, conditions and rule structure",
            "worksheet": "Annotate a sample benign rule",
            "description": "Understand strings, conditions and rule structure"
          },
          {
            "id": "ys-3",
            "classNum": "Class 03",
            "title": "YARA Rule Validation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Test rules against instructor-provided benign files",
            "worksheet": "Record test outcomes",
            "description": "Test rules against instructor-provided benign files"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Detection Lifecycle & YARA Signatures will be available upon official course upload."
        },
        "quiz": {
          "title": "Detection Lifecycle & YARA Signatures Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Detection Lifecycle & YARA Signatures\"?",
              "options": [
                "Applying controlled, authorized techniques for Detection Engineering Basics and YARA Fundamentals",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for YARA & Sigma Detection Engineering, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "yara-sigma-m2",
        "title": "Sigma Portable Rules & ATT&CK Mapping",
        "lessons": [
          {
            "id": "ys-4",
            "classNum": "Class 04",
            "title": "Sigma Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand portable log detection rule structure",
            "worksheet": "Label Sigma rule fields",
            "description": "Understand portable log detection rule structure"
          },
          {
            "id": "ys-5",
            "classNum": "Class 05",
            "title": "Sigma Rule Tuning",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Reduce false positives using sample event data",
            "worksheet": "Tune a sample detection",
            "description": "Reduce false positives using sample event data"
          },
          {
            "id": "ys-6",
            "classNum": "Class 06",
            "title": "Mapping to ATT&CK",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Relate detections to adversary behavior categories",
            "worksheet": "Map sample rules to techniques",
            "description": "Relate detections to adversary behavior categories"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Sigma Portable Rules & ATT&CK Mapping will be available upon official course upload."
        },
        "quiz": {
          "title": "Sigma Portable Rules & ATT&CK Mapping Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Sigma Portable Rules & ATT&CK Mapping\"?",
              "options": [
                "Applying controlled, authorized techniques for Sigma Fundamentals and Sigma Rule Tuning",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for YARA & Sigma Detection Engineering, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "yara-sigma-m3",
        "title": "Validation Pipeline & Final Detection Pack",
        "lessons": [
          {
            "id": "ys-7",
            "classNum": "Class 07",
            "title": "Testing and Versioning",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review validation, version control and peer review",
            "worksheet": "Create a rule review checklist",
            "description": "Review validation, version control and peer review"
          },
          {
            "id": "ys-8",
            "classNum": "Class 08",
            "title": "Final Detection Pack",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Submit a small set of tested training detections",
            "worksheet": "Submit rule pack and test notes",
            "description": "Submit a small set of tested training detections"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Validation Pipeline & Final Detection Pack will be available upon official course upload."
        },
        "quiz": {
          "title": "Validation Pipeline & Final Detection Pack Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Validation Pipeline & Final Detection Pack\"?",
              "options": [
                "Applying controlled, authorized techniques for Testing and Versioning and Final Detection Pack",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for YARA & Sigma Detection Engineering, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "thehive-cortex": {
    "id": "thehive-cortex",
    "name": "TheHive & Cortex Incident Case Management",
    "icon": "THC",
    "category": "Security Incident Management",
    "team": "blue",
    "level": "Intermediate",
    "description": "Organize SOC investigations with TheHive case management, trigger Cortex automated observables enrichment, and collaborate during incidents.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "thehive-cortex-m1",
        "title": "Case Architecture & Alert Triage",
        "lessons": [
          {
            "id": "thc-1",
            "classNum": "Class 01",
            "title": "Case Management Concepts",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand alert-to-case lifecycle and roles",
            "worksheet": "Draw an incident workflow",
            "description": "Understand alert-to-case lifecycle and roles"
          },
          {
            "id": "thc-2",
            "classNum": "Class 02",
            "title": "TheHive Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore cases, tasks, observables and templates",
            "worksheet": "Label case components",
            "description": "Explore cases, tasks, observables and templates"
          },
          {
            "id": "thc-3",
            "classNum": "Class 03",
            "title": "Case Triage",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Create a case from a simulated alert",
            "worksheet": "Complete a triage form",
            "description": "Create a case from a simulated alert"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Case Architecture & Alert Triage will be available upon official course upload."
        },
        "quiz": {
          "title": "Case Architecture & Alert Triage Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Case Architecture & Alert Triage\"?",
              "options": [
                "Applying controlled, authorized techniques for Case Management Concepts and TheHive Overview",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for TheHive & Cortex Incident Case Management, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "thehive-cortex-m2",
        "title": "Cortex Observable Enrichment & Collaboration",
        "lessons": [
          {
            "id": "thc-4",
            "classNum": "Class 04",
            "title": "Cortex Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand analyzers, responders and enrichment",
            "worksheet": "Match enrichment tasks to evidence",
            "description": "Understand analyzers, responders and enrichment"
          },
          {
            "id": "thc-5",
            "classNum": "Class 05",
            "title": "Collaboration and Reporting",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Document actions, evidence and decisions",
            "worksheet": "Write an incident case summary",
            "description": "Document actions, evidence and decisions"
          },
          {
            "id": "thc-6",
            "classNum": "Class 06",
            "title": "Final Tabletop Exercise",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Manage a simulated incident case from intake to closure",
            "worksheet": "Submit a completed case record",
            "description": "Manage a simulated incident case from intake to closure"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Cortex Observable Enrichment & Collaboration will be available upon official course upload."
        },
        "quiz": {
          "title": "Cortex Observable Enrichment & Collaboration Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Cortex Observable Enrichment & Collaboration\"?",
              "options": [
                "Applying controlled, authorized techniques for Cortex Overview and Collaboration and Reporting",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for TheHive & Cortex Incident Case Management, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "threat-intelligence": {
    "id": "threat-intelligence",
    "name": "Threat Intelligence (MISP, OpenCTI)",
    "icon": "TI",
    "category": "Cyber Threat Intelligence",
    "team": "blue",
    "level": "Intermediate",
    "description": "Model threat actors, IOCs, and attack vectors with MISP and OpenCTI knowledge graphs to inform defensive posture.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "threat-intelligence-m1",
        "title": "Intelligence Tiers & MISP / OpenCTI Platforms",
        "lessons": [
          {
            "id": "cti-1",
            "classNum": "Class 01",
            "title": "Threat Intelligence Foundations",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand strategic, operational and tactical intelligence",
            "worksheet": "Classify intelligence examples",
            "description": "Understand strategic, operational and tactical intelligence"
          },
          {
            "id": "cti-2",
            "classNum": "Class 02",
            "title": "MISP Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Explore events, attributes, tags and sharing controls",
            "worksheet": "Annotate a sample event",
            "description": "Explore events, attributes, tags and sharing controls"
          },
          {
            "id": "cti-3",
            "classNum": "Class 03",
            "title": "OpenCTI Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand knowledge graphs and entity relationships",
            "worksheet": "Map a sample threat entity graph",
            "description": "Understand knowledge graphs and entity relationships"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Intelligence Tiers & MISP / OpenCTI Platforms will be available upon official course upload."
        },
        "quiz": {
          "title": "Intelligence Tiers & MISP / OpenCTI Platforms Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Intelligence Tiers & MISP / OpenCTI Platforms\"?",
              "options": [
                "Applying controlled, authorized techniques for Threat Intelligence Foundations and MISP Overview",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Threat Intelligence (MISP, OpenCTI), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "threat-intelligence-m2",
        "title": "Indicator Lifecycle, Enrichment & Briefs",
        "lessons": [
          {
            "id": "cti-4",
            "classNum": "Class 04",
            "title": "Indicator Lifecycle",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review confidence, expiry, context and false positives",
            "worksheet": "Complete an IOC quality worksheet",
            "description": "Review confidence, expiry, context and false positives"
          },
          {
            "id": "cti-5",
            "classNum": "Class 05",
            "title": "Intelligence Enrichment",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate sample indicators with incident evidence",
            "worksheet": "Prepare an enrichment summary",
            "description": "Correlate sample indicators with incident evidence"
          },
          {
            "id": "cti-6",
            "classNum": "Class 06",
            "title": "Final Intelligence Brief",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Produce a concise intelligence report from synthetic data",
            "worksheet": "Submit a threat intelligence brief",
            "description": "Produce a concise intelligence report from synthetic data"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Indicator Lifecycle, Enrichment & Briefs will be available upon official course upload."
        },
        "quiz": {
          "title": "Indicator Lifecycle, Enrichment & Briefs Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Indicator Lifecycle, Enrichment & Briefs\"?",
              "options": [
                "Applying controlled, authorized techniques for Indicator Lifecycle and Intelligence Enrichment",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Threat Intelligence (MISP, OpenCTI), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "security-onion": {
    "id": "security-onion",
    "name": "Security Onion Network Security Monitoring",
    "icon": "SO",
    "category": "NSM & Threat Hunting Platform",
    "team": "blue",
    "level": "Advanced",
    "description": "Operate Security Onion Linux distribution for enterprise network visibility, correlating Zeek, Suricata, and Kibana logs.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 24m",
    "modules": [
      {
        "id": "security-onion-m1",
        "title": "NSM Architecture & Platform Setup",
        "lessons": [
          {
            "id": "so-1",
            "classNum": "Class 01",
            "title": "NSM Architecture",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand sensors, data pipelines and analyst workflow",
            "worksheet": "Draw a monitoring architecture",
            "description": "Understand sensors, data pipelines and analyst workflow"
          },
          {
            "id": "so-2",
            "classNum": "Class 02",
            "title": "Lab Deployment Overview",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review sizing, interfaces and isolated lab setup",
            "worksheet": "Prepare a deployment checklist",
            "description": "Review sizing, interfaces and isolated lab setup"
          },
          {
            "id": "so-3",
            "classNum": "Class 03",
            "title": "Alerts and Dashboards",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand alerts, dashboards and event context",
            "worksheet": "Interpret sample alerts",
            "description": "Understand alerts, dashboards and event context"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for NSM Architecture & Platform Setup will be available upon official course upload."
        },
        "quiz": {
          "title": "NSM Architecture & Platform Setup Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"NSM Architecture & Platform Setup\"?",
              "options": [
                "Applying controlled, authorized techniques for NSM Architecture and Lab Deployment Overview",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Security Onion Network Security Monitoring, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "security-onion-m2",
        "title": "Sensor Correlation & Guided Threat Hunting",
        "lessons": [
          {
            "id": "so-4",
            "classNum": "Class 04",
            "title": "Zeek and Suricata Data",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Correlate network metadata and IDS detections",
            "worksheet": "Compare sample network events",
            "description": "Correlate network metadata and IDS detections"
          },
          {
            "id": "so-5",
            "classNum": "Class 05",
            "title": "Hunt and Pivot",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Pivot across hosts, sessions and indicators",
            "worksheet": "Complete a guided hunt worksheet",
            "description": "Pivot across hosts, sessions and indicators"
          },
          {
            "id": "so-6",
            "classNum": "Class 06",
            "title": "Triage and Escalation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Prioritize alerts and document escalation",
            "worksheet": "Write an escalation note",
            "description": "Prioritize alerts and document escalation"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Sensor Correlation & Guided Threat Hunting will be available upon official course upload."
        },
        "quiz": {
          "title": "Sensor Correlation & Guided Threat Hunting Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Sensor Correlation & Guided Threat Hunting\"?",
              "options": [
                "Applying controlled, authorized techniques for Zeek and Suricata Data and Hunt and Pivot",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Security Onion Network Security Monitoring, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "security-onion-m3",
        "title": "Sensor Optimization & Incident Findings",
        "lessons": [
          {
            "id": "so-7",
            "classNum": "Class 07",
            "title": "Tuning and Maintenance",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review noise reduction and sensor health",
            "worksheet": "Create a tuning checklist",
            "description": "Review noise reduction and sensor health"
          },
          {
            "id": "so-8",
            "classNum": "Class 08",
            "title": "Final Investigation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Investigate a supplied dataset and present findings",
            "worksheet": "Submit an NSM investigation report",
            "description": "Investigate a supplied dataset and present findings"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Sensor Optimization & Incident Findings will be available upon official course upload."
        },
        "quiz": {
          "title": "Sensor Optimization & Incident Findings Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Sensor Optimization & Incident Findings\"?",
              "options": [
                "Applying controlled, authorized techniques for Tuning and Maintenance and Final Investigation",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Security Onion Network Security Monitoring, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "container-security": {
    "id": "container-security",
    "name": "Container & Cloud-Native Security (Trivy, Falco)",
    "icon": "CNS",
    "category": "Cloud-Native & Container Defense",
    "team": "blue",
    "level": "Intermediate",
    "description": "Scan container images and configurations for CVEs with Trivy, and enforce runtime kernel syscall detections with Falco.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "container-security-m1",
        "title": "Container Threat Modeling & Image Scanning",
        "lessons": [
          {
            "id": "cns-1",
            "classNum": "Class 01",
            "title": "Container Security Basics",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand images, registries, workloads and runtime",
            "worksheet": "Container threat model worksheet",
            "description": "Understand images, registries, workloads and runtime"
          },
          {
            "id": "cns-2",
            "classNum": "Class 02",
            "title": "Trivy Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review image, filesystem and configuration scan reports",
            "worksheet": "Interpret a sample Trivy report",
            "description": "Review image, filesystem and configuration scan reports"
          },
          {
            "id": "cns-3",
            "classNum": "Class 03",
            "title": "Dependency and Secret Risks",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand vulnerable packages and exposed secrets",
            "worksheet": "Classify sample findings",
            "description": "Understand vulnerable packages and exposed secrets"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Container Threat Modeling & Image Scanning will be available upon official course upload."
        },
        "quiz": {
          "title": "Container Threat Modeling & Image Scanning Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Container Threat Modeling & Image Scanning\"?",
              "options": [
                "Applying controlled, authorized techniques for Container Security Basics and Trivy Fundamentals",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Container & Cloud-Native Security (Trivy, Falco), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "container-security-m2",
        "title": "Kernel Syscall Detection & CI/CD Pipeline Gates",
        "lessons": [
          {
            "id": "cns-4",
            "classNum": "Class 04",
            "title": "Falco Runtime Detection",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand runtime rules and event signals",
            "worksheet": "Annotate sample runtime alerts",
            "description": "Understand runtime rules and event signals"
          },
          {
            "id": "cns-5",
            "classNum": "Class 05",
            "title": "Remediation and CI Integration",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review patching, build gates and policy checks",
            "worksheet": "Create a remediation workflow",
            "description": "Review patching, build gates and policy checks"
          },
          {
            "id": "cns-6",
            "classNum": "Class 06",
            "title": "Final Container Review",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Assess a deliberately vulnerable local image report",
            "worksheet": "Submit a container security summary",
            "description": "Assess a deliberately vulnerable local image report"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Kernel Syscall Detection & CI/CD Pipeline Gates will be available upon official course upload."
        },
        "quiz": {
          "title": "Kernel Syscall Detection & CI/CD Pipeline Gates Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Kernel Syscall Detection & CI/CD Pipeline Gates\"?",
              "options": [
                "Applying controlled, authorized techniques for Falco Runtime Detection and Remediation and CI Integration",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Container & Cloud-Native Security (Trivy, Falco), which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  },
  "email-security": {
    "id": "email-security",
    "name": "Email Security & Phishing Analysis",
    "icon": "ESP",
    "category": "Mail Security & Threat Analysis",
    "team": "blue",
    "level": "Beginner",
    "description": "Analyze email headers, understand SPF/DKIM/DMARC authentication, safely triage suspicious attachments, and investigate phishing campaigns.",
    "instructor": "cyberM Team",
    "totalDuration": "2h 48m",
    "modules": [
      {
        "id": "email-security-m1",
        "title": "Email Protocols & Authentication Standards",
        "lessons": [
          {
            "id": "esp-1",
            "classNum": "Class 01",
            "title": "Email Threat Fundamentals",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand phishing, spoofing and business email compromise",
            "worksheet": "Identify warning signs in sample emails",
            "description": "Understand phishing, spoofing and business email compromise"
          },
          {
            "id": "esp-2",
            "classNum": "Class 02",
            "title": "Email Headers",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Read sender, routing and authentication fields",
            "worksheet": "Annotate a sanitized email header",
            "description": "Read sender, routing and authentication fields"
          },
          {
            "id": "esp-3",
            "classNum": "Class 03",
            "title": "SPF, DKIM and DMARC",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Understand domain email authentication",
            "worksheet": "Complete an authentication worksheet",
            "description": "Understand domain email authentication"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Email Protocols & Authentication Standards will be available upon official course upload."
        },
        "quiz": {
          "title": "Email Protocols & Authentication Standards Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Email Protocols & Authentication Standards\"?",
              "options": [
                "Applying controlled, authorized techniques for Email Threat Fundamentals and Email Headers",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Email Security & Phishing Analysis, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      },
      {
        "id": "email-security-m2",
        "title": "Indicator Triage, Containment & Campaign Analysis",
        "lessons": [
          {
            "id": "esp-4",
            "classNum": "Class 04",
            "title": "URL and Attachment Triage",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Use safe, non-executing analysis practices",
            "worksheet": "Classify sample indicators",
            "description": "Use safe, non-executing analysis practices"
          },
          {
            "id": "esp-5",
            "classNum": "Class 05",
            "title": "User Reporting and Response",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Review reporting, containment and communications",
            "worksheet": "Draft a phishing response checklist",
            "description": "Review reporting, containment and communications"
          },
          {
            "id": "esp-6",
            "classNum": "Class 06",
            "title": "Final Phishing Investigation",
            "duration": "15:00",
            "videoUrl": null,
            "coverage": "Analyze a synthetic phishing case",
            "worksheet": "Submit an incident triage report",
            "description": "Analyze a synthetic phishing case"
          }
        ],
        "worksheetInfo": {
          "status": "Awaiting Upload",
          "note": "Printable worksheet PDF for Indicator Triage, Containment & Campaign Analysis will be available upon official course upload."
        },
        "quiz": {
          "title": "Indicator Triage, Containment & Campaign Analysis Assessment",
          "questions": [
            {
              "q": "What is the primary security objective emphasized in \"Indicator Triage, Containment & Campaign Analysis\"?",
              "options": [
                "Applying controlled, authorized techniques for URL and Attachment Triage and User Reporting and Response",
                "Executing arbitrary commands without scope or documentation",
                "Deploying untested scripts on production enterprise systems",
                "Bypassing legal guidelines and engagement boundaries"
              ],
              "answer": 0
            },
            {
              "q": "When performing lab exercises for Email Security & Phishing Analysis, which requirement is essential?",
              "options": [
                "Confining all testing exclusively to authorized systems or local lab sandboxes",
                "Testing external third-party targets without written permission",
                "Disabling all logging and evidence retention",
                "Ignoring rate limits and denial of service risks"
              ],
              "answer": 0
            }
          ]
        }
      }
    ]
  }
};
