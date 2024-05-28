import { getDb, putDb } from './idb';

const editor = document.getElementById('editor');

window.addEventListener('DOMContentLoaded', async () => {
  const localData = await getDb();
  const remoteData = await fetch('/api/notes')
    .then(response => response.json())
    .then(data => data.length ? data[0].content : null)
    .catch(error => console.error('Error fetching remote data:', error));

  editor.innerHTML = remoteData || localData || 'Start typing...';
});

editor.addEventListener('blur', () => {
  const content = editor.innerHTML;
  putDb(content);

  // Save note to the server
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Note saved:', data);
    })
    .catch(error => {
      console.error('Error saving note:', error);
    });
});
