import { getDb, putDb } from './idb';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const editorContainer = document.getElementById('editor');

const editor = CodeMirror(editorContainer, {
  mode: 'javascript',
  lineNumbers: true,
  theme: 'material-darker',
  value: '/*\n  J.A.T.E\n  just another text editor\n*/\nconsole.log("Hello world!")\n'
});

window.addEventListener('DOMContentLoaded', async () => {
  const data = await getDb();
  editor.setValue(data || editor.getValue());
});

editor.on('blur', () => {
  putDb(editor.getValue());
});

document.getElementById('installBtn').addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (promptEvent) {
    promptEvent.prompt();
    window.deferredPrompt = null;
  }
});
