import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 gradient-heading">Mental Health Blog</h1>
        <p className="text-muted-foreground">Insights, research, and stories about mental health and wellness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">Understanding Anxiety: Signs, Symptoms, and Coping Strategies</CardTitle>
            <CardDescription>
              Learn about the different types of anxiety disorders and evidence-based approaches to manage them.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>May 15, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>8 min read</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Anxiety disorders are among the most common mental health conditions worldwide. This article explores the
              neurological basis of anxiety...
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/blog/understanding-anxiety">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">The Science of Happiness: What Research Tells Us</CardTitle>
            <CardDescription>
              Explore the psychological research on happiness and practical ways to increase your well-being.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>April 28, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>10 min read</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              What makes us truly happy? Is it wealth, relationships, or purpose? This article dives into the science of
              positive psychology...
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/blog/science-of-happiness">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">Digital Detox: How Technology Affects Mental Health</CardTitle>
            <CardDescription>
              Understand the impact of constant connectivity on your mental well-being and strategies for a healthier
              relationship with technology.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>April 10, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>7 min read</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              In our hyper-connected world, the constant stream of information and social media can take a toll on our
              mental health...
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/blog/digital-detox">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">
              The Mind-Body Connection: How Physical Health Impacts Mental Wellness
            </CardTitle>
            <CardDescription>
              Explore the intricate relationship between physical health and mental well-being.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>March 22, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>9 min read</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              The connection between our physical and mental health is stronger than many realize. This article examines
              how exercise, nutrition...
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/blog/mind-body-connection">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">Breaking the Stigma: Conversations About Mental Health</CardTitle>
            <CardDescription>
              Why we need to normalize discussions about mental health and how to start those conversations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>March 5, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>6 min read</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Despite progress in recent years, mental health stigma remains a significant barrier to seeking help. This
              article discusses...
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/blog/breaking-stigma">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">Mindfulness Meditation: A Beginner's Guide</CardTitle>
            <CardDescription>
              Learn the basics of mindfulness meditation and how to incorporate it into your daily routine.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>February 18, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Mindfulness meditation has gained popularity as a powerful tool for improving mental health. This
              beginner's guide explains...
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0" asChild>
              <Link href="/blog/mindfulness-meditation">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button
          asChild
          className="bg-gradient-to-r from-mindtrack-600 to-calm-600 hover:from-mindtrack-700 hover:to-calm-700"
        >
          <Link href="/blog/all">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
