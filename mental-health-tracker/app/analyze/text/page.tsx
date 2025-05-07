"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Send } from "lucide-react"
import TextAnalysisResults from "@/components/text-analysis-results"

export default function TextAnalysisPage() {
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = async () => {
    if (!text.trim()) return

    setIsAnalyzing(true)

    // Simulate API call to backend for analysis
    setTimeout(() => {
      // Mock results
      setResults({
        sentiment: {
          score: 0.35,
          label: "Negative",
          confidence: 0.78,
        },
        emotions: {
          sadness: 0.45,
          anxiety: 0.3,
          anger: 0.15,
          joy: 0.05,
          neutral: 0.05,
        },
        keyPhrases: ["feeling overwhelmed", "difficult to concentrate", "trouble sleeping"],
        riskFactors: {
          depression: "Moderate",
          anxiety: "High",
          stress: "High",
        },
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Analysis</h1>
        <p className="text-muted-foreground mb-8">
          Enter text to analyze for emotional patterns and mental health indicators.
        </p>

        <Tabs defaultValue="journal" className="mb-8">
          <TabsList>
            <TabsTrigger value="journal">Journal Entry</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="custom">Custom Text</TabsTrigger>
          </TabsList>

          <TabsContent value="journal" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Journal Entry</CardTitle>
                <CardDescription>
                  Write about your day, thoughts, or feelings. The more detailed your entry, the better the analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Today I felt..."
                  className="min-h-[200px]"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleAnalyze} disabled={isAnalyzing || !text.trim()}>
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Analyze
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Posts</CardTitle>
                <CardDescription>
                  Paste your recent social media posts for analysis of your public communication patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste your social media posts here..."
                  className="min-h-[200px]"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleAnalyze} disabled={isAnalyzing || !text.trim()}>
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Analyze
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Text</CardTitle>
                <CardDescription>
                  Enter any text you'd like to analyze for emotional content and mental health indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Enter text for analysis..."
                  className="min-h-[200px]"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleAnalyze} disabled={isAnalyzing || !text.trim()}>
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Analyze
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {results && <TextAnalysisResults results={results} />}
      </div>
    </div>
  )
}
