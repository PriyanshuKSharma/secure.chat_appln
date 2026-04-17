# Project Report

## Secure Digital Evidence Management and Forensics Training Platform

### Submitted By
- Name: ______________________
- Roll Number: ______________________
- Course / Branch: ______________________
- College / Institution: ______________________
- Academic Year: ______________________

### Submitted To
- Guide / Faculty Name: ______________________
- Department: ______________________

### Date
- ______________________

---

## Certificate

This is to certify that the project report entitled **"Secure Digital Evidence Management and Forensics Training Platform"** is a bonafide work carried out by **______________________** under the guidance of **______________________** in partial fulfillment of the requirements for the completion of the academic program in **______________________**.

The work presented in this report is original and has not been submitted in part or full for any other degree, diploma, or academic award.

Signature of Student: ______________________

Signature of Guide: ______________________

Signature of Head of Department: ______________________

---

## Declaration

I hereby declare that the project titled **"Secure Digital Evidence Management and Forensics Training Platform"** is my original work and has been completed under the supervision of my project guide. The content included in this report has not been copied from any other source except where proper reference has been provided. I further declare that this work has not been submitted previously to any university or institution for the award of any degree or diploma.

Name of Student: ______________________

Signature: ______________________

Date: ______________________

---

## Acknowledgement

I would like to express my sincere gratitude to my project guide, teachers, and department for their constant encouragement, valuable suggestions, and technical guidance throughout the development of this project. Their support helped me complete this work in a systematic and meaningful manner.

I am also thankful to my friends and classmates for their feedback and help during testing and improvement of the project. Finally, I would like to thank my family for their patience, motivation, and support during the completion of this report and the associated development work.

---

## Abstract

The **Secure Digital Evidence Management and Forensics Training Platform** is a web-based project developed to demonstrate the secure handling of sensitive digital files in a controlled training environment. The project is designed especially as a learning platform for digital evidence management, encryption, authentication, and chain-of-custody tracking. In the present digital era, many organizations such as law enforcement departments, social service agencies, and cybersecurity teams work with confidential digital documents that must be protected from unauthorized access and tampering. This project addresses that need by providing a simple but effective system where users can log in, encrypt files, decrypt files, inspect encrypted packages, and view evidence activity logs.

The application is built using **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**. It uses **AES-256-CBC** encryption for protecting evidence files, **JWT-based authentication** for controlled access, **WebSocket-based messaging** for real-time training guidance, and forensic metadata to preserve information such as evidence ID, encryption time, responsible user, and chain-of-custody events. A minimal but attractive dashboard-based user interface allows users to perform all operations in a clean workflow. The project also includes an evidence inspection feature, which allows the user to preview metadata and custody history before actually decrypting a file.

The main purpose of this project is educational as well as practical. It helps users understand the lifecycle of digital evidence, the role of encryption in data protection, and the importance of audit trails in digital forensics. This report explains the objectives, design, architecture, modules, implementation details, testing process, results, limitations, and future enhancements of the system.

---

## Table of Contents

1. Introduction
2. Problem Statement
3. Objectives of the Project
4. Scope of the Project
5. Existing System
6. Proposed System
7. Feasibility Study
8. Software and Hardware Requirements
9. System Architecture
10. Module Description
11. Working Methodology
12. Algorithms and Security Concepts Used
13. Database / Data Handling Design
14. User Interface Overview
15. Implementation Details
16. Testing and Validation
17. Results and Discussion
18. Advantages of the Project
19. Limitations of the Project
20. Future Enhancements
21. Conclusion
22. References
23. Appendix

---

## 1. Introduction

Digital data has become an essential part of almost every professional domain. In many real-world situations, organizations are required to collect, preserve, transfer, and analyze sensitive digital files. These files may include reports, images, case records, scanned documents, and other evidence-related material. If these files are handled carelessly, they may be exposed to unauthorized persons, altered intentionally, or lost without proper records. For this reason, secure evidence management has become an important requirement in digital forensics and secure information systems.

