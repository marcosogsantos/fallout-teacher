import time
import random 
import sys
import subprocess
import os
import win32gui
def windowEnumerationHandler(hwnd, top_windows):
    top_windows.append((hwnd, win32gui.GetWindowText(hwnd)))
    
while True:
    url = "http://localhost:3000"
    if sys.platform=='win32':
        os.system("start http://localhost:3000")
        results = []
        top_windows = []
        win32gui.EnumWindows(windowEnumerationHandler, top_windows)
        for i in top_windows:
            if "chrome" in i[1].lower():
                win32gui.ShowWindow(i[0],5)
                win32gui.SetForegroundWindow(i[0])
                break
        
    elif sys.platform=='darwin':
        subprocess.Popen(['open', url])
    else:
        subprocess.Popen(['xdg-open', url])

    print('waiting...')
    time.sleep(60 * random.randint(5,10))