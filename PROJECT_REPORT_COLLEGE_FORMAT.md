# Secure Digital Evidence Management and Forensics Training Platform

## A Project Report Submitted in Partial Fulfillment of the Requirements
## for the Award of the Degree of

## Bachelor of Technology
## in
## Information Technology

### Submitted by
- ______________________________
- ______________________________
- ______________________________

### Under the Guidance of
- ______________________________

### April 2026
### School of Engineering
### ______________________________ University

---

# CERTIFICATE

## School of Engineering
## ______________________________ University

This is to certify that the project report entitled **"Secure Digital Evidence Management and Forensics Training Platform"** submitted by **______________________________** in partial fulfillment of the requirements for the award of the degree of **Bachelor of Technology in Information Technology** is a bona fide record of the work carried out under my supervision and guidance.

This work is original and has been completed as part of the academic requirements of the degree program.

Project Guide: ______________________________

Head of Department: ______________________________

Internal Examiner Sign: ______________________________

External Examiner Sign: ______________________________

Place: ______________________________

Date: ______________________________

---

# SUPERVISOR'S CERTIFICATE

This is to certify that the thesis entitled **"Secure Digital Evidence Management and Forensics Training Platform"** submitted by **______________________________** to **______________________________ University** for the award of the degree of **Bachelor of Technology** is a record of bona fide project work carried out under my supervision and guidance.

The results embodied in this report have not been submitted to any other university or institute for the award of any degree or diploma.

Guide Name: ______________________________

Department: Information Technology

Institution: ______________________________ University

---

# DECLARATION OF ORIGINALITY

I / We hereby declare that the project report entitled **"Secure Digital Evidence Management and Forensics Training Platform"** submitted in partial fulfillment of the requirements for the award of the degree of **Bachelor of Technology in Information Technology** is a record of original work carried out under the supervision and guidance of **______________________________**.

This project work has not been submitted elsewhere for any other degree or diploma.

Name(s): ______________________________

Roll Number(s): ______________________________

Signature(s): ______________________________

Date: ______________________________

---

# ACKNOWLEDGEMENT

I / We would like to express our sincere gratitude to our guide **______________________________** for invaluable guidance, encouragement, and constructive suggestions throughout the duration of this project. Their support has been instrumental in the successful completion of this work.

I / We also extend our thanks to the Head of Department, faculty members, and staff of the School of Engineering for providing the necessary facilities and academic environment required for the project.

Finally, I / We would like to thank our family, friends, and classmates for their support, motivation, and cooperation during the development of this project and preparation of the report.

---

# ABSTRACT

The rapid growth of digital data across professional domains has created a strong need for secure and accountable methods of handling sensitive electronic files. In areas such as digital forensics, legal documentation, cybersecurity training, and institutional case management, it is not sufficient to simply store a file in digital form. The file must be protected from unauthorized access, its movement must be traceable, and its handling must follow a controlled process. This project, titled **"Secure Digital Evidence Management and Forensics Training Platform,"** presents a web-based solution designed to address these requirements in a simple but practical manner.

The proposed platform provides a secure environment in which authenticated users can upload files, encrypt them into evidence packages, inspect encrypted packages, decrypt evidence files when required, and view activity logs related to evidence handling. The application is developed using **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**. The project uses **AES-256-CBC** encryption to protect file contents, **JSON Web Token (JWT)** authentication for controlled user access, and in-memory evidence logging to simulate chain-of-custody tracking. The system also includes a real-time training guidance component using **WebSocket** communication and an Evidence Inspector module that allows users to preview metadata from encrypted evidence packages before decryption.

The main objective of the project is educational as well as practical. It demonstrates the integration of frontend design, backend development, security implementation, file handling, and forensic awareness within a single academic system. The platform is useful as a prototype for secure evidence management and also as a training-oriented application that helps users understand the importance of encryption, metadata preservation, authenticated access, and audit trails.

The final outcome of the project is a functional web application with an improved dashboard interface and a meaningful workflow: login, evidence encryption, evidence inspection, evidence decryption, and evidence log review. The report presents the literature background, system architecture, design methodology, implementation details, security aspects, testing, results, limitations, and future scope of the project.

---

# Contents

Certificate

Supervisor's Certificate