The current project focuses on building a simplified training platform that demonstrates how digital evidence can be handled securely. Instead of developing a large enterprise-level forensic system, the project provides a practical and understandable implementation of core concepts such as authentication, encryption, decryption, metadata handling, and evidence activity logging. The application is intended to show how evidence can be protected while still remaining accessible to authorized users through controlled workflows.

This platform is especially valuable as an academic project because it combines important computer science concepts in one application. It includes frontend development, backend development, security concepts, REST APIs, file handling, real-time communication, and report-worthy system design. The result is a project that is technically meaningful, visually demonstrable, and suitable for academic evaluation.

The application allows users to sign in using training accounts, upload files for encryption, download protected evidence packages, inspect encrypted packages without direct decryption, and access a view of evidence activity logs. Each step in the process helps simulate the broader idea of chain of custody, which is one of the most important principles in digital forensics.

---

## 2. Problem Statement

Sensitive digital files often require controlled access and proper documentation during storage and transfer. Traditional file handling systems may allow users to upload or download files, but they do not always ensure encryption, accountability, or a verifiable audit trail. In environments such as digital investigations or social-service evidence handling, this creates the risk of unauthorized access, evidence tampering, lack of accountability, and procedural mistakes.

The problem addressed in this project is the absence of a simple training-oriented platform that demonstrates secure evidence handling in a practical manner. Students and beginners often learn the theory of digital forensics and data protection, but they may not get an opportunity to observe how encryption, metadata tracking, authentication, and custody logging work together in one system. Therefore, a lightweight but functional platform is needed to bridge the gap between theory and implementation.

This project solves that problem by creating a web-based evidence management and training platform that simulates secure evidence workflows while remaining simple enough for academic development and demonstration.

---

## 3. Objectives of the Project

The main objectives of the project are listed below:

1. To design and develop a secure web application for handling evidence files.
2. To implement login-based access control using token authentication.
3. To encrypt uploaded files using a strong symmetric encryption algorithm.
4. To support controlled decryption of encrypted evidence packages.
5. To attach and preserve forensic metadata within the encrypted package.
6. To maintain a simple evidence activity log for chain-of-custody awareness.
7. To provide a user-friendly interface for file encryption, decryption, inspection, and log viewing.
8. To help students understand the concepts of digital forensics and secure file handling through practical demonstration.
9. To produce a project that can be extended in the future for hosting, mobile responsiveness, or persistent data storage.

---

## 4. Scope of the Project

The scope of this project is focused on a training and demonstration environment rather than a full enterprise production system. The platform is intended to:

- allow authenticated users to access the system
- encrypt evidence files
- decrypt authorized evidence files
- inspect encrypted evidence metadata
- record and display evidence-handling activity
- simulate real-time forensic training guidance

The current project is suitable for:

- academic project presentation
- cybersecurity demonstrations
- digital forensics concept explanation
- secure file handling training
- prototype development for future expansion

The project does not currently cover all the features of a large-scale forensic management platform such as persistent databases, advanced role-based permissions, cloud deployment, digital signatures, or integration with external investigation tools. However, it creates a strong foundation on which such features can be built.

---

## 5. Existing System

In many simple file management applications, users upload and download files without any built-in encryption or evidence tracking. Such systems are convenient but not secure enough for sensitive data. In a typical non-secure setup:

- files may be stored in plain form
- there is no metadata associated with file handling
- there is no activity log or chain of custody
- user actions are not tracked properly
- unauthorized access may occur if authentication is weak

Similarly, in purely academic examples of encryption, the encryption logic may exist separately from file management or user authentication. This means students see individual concepts but not a unified workflow. Existing learning exercises often miss the practical integration between login, secure storage, audit trail, and forensic principles.

Because of these limitations, there is a need for an integrated but simple application that shows how these components interact in practice.

---

## 6. Proposed System

The proposed system is a secure web-based evidence management and training platform. It introduces a complete workflow for handling digital evidence in a protected manner. The system begins with user authentication and then allows the authenticated user to perform file-related actions such as encryption, decryption, inspection, and log viewing.

The proposed system offers the following key features:

