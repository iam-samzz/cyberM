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

/* ========== VERTICAL ROADMAPS DATA STRUCTURE ========== */
const roadmapsData = {
  basics: {
    id: "basics",
    title: "Cybersecurity Basics (Foundations)",
    isMain: true,
    badge: "Main Foundation Roadmap",
    desc: "Master the essential building blocks of computing, networks, operating system mechanics, and core defense principles before specializing in professional security domains.",
    nodes: [
      {
        number: 1,
        title: "Computer Mechanics & OS Fundamentals",
        overview: "Before defending or attacking systems, you must understand how operating systems execute processes, manage memory, manage access permissions, and store critical system data.",
        topics: [
          {
            category: "Windows Internals",
            items: ["User Accounts & Privileges", "Process Management & Services", "Windows Registry & File System structure"]
          },
          {
            category: "Linux Administration",
            items: ["CLI Navigation & File Permissions (chmod, chown)", "Process control (ps, top, kill)", "Package management & system logs"]
          }
        ],
        tools: ["Windows PowerShell", "Linux Terminal", "Command Prompt", "Bash"]
      },
      {
        number: 2,
        title: "Networking & Communication Protocols",
        overview: "Data flows across networks in structured packets. Understanding network architecture, IP schemes, and core traffic protocols is mandatory for all cybersecurity fields.",
        topics: [
          {
            category: "Models & Addressing",
            items: ["OSI 7-Layer & TCP/IP 4-Layer Models", "IPv4 / IPv6 Addressing & Subnetting", "CIDR Notation & Local vs Public IPs"]
          },
          {
            category: "Core Protocols & Ports",
            items: ["HTTP (80) / HTTPS (443) & Encryption", "DNS (53) & Domain Resolution", "DHCP (67/68), SSH (22), RDP (3389)"]
          }
        ],
        tools: ["ping", "traceroute", "netstat", "nslookup", "ipconfig / ifconfig"]
      },
      {
        number: 3,
        title: "Core Security Principles & Threats",
        overview: "Learn the foundational frameworks, attack techniques, and defense strategies used across defensive, offensive, and administrative security roles.",
        topics: [
          {
            category: "Defense Concepts",
            items: ["The CIA Triad (Confidentiality, Integrity, Availability)", "Authentication vs Authorization (MFA, RBAC)", "Defense in Depth & Zero Trust Principles"]
          },
          {
            category: "Threat Landscape",
            items: ["Malware Types (Viruses, Trojans, Ransomware, Keyloggers)", "Common Vectors (Phishing, Social Engineering, Brute Force)"]
          }
        ],
        tools: ["VirusTotal", "CyberChef", "Hashcalc", "Firewalls"]
      },
      {
        number: 4,
        title: "Hands-on Lab Environment & Packet Analysis",
        overview: "Set up isolated hypervisors and learn to inspect raw network packets in real-time to analyze standard and suspicious traffic.",
        topics: [
          {
            category: "Virtualization & Setup",
            items: ["Setting up isolated VMs (VirtualBox / VMware)", "Deploying Linux distributions (Kali / Ubuntu)", "Basic command-line scripting for log automation"]
          },
          {
            category: "Traffic Analysis",
            items: ["Capturing local interface traffic", "Inspecting TCP/UDP headers & payloads", "Following cleartext protocol streams"]
          }
        ],
        tools: ["Wireshark", "VirtualBox", "VMware Workstation", "Nmap"]
      },
      {
        number: 5,
        title: "Specialization & Career Path Selection",
        overview: "With core fundamentals locked in, select your preferred career specialization (Defensive, Offensive, Cloud, Forensics, or GRC) and work towards target industry certifications.",
        topics: [
          {
            category: "Career Alignment",
            items: ["Defensive (SOC Analyst / Incident Response)", "Offensive (Penetration Testing / Red Team)", "Cloud, Forensics & GRC Specializations"]
          },
          {
            category: "Certifications & Practice",
            items: ["CompTIA Security+ / Network+", "Practical lab platforms (TryHackMe, picoCTF)", "Building a technical project portfolio"]
          }
        ],
        tools: ["TryHackMe", "picoCTF", "Hack The Box Academy"]
      }
    ]
  },
  soc: {
    id: "soc",
    title: "SOC Analyst (Defensive Security / Blue Team)",
    isMain: false,
    badge: "Blue Team Track",
    desc: "SOC (Security Operations Center) Analysts monitor network traffic, investigate suspicious activity, and stop cyber attacks in real time.",
    nodes: [
      {
        number: 1,
        title: "Computer & Networking Basics",
        overview: "Before protecting a system, you must understand how computers operate and communicate. This node establishes the core foundation of networking protocols, operating system mechanics, and basic scripting.",
        topics: [
          {
            category: "Networking Fundamentals",
            items: ["The OSI & TCP/IP Models", "IP Addressing & Subnetting (IPv4/v6, CIDR)"]
          },
          {
            category: "Core Protocols & Ports",
            items: ["HTTP (Port 80) / HTTPS (Port 443)", "DNS (Port 53), DHCP (Ports 67/68)", "SSH (Port 22) & RDP (Port 3389)"]
          },
          {
            category: "Operating Systems & Scripting",
            items: ["Windows Internals (Registry, Services, Event Logs)", "Linux Admin (chmod, chown, ps, top, kill)", "Troubleshooting CLI (ping, traceroute, netstat, nslookup)"]
          }
        ],
        tools: ["Wireshark", "Windows Command Prompt", "PowerShell", "Linux Terminal"]
      },
      {
        number: 2,
        title: "Security Fundamentals",
        overview: "This node covers how attackers attempt to break systems and the core concepts and controls used to defend against them.",
        topics: [
          {
            category: "The Threat Landscape",
            items: ["Malware Types (Viruses, Trojans, Worms, Ransomware, Keyloggers, Rootkits, Spyware)", "Common Attack Vectors (Phishing, Social Engineering, Drive-by, Brute-force, Credential Stuffing)"]
          },
          {
            category: "Core Defense Concepts",
            items: ["The CIA Triad", "Authentication & Authorization (MFA, Passwords, RBAC)", "Defense in Depth & Layered Controls"]
          },
          {
            category: "Network & Endpoint Defense",
            items: ["Firewalls (Stateful vs Stateless)", "IDS/IPS Systems (Signature-based vs Anomaly-based)", "Cryptography Basics & Hashing (MD5, SHA-256)"]
          }
        ],
        tools: ["Snort", "Suricata", "VirusTotal"]
      },
      {
        number: 3,
        title: "Log Analysis & SIEM Tools",
        overview: "Security Analysts use Security Information and Event Management (SIEM) tools to collect, correlate, and analyze millions of logs across an entire company from a single dashboard.",
        topics: [
          {
            category: "Log Sources & Event Types",
            items: ["Windows Event Logs (ID 4625 Failed Login, ID 4624 Success Login, ID 4672 Admin Privs, ID 7045 New Service)", "Linux Syslog (/var/log/auth.log, /var/log/syslog)", "Firewall & Network Logs"]
          },
          {
            category: "SIEM Operations & Querying",
            items: ["Ingesting and parsing logs into structured data fields", "Writing search queries across datasets", "Building correlation rules and alerts"]
          },
          {
            category: "Packet Analysis",
            items: ["Reading .pcap files", "Following TCP streams", "Identifying cleartext leaks & suspicious transfers"]
          }
        ],
        tools: ["Splunk", "Microsoft Sentinel", "Wireshark"]
      },
      {
        number: 4,
        title: "Incident Response & Threat Hunting",
        overview: "When a SIEM triggers an alert or a breach occurs, the analyst must contain the threat, eradicate it, and hunt for hidden compromises.",
        topics: [
          {
            category: "Incident Response Lifecycle",
            items: ["Preparation", "Detection & Analysis", "Containment", "Eradication", "Recovery", "Lessons Learned (NIST / SANS Frameworks)"]
          },
          {
            category: "Threat Frameworks & Hunting",
            items: ["MITRE ATT&CK Framework (Tactics, Techniques, and Procedures)", "Proactive Threat Hunting for IoCs"]
          },
          {
            category: "Ticketing & Documentation",
            items: ["Writing technical escalation notes", "Documenting timeline steps during active incidents"]
          }
        ],
        tools: ["TheHive", "Request Tracker", "CrowdStrike", "Defender for Endpoint"]
      }
    ]
  },
  pentest: {
    id: "pentest",
    title: "Penetration Tester (Offensive Security / Red Team)",
    isMain: false,
    badge: "Red Team Track",
    desc: "Penetration Testers ethically hack networks, web applications, and infrastructure to uncover vulnerabilities before attackers exploit them.",
    nodes: [
      {
        number: 1,
        title: "Systems & Scripting",
        overview: "Offensive security professionals must understand target systems deeply to bypass security controls and automate custom exploits.",
        topics: [
          {
            category: "Advanced OS Administration",
            items: ["Linux Deep Dive (Processes, cron jobs, custom services)", "Windows Active Directory Basics (Domain Controllers, LDAP, Kerberos)"]
          },
          {
            category: "Programming for Pentesting",
            items: ["Python (Port scanners, web scrapers, automated HTTP requests, exploit payloads)", "Bash & PowerShell scripting for enumeration"]
          },
          {
            category: "Web Architecture Fundamentals",
            items: ["HTTP Request Methods (GET, POST, PUT, DELETE)", "Headers, Cookies, Session Tokens, CORS"]
          }
        ],
        tools: ["Python", "Kali Linux", "Parrot OS", "PowerShell"]
      },
      {
        number: 2,
        title: "Reconnaissance & Scanning",
        overview: "Reconnaissance is the phase where testers collect intelligence about a target's infrastructure and identify exposed attack surfaces.",
        topics: [
          {
            category: "Passive Reconnaissance (OSINT)",
            items: ["Subdomains, leaked credentials, employee emails, tech stacks", "Google Dorks, Shodan, Censys, GitHub", "DNS Records enumeration (A, CNAME, MX, TXT, NS)"]
          },
          {
            category: "Active Reconnaissance & Scanning",
            items: ["Port scanning mechanics (TCP SYN, UDP, ACK scans)", "Service version detection & OS fingerprinting", "Firewall rule bypass via packet fragmentation"]
          },
          {
            category: "Vulnerability Scanning",
            items: ["Mapping open services against known CVE databases"]
          }
        ],
        tools: ["Nmap", "Masscan", "Amass", "Sublist3r", "Nessus", "OpenVAS"]
      },
      {
        number: 3,
        title: "Exploitation & Web Security",
        overview: "This node covers safely executing exploits against identified vulnerabilities in web applications and network services.",
        topics: [
          {
            category: "Web Application Vulnerabilities (OWASP Top 10)",
            items: ["SQL Injection (SQLi)", "Cross-Site Scripting (XSS - Stored, Reflected, DOM)", "Broken Access Control & IDOR", "Server-Side Request Forgery (SSRF)"]
          },
          {
            category: "Network & System Exploitation",
            items: ["Matching software versions to public exploits (Exploit-DB)", "Password attacks (Dictionary, Brute-force, Hash cracking, Password Spraying)", "Buffer Overflows (Conceptual & Memory Execution)"]
          }
        ],
        tools: ["Burp Suite", "OWASP ZAP", "Metasploit Framework", "Hashcat", "John the Ripper"]
      },
      {
        number: 4,
        title: "Post-Exploitation & Reporting",
        overview: "Gaining initial access is only the first step. Post-exploitation involves expanding control across the target environment and delivering a comprehensive vulnerability report to the client.",
        topics: [
          {
            category: "Privilege Escalation",
            items: ["Linux (Sudo rights, SUID binaries, kernel exploits)", "Windows (SYSTEM escalation, unquoted service paths, token manipulation)"]
          },
          {
            category: "Lateral Movement & Persistence",
            items: ["Moving across AD domains (Pass-the-Hash, PsExec, WinRM)", "Persistent access backdoors (scheduled tasks, custom services, SSH keys)"]
          },
          {
            category: "Professional Reporting",
            items: ["CVSS scoring (Impact vs Likelihood)", "Executive Summaries & Step-by-Step Remediation Guides"]
          }
        ],
        tools: ["BloodHound", "Mimikatz", "LinPEAS", "WinPEAS"]
      }
    ]
  },
  cloud: {
    id: "cloud",
    title: "Cloud Security Engineer",
    isMain: false,
    badge: "Cloud Track",
    desc: "Cloud Security Engineers build, secure, and monitor cloud platforms like AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
    nodes: [
      {
        number: 1,
        title: "Cloud Architecture Basics",
        overview: "Before securing cloud infrastructure, you must understand virtualized environments and cloud-native architecture service models.",
        topics: [
          {
            category: "Cloud Service Models",
            items: ["IaaS (Infrastructure as a Service - AWS EC2, Azure VMs)", "PaaS (Platform as a Service - Elastic Beanstalk)", "SaaS (Software as a Service - M365, Google Workspace)"]
          },
          {
            category: "Shared Responsibility & Networking",
            items: ["Provider responsibilities vs Customer responsibilities", "Virtual Private Clouds (VPC / VNet), Subnets (Public/Private)", "Internet Gateways, NAT Gateways, Security Groups & Network ACLs"]
          }
        ],
        tools: ["AWS Management Console", "Azure Portal", "Google Cloud Console", "AWS CLI", "Azure CLI"]
      },
      {
        number: 2,
        title: "Cloud Access & Identity (IAM)",
        overview: "Identity is the security perimeter in the cloud. This node covers controlling user permissions, access tokens, and encryption keys.",
        topics: [
          {
            category: "Identity and Access Management (IAM)",
            items: ["Users, Groups, Roles, Policies", "Principle of Least Privilege & Assume-Role permissions", "Multi-Factor Authentication (MFA) & Conditional Access"]
          },
          {
            category: "Secrets & Data Security",
            items: ["Securing API keys and database connection strings", "Key Management Service (KMS) & Envelope encryption", "Securing Storage Buckets (S3 / Blob) & Rest/Transit encryption"]
          }
        ],
        tools: ["AWS IAM", "Microsoft Entra ID", "AWS KMS", "HashiCorp Vault"]
      },
      {
        number: 3,
        title: "Infrastructure as Code & DevSecOps",
        overview: "Modern cloud systems are provisioned automatically via code. Security engineers integrate security scans directly into developer deployment pipelines.",
        topics: [
          {
            category: "IaC Security",
            items: ["Terraform & CloudFormation template scanning", "Detecting public buckets and unencrypted DBs before deployment"]
          },
          {
            category: "DevSecOps & Containers",
            items: ["CI/CD Pipeline Integration (SAST, Secret Detection in GitHub Actions / GitLab)", "Docker security & minimal base images", "Kubernetes security (Network policies, Pod standards, RBAC)"]
          }
        ],
        tools: ["Terraform", "Checkov", "Tfsec", "Trivy", "Grype", "GitGuardian", "TruffleHog"]
      },
      {
        number: 4,
        title: "Cloud Monitoring & Defense",
        overview: "Continuous visibility is required to detect cloud misconfigurations, unauthorized administrative access, and policy violations across dynamic cloud accounts.",
        topics: [
          {
            category: "Cloud Telemetry & Audit Logging",
            items: ["Enabling central logging across multi-region accounts (CloudTrail, VPC Flow Logs, GuardDuty)"]
          },
          {
            category: "CSPM & Automated Incident Response",
            items: ["Cloud Security Posture Management (CIS Benchmarks)", "Automated isolation of compromised instances & IAM key revocation via Lambda"]
          }
        ],
        tools: ["AWS CloudTrail", "AWS GuardDuty", "Microsoft Defender for Cloud", "Prowler", "Scout Suite"]
      }
    ]
  },
  dfir: {
    id: "dfir",
    title: "Digital Forensics & Incident Response (DFIR)",
    isMain: false,
    badge: "Forensics Track",
    desc: "DFIR specialists act as cyber crime scene investigators, analyzing digital evidence to determine how breaches occurred and what data was taken.",
    nodes: [
      {
        number: 1,
        title: "OS Artifacts & Memory Basics",
        overview: "Operating systems track almost all user and system activities. This node focuses on knowing where these forensic traces are located.",
        topics: [
          {
            category: "Windows Forensic Artifacts",
            items: ["Registry Hives (NTUSER.DAT, SYSTEM, SOFTWARE)", "Execution Evidence (Prefetch, Shimcache, Amcache, UserAssist)", "File Access Evidence (Shellbags, Jump Lists, LNK files)"]
          },
          {
            category: "Linux, macOS & Volatile Memory",
            items: ["Shell history (.bash_history), system logs (/var/log/), launch daemons", "RAM concepts (passwords, injected code, active network sockets) vs disk storage"]
          }
        ],
        tools: ["Registry Explorer", "KAPE", "FTK Imager"]
      },
      {
        number: 2,
        title: "Evidence Collection & Disk Forensics",
        overview: "Forensic evidence must be acquired cleanly without modifying the original source so it holds up in legal proceedings or executive inquiries.",
        topics: [
          {
            category: "Forensic Soundness & Chain of Custody",
            items: ["Evidence handling documentation & Hardware Write Blockers", "Cryptographic hash verification (SHA-256) pre and post acquisition"]
          },
          {
            category: "Disk Imaging & Timeline Creation",
            items: ["Bit-by-bit physical disk imaging (.E01, .raw, .dd)", "File system parsing (NTFS $MFT, FAT32, EXT4)", "Data Carving deleted files & MACB master timeline sorting"]
          }
        ],
        tools: ["FTK Imager", "X-Ways Forensics", "Autopsy", "EnCase", "Plaso / log2timeline"]
      },
      {
        number: 3,
        title: "Network & Memory Analysis",
        overview: "Attackers often reside strictly in volatile memory or communicate across networks without leaving obvious files on the hard drive.",
        topics: [
          {
            category: "Memory Forensics (RAM Analysis)",
            items: ["Acquiring live RAM captures", "Parsing dumps for unlinked processes, injected DLLs, unpacked malware, and active sockets"]
          },
          {
            category: "Network Forensics",
            items: ["Reconstructing transferred files & browsing sessions from .pcap captures", "Extracting DNS request patterns to uncover C2 channels"]
          }
        ],
        tools: ["Volatility 3", "Wireshark", "NetworkMiner", "Zeek"]
      },
      {
        number: 4,
        title: "Malware Analysis",
        overview: "Analyzing malicious software to determine its purpose, command-and-control addresses, and technical capabilities.",
        topics: [
          {
            category: "Static Malware Analysis",
            items: ["File signatures, PE headers, imported DLL functions, embedded strings", "File hash verification against threat databases"]
          },
          {
            category: "Dynamic Analysis & Reverse Engineering",
            items: ["Executing malware safely inside instrumented Sandbox environments", "Monitoring file, registry, process, and network callbacks in real-time", "Basic Disassembly & x86/x64 assembly constructs"]
          }
        ],
        tools: ["pestudio", "Process Hacker", "ProcMon", "ANY.RUN", "Cuckoo Sandbox", "Ghidra", "IDA Free"]
      }
    ]
  },
  grc: {
    id: "grc",
    title: "Governance, Risk & Compliance (GRC) Analyst",
    isMain: false,
    badge: "Governance & Risk Track",
    desc: "GRC Analysts manage business risk, write security policies, and ensure companies adhere to legal standards and industry compliance frameworks.",
    nodes: [
      {
        number: 1,
        title: "Security Principles & Policies",
        overview: "GRC links cybersecurity technical controls directly to business operations, legal obligations, and executive governance.",
        topics: [
          {
            category: "Asset Management & Classification",
            items: ["Categorizing company assets by criticality (Critical, Major, Minor)", "Data Classification Labels (Public, Internal, Confidential, Restricted)"]
          },
          {
            category: "Security Policy Development & BIA",
            items: ["Acceptable Use Policy (AUP), InfoSec Policy, Access Control Policy", "Incident Response & Disaster Recovery Plans", "Business Impact Analysis (RTO and RPO metrics)"]
          }
        ],
        tools: ["Microsoft Office Suite", "Google Workspace", "Confluence"]
      },
      {
        number: 2,
        title: "Frameworks & Regulations",
        overview: "Companies must follow established security frameworks to prove to customers, auditors, and regulators that their systems are secure.",
        topics: [
          {
            category: "Security & Control Frameworks",
            items: ["NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover)", "ISO/IEC 27001 ISMS standard", "CIS Critical Security Controls (Top 18)"]
          },
          {
            category: "Regulatory Requirements",
            items: ["GDPR / CCPA (Data privacy laws)", "HIPAA (Protected Health Info)", "PCI-DSS (Credit card payment security)", "SOC 2 Type I & Type II audit reports"]
          }
        ],
        tools: ["Vanta", "Secureframe", "Drata"]
      },
      {
        number: 3,
        title: "Risk Assessment & Management",
        overview: "Risk management involves identifying system vulnerabilities, estimating potential financial damage, and deciding how the organization should handle those risks.",
        topics: [
          {
            category: "Risk Analysis & Calculations",
            items: ["Quantitative Risk Analysis (ALE = Single Loss Expectancy x Annualized Rate)", "Qualitative Risk Matrix (Likelihood vs Impact)"]
          },
          {
            category: "Risk Treatment & Registers",
            items: ["Strategies: Mitigate, Transfer, Avoid, Accept", "Maintaining centralized Risk Registers with mitigation deadlines"]
          }
        ],
        tools: ["Risk Register Templates", "LogicManager", "Archer", "ServiceNow GRC"]
      },
      {
        number: 4,
        title: "Auditing & Vendor Management",
        overview: "Auditing ensures internal systems actually follow company policies, while Vendor Risk Management ensures third-party software suppliers do not introduce security risks.",
        topics: [
          {
            category: "Internal & External Auditing",
            items: ["Collecting objective audit evidence & Gap analyses against target frameworks"]
          },
          {
            category: "Third-Party Risk Management (TPRM) & Metrics",
            items: ["Issuing Security Questionnaires (SIG, CAIQ)", "Reviewing vendor SOC 2 Type II reports & pentest summaries", "Executive Risk Reporting via Key Risk Indicators (KRIs)"]
          }
        ],
        tools: ["Whistic", "OneTrust", "GRC Dashboards"]
      }
    ]
  }
};