Declaration of Originality

Acknowledgement

Abstract

List of Figures

List of Tables

List of Abbreviations

## Chapter 1 INTRODUCTION
1.1 Overview
1.2 Problem Statement
1.3 Objectives
1.4 Scope of the Project

## Chapter 2 LITERATURE REVIEW
2.1 Digital Evidence Management Systems
2.2 Encryption in Secure File Handling
2.3 Chain of Custody in Digital Forensics
2.4 Secure Web Application Practices

## Chapter 3 SYSTEM ARCHITECTURE AND DESIGN
3.1 Architecture Overview
3.2 Core System Components
3.3 Data Flow and Evidence Workflow
3.4 User Interface Design
3.5 Algorithms and Logic Flow

## Chapter 4 IMPLEMENTATION AND SECURITY
4.1 Implementation Details
4.2 API Route Implementation
4.3 Frontend Module Implementation
4.4 Security Implementation

## Chapter 5 RESULTS AND DISCUSSION
5.1 Functional Results
5.2 Testing and Validation
5.3 Discussion

## Chapter 6 CONCLUSION AND FUTURE WORK
6.1 Conclusion
6.2 Future Work

## Chapter 7 USER MANUAL AND DEPLOYMENT GUIDE
7.1 System Requirements
7.2 Installation and Setup
7.3 User Guide
7.4 Troubleshooting

References

---

# List of Figures

3.1 High-Level System Architecture Diagram

3.2 Evidence Encryption and Decryption Workflow

3.3 Evidence Inspection and Logging Flow

7.1 Login Interface

7.2 Secure Evidence Dashboard

7.3 Evidence Inspector Screen

7.4 Evidence Activity Log Screen

---

# List of Tables

4.1 Software Requirements

4.2 Hardware Requirements

5.1 Functional Test Cases

5.2 Module Summary

---

# LIST OF ABBREVIATIONS

AES - Advanced Encryption Standard

API - Application Programming Interface

CBC - Cipher Block Chaining

CSS - Cascading Style Sheets

HTML - Hypertext Markup Language

HTTP - Hypertext Transfer Protocol

IT - Information Technology

JSON - JavaScript Object Notation

JWT - JSON Web Token

LMS - Learning Management System

NPM - Node Package Manager

REST - Representational State Transfer

UI/UX - User Interface / User Experience

WS - WebSocket

---

# Chapter 1

## INTRODUCTION

### 1.1 Overview

In the modern digital era, organizations increasingly depend on electronic files for communication, reporting, storage, and decision-making. In many domains such as digital forensics, cyber investigation, social work documentation, legal case management, and incident response, files are not ordinary data objects. They may contain highly sensitive information and therefore require secure storage, controlled access, and traceable movement. If such files are handled without proper protection, they can be exposed to unauthorized access, modified without detection, or misused in a way that weakens their reliability and credibility.

This project, **Secure Digital Evidence Management and Forensics Training Platform**, is designed as a web-based application to demonstrate the secure handling of digital evidence in a simple but meaningful way. The system provides features for user authentication, evidence encryption, evidence decryption, evidence inspection, and evidence activity logging. Together, these features form a practical workflow that helps explain how digital evidence should be managed in a secure environment.

The project has both educational and technical significance. From an educational perspective, it helps students understand how core security concepts such as encryption, authentication, metadata packaging, and chain-of-custody style tracking are used in real applications. From a technical perspective, it combines frontend design, backend API development, security implementation, and file processing into a single integrated system.

Unlike a normal file upload project, this platform treats uploaded files as evidence packages. Each encrypted package contains both the protected file content and important metadata such as file name, file type, evidence ID, encrypted time, and the user responsible for the action. This improves accountability and reflects the larger concept of forensic preservation. In this way, the project goes beyond simple encryption and becomes a model for secure evidence lifecycle handling.

### 1.2 Problem Statement

Many simple digital systems allow users to upload and download files, but they do not provide adequate protection or accountability for sensitive files. In such systems, files may remain unencrypted, access may not be controlled strongly, and no proper evidence trail may exist for verifying who handled the file and when. This creates serious problems in environments where trust, authenticity, and secure access are essential.

