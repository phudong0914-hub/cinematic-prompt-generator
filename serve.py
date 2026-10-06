import http.server
import socketserver
import os
import json
import sys

PORT = 5173
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class StudioServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Clean route /api/catalog to data/prompts.json
        if self.path.startswith('/api/catalog'):
            prompts_path = os.path.join(DIRECTORY, 'data', 'prompts.json')
            if os.path.exists(prompts_path):
                try:
                    with open(prompts_path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                    prompts = data if isinstance(data, list) else data.get('prompts', [])
                    categories = sorted(list(set(p.get('category', '') for p in prompts if p.get('category'))))
                    response_payload = {
                        "success": True,
                        "total": len(prompts),
                        "categories": categories,
                        "prompts": prompts
                    }
                    body = json.dumps(response_payload, ensure_ascii=False).encode('utf-8')
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.send_header('Content-Length', str(len(body)))
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(body)
                    return
                except Exception as e:
                    self.send_error(500, f"Error loading catalog: {e}")
                    return

        # Handle favicon.ico fallback to favicon.svg
        if self.path == '/favicon.ico':
            svg_path = os.path.join(DIRECTORY, 'favicon.svg')
            if os.path.exists(svg_path):
                self.send_response(200)
                self.send_header('Content-Type', 'image/svg+xml')
                with open(svg_path, 'rb') as f:
                    content = f.read()
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                self.wfile.write(content)
                return

        return super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), StudioServer) as httpd:
        print(f"Cine Prompt Pro Server running at http://localhost:{PORT}")
        httpd.serve_forever()
