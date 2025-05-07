"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts"
import { useState } from "react"

// Mock data for the dashboard
const moodData = [
  { date: "Mon", sentiment: 65, anxiety: 40, stress: 30 },
  { date: "Tue", sentiment: 60, anxiety: 45, stress: 35 },
  { date: "Wed", sentiment: 55, anxiety: 50, stress: 40 },
  { date: "Thu", sentiment: 50, anxiety: 55, stress: 45 },
  { date: "Fri", sentiment: 45, anxiety: 60, stress: 50 },
  { date: "Sat", sentiment: 50, anxiety: 55, stress: 45 },
  { date: "Sun", sentiment: 55, anxiety: 50, stress: 40 },
]

const emotionData = [
  { name: "Joy", value: 25 },
  { name: "Sadness", value: 35 },
  { name: "Anger", value: 15 },
  { name: "Fear", value: 20 },
  { name: "Surprise", value: 5 },
]

export default function DashboardPreview() {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <Tabs defaultValue="mood" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
        <TabsTrigger value="mood">Mood Tracking</TabsTrigger>
        <TabsTrigger value="emotions">Emotions</TabsTrigger>
        <TabsTrigger value="insights">Insights</TabsTrigger>
      </TabsList>

      <TabsContent value="mood">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Mood Trends</CardTitle>
              <Tabs value={timeRange} onValueChange={setTimeRange} className="w-[200px]">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sentiment" stroke="#10b981" name="Positive Sentiment" />
                  <Line type="monotone" dataKey="anxiety" stroke="#f59e0b" name="Anxiety Level" />
                  <Line type="monotone" dataKey="stress" stroke="#ef4444" name="Stress Level" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="emotions">
        <Card>
          <CardHeader>
            <CardTitle>Emotion Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={emotionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" name="Frequency" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="insights">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 p-1 rounded">
                    ⚠️
                  </span>
                  <div>
                    <p className="font-medium">Increased anxiety detected</p>
                    <p className="text-sm text-muted-foreground">
                      Your anxiety levels have increased by 15% over the past week.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 p-1 rounded">🔍</span>
                  <div>
                    <p className="font-medium">Sleep pattern correlation</p>
                    <p className="text-sm text-muted-foreground">
                      Your mood tends to decline on days following poor sleep.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium">Positive response to exercise</p>
                    <p className="text-sm text-muted-foreground">
                      Exercise sessions correlate with improved mood for 24-48 hours.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-1 rounded">1</span>
                  <div>
                    <p className="font-medium">Try breathing exercises</p>
                    <p className="text-sm text-muted-foreground">
                      5-minute breathing sessions may help reduce your anxiety levels.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-1 rounded">2</span>
                  <div>
                    <p className="font-medium">Improve sleep hygiene</p>
                    <p className="text-sm text-muted-foreground">Consider establishing a consistent sleep schedule.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-1 rounded">3</span>
                  <div>
                    <p className="font-medium">Schedule a check-in</p>
                    <p className="text-sm text-muted-foreground">
                      Consider speaking with a mental health professional.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