/* ========== COURSES DATA (Tool-based video courses) ========== */
/*
 * BACKEND INTEGRATION GUIDE:
 * Each course object follows this schema:
 * {
 *   id: string (unique identifier, matches tool id where possible),
 *   name: string (course display name),
 *   icon: string (single letter for tool icon),
 *   category: string (tool category),
 *   level: string (Beginner | Intermediate | Advanced),
 *   description: string (short course overview),
 *   instructor: string,
 *   totalDuration: string,
 *   lessons: [
 *     { id: string, title: string, duration: string, videoUrl: string|null }
 *     // videoUrl: null => placeholder. Backend team can inject real embed URLs.
 *   ]
 * }
 */

const coursesData = {
  nmap: {
    id: "nmap",
    name: "Nmap Essentials",
    icon: "N",
    category: "Network Scanner",
    level: "Beginner",
    description: "Learn network discovery, port scanning, OS detection, and the Nmap Scripting Engine from scratch.",
    instructor: "HackPack Team",
    totalDuration: "2h 15m",
    lessons: [
      { id: "nmap-1", title: "What is Nmap & Why It Matters", duration: "08:20", videoUrl: null },
      { id: "nmap-2", title: "Installing Nmap on Linux & Windows", duration: "06:45", videoUrl: null },
      { id: "nmap-3", title: "Host Discovery Techniques", duration: "12:10", videoUrl: null },
      { id: "nmap-4", title: "Port Scanning Fundamentals", duration: "15:30", videoUrl: null },
      { id: "nmap-5", title: "Service Version & OS Detection", duration: "11:55", videoUrl: null },
      { id: "nmap-6", title: "NSE Scripts & Automation", duration: "14:20", videoUrl: null },
      { id: "nmap-7", title: "Output Formats & Reporting", duration: "09:10", videoUrl: null },
      { id: "nmap-8", title: "Real-World Network Mapping Lab", duration: "18:40", videoUrl: null }
    ]
  },
  burp: {
    id: "burp",
    name: "Burp Suite Fundamentals",
    icon: "B",
    category: "Web Security Testing",
    level: "Intermediate",
    description: "Master web application testing with Burp Suite — proxy, intruder, repeater, scanner, and collaborator.",
    instructor: "HackPack Team",
    totalDuration: "3h 10m",
    lessons: [
      { id: "burp-1", title: "Burp Suite Architecture Overview", duration: "10:15", videoUrl: null },
      { id: "burp-2", title: "Setting Up the Intercepting Proxy", duration: "12:40", videoUrl: null },
      { id: "burp-3", title: "Repeater & Modifying Requests", duration: "14:05", videoUrl: null },
      { id: "burp-4", title: "Intruder for Brute Force Attacks", duration: "16:20", videoUrl: null },
      { id: "burp-5", title: "Scanner & Automated Vuln Detection", duration: "13:35", videoUrl: null },
      { id: "burp-6", title: "Collaborator & Out-of-Band Testing", duration: "11:50", videoUrl: null },
      { id: "burp-7", title: "Analyzing OWASP Top 10 Vulnerabilities", duration: "20:10", videoUrl: null },
      { id: "burp-8", title: "Bug Bounty Workflow Lab", duration: "18:45", videoUrl: null }
    ]
  },
  metasploit: {
    id: "metasploit",
    name: "Metasploit Framework Mastery",
    icon: "M",
    category: "Exploitation Framework",
    level: "Intermediate",
    description: "Learn exploit modules, payloads, auxiliary scanners, and post-exploitation using MSFconsole.",
    instructor: "HackPack Team",
    totalDuration: "2h 50m",
    lessons: [
      { id: "msf-1", title: "Metasploit Architecture & Setup", duration: "09:30", videoUrl: null },
      { id: "msf-2", title: "Exploit Modules & Payloads", duration: "14:15", videoUrl: null },
      { id: "msf-3", title: "Auxiliary Scanners & Fuzzers", duration: "11:20", videoUrl: null },
      { id: "msf-4", title: "Meterpreter Shell Deep Dive", duration: "16:40", videoUrl: null },
      { id: "msf-5", title: "Post-Exploitation Modules", duration: "13:55", videoUrl: null },
      { id: "msf-6", title: "Pivoting & Lateral Movement", duration: "15:10", videoUrl: null },
      { id: "msf-7", title: "MSF Database & Reporting", duration: "10:25", videoUrl: null },
      { id: "msf-8", title: "Full Penetration Testing Lab", duration: "22:00", videoUrl: null }
    ]
  },
  wireshark: {
    id: "wireshark",
    name: "Wireshark Packet Analysis",
    icon: "W",
    category: "Packet Analyzer",
    level: "Beginner",
    description: "Capture and analyze network traffic. Master filters, protocol inspection, and troubleshooting.",
    instructor: "HackPack Team",
    totalDuration: "2h 05m",
    lessons: [
      { id: "wsh-1", title: "Wireshark Interface & Installation", duration: "08:45", videoUrl: null },
      { id: "wsh-2", title: "Live Capture vs Offline Analysis", duration: "10:20", videoUrl: null },
      { id: "wsh-3", title: "Display Filters & Capture Filters", duration: "13:35", videoUrl: null },
      { id: "wsh-4", title: "Inspecting TCP & UDP Traffic", duration: "15:10", videoUrl: null },
      { id: "wsh-5", title: "Following HTTP & HTTPS Streams", duration: "12:50", videoUrl: null },
      { id: "wsh-6", title: "DNS & DHCP Analysis", duration: "09:40", videoUrl: null },
      { id: "wsh-7", title: "Detecting Suspicious Traffic", duration: "14:05", videoUrl: null },
      { id: "wsh-8", title: "Incident Response Packet Lab", duration: "17:30", videoUrl: null }
    ]
  },
  splunk: {
    id: "splunk",
    name: "Splunk for Security Operations",
    icon: "S",
    category: "SIEM Platform",
    level: "Intermediate",
    description: "Build SIEM dashboards, write SPL queries, and detect threats using Splunk in a SOC context.",
    instructor: "HackPack Team",
    totalDuration: "2h 40m",
    lessons: [
      { id: "spl-1", title: "Splunk Architecture Overview", duration: "09:15", videoUrl: null },
      { id: "spl-2", title: "Data Ingestion & Parsing", duration: "12:30", videoUrl: null },
      { id: "spl-3", title: "SPL Fundamentals", duration: "14:20", videoUrl: null },
      { id: "spl-4", title: "Writing Detection Queries", duration: "16:05", videoUrl: null },
      { id: "spl-5", title: "Building Security Dashboards", duration: "13:45", videoUrl: null },
      { id: "spl-6", title: "Correlation & Alerting", duration: "11:55", videoUrl: null },
      { id: "spl-7", title: "Threat Intelligence Integration", duration: "10:40", videoUrl: null },
      { id: "spl-8", title: "SOC Monitoring Lab", duration: "19:20", videoUrl: null }
    ]
  },
  hashcat: {
    id: "hashcat",
    name: "Hashcat Password Recovery",
    icon: "H",
    category: "Password Recovery",
    level: "Advanced",
    description: "GPU-accelerated password cracking with Hashcat. Attack modes, hash types, and rule-based attacks.",
    instructor: "HackPack Team",
    totalDuration: "2h 20m",
    lessons: [
      { id: "hsh-1", title: "Hashcat Setup & GPU Configuration", duration: "10:10", videoUrl: null },
      { id: "hsh-2", title: "Understanding Hash Types", duration: "11:25", videoUrl: null },
      { id: "hsh-3", title: "Dictionary & Combinator Attacks", duration: "14:40", videoUrl: null },
      { id: "hsh-4", title: "Rule-Based Word Mangling", duration: "12:15", videoUrl: null },
      { id: "hsh-5", title: "Brute Force & Mask Attacks", duration: "15:30", videoUrl: null },
      { id: "hsh-6", title: "Session Management & Optimization", duration: "08:50", videoUrl: null },
      { id: "hsh-7", title: "Distributed Cracking Lab", duration: "13:20", videoUrl: null },
      { id: "hsh-8", title: "Password Audit Workflow", duration: "16:10", videoUrl: null }
    ]
  },
  john: {
    id: "john",
    name: "John the Ripper",
    icon: "J",
    category: "Password Cracker",
    level: "Intermediate",
    description: "Open-source password auditing with John the Ripper. Dictionary attacks, rules, and incremental mode.",
    instructor: "HackPack Team",
    totalDuration: "1h 50m",
    lessons: [
      { id: "jtr-1", title: "John the Ripper Overview", duration: "08:30", videoUrl: null },
      { id: "jtr-2", title: "Hash Detection & Extraction", duration: "10:45", videoUrl: null },
      { id: "jtr-3", title: "Dictionary Attacks", duration: "12:20", videoUrl: null },
      { id: "jtr-4", title: "Single Crack & Incremental Mode", duration: "11:15", videoUrl: null },
      { id: "jtr-5", title: "Rule-Based Word Mangling", duration: "09:40", videoUrl: null },
      { id: "jtr-6", title: "Cracking Linux Shadow Files", duration: "13:05", videoUrl: null },
      { id: "jtr-7", title: "John in Password Audits", duration: "10:30", videoUrl: null },
      { id: "jtr-8", title: "Practical Hash Cracking Lab", duration: "15:25", videoUrl: null }
    ]
  },
  snort: {
    id: "snort",
    name: "Snort & Suricata IDS/IPS",
    icon: "S",
    category: "IDS/IPS",
    level: "Intermediate",
    description: "Deploy and configure open-source intrusion detection/prevention systems with custom rules.",
    instructor: "HackPack Team",
    totalDuration: "2h 00m",
    lessons: [
      { id: "snt-1", title: "IDS vs IPS Concepts", duration: "09:10", videoUrl: null },
      { id: "snt-2", title: "Installing Snort & Suricata", duration: "11:35", videoUrl: null },
      { id: "snt-3", title: "Rule Syntax & Structure", duration: "14:50", videoUrl: null },
      { id: "snt-4", title: "Writing Custom Detection Rules", duration: "16:20", videoUrl: null },
      { id: "snt-5", title: "Inline Prevention Mode", duration: "10:15", videoUrl: null },
      { id: "snt-6", title: "PCAP Logging & Alerting", duration: "08:55", videoUrl: null },
      { id: "snt-7", title: "Port Scan Detection Lab", duration: "12:40", videoUrl: null },
      { id: "snt-8", title: "Network Defense Simulation", duration: "14:30", videoUrl: null }
    ]
  },
  volatility: {
    id: "volatility",
    name: "Volatility Memory Forensics",
    icon: "V",
    category: "Memory Forensics",
    level: "Advanced",
    description: "Analyze RAM dumps for incident response. Extract processes, injected code, and network artifacts.",
    instructor: "HackPack Team",
    totalDuration: "2h 30m",
    lessons: [
      { id: "vol-1", title: "Memory Forensics Fundamentals", duration: "10:20", videoUrl: null },
      { id: "vol-2", title: "Acquiring RAM Captures", duration: "12:45", videoUrl: null },
      { id: "vol-3", title: "Volatility 3 Setup & Plugins", duration: "11:30", videoUrl: null },
      { id: "vol-4", title: "Process Enumeration & Analysis", duration: "14:15", videoUrl: null },
      { id: "vol-5", title: "Detecting Injected Code", duration: "16:40", videoUrl: null },
      { id: "vol-6", title: "Network Connections in Memory", duration: "09:55", videoUrl: null },
      { id: "vol-7", title: "Malware Artifact Extraction", duration: "13:20", videoUrl: null },
      { id: "vol-8", title: "IR Memory Analysis Lab", duration: "18:05", videoUrl: null }
    ]
  },
  ghidra: {
    id: "ghidra",
    name: "Ghidra Reverse Engineering",
    icon: "G",
    category: "Reverse Engineering",
    level: "Advanced",
    description: "NSA's open-source reverse engineering suite. Disassemble, decompile, and analyze binaries.",
    instructor: "HackPack Team",
    totalDuration: "2h 45m",
    lessons: [
      { id: "ghd-1", title: "Ghidra Installation & UI Tour", duration: "10:10", videoUrl: null },
      { id: "ghd-2", title: "Importing & Analyzing Binaries", duration: "12:25", videoUrl: null },
      { id: "ghd-3", title: "Disassembly vs Decompilation", duration: "14:50", videoUrl: null },
      { id: "ghd-4", title: "Function Analysis & Call Graphs", duration: "15:35", videoUrl: null },
      { id: "ghd-5", title: "String & Symbol Analysis", duration: "09:40", videoUrl: null },
      { id: "ghd-6", title: "Scripting with Python & Java", duration: "13:15", videoUrl: null },
      { id: "ghd-7", title: "Malware Binary Analysis", duration: "18:20", videoUrl: null },
      { id: "ghd-8", title: "CTF Reverse Engineering Lab", duration: "21:10", videoUrl: null }
    ]
  },
  terraform: {
    id: "terraform",
    name: "Terraform for Cloud Security",
    icon: "T",
    category: "Cloud & DevSecOps",
    level: "Intermediate",
    description: "Provision secure cloud infrastructure as code. IaC scanning, state management, and security baselines.",
    instructor: "HackPack Team",
    totalDuration: "2h 15m",
    lessons: [
      { id: "tfm-1", title: "Infrastructure as Code Concepts", duration: "08:55", videoUrl: null },
      { id: "tfm-2", title: "Terraform Setup & Providers", duration: "11:20", videoUrl: null },
      { id: "tfm-3", title: "Writing Secure Configuration", duration: "14:40", videoUrl: null },
      { id: "tfm-4", title: "State File Management", duration: "10:15", videoUrl: null },
      { id: "tfm-5", title: "IaC Security Scanning (Checkov)", duration: "13:30", videoUrl: null },
      { id: "tfm-6", title: "Multi-Cloud Security Baselines", duration: "15:05", videoUrl: null },
      { id: "tfm-7", title: "CI/CD Pipeline Integration", duration: "12:45", videoUrl: null },
      { id: "tfm-8", title: "Secure Cloud Provisioning Lab", duration: "17:20", videoUrl: null }
    ]
  },
  autopsy: {
    id: "autopsy",
    name: "Autopsy Digital Forensics",
    icon: "A",
    category: "Digital Forensics",
    level: "Beginner",
    description: "GUI-based digital forensics. Disk image analysis, file recovery, timeline analysis, and artifact extraction.",
    instructor: "HackPack Team",
    totalDuration: "1h 55m",
    lessons: [
      { id: "aut-1", title: "Autopsy Overview & Setup", duration: "08:40", videoUrl: null },
      { id: "aut-2", title: "Creating a New Case", duration: "07:25", videoUrl: null },
      { id: "aut-3", title: "Loading Disk Images (.E01, .raw)", duration: "10:10", videoUrl: null },
      { id: "aut-4", title: "File Recovery & Data Carving", duration: "13:35", videoUrl: null },
      { id: "aut-5", title: "Keyword Searching & Artifacts", duration: "11:20", videoUrl: null },
      { id: "aut-6", title: "Timeline Analysis", duration: "09:45", videoUrl: null },
      { id: "aut-7", title: "EXIF Metadata Extraction", duration: "08:30", videoUrl: null },
      { id: "aut-8", title: "Full Forensic Investigation Lab", duration: "16:15", videoUrl: null }
    ]
  }
};