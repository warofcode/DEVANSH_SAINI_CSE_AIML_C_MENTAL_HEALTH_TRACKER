import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, HeartPulse, Lightbulb, Smile, Users } from "lucide-react"

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Personalized Recommendations</h1>
        <p className="text-muted-foreground">
          Based on your analysis results, we've created personalized recommendations to help improve your mental
          well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>Cognitive Strategies</CardTitle>
            </div>
            <CardDescription>Techniques to help manage negative thought patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Cognitive Restructuring</h3>
              <p className="text-sm text-muted-foreground">
                Practice identifying and challenging negative thoughts. When you notice a negative thought, ask
                yourself: Is this thought based on facts? What evidence supports or contradicts it?
              </p>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Mindfulness Meditation</h3>
              <p className="text-sm text-muted-foreground">
                Try a 10-minute daily mindfulness practice to help reduce rumination and increase present-moment
                awareness.
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link href="#">
                  Try guided meditation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-1">Thought Journal</h3>
              <p className="text-sm text-muted-foreground">
                Keep a daily journal to track your thoughts and emotions. This can help you identify patterns and
                triggers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-primary" />
              <CardTitle>Physical Well-being</CardTitle>
            </div>
            <CardDescription>Activities to improve your physical health and mood</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Regular Exercise</h3>
              <p className="text-sm text-muted-foreground">
                Aim for 30 minutes of moderate exercise at least 3 times per week. Even short walks can help improve
                mood and reduce anxiety.
              </p>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Sleep Hygiene</h3>
              <p className="text-sm text-muted-foreground">
                Establish a consistent sleep schedule. Avoid screens 1 hour before bedtime and create a relaxing bedtime
                routine.
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link href="#">
                  Sleep improvement tips <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-1">Nutrition</h3>
              <p className="text-sm text-muted-foreground">
                Focus on a balanced diet rich in omega-3 fatty acids, complex carbohydrates, and antioxidants, which can
                support brain health.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Smile className="h-5 w-5 text-primary" />
              <CardTitle>Relaxation Techniques</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  1
                </span>
                <span>Deep breathing exercises</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  2
                </span>
                <span>Progressive muscle relaxation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  3
                </span>
                <span>Guided imagery</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  4
                </span>
                <span>Body scan meditation</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="#">Try Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Social Connection</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  1
                </span>
                <span>Schedule regular social activities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  2
                </span>
                <span>Join a support group</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  3
                </span>
                <span>Volunteer in your community</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  4
                </span>
                <span>Practice active listening</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="#">Find Groups</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <CardTitle>Creative Expression</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  1
                </span>
                <span>Art therapy activities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  2
                </span>
                <span>Journaling prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  3
                </span>
                <span>Music therapy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  4
                </span>
                <span>Dance or movement therapy</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="#">Explore Activities</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Professional Support</CardTitle>
          <CardDescription>When to consider seeking professional mental health support</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            While self-help strategies can be effective for managing mild to moderate symptoms, it's important to know
            when to seek professional help. Consider reaching out to a mental health professional if:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Your symptoms persist for more than two weeks despite trying self-help strategies</li>
            <li>Your symptoms significantly interfere with your daily functioning</li>
            <li>You experience thoughts of harming yourself or others</li>
            <li>You feel overwhelmed and unable to cope</li>
            <li>You're using substances to manage your emotions</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="#">Find a Therapist</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">Crisis Resources</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
