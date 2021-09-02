import time
import random 
import sys
import subprocess

while True:
    # os.system("start cmd /k openTeacher.py")
    # os.system("start http://localhost:3000")
    url = "http://localhost:3000"
    if sys.platform=='win32':
        os.startfile(url)
    elif sys.platform=='darwin':
        subprocess.Popen(['open', url])
    else:
        subprocess.Popen(['xdg-open', url])

    print('waiting...')
    time.sleep(60 * random.randint(5,10))