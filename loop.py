import time
import os
import random 
while True:
    # os.system("start cmd /k openTeacher.py")
    os.system("start http://localhost:3000")
    print('waiting...')
    time.sleep(60 * random.randint(5,10))