# DEVANSH_SAINI_CSE_AIML_C_MENTAL_HEALTH_TRACKER
# 🧠 Mental Health Tracker: AI-Driven Early Detection System

A powerful AI-based platform for early detection of mental health symptoms using **Natural Language Processing (NLP)** and **Audio Analysis**. This system empowers users to understand and monitor their mental health through journaling, speech input, and personalized feedback — helping bridge the gap between self-care and professional support.

---

## 📌 Problem Statement

Mental health issues are often detected too late:

- 🧍 1 in 5 adults experiences mental illness every year
- ⏱ Average delay between symptom onset and treatment: **11 years**
- ⚠️ Early warning signs are commonly missed due to:
  - Stigma in seeking help
  - Limited access to professionals
  - Lack of objective tools
  - Inability to self-assess effectively

---

## 💡 Our Solution

An **AI-powered mental health monitoring platform** that:

- Analyzes user text and voice inputs for emotional indicators
- Detects early signs of stress, depression, or anxiety
- Visualizes mood patterns and emotional trends
- Delivers actionable, evidence-based recommendations
- Bridges the gap between self-awareness and professional intervention

---

## ✨ Key Features

- 📝 **Text Analysis:** Detect stress/depression markers in journal entries or social posts
- 🎤 **Voice Analysis:** Analyze pitch, tone, and speech for emotional state
- ❤️ **Sentiment Detection:** NLP-based emotional insights over time
- 📊 **Dashboard:** Visual tracking of mood trends and scores
- 💡 **Recommendations:** Personalized advice to improve emotional well-being

---

## ⚙️ Technology Stack

### Frontend

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, shadcn/ui
- **Data Visualization:** Recharts
- **State Management:** React Hooks
- **Design:** Mobile-first responsive design with animated UI

### Backend

- **Language:** Python
- **API:** Flask for RESTful endpoints
- **NLP Models:**
  - BERT for sentiment analysis
  - Emotion classification models
  - Named Entity Recognition (NER)
- **Audio Processing:**
  - Librosa for feature extraction
  - Custom models for speech emotion recognition

### Database & Infrastructure

- **Database:** PostgreSQL for structured and time-series emotional data
- **Auth:** JWT-based secure authentication
- **DevOps:**
  - Docker for containerization
  - CI/CD pipeline for testing and deployment
  - Cloud-based hosting with auto-scaling

---

## 🧬 Data Flow Architecture

```plaintext
User Input ➜ Preprocessing ➜ Feature Extraction ➜ Model Inference ➜ Emotional Scores ➜ Dashboard Visualization & Recommendations
Inputs: Journals, Text Messages, Voice Clips

Processing: NLP + Audio models

Outputs: Mood charts, alerts, insights, interventions

🚀 Getting Started
Prerequisites
Node.js 18+

Python 3.8+

PostgreSQL

Docker (for deployment)

Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/mental-health-tracker.git
cd mental-health-tracker
Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
Setup Backend
bash
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
🔮 Future Enhancements
📱 Mobile App version

🔗 Integration with wearable devices

📈 Mental health trend prediction using ML

📎 Exportable PDF reports

👥 Community Support & Peer Sharing

👤 Target Audience
Students, Professionals, and Individuals struggling with emotional burnout

Therapists and counselors looking for AI support tools

Institutions aiming to promote mental wellness

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgements
BERT by Google

Librosa

Flask

Next.js

Tailwind CSS
