# Digital Forensics Training Platform for Social Workers

## Project Description
A specialized training platform designed to teach social workers proper digital evidence handling procedures. This secure application provides hands-on experience with evidence encryption, chain of custody management, and forensic best practices using AES-256-CBC encryption.

## Features
- Role-based authentication (Trainees, Supervisors, Trainers)
- Evidence encryption/decryption with forensic metadata
- Chain of custody tracking and logging
- Evidence activity audit trail
- Real-time forensics guidance chat
- Secure evidence file handling training

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd secure.chat_appln
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your secret key for JWT:
   ```
   SECRET_KEY=your_secret_key_here
   ```

4. Start the server:
   ```bash
   node src/server.js
   ```

## Usage

### Training Accounts
Use these credentials to access different training roles:
```
Trainee: sw_trainee1 / forensics2024
Trainee: sw_trainee2 / evidence123
Supervisor: sw_supervisor / admin2024
Trainer: forensics_trainer / trainer123
```

### Evidence Management Training
- **Encrypt Evidence**: Upload case files to practice secure evidence storage
- **Decrypt Evidence**: Access encrypted evidence while maintaining chain of custody
- **View Evidence Log**: Monitor all evidence handling activities

### Learning Objectives
1. Understand proper evidence encryption procedures
2. Learn chain of custody requirements
3. Practice secure digital evidence handling
4. Document forensic activities appropriately

## Training Modules
1. **Evidence Encryption**: Learn to secure sensitive case files
2. **Chain of Custody**: Understand evidence tracking requirements
3. **Forensic Documentation**: Practice proper evidence logging
4. **Secure Communication**: Use encrypted channels for case discussions

## Project Structure
- `src/server.js` - Training platform server with forensics features
- `src/encryption.js` - Evidence encryption utilities
- `public/` - Training interface (HTML, CSS, JS)
- Evidence logging and chain of custody tracking

## Technologies Used
- Node.js & Express (Training platform backend)
- WebSocket (Real-time forensics guidance)
- JWT (Role-based authentication)
- AES-256-CBC (Evidence encryption)
- Forensic metadata tracking
- Chain of custody logging

## License
This project is  not licensed.