- training-based user login
- file encryption using AES-256-CBC
- metadata embedding inside encrypted packages
- file decryption for authorized users
- evidence inspection without immediate decryption
- evidence activity logging
- real-time training guidance through WebSocket responses
- dashboard-based user interface

This approach improves both security awareness and learning value. It also provides a clear project narrative for academic reporting, because each module contributes directly to the core problem statement.

---

## 7. Feasibility Study

### 7.1 Technical Feasibility

The project is technically feasible because it uses widely available web technologies. Node.js and Express.js are suitable for building lightweight backend APIs, while HTML, CSS, and JavaScript are sufficient for the frontend. File uploads can be handled using Multer, authentication can be implemented using JSON Web Tokens, and encryption can be performed using the built-in crypto module.

### 7.2 Economic Feasibility

The project is economically feasible because it does not require expensive infrastructure or proprietary software. It can be developed and executed using open-source tools and standard hardware. Hosting can also be done later using low-cost or free-tier cloud services.

### 7.3 Operational Feasibility

The platform is operationally feasible because it is simple to use. The user only needs to log in and follow the visible options on the dashboard. The project is especially suitable for demonstration, training, and academic use.

### 7.4 Schedule Feasibility

The development of this project is feasible within a student project timeline because it is modular. Core features such as login, encryption, decryption, and logging can be completed first, while enhancements like inspection, responsive UI, hosting, and reporting can be added incrementally.

---

## 8. Software and Hardware Requirements

### 8.1 Software Requirements

- Operating System: Windows / Linux / macOS
- Runtime Environment: Node.js
- Package Manager: npm
- Backend Framework: Express.js
- Frontend Technologies: HTML5, CSS3, JavaScript
- Security Libraries: jsonwebtoken, crypto
- File Upload Handling: multer
- Real-Time Communication: ws
- Editor / IDE: Visual Studio Code or equivalent
- Browser: Google Chrome / Microsoft Edge / Mozilla Firefox

### 8.2 Hardware Requirements

- Processor: Intel i3 or above
- RAM: 4 GB minimum, 8 GB recommended
- Storage: 1 GB free space or more
- Internet: Optional for future hosting and deployment

---

## 9. System Architecture

The project follows a client-server architecture.

### 9.1 Client Side

The client side is implemented using HTML, CSS, and JavaScript. It provides:

- login screen
- dashboard interface
- file upload forms
- inspection view
- evidence activity log display

The client communicates with the server using HTTP requests and receives responses in JSON, text, or downloadable file format.

### 9.2 Server Side

The server side is implemented using Node.js and Express.js. It performs:

- authentication verification
- file upload handling
- encryption and decryption processing
- evidence metadata packaging
- evidence inspection logic
- activity logging
- WebSocket-based guidance handling

### 9.3 Communication Flow

1. User logs in through the frontend.
2. Credentials are sent to the `/api/authenticate` endpoint.
3. On successful login, a JWT token is returned.
4. The token is stored on the client side and used for further requests.
5. Authenticated users upload files to encryption, decryption, or inspection endpoints.
6. The server processes the request and returns a secure response.
7. Evidence activity is logged in the system.

---

## 10. Module Description

### 10.1 Authentication Module

This module verifies username and password combinations and issues a JWT token to valid users. It provides basic role-oriented training access using predefined accounts such as trainee, supervisor, and trainer.

### 10.2 Encryption Module

This module receives an uploaded file, generates forensic metadata, and encrypts the file contents using AES-256-CBC encryption. The metadata and file contents are combined before encryption so that the final evidence package contains both the data and its forensic context.

### 10.3 Decryption Module

This module accepts an encrypted evidence package, verifies access through the token, decrypts the package, extracts metadata, updates chain-of-custody information, and returns the original file.

### 10.4 Evidence Inspection Module

This module is one of the interesting additions to the project. It allows the user to inspect an encrypted package without immediately downloading the original content. It returns information such as evidence ID, file type, file size, encrypted-by user, encrypted time, and chain-of-custody events.

### 10.5 Evidence Log Module

