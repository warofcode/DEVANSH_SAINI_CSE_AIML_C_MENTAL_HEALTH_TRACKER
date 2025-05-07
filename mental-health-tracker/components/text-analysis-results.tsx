import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Info } from "lucide-react"

interface TextAnalysisResultsProps {
  results: {
    sentiment: {
      score: number
      label: string
      confidence: number
    }
    emotions: {
      sadness: number
      anxiety: number
      anger: number
      joy: number
      neutral: number
    }
    keyPhrases: string[]
    riskFactors: {
      depression: string
      anxiety: string
      stress: string
    }
  }
}

export default function TextAnalysisResults({ results }: TextAnalysisResultsProps) {
  const getSentimentColor = (score: number) => {
    if (score < 0.3) return "text-red-500"
    if (score < 0.6) return "text-yellow-500"
    return "text-green-500"
  }

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
      <h2 className="text-2xl font-bold">Analysis Results</h2>

      {(results.riskFactors.depression === "High" || results.riskFactors.anxiety === "High") && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Attention Required</AlertTitle>
          <AlertDescription>
            Our analysis has detected potential signs of significant distress. Consider reaching out to a mental health
            professional.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Sentiment</CardTitle>
            <CardDescription>Analysis of the emotional tone of your text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <span className={`text-4xl font-bold ${getSentimentColor(results.sentiment.score)}`}>
                {results.sentiment.label}
              </span>
              <p className="text-sm text-muted-foreground">
                Confidence: {Math.round(results.sentiment.confidence * 100)}%
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Negative</span>
                <span>Positive</span>
              </div>
              <Progress value={results.sentiment.score * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emotional Breakdown</CardTitle>
            <CardDescription>Distribution of detected emotions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sadness</span>
                  <span>{Math.round(results.emotions.sadness * 100)}%</span>
                </div>
                <Progress value={results.emotions.sadness * 100} className="h-2 bg-blue-100 dark:bg-blue-950" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Anxiety</span>
                  <span>{Math.round(results.emotions.anxiety * 100)}%</span>
                </div>
                <Progress value={results.emotions.anxiety * 100} className="h-2 bg-yellow-100 dark:bg-yellow-950" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Anger</span>
                  <span>{Math.round(results.emotions.anger * 100)}%</span>
                </div>
                <Progress value={results.emotions.anger * 100} className="h-2 bg-red-100 dark:bg-red-950" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Joy</span>
                  <span>{Math.round(results.emotions.joy * 100)}%</span>
                </div>
                <Progress value={results.emotions.joy * 100} className="h-2 bg-green-100 dark:bg-green-950" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Neutral</span>
                  <span>{Math.round(results.emotions.neutral * 100)}%</span>
                </div>
                <Progress value={results.emotions.neutral * 100} className="h-2 bg-gray-100 dark:bg-gray-800" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Phrases</CardTitle>
            <CardDescription>Important phrases detected in your text</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {results.keyPhrases.map((phrase, index) => (
                <li key={index}>{phrase}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>Potential mental health risk factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Depression</span>
                <span className={getRiskColor(results.riskFactors.depression)}>{results.riskFactors.depression}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Anxiety</span>
                <span className={getRiskColor(results.riskFactors.anxiety)}>{results.riskFactors.anxiety}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Stress</span>
                <span className={getRiskColor(results.riskFactors.stress)}>{results.riskFactors.stress}</span>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                This assessment is based on linguistic patterns and is not a clinical diagnosis. Always consult with a
                healthcare professional for proper evaluation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
