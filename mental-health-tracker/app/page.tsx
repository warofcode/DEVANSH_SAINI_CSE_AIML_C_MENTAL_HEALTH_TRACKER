import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, FileText, Mic, Sparkles } from "lucide-react"
import DashboardPreview from "@/components/dashboard-preview"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Early Mental Health Detection System
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            AI-driven analysis of speech and text to detect early signs of mental health concerns and provide
            personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/analyze">
                Start Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Text Analysis</CardTitle>
            <CardDescription>
              Analyze journal entries and social media posts to detect stress and depression markers
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <BarChart3 className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Sentiment Detection</CardTitle>
            <CardDescription>BERT-powered NLP models to understand and track mood patterns over time</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Mic className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Audio Analysis</CardTitle>
            <CardDescription>Examine tone, pitch, and speech patterns to detect emotional states</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Personalized suggestions for improving mental wellbeing based on analysis</CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Dashboard Preview</h2>
          <DashboardPreview />
        </div>
      </section>
    </main>
  )
}
