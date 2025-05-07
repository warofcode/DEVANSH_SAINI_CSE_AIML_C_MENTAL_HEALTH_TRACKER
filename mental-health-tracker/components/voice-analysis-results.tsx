import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Info } from "lucide-react"

interface VoiceAnalysisResultsProps {
  results: {
    emotionalState: {
      stress: number
      anxiety: number
      depression: number
      calmness: number
    }
    speechPatterns: {
      pace: string
      volume: string
      clarity: string
      pauses: string
    }
    voiceCharacteristics: {
      pitch: string
      tone: string
      variability: string
    }
    riskAssessment: {
      stressLevel: string
      anxietyLevel: string
      overallRisk: string
    }
  }
}

export default function VoiceAnalysisResults({ results }: VoiceAnalysisResultsProps) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "High":
        return "text-red-500"
      case "Moderate":
        return "text-yellow-500"
      case "Low":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Voice Analysis Results</h2>

      {results.riskAssessment.overallRisk === "High" && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Attention Required</AlertTitle>
          <AlertDescription>
            Our analysis has detected potential signs of significant distress in your voice patterns. Consider reaching
            out to a mental health professional.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Emotional State</CardTitle>
            <CardDescription>Analysis of emotional indicators in your voice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Stress</span>
                  <span>{Math.round(results.emotionalState.stress * 100)}%</span>
                </div>
                <Progress value={results.emotionalState.stress * 100} className="h-2 bg-red-100 dark:bg-red-950" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Anxiety</span>
                  <span>{Math.round(results.emotionalState.anxiety * 100)}%</span>
                </div>
                <Progress
                  value={results.emotionalState.anxiety * 100}
                  className="h-2 bg-yellow-100 dark:bg-yellow-950"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Depression</span>
                  <span>{Math.round(results.emotionalState.depression * 100)}%</span>
                </div>
                <Progress
                  value={results.emotionalState.depression * 100}
                  className="h-2 bg-blue-100 dark:bg-blue-950"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Calmness</span>
                  <span>{Math.round(results.emotionalState.calmness * 100)}%</span>
                </div>
                <Progress
                  value={results.emotionalState.calmness * 100}
                  className="h-2 bg-green-100 dark:bg-green-950"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Speech Patterns</CardTitle>
            <CardDescription>Analysis of your speech characteristics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Pace</span>
                <span>{results.speechPatterns.pace}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Volume</span>
                <span>{results.speechPatterns.volume}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Clarity</span>
                <span>{results.speechPatterns.clarity}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Pauses</span>
                <span>{results.speechPatterns.pauses}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Voice Characteristics</CardTitle>
            <CardDescription>Analysis of your voice tone and quality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Pitch</span>
                <span>{results.voiceCharacteristics.pitch}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Tone</span>
                <span>{results.voiceCharacteristics.tone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Variability</span>
                <span>{results.voiceCharacteristics.variability}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>Potential mental health risk factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Stress Level</span>
                <span className={getRiskColor(results.riskAssessment.stressLevel)}>
                  {results.riskAssessment.stressLevel}
                </span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Anxiety Level</span>
                <span className={getRiskColor(results.riskAssessment.anxietyLevel)}>
                  {results.riskAssessment.anxietyLevel}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Overall Risk</span>
                <span className={getRiskColor(results.riskAssessment.overallRisk)}>
                  {results.riskAssessment.overallRisk}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                This assessment is based on voice patterns and is not a clinical diagnosis. Always consult with a
                healthcare professional for proper evaluation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