This module records actions such as encryption, decryption, and inspection. Each log entry contains an ID, action type, filename, username, timestamp, and a short hash value for quick reference.

### 10.6 WebSocket Guidance Module

This module simulates real-time training support. When a user connects and sends a message through the WebSocket layer, the system replies with predefined forensics guidance messages. This module adds an educational and interactive aspect to the application.

### 10.7 User Interface Module

The interface organizes the system into sections such as login, dashboard, secure evidence upload, evidence access, evidence inspection, and evidence activity. The design supports a clean workflow and improves the project’s demonstration quality.

---

## 11. Working Methodology

The development methodology used for this project is modular and iterative. The system was built feature by feature so that each major component could be tested independently before integration.

### Step 1: Requirement Identification

The first step was to identify the major requirements:

- secure login
- evidence file encryption
- evidence file decryption
- metadata tracking
- chain-of-custody style logging
- clean frontend interface

### Step 2: Backend Foundation

The Node.js server and Express.js framework were set up first. API routes were planned around user actions such as login, encryption, decryption, inspection, and log retrieval.

### Step 3: Security Logic

The encryption and token authentication logic were then implemented. This included:

- AES-256-CBC encryption
- IV generation
- JWT token generation
- token verification

### Step 4: File Handling

Multer memory storage was used for uploaded files. File buffers were processed directly, which made it possible to combine metadata and file data before encryption.

### Step 5: Frontend Integration

The frontend forms were connected to the backend APIs using JavaScript `fetch()` requests. Responses were used to trigger downloads, display messages, and show evidence activity logs.

### Step 6: Feature Enhancement

Additional features such as the Evidence Inspector and redesigned minimal dashboard UI were added later to improve realism and user experience.

### Step 7: Testing and Refinement

Each operation was tested for both success and failure conditions. The report-ready version of the project was then prepared with clearer structure and improved frontend presentation.

---

## 12. Algorithms and Security Concepts Used

### 12.1 AES-256-CBC Encryption

The project uses the AES-256-CBC algorithm for encrypting evidence content. AES stands for Advanced Encryption Standard and is a widely trusted symmetric key algorithm. In this project:

- a 256-bit key is used
- a random 16-byte initialization vector is generated
- file contents are encrypted as binary data
- the IV and encrypted output are stored together in a text-safe format

### 12.2 JSON Web Token Authentication

JWT is used to manage authenticated sessions. When a user logs in successfully, the server signs a token using a secret key. The token is then attached to future requests in the Authorization header.

Benefits:

- simple stateless authentication
- easy frontend integration
- clear access control mechanism

### 12.3 Hash-Based Log Reference

Each evidence log entry contains a short hash value. This is not a full forensic signature, but it helps create a quick unique reference for activity entries.

### 12.4 Metadata Packaging

Before encryption, metadata is attached to the file. This metadata includes:

- original file name
- MIME type
- file size
- encrypted-by user
- encrypted time
- evidence ID
- chain of custody

This metadata-first packaging is an important design choice because it preserves evidence context inside the encrypted package itself.

---

## 13. Database / Data Handling Design

The current version of the project does not use a persistent database. Instead, it maintains temporary in-memory structures and file buffers. This was done to keep the project simple and easy to understand.

### 13.1 User Data

Training users are stored in a predefined object inside the backend. This is sufficient for demonstration but can later be replaced by a database.

### 13.2 Evidence Logs

Evidence logs are stored in an in-memory array. Each log entry includes:

- id
- action
- filename
- user
- timestamp
- hash

### 13.3 File Content

Uploaded files are handled in memory using Multer. The application does not currently persist uploaded files to a database or cloud storage by default.

### 13.4 Future Database Options

For future enhancement, the following may be used:

- MongoDB for document-based storage
- SQLite for a lightweight embedded database
- PostgreSQL for a scalable relational design

---

## 14. User Interface Overview

The user interface follows a minimal dashboard design. The main goal of the UI is clarity and simplicity. The screen is divided into logical sections that match the workflow of secure evidence handling.

### Main UI Sections

