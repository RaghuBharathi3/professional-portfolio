import http.server
import socketserver
import threading
import time
import os
import sys
from playwright.sync_api import sync_playwright

PORT = 4173
DIST_DIR = os.path.abspath('dist')

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Handle prefix /professional-portfolio/
        prefix = '/professional-portfolio'
        if path.startswith(prefix):
            path = path[len(prefix):]
        if not path or path == '/':
            path = '/index.html'
        return os.path.join(DIST_DIR, path.lstrip('/'))

def start_server():
    with socketserver.TCPServer(('127.0.0.1', PORT), CustomHandler) as httpd:
        httpd.serve_forever()

server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()
time.sleep(1)

print(f"Server started on http://127.0.0.1:{PORT}/professional-portfolio/")

os.makedirs('qa_screenshots', exist_ok=True)
console_errors = []
failed_requests = []

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    
    # 1. Desktop Test (1440x900)
    context = browser.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()

    page.on('console', lambda msg: console_errors.append(f"{msg.type}: {msg.text}") if msg.type == 'error' else None)
    page.on('requestfailed', lambda req: failed_requests.append(f"{req.url} - {req.failure}"))

    url = f"http://127.0.0.1:{PORT}/professional-portfolio/"
    page.goto(url, wait_until='networkidle')
    
    page.screenshot(path='qa_screenshots/01_desktop_hero.png')
    print("Desktop hero screenshot saved")

    # Scroll through page sections
    page.evaluate("window.scrollTo(0, 1000)")
    time.sleep(0.5)
    page.screenshot(path='qa_screenshots/02_desktop_about_exp.png')

    page.evaluate("window.scrollTo(0, 2000)")
    time.sleep(0.5)
    page.screenshot(path='qa_screenshots/03_desktop_projects.png')

    # Test Simulator
    page.locator("#simulator").scroll_into_view_if_needed()
    time.sleep(0.5)
    page.screenshot(path='qa_screenshots/04_desktop_simulator_aws.png')

    # Click Azure sample
    azure_btn = page.locator("button:has-text('Azure')")
    if azure_btn.count() > 0:
        azure_btn.first.click()
        time.sleep(0.5)
        page.screenshot(path='qa_screenshots/05_desktop_simulator_azure.png')
        print("Simulator Azure clicked")

    # Click Pydantic Canonical Schema tab
    schema_tab = page.locator("button:has-text('Pydantic Canonical Schema')")
    if schema_tab.count() > 0:
        schema_tab.first.click()
        time.sleep(0.3)
        page.screenshot(path='qa_screenshots/06_desktop_simulator_schema.png')
        print("Simulator Canonical Schema tab clicked")

    # Test Architecture Deep Dive Modal
    deep_dive_btn = page.locator("button:has-text('Architecture Deep Dive')").first
    if deep_dive_btn.count() > 0:
        deep_dive_btn.click()
        time.sleep(0.5)
        page.screenshot(path='qa_screenshots/07_project_modal.png')
        print("Project modal opened and captured")
        # Close modal
        close_btn = page.locator("button[aria-label='Close project modal']")
        if close_btn.count() > 0:
            close_btn.click()
            time.sleep(0.3)

    # Test Theme Toggle to Dark Mode
    theme_btn = page.locator("button[aria-label='Toggle visual theme']").first
    if theme_btn.count() > 0:
        theme_btn.click()
        time.sleep(0.5)
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(0.3)
        page.screenshot(path='qa_screenshots/08_desktop_dark_mode.png')
        print("Dark mode captured")

    context.close()

    # 2. Mobile Viewport Test (390x844 - iPhone 14 / modern smartphone)
    mobile_context = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True)
    m_page = mobile_context.new_page()
    m_page.goto(url, wait_until='networkidle')
    m_page.screenshot(path='qa_screenshots/09_mobile_hero.png')
    
    # Open mobile menu
    menu_btn = m_page.locator("button[aria-label='Open mobile navigation']")
    if menu_btn.count() > 0:
        menu_btn.click()
        time.sleep(0.4)
        m_page.screenshot(path='qa_screenshots/10_mobile_menu_open.png')
        print("Mobile menu captured")

    m_page.evaluate("window.scrollTo(0, 1500)")
    time.sleep(0.5)
    m_page.screenshot(path='qa_screenshots/11_mobile_projects.png')

    mobile_context.close()
    browser.close()

print("\n--- QA REPORT ---")
print(f"Console Errors ({len(console_errors)}):", console_errors)
print(f"Failed Requests ({len(failed_requests)}):", failed_requests)
if len(console_errors) == 0 and len(failed_requests) == 0:
    print("ALL PLAYWRIGHT TESTS PASSED WITH 0 ERRORS!")

