import { getDb, putDb } from './idb';

const editor = document.getElementById('editor');

window.addEventListener('DOMContentLoaded', async () => {
  const data = await getDb();
  editor.innerHTML = data || 'Start typing...';
});

editor.addEventListener('blur', () => {
  putDb(editor.innerHTML);
});