- Login screen
- Session overview
- Guidance feed
- Secure evidence upload section
- Evidence access section
- Evidence inspector section
- Evidence activity section

### UI Design Goals

- keep the design professional
- avoid unnecessary complexity
- improve readability
- make demonstration easy
- support future mobile responsiveness

The new UI uses card-based sections, modern typography, improved spacing, and a visually balanced layout. This gives the project a polished and presentable appearance.

---

## 15. Implementation Details

### 15.1 Backend File

The main backend logic is located in:

- `src/server.js`

This file contains the complete server setup, authentication endpoint, encryption endpoint, decryption endpoint, inspection endpoint, evidence log endpoint, and WebSocket handling.

### 15.2 Frontend Files

The user interface is mainly implemented through:

- `public/index.html`
- `public/style.css`
- `public/websocket_client.js`

### 15.3 Important API Endpoints

- `POST /api/authenticate`
- `POST /api/encrypt-evidence`
- `POST /api/decrypt-evidence`
- `POST /api/inspect-evidence`
- `GET /api/evidence-log`

### 15.4 Evidence Package Format

The encrypted package contains:

1. metadata length
2. metadata JSON
3. original file data

This combined buffer is then encrypted and returned as a `.enc` file.

### 15.5 Training Roles

The current system supports training users such as:

- trainee
- supervisor
- trainer

These roles are reflected in the login flow and welcome messaging, and they help simulate multi-user evidence handling scenarios.

---

## 16. Testing and Validation

Testing was performed at the functional level to ensure that the main operations of the system work correctly.

### 16.1 Authentication Testing

- valid username and password should return a token
- invalid credentials should return an error

### 16.2 Encryption Testing

- valid file upload should generate encrypted evidence package
- missing file should produce an error message
- metadata should be attached during encryption

### 16.3 Decryption Testing

- valid encrypted package should return original file
- invalid or corrupted package should return a decryption error
- chain-of-custody history should update on successful decryption

### 16.4 Inspection Testing

- valid encrypted package should return metadata summary
- invalid token should deny access
- corrupted encrypted package should return an inspection failure message

### 16.5 Evidence Log Testing

- encryption action should create a log entry
- decryption action should create a log entry
- inspection action should create a log entry

### 16.6 UI Testing

- login form should respond correctly
- dashboard sections should display after login
- buttons and file forms should function correctly
- layout should remain clear across typical screen sizes

### 16.7 Sample Test Cases

| Test Case | Input | Expected Result | Status |
|---|---|---|---|
| Login with valid user | `sw_trainee1 / forensics2024` | Token generated and dashboard displayed | Pass |
| Login with invalid user | wrong credentials | Error message shown | Pass |
| Encrypt valid file | PDF or image upload | `.enc` file generated | Pass |
| Decrypt valid package | correct `.enc` file | original file returned | Pass |
| Inspect valid package | correct `.enc` file | metadata shown | Pass |
| View log | authenticated request | log entries displayed | Pass |

---

## 17. Results and Discussion

The project was successfully developed as a functional prototype of a secure evidence management and digital forensics training platform. The final system demonstrates how secure login, file encryption, forensic metadata, package inspection, and activity logging can be brought together in a simple web application.

One of the most important outcomes of the project is that it transforms isolated theoretical ideas into an integrated workflow. Instead of learning encryption or authentication separately, users can see how these concepts work together in evidence handling. The addition of the Evidence Inspector further improves the educational value, because it allows users to inspect evidence context without immediately decrypting the original file.

The dashboard-based UI also strengthens the project presentation. It makes the application easier to understand and use during demonstration. Although the backend is intentionally simple, it still reflects essential principles of secure system design and forensic awareness.

Overall, the results show that the project achieves its main objectives and provides a strong base for future academic or practical enhancement.

---

## 18. Advantages of the Project

The major advantages of the project are:

- simple and clear architecture
- secure file handling through encryption
- JWT-based authentication
- practical demonstration of digital forensics concepts
- embedded metadata for evidence context
- activity logging for custody awareness
- inspection feature before decryption
- educational value for students
- presentable user interface for demos and viva
- extensible design for future hosting or mobile support