Another issue is that many academic projects teach security concepts in isolation. Students may learn about encryption in one assignment, authentication in another, and web development in a separate context. As a result, they do not always see how these concepts work together in an integrated system. There is therefore a need for a practical platform that combines these ideas into one workflow that is both understandable and demonstrable.

This project addresses that need by building a secure digital evidence management platform that supports authenticated access, evidence encryption, evidence inspection, controlled decryption, and activity logging in a unified application.

### 1.3 Objectives

The major objectives of this project are:

1. To develop a secure web-based platform for evidence file handling.
2. To implement user login and token-based authentication.
3. To protect files using AES-256-CBC encryption.
4. To preserve forensic metadata inside encrypted evidence packages.
5. To provide decryption functionality for authorized users.
6. To implement an Evidence Inspector for metadata preview.
7. To maintain an evidence activity log reflecting chain-of-custody style tracking.
8. To create a presentable interface suitable for project demonstration and training.
9. To build a foundation for future hosting, responsive design, and report generation.

### 1.4 Scope of the Project

The scope of the project is limited to a training and prototype environment, not a full enterprise-scale production solution. The system includes:

- login-based access
- evidence file encryption
- evidence file decryption
- evidence metadata inspection
- evidence activity logging
- real-time training guidance through WebSocket responses

The project is suitable for academic evaluation, demonstration, and learning. It can also act as a base for future improvement in areas such as cloud hosting, persistent storage, advanced role permissions, and mobile responsiveness.

---

# Chapter 2

## LITERATURE REVIEW

### 2.1 Digital Evidence Management Systems

Digital evidence management refers to the controlled collection, storage, transfer, and access of digital files that may be used for investigation, verification, or documentation. Existing evidence management systems in professional environments are usually designed to ensure data integrity, controlled access, and audit traceability. However, such enterprise systems are often complex and not suitable for direct academic implementation. For student projects, simplified models are needed that still preserve the basic ideas of evidence security and accountability.

Many traditional file management systems focus mainly on storage convenience rather than evidentiary discipline. They may support upload and retrieval but often lack metadata preservation, tamper awareness, and access logging. This gap motivates the development of a project like the present one, which transforms standard file handling into a more accountable workflow.

### 2.2 Encryption in Secure File Handling

Encryption is one of the most important security mechanisms used to protect data confidentiality. In secure file handling systems, encryption ensures that even if a file is intercepted or exposed, the actual contents remain unreadable without the proper key. Symmetric encryption algorithms such as AES are commonly used because they are efficient and widely accepted.

The present project uses **AES-256-CBC**, which is a strong symmetric encryption approach. This method is appropriate for file content protection because it provides confidentiality while being practical to implement in a Node.js environment. By integrating encryption directly into the evidence workflow, the system shows how file protection can be built into application logic instead of being treated as an external tool.

### 2.3 Chain of Custody in Digital Forensics

Chain of custody is a critical concept in digital forensics. It refers to the documented sequence of control, transfer, analysis, and disposition of evidence. The purpose is to ensure that the evidence remains trustworthy and that its history can be examined at any time. In a real forensic system, this may involve signatures, logs, timestamps, physical handling records, and legal procedures.

Although the current project is an academic prototype, it incorporates a simplified chain-of-custody concept by maintaining metadata and evidence activity logs. Actions such as encryption, decryption, and inspection are recorded with user and time details. This gives the user a practical understanding of why evidence history matters.

### 2.4 Secure Web Application Practices

Modern secure web applications rely on multiple mechanisms such as authentication, controlled API access, input handling, encryption, and structured client-server communication. Token-based authentication using JWT is one of the most popular approaches in lightweight web systems because it enables stateless session handling and straightforward frontend integration.

The present project follows this pattern by issuing a JWT token at login and requiring the token for protected routes. This aligns the application with common secure web design practices and allows students to understand how access control is implemented in real systems.

---

# Chapter 3

## SYSTEM ARCHITECTURE AND DESIGN

### 3.1 Architecture Overview

The project follows a client-server architecture. The frontend is developed using HTML, CSS, and JavaScript and serves as the user interaction layer. The backend is built using Node.js and Express.js and is responsible for authentication, file processing, encryption, decryption, inspection, and logging.

