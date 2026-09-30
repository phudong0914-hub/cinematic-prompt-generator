async function test() {
  const targetRes = await (await fetch('http://127.0.0.1:9222/json/new?about:blank', { method: 'PUT' })).json();
  const ws = new WebSocket(targetRes.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const curId = id++;
    pending.set(curId, { resolve, reject });
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log('CONSOLE:', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
    } else if (msg.method === 'Runtime.exceptionThrown') {
      console.log('EXCEPTION:', JSON.stringify(msg.params.exceptionDetails));
    } else if (msg.method === 'Log.entryAdded') {
      console.log('LOG:', msg.params.entry.level, msg.params.entry.text, msg.params.entry.url);
    }
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');

  await send('Page.navigate', { url: 'http://localhost:5173/test_module.html' });
  await new Promise(r => setTimeout(r, 4000));

  ws.close();
  await fetch('http://127.0.0.1:9222/json/close/' + targetRes.id);
}
test().catch(console.error);
