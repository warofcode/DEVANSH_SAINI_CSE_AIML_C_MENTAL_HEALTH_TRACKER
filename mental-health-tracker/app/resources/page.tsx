import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Phone, BookOpen, Users, Heart } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 gradient-heading">Mental Health Resources</h1>
        <p className="text-muted-foreground">
          Access to quality mental health resources is essential. Here are some trusted resources to help you on your
          journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-mindtrack-600" />
              <CardTitle>Crisis Support</CardTitle>
            </div>
            <CardDescription>Immediate help for those in crisis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">National Suicide Prevention Lifeline</h3>
              <p className="text-sm text-muted-foreground mb-2">
                24/7, free and confidential support for people in distress.
              </p>
              <p className="font-medium">1-800-273-8255</p>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Crisis Text Line</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Text HOME to 741741 to connect with a Crisis Counselor.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-1">Veterans Crisis Line</h3>
              <p className="text-sm text-muted-foreground mb-2">For veterans and their loved ones.</p>
              <p className="font-medium">1-800-273-8255 (Press 1)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-mindtrack-600" />
              <CardTitle>Educational Resources</CardTitle>
            </div>
            <CardDescription>Learn more about mental health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">National Institute of Mental Health</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The lead federal agency for research on mental disorders.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.nimh.nih.gov/" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Mental Health America</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Nation's leading community-based nonprofit dedicated to mental health.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.mhanational.org/" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-1">American Psychological Association</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Scientific and professional organization representing psychology.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.apa.org/" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-mindtrack-600" />
              <CardTitle>Support Groups</CardTitle>
            </div>
            <CardDescription>Connect with others who understand</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">National Alliance on Mental Illness (NAMI)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The nation's largest grassroots mental health organization.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.nami.org/" target="_blank" rel="noopener noreferrer">
                  Find Support Groups <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Depression and Bipolar Support Alliance</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Peer-based, wellness-oriented support groups for people with mood disorders.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.dbsalliance.org/" target="_blank" rel="noopener noreferrer">
                  Find Support Groups <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-1">Anxiety and Depression Association of America</h3>
              <p className="text-sm text-muted-foreground mb-2">
                International nonprofit organization dedicated to the prevention and treatment of anxiety, depression,
                and related disorders.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://adaa.org/" target="_blank" rel="noopener noreferrer">
                  Find Support Groups <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-mindtrack-600" />
              <CardTitle>Self-Help Tools</CardTitle>
            </div>
            <CardDescription>Resources for self-guided support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Headspace</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Meditation and mindfulness app to help with stress, anxiety, and more.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium mb-1">Calm Harm</h3>
              <p className="text-sm text-muted-foreground mb-2">
                App designed to help people resist or manage the urge to self-harm.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://calmharm.co.uk/" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="font-medium mb-1">MoodGYM</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Interactive self-help program that teaches cognitive behavioral therapy skills.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://moodgym.com.au/" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Find a Mental Health Professional</CardTitle>
          <CardDescription>Connect with licensed therapists, counselors, and psychiatrists</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Psychology Today</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive directory of therapists, psychiatrists, and treatment facilities.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer">
                  Find a Therapist <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">BetterHelp</h3>
              <p className="text-sm text-muted-foreground">Online counseling platform with licensed therapists.</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.betterhelp.com/" target="_blank" rel="noopener noreferrer">
                  Online Therapy <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Talkspace</h3>
              <p className="text-sm text-muted-foreground">Online therapy platform with licensed therapists.</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://www.talkspace.com/" target="_blank" rel="noopener noreferrer">
                  Online Therapy <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
