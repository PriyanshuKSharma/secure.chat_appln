// Handle file encryption
document.getElementById('encrypt-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('encrypt-file').files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    console.log('Encrypting file:', file);  // Debugging line to log the file being encrypted

    const response = await fetch('/api/encrypt-file', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File encrypted successfully');  // Debugging line for successful encryption

      // Create a downloadable link for the encrypted file
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'encrypted-file.enc'; // Suggest the file name for download
      link.click();
    } else {
      console.error('Failed to encrypt the file. Server responded with:', response.statusText);  // Detailed error
      alert('Failed to encrypt the file. Please try again later.');
    }
  } catch (error) {
    console.error('Error encrypting file:', error);  // Log the error to the console for debugging
    alert('An error occurred during file encryption. Please check the console for more details.');
  }
});

// Handle file decryption
document.getElementById('decrypt-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('decrypt-file').files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    console.log('Decrypting file:', file);  // Debugging line to log the file being decrypted

    const response = await fetch('/api/decrypt-file', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File decrypted successfully');  // Debugging line for successful decryption

      // Create a downloadable link for the decrypted file
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'decrypted-file';  // Suggest the file name for download
      link.click();
    } else {
      console.error('Failed to decrypt the file. Server responded with:', response.statusText);  // Detailed error
      alert('Failed to decrypt the file. Please try again later.');
    }
  } catch (error) {
    console.error('Error decrypting file:', error);  // Log the error to the console for debugging
    alert('An error occurred during file decryption. Please check the console for more details.');
  }
});
