import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FileText, Mic } from "lucide-react"

export default function AnalyzePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Choose Analysis Method</h1>
        <p className="text-muted-foreground">
          Select how you'd like to analyze your mental health state. You can either analyze your text entries or record
          your voice for analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" /> Text Analysis
            </CardTitle>
            <CardDescription>
              Analyze your journal entries, social media posts, or any text to detect emotional patterns and sentiment.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>Sentiment analysis using BERT</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>Emotion detection from text</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>Linguistic pattern recognition</span>
                </li>
              </ul>
            </div>
            <Button asChild className="w-full">
              <Link href="/analyze/text">Start Text Analysis</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5" /> Voice Analysis
            </CardTitle>
            <CardDescription>
              Record your voice to analyze tone, pitch, and speech patterns for emotional indicators.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>Speech tone and pitch analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>Voice emotion detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>Speech pattern analysis</span>
                </li>
              </ul>
            </div>
            <Button asChild className="w-full">
              <Link href="/analyze/voice">Start Voice Analysis</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
