"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Calendar } from "@/components/ui/calendar"

// Mock data
const weeklyData = [
  { date: "Mon", sentiment: 65, anxiety: 40, stress: 30 },
  { date: "Tue", sentiment: 60, anxiety: 45, stress: 35 },
  { date: "Wed", sentiment: 55, anxiety: 50, stress: 40 },
  { date: "Thu", sentiment: 50, anxiety: 55, stress: 45 },
  { date: "Fri", sentiment: 45, anxiety: 60, stress: 50 },
  { date: "Sat", sentiment: 50, anxiety: 55, stress: 45 },
  { date: "Sun", sentiment: 55, anxiety: 50, stress: 40 },
]

const monthlyData = [
  { date: "Week 1", sentiment: 60, anxiety: 45, stress: 35 },
  { date: "Week 2", sentiment: 55, anxiety: 50, stress: 40 },
  { date: "Week 3", sentiment: 50, anxiety: 55, stress: 45 },
  { date: "Week 4", sentiment: 45, anxiety: 60, stress: 50 },
]

const emotionData = [
  { name: "Joy", value: 25, color: "#10b981" },
  { name: "Sadness", value: 35, color: "#3b82f6" },
  { name: "Anger", value: 15, color: "#ef4444" },
  { name: "Fear", value: 20, color: "#f59e0b" },
  { name: "Surprise", value: 5, color: "#8b5cf6" },
]

const triggerData = [
  { name: "Work Stress", count: 12 },
  { name: "Sleep Issues", count: 8 },
  { name: "Social Anxiety", count: 6 },
  { name: "Family Conflict", count: 5 },
  { name: "Health Concerns", count: 4 },
]

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("week")
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Mental Health Dashboard</h1>
          <p className="text-muted-foreground">Track your emotional well-being over time</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Past Week</SelectItem>
              <SelectItem value="month">Past Month</SelectItem>
              <SelectItem value="year">Past Year</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border absolute right-0 top-full z-10 mt-2 hidden data-[state=open]:block"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="emotions">Emotions</TabsTrigger>
          <TabsTrigger value="triggers">Triggers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mood Trends</CardTitle>
              <CardDescription>Track your emotional well-being over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={timeRange === "week" ? weeklyData : monthlyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Average Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center text-green-500">52%</div>
                <p className="text-center text-muted-foreground text-sm mt-2">Slightly positive</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Anxiety Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center text-yellow-500">45%</div>
                <p className="text-center text-muted-foreground text-sm mt-2">Moderate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Stress Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center text-red-500">38%</div>
                <p className="text-center text-muted-foreground text-sm mt-2">Moderate</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="emotions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Emotion Distribution</CardTitle>
                <CardDescription>Breakdown of detected emotions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={emotionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {emotionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emotion Trends</CardTitle>
                <CardDescription>How your emotions have changed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sentiment" name="Positive Sentiment" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Emotional Insights</CardTitle>
              <CardDescription>Key observations about your emotional patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 p-1 rounded">
                    ⚠️
                  </span>
                  <div>
                    <p className="font-medium">Increased sadness detected</p>
                    <p className="text-sm text-muted-foreground">
                      Your sadness levels have increased by 10% compared to your baseline.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium">Positive correlation with social activities</p>
                    <p className="text-sm text-muted-foreground">
                      Your positive emotions increase after social interactions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-1 rounded">ℹ️</span>
                  <div>
                    <p className="font-medium">Emotional variability</p>
                    <p className="text-sm text-muted-foreground">
                      Your emotional states show moderate variability throughout the week.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="triggers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Common Triggers</CardTitle>
              <CardDescription>Factors that may influence your emotional state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={triggerData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Trigger Analysis</CardTitle>
                <CardDescription>Detailed analysis of your emotional triggers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Work Stress</span>
                      <span className="text-red-500 font-medium">High Impact</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Work-related stress appears to be a significant trigger for anxiety and negative emotions,
                      particularly on weekdays.
                    </p>
                  </li>
                  <li className="border-b pb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Sleep Issues</span>
                      <span className="text-yellow-500 font-medium">Moderate Impact</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Poor sleep quality correlates with increased stress and decreased positive sentiment the following
                      day.
                    </p>
                  </li>
                  <li>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Social Anxiety</span>
                      <span className="text-yellow-500 font-medium">Moderate Impact</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Social situations sometimes trigger anxiety, though the effect varies depending on the context.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Coping Strategies</CardTitle>
                <CardDescription>Recommended approaches based on your triggers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Mindfulness Practice</p>
                      <p className="text-sm text-muted-foreground">
                        Regular mindfulness meditation may help reduce work-related stress and anxiety.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Sleep Hygiene</p>
                      <p className="text-sm text-muted-foreground">
                        Improving sleep habits could significantly impact your overall emotional well-being.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Gradual Exposure</p>
                      <p className="text-sm text-muted-foreground">
                        Gradually increasing exposure to social situations may help reduce social anxiety over time.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Physical Activity</p>
                      <p className="text-sm text-muted-foreground">
                        Regular exercise has been shown to reduce stress and improve mood.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