The major design goal is to keep the architecture simple while still representing realistic secure workflow components. The browser acts as the client interface. Requests are sent to the backend through REST-style API routes. File uploads are processed by the server using Multer, and cryptographic operations are handled using the Node.js crypto module.

### 3.2 Core System Components

The core components of the system are:

1. Authentication module
2. Evidence encryption module
3. Evidence decryption module
4. Evidence inspection module
5. Evidence activity log module
6. WebSocket guidance module
7. Dashboard-based user interface

Each module contributes to the larger secure evidence workflow.

### 3.3 Data Flow and Evidence Workflow

The main evidence workflow of the system is:

1. User logs in with credentials.
2. Server verifies the user and returns a JWT token.
3. User uploads a file for encryption.
4. Server generates metadata and encrypts the package.
5. User can later inspect the package to preview metadata.
6. User decrypts the package if authorized.
7. Server records actions in the evidence activity log.

This sequence simulates a practical evidence handling lifecycle.

### 3.4 User Interface Design

The UI of the project uses a minimal dashboard structure with separate sections for login, secure evidence upload, evidence access, evidence inspection, training focus, guidance feed, and evidence activity. The design goal is to provide a clean and attractive user interface without making the system complicated.

This structure improves usability during project demonstrations and helps users follow the evidence workflow clearly.

### 3.5 Algorithms and Logic Flow

The project relies mainly on:

- AES-256-CBC encryption logic
- JWT creation and verification
- metadata packaging and extraction
- activity logging logic
- WebSocket message response logic

The encryption flow combines metadata length, metadata JSON, and file content into one buffer before encryption. During decryption or inspection, the package is parsed in reverse to recover metadata and original content.

---

# Chapter 4

## IMPLEMENTATION AND SECURITY

### 4.1 Implementation Details

The project is implemented using the following main files:

- `src/server.js` for backend processing
- `public/index.html` for the main interface
- `public/style.css` for frontend styling
- `public/websocket_client.js` for frontend interactions

The backend uses Express routes for authentication and evidence operations. File uploads are handled in memory using Multer. The frontend communicates with the backend using JavaScript `fetch()` calls.

### 4.2 API Route Implementation

The major API routes in the project are:

- `POST /api/authenticate`
- `POST /api/encrypt-evidence`
- `POST /api/decrypt-evidence`
- `POST /api/inspect-evidence`
- `GET /api/evidence-log`

These routes form the functional core of the project. The authentication route issues tokens, the encrypt route creates evidence packages, the decrypt route restores original content, the inspect route previews metadata, and the log route returns activity entries.

### 4.3 Frontend Module Implementation

The frontend includes:

- login form handling
- encrypt form handling
- decrypt form handling
- inspect form handling
- evidence log view
- guidance feed updates

The dashboard remains hidden until authentication succeeds. After login, the token is stored locally and reused for protected requests.

### 4.4 Security Implementation

The main security mechanisms used are:

1. JWT-based user authentication
2. AES-256-CBC evidence encryption
3. authorization header validation for protected routes
4. metadata-preserving encrypted packages
5. basic evidence action logging

Although the encryption key is currently fixed in code for project simplicity, the report recommends moving it fully to environment variables in future versions for stronger security practice.

---

# Chapter 5

## RESULTS AND DISCUSSION

### 5.1 Functional Results

The developed system successfully performs the following operations:

- authenticates training users
- encrypts selected files into evidence packages
- preserves metadata in encrypted packages
- decrypts valid evidence packages
- inspects package metadata before decryption
- records evidence activity in log form

The inclusion of the Evidence Inspector makes the project more interesting and more aligned with forensic handling practice.

### 5.2 Testing and Validation

Functional testing was performed manually for the main modules. Typical test scenarios included:

| Test Case | Expected Output |
|---|---|
| Valid login | Token generated and dashboard shown |
| Invalid login | Error message displayed |
| Encrypt valid file | Downloadable `.enc` package generated |
| Decrypt valid `.enc` file | Original file returned |
| Inspect valid `.enc` file | Metadata summary displayed |
| View evidence log | Recorded entries displayed |

The project behaved as expected in normal use cases.

### 5.3 Discussion

