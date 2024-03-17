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

@app.get("/start/interview")
async def start():
    global eyetracker_process
    try:
        eyetracker_process = subprocess.Popen(["python", "Interview/prep.py"])
        return {"status": "success", "message": "Interview Prep started successfully"}
    except Exception as e:
        return {"status": "error", "message": f"Error starting eye tracker: {str(e)}"}

