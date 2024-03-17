import cv2
from deepface import DeepFace
import time
import datetime
import plotly.express as px
import plotly.graph_objects as go
import tkinter as tk
from tkinter import messagebox
import webbrowser

# Load the pre-trained emotion detection model
model = DeepFace.build_model("Emotion")

# Define emotion labels with the requested changes
emotion_labels = ['frustrated', 'discomfort', 'nervous', 'confident', 'sad', 'surprise', 'balanced']

# Load face cascade classifier
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Start capturing video
cap = cv2.VideoCapture(0)

# Initialize variables
emotion_timestamps = {emotion: [] for emotion in emotion_labels}
start_time = time.time()
duration = 300  # 5 minutes for demonstration purposes

# Create a list of questions
questions = [
    "Can you discuss a specific project or achievement that you are particularly proud of from your previous work experience?",
    "How do you handle challenging situations or conflicts within a team environment?",
    "Describe a time when you had to meet a tight deadline. How did you manage your time and resources to ensure successful completion?",
    "What strategies do you employ for continuous learning and staying updated on industry trends and technologies?",
    "Can you share an example of a problem you identified at work and the steps you took to solve it?",
    "How do you prioritize tasks and manage your workload effectively, especially when faced with multiple deadlines?",
    "Describe a situation where you had to collaborate with colleagues from diverse backgrounds or departments. How did you ensure effective communication and teamwork?",
    "What role do you believe adaptability plays in a dynamic work environment, and can you provide an example from your experience?",
    "How do you approach decision-making, and can you share an instance where your decision had a significant impact on a project or team?",
    "Can you discuss your experience with handling and implementing feedback, both giving and receiving, in a professional setting?"
]

# Initialize the question index
question_index = 0

# Function to show the next question in a message box
def show_next_question():
    global question_index
    if question_index < len(questions):
        question = questions[question_index]
        tk.messagebox.showinfo("Question", question)
        question_index += 1

# Main loop
while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Convert frame to grayscale
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the frame
    faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in faces:
        # Extract the face ROI (Region of Interest)
        face_roi = gray_frame[y:y + h, x:x + w]

        # Resize the face ROI to match the input shape of the model
        resized_face = cv2.resize(face_roi, (48, 48), interpolation=cv2.INTER_AREA)

        # Normalize the resized face image
        normalized_face = resized_face / 255.0

        # Reshape the image to match the input shape of the model
        reshaped_face = normalized_face.reshape(1, 48, 48, 1)

        # Predict emotions using the pre-trained model
        preds = model.predict(reshaped_face)[0]
        emotion_idx = preds.argmax()
        emotion = emotion_labels[emotion_idx]

        # Record timestamp for the detected emotion
        emotion_timestamps[emotion].append(time.time() - start_time)

    # Display the remaining time limit on the screen
    remaining_time = max(0, duration - (time.time() - start_time))
    remaining_minutes = int(remaining_time // 60)
    remaining_seconds = int(remaining_time % 60)
    time_text = f"Time Remaining: {remaining_minutes:02d}:{remaining_seconds:02d}"
    cv2.putText(frame, time_text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)

    # Display the resulting frame
    cv2.imshow('Real-time Emotion Detection', frame)

    # Display the next question if it's time
    if time.time() - start_time > question_index * 30:  # Show a new question every 30 seconds
        show_next_question()

    # Break the loop if the specified duration has passed
    if time.time() - start_time > duration:
        break

    # Press 'q' to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close all windows
cap.release()
cv2.destroyAllWindows()

# Plotting with Plotly
fig = go.Figure()

# Iterate through emotions and create a bar for each
for emotion, timestamps in emotion_timestamps.items():
    fig.add_trace(go.Bar(x=[emotion] * len(timestamps), y=timestamps, name=emotion))

# Set y-axis limits based on duration
fig.update_layout(yaxis_range=[0, duration])
fig.update_yaxes(title_text="Time (seconds)")
fig.update_xaxes(title_text="Emotion")
fig.update_layout(title="Timestamps vs Emotion")

fig.show()

# Plotting the proportions of each emotion
emotion_proportions = [sum(timestamps) for timestamps in emotion_timestamps.values()]

fig2 = px.pie(
    names=list(emotion_timestamps.keys()),
    values=emotion_proportions,
    title='Proportion of Emotions',
    labels={'label': 'emotion', 'percent': 'percent'},
    hole=0.3,
)

# Show the figure
fig2.show()

# Finding the most dominant emotion
dominant_emotion = max(emotion_timestamps, key=lambda k: sum(emotion_timestamps[k]))

# Open the corresponding HTML file for the most dominant emotion
html_file_path = f"file:///C:/InterviewPrep/Interview/emotions/{dominant_emotion.capitalize()}.html"
webbrowser.open(html_file_path)