The project demonstrates how theoretical concepts such as encryption, token authentication, and chain-of-custody logging can be combined in a practical application. The system is intentionally lightweight, but it still delivers a meaningful workflow. The dashboard-based UI increases presentation quality, while the inspection feature adds an extra level of realism and usefulness.

At the same time, the project remains simple enough for academic explanation and future extension.

---

# Chapter 6

## CONCLUSION AND FUTURE WORK

### 6.1 Conclusion

The **Secure Digital Evidence Management and Forensics Training Platform** is a useful academic project that combines web development, secure file handling, and digital forensics concepts in one coherent system. The project successfully demonstrates login-based access, evidence encryption, evidence inspection, evidence decryption, and evidence activity logging.

Its main strength is that it converts isolated concepts into a practical end-to-end workflow. Instead of showing encryption or authentication separately, it presents them as parts of a real handling process. This makes the project more valuable from both an academic and demonstration perspective.

### 6.2 Future Work

Future enhancements may include:

1. storing logs in a database
2. role-based permissions
3. exportable reports
4. better in-page notifications
5. cloud hosting
6. mobile responsive optimization
7. stronger key management
8. persistent evidence storage
9. advanced search and filtering
10. PDF report generation

---

# Chapter 7

## USER MANUAL AND DEPLOYMENT GUIDE

### 7.1 System Requirements

#### Software Requirements

| Component | Requirement |
|---|---|
| Operating System | Windows / Linux / macOS |
| Runtime | Node.js |
| Package Manager | npm |
| Browser | Chrome / Edge / Firefox |
| Backend | Express.js |
| Frontend | HTML, CSS, JavaScript |

#### Hardware Requirements

| Component | Minimum Requirement |
|---|---|
| Processor | Intel i3 or equivalent |
| RAM | 4 GB |
| Storage | 1 GB free |

### 7.2 Installation and Setup

1. Clone or copy the project into your local system.
2. Open the project folder in a terminal.
3. Install dependencies using `npm install`.
4. Create a `.env` file and define `SECRET_KEY`.
5. Start the server using `npm start`.
6. Open the application in the browser at the configured port.

### 7.3 User Guide

#### Login

Enter a valid training username and password to enter the secure workspace.

#### Encrypt Evidence

Select a supported file and click `Encrypt Evidence`. The system will generate an encrypted evidence package for download.

#### Inspect Evidence

Select an encrypted `.enc` package and click `Inspect Evidence Package`. The system will display metadata and custody history without downloading the original content.

#### Decrypt Evidence

Select a valid `.enc` file and click `Decrypt Evidence`. The original file will be returned if the package is valid.

#### View Evidence Log

Click the evidence log button to view recorded activity such as encryption, decryption, and inspection.

### 7.4 Troubleshooting

| Problem | Possible Cause | Solution |
|---|---|---|
| Invalid credentials | Wrong username or password | Use valid training account |
| Cannot POST endpoint | Wrong server file running | Restart with `npm start` |
| Decryption failed | Corrupted or invalid `.enc` file | Use a valid encrypted package |
| Unauthorized | Missing or invalid token | Log in again |
| No evidence log shown | No activity recorded yet | Perform an evidence action first |

---

# REFERENCES

1. Node.js Documentation
2. Express.js Documentation
3. MDN Web Docs for HTML, CSS, and JavaScript
4. JSON Web Token Documentation
5. Node.js Crypto Module Documentation
6. WebSocket Documentation
7. Standard academic references on digital forensics and chain of custody

---

# APPENDIX

## Appendix A: Sample Training Accounts

- `sw_trainee1 / forensics2024`
- `sw_trainee2 / evidence123`
- `sw_supervisor / admin2024`
- `forensics_trainer / trainer123`

## Appendix B: Suggested Figures to Add

1. High-level architecture diagram
2. Login page screenshot
3. Dashboard screenshot
4. Encryption flow screenshot
5. Inspection result screenshot
6. Evidence log screenshot

## Appendix C: Notes for Final Formatting

To match the sample PDF more closely in Word or PDF:

- keep certificate, supervisor certificate, declaration, acknowledgement, and abstract on separate pages
- insert page breaks before each chapter
- use consistent heading hierarchy
- add page numbers
- add screenshots and diagrams
- use Times New Roman or the format required by your college
- keep chapter titles in uppercase
