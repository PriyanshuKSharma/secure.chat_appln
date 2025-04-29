# secure.chat_appln

## Project Description
secure.chat_appln is a secure chat application that provides encrypted real-time communication between clients using WebSocket. It features user authentication with JWT, file encryption and decryption, and secure message exchange using AES-256-CBC encryption.

## Features
- User authentication with JWT tokens
- AES-256-CBC encryption for messages and files
- File upload and download with encryption/decryption
- Real-time encrypted chat using WebSocket
- Simple web frontend for interaction

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

### Authentication
Send a POST request to `/api/authenticate` with JSON body:
```json
{
  "username": "user1",
  "password": "password1"
}
```
On success, you will receive a JWT token to use for WebSocket connections.

### File Encryption
- POST `/api/encrypt-file` with a file upload to receive the encrypted file.
- POST `/api/decrypt-file` with an encrypted file upload to receive the decrypted file.

### WebSocket Chat
Connect to the WebSocket server at:
```
ws://localhost:8082?token=YOUR_JWT_TOKEN
```
Messages sent and received are encrypted using AES-256-CBC.

## Project Structure
- `src/server.js` - Express server and WebSocket server implementation
- `src/encryption.js` - Encryption and decryption utilities
- `auth.js` - Client-side authentication helper
- `public/` - Frontend static files (HTML, CSS, JS)
- `encrypted/` and `decrypted/` - Directories for encrypted and decrypted files

## Technologies Used
- Node.js
- Express
- WebSocket (ws)
- JSON Web Tokens (JWT)
- AES-256-CBC encryption
- Multer (file upload handling)
- dotenv (environment variables)

## License
This project is  not licensed.