---

## 19. Limitations of the Project

Like any academic prototype, the current system has limitations:

- evidence logs are not stored persistently
- training users are hardcoded
- encryption key is currently fixed in code and should be improved
- role permissions are basic
- no full database integration
- no cloud deployment yet
- no advanced search/filter for logs
- no digital signature verification
- not yet packaged as a mobile app

These limitations are acceptable for the present scope but should be addressed in future versions if the system is to be used more widely.

---

## 20. Future Enhancements

This project offers many meaningful possibilities for future enhancement:

1. Move the encryption key fully into environment configuration.
2. Add a proper database for persistent logs and users.
3. Implement stronger role-based access control.
4. Add search, filter, and export options for evidence logs.
5. Support cloud hosting using platforms such as Render or Railway.
6. Make the interface fully responsive for mobile devices.
7. Add report generation in PDF or CSV format.
8. Introduce file integrity verification with stronger forensic signatures.
9. Add notification panels instead of browser alerts.
10. Expand the real-time module into a richer training assistant.

These enhancements can transform the current academic prototype into a more advanced secure evidence platform.

---

## 21. Conclusion

The **Secure Digital Evidence Management and Forensics Training Platform** is a meaningful academic project that successfully combines web development, encryption, authentication, file handling, and digital forensics concepts. The project demonstrates how sensitive files can be protected, tracked, and accessed within a controlled application workflow.

The system provides a simple but effective solution for understanding digital evidence handling. By including features such as secure login, file encryption, file decryption, evidence inspection, and activity logging, the project moves beyond a basic upload-download system and becomes a practical training platform. It is especially useful for demonstrating the concept of chain of custody and the importance of controlled access in digital investigations.

The project also has strong educational value because it introduces multiple software engineering and cybersecurity concepts in an integrated manner. With future improvements such as hosting, persistent storage, role-based access enhancement, and mobile responsiveness, the application can be extended into a more realistic and professional solution.

In conclusion, this project achieves its objectives and serves as a strong foundation for further development, academic presentation, and practical learning in the domain of secure digital evidence management.

---

## 22. References

1. Node.js Documentation
2. Express.js Documentation
3. MDN Web Docs for HTML, CSS, and JavaScript
4. JSON Web Token Documentation
5. Node.js Crypto Module Documentation
6. WebSocket Documentation
7. Digital Forensics fundamentals and chain-of-custody concepts from standard academic and security references

---

## 23. Appendix

### Appendix A: Sample Training Accounts

- `sw_trainee1 / forensics2024`
- `sw_trainee2 / evidence123`
- `sw_supervisor / admin2024`
- `forensics_trainer / trainer123`

### Appendix B: Project Structure

- `src/server.js` - server-side logic
- `src/encryption.js` - encryption helper file
- `public/index.html` - main user interface
- `public/style.css` - UI styling
- `public/websocket_client.js` - frontend action handling
- `README.md` - project overview

### Appendix C: Suggested Screenshots for Final Submission

Add the following screenshots in the final formatted report:

1. Login page
2. Dashboard page
3. Secure evidence upload section
4. Evidence inspector result screen
5. Evidence activity log
6. Successful encryption output
7. Successful decryption flow

### Appendix D: Viva Questions Preparation

1. What is the aim of your project?
2. Why did you choose AES-256-CBC?
3. What is chain of custody?
4. What is the use of JWT in your project?
5. How does the Evidence Inspector work?
6. What are the limitations of your project?
7. How can this system be improved for real-world deployment?

### Appendix E: Formatting Suggestion for 25-Page Submission

To stretch this report into a full 25-page academic submission:

- use Times New Roman, font size 12
- use 1.5 line spacing
- include a proper title page
- insert page breaks for each chapter
- add screenshots under implementation and results sections
- add diagrams for system architecture and data flow
- add a bibliography page
- add certificate, declaration, and acknowledgement pages separately

With proper formatting and screenshots, this report can comfortably be expanded into a 25-page final document.
