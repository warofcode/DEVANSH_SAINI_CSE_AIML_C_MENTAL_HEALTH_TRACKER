"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Mic, Square, Loader2, Play, AlertTriangle } from "lucide-react"
import VoiceAnalysisResults from "@/components/voice-analysis-results"

export default function VoiceAnalysisPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [permissionDenied, setPermissionDenied] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl)
      }
    }
  }, [audioUrl])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      mediaRecorderRef.current = new MediaRecorder(stream)
      audioChunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" })
        const url = URL.createObjectURL(audioBlob)
        setAudioBlob(audioBlob)
        setAudioUrl(url)
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
      setRecordingTime(0)

      timerRef.current = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1)
      }, 1000)

      setPermissionDenied(false)
    } catch (error) {
      console.error("Error accessing microphone:", error)
      setPermissionDenied(true)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }

      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop())
    }
  }

  const analyzeAudio = () => {
    if (!audioBlob) return

    setIsAnalyzing(true)

    // Simulate API call to backend for analysis
    setTimeout(() => {
      // Mock results
      setResults({
        emotionalState: {
          stress: 0.65,
          anxiety: 0.45,
          depression: 0.3,
          calmness: 0.25,
        },
        speechPatterns: {
          pace: "Rapid",
          volume: "Moderate",
          clarity: "Clear",
          pauses: "Frequent",
        },
        voiceCharacteristics: {
          pitch: "Higher than baseline",
          tone: "Tense",
          variability: "Moderate",
        },
        riskAssessment: {
          stressLevel: "High",
          anxietyLevel: "Moderate",
          overallRisk: "Moderate",
        },
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Voice Analysis</h1>
        <p className="text-muted-foreground mb-8">
          Record your voice to analyze tone, pitch, and speech patterns for emotional indicators.
        </p>

        {permissionDenied && (
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Permission Denied</AlertTitle>
            <AlertDescription>
              Microphone access was denied. Please allow microphone access in your browser settings to use this feature.
            </AlertDescription>
          </Alert>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Voice Recorder</CardTitle>
            <CardDescription>
              Record yourself speaking naturally for at least 30 seconds for the best analysis results.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-8">
              <div className="text-6xl font-mono mb-8">{formatTime(recordingTime)}</div>

              <div className="flex gap-4">
                {!isRecording ? (
                  <Button onClick={startRecording} className="h-16 w-16 rounded-full" disabled={isAnalyzing}>
                    <Mic className="h-6 w-6" />
                  </Button>
                ) : (
                  <Button onClick={stopRecording} variant="destructive" className="h-16 w-16 rounded-full">
                    <Square className="h-6 w-6" />
                  </Button>
                )}
              </div>

              {audioUrl && (
                <div className="mt-8 w-full max-w-md">
                  <audio src={audioUrl} controls className="w-full" />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={analyzeAudio} disabled={!audioBlob || isAnalyzing || isRecording}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Analyze Recording
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        {results && <VoiceAnalysisResults results={results} />}
      </div>
    </div>
  )
}
