document.getElementById('encrypt-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('encrypt-file').files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    console.log('Encrypting file:', file);

    const response = await fetch('/api/encrypt-file', {
      method: 'POST',
      body: formData,
    });

    // Log status for debugging
    console.log('Response status:', response.status);
    if (response.ok) {
      console.log('File encrypted successfully');

      const blob = await response.blob();
      console.log('Encrypted file blob received:', blob);

      // Create a download link for the encrypted file
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'encrypted-file.enc'; // Default filename for download
      console.log('Download link created:', link.href);

      // Trigger the download action
      link.click();
    } else {
      alert('Failed to encrypt the file. Server responded with: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error encrypting file:', error);
    alert('An error occurred during file encryption.');
  }
});

// Handle file decryption
document.getElementById('decrypt-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('decrypt-file').files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    console.log('Decrypting file:', file);

    const response = await fetch('/api/decrypt-file', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File decrypted successfully');

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'decrypted-file';  // Default filename for download
      link.click();
    } else {
      alert('Failed to decrypt the file. Server responded with: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error decrypting file:', error);
    alert('An error occurred during file decryption.');
  }
});
