from fastapi import FastAPI
import subprocess
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


eyetracker_process = None

@app.get("/start/eyemoment")
async def start():
    global eyetracker_process
    try:
        eyetracker_process = subprocess.Popen(["python", "eyetracker/main.py"])
        return {"status": "success", "message": "Eye tracker started successfully"}
    except Exception as e:
        return {"status": "error", "message": f"Error starting eye tracker: {str(e)}"}

@app.get("/stop/eyemoment")
async def stop():
    global eyetracker_process
    try:
        if eyetracker_process is not None:
            eyetracker_process.terminate()
            eyetracker_process = None
            return {"status": "success", "message": "Eye tracker stopped successfully"}
        else:
            return {"status": "success", "message": "Eye tracker is not running"}
    except Exception as e:
        return {"status": "error", "message": f"Error stopping eye tracker: {str(e)}"}

handgestures_process = None
@app.get("/start/handgestures")
async def start1():
    global handgestures_process
    try:
        handgestures_process = subprocess.Popen(["python", "handgestures/main.py"])
        return {"status": "success", "message": "Eye tracker started successfully"}
    except Exception as e:
        return {"status": "error", "message": f"Error starting eye tracker: {str(e)}"}

@app.get("/stop/handgestures")
async def stop1():
    global handgestures_process
    try:
        if handgestures_process is not None:
            handgestures_process.terminate()
            handgestures_process = None
            return {"status": "success", "message": "Eye tracker stopped successfully"}
        else:
            return {"status": "success", "message": "Eye tracker is not running"}
    except Exception as e:
        return {"status": "error", "message": f"Error stopping eye tracker: {str(e)}"}

