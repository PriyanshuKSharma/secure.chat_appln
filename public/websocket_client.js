document.getElementById('encrypt-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('encrypt-file').files[0];
  if (!file) {
    alert('Please select an evidence file to encrypt.');
    return;
  }
  
  const formData = new FormData();
  formData.append('file', file);
  const token = localStorage.getItem('forensicsToken');

  try {
    console.log('Securing evidence file:', file.name);

    const response = await fetch('/api/encrypt-evidence', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData,
    });

    if (response.ok) {
      console.log('Evidence secured successfully');
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      
      const contentDisposition = response.headers.get('Content-Disposition');
      let filename = 'evidence.enc';
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match) filename = match[1];
      }
      
      link.download = filename;
      link.click();
      
      alert(`✅ Evidence "${file.name}" has been encrypted and secured.\n🔒 Chain of custody initiated.`);
    } else {
      alert('❌ Failed to encrypt evidence: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error encrypting evidence:', error);
    alert('❌ An error occurred during evidence encryption.');
  }
});

// Handle evidence decryption
document.getElementById('decrypt-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('decrypt-file').files[0];
  if (!file) {
    alert('Please select an encrypted evidence file.');
    return;
  }
  
  const formData = new FormData();
  formData.append('file', file);
  const token = localStorage.getItem('forensicsToken');

  try {
    console.log('Accessing evidence file:', file.name);

    const response = await fetch('/api/decrypt-evidence', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData,
    });

    if (response.ok) {
      console.log('Evidence accessed successfully');
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      
      const contentDisposition = response.headers.get('Content-Disposition');
      let filename = 'evidence-file';
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match) filename = match[1];
      }
      
      // Get evidence metadata
      const metadata = response.headers.get('X-Evidence-Metadata');
      let metaInfo = '';
      if (metadata) {
        const meta = JSON.parse(metadata);
        metaInfo = `\n📋 Evidence ID: ${meta.evidenceId}\n🕒 Originally encrypted: ${new Date(meta.encryptedAt).toLocaleString()}`;
      }
      
      link.download = filename;
      link.click();
      
      alert(`✅ Evidence "${filename}" has been decrypted and accessed.\n🔗 Chain of custody updated.${metaInfo}`);
    } else {
      alert('❌ Failed to decrypt evidence: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error decrypting evidence:', error);
    alert('❌ An error occurred during evidence decryption.');
  }
});

// Evidence log viewer
document.getElementById('view-log-btn').addEventListener('click', async () => {
  const token = localStorage.getItem('forensicsToken');
  try {
    const response = await fetch('/api/evidence-log', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (response.ok) {
      const log = await response.json();
      const logDiv = document.getElementById('evidence-log');
      
      if (log.length === 0) {
        logDiv.innerHTML = '<p>No evidence activity recorded.</p>';
      } else {
        logDiv.innerHTML = '<h4>📋 Evidence Activity Log</h4>' + 
          log.map(entry => 
            `<div class="log-entry">
              <strong>ID:</strong> ${entry.id} | 
              <strong>Action:</strong> ${entry.action} | 
              <strong>File:</strong> ${entry.filename}<br>
              <strong>User:</strong> ${entry.user} | 
              <strong>Time:</strong> ${new Date(entry.timestamp).toLocaleString()}<br>
              <strong>Hash:</strong> ${entry.hash}
            </div>`
          ).join('');
      }
      
      logDiv.style.display = logDiv.style.display === 'none' ? 'block' : 'none';
    }
  } catch (error) {
    alert('❌ Failed to load evidence log.');
  }
});
