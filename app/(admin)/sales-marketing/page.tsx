"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, Mail, Target, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartTooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from 'recharts'

export default function SalesMarketingPage() {
  const conversationData = [
    { name: 'Email', value: 35.2 },
    { name: 'Social media', value: 28.7 },
    { name: 'Direct', value: 22.1 },
    { name: 'Organic', value: 14.0 },
  ]

  const COLORS = ['#0f766e', '#16a34a', '#94a3b8', '#c7c6c4']

  const funnelData = [
    { name: 'Views', value: 12543 },
    { name: 'Clicks', value: 2847 },
    { name: 'Inquiries', value: 892 },
    { name: 'Bookings', value: 456 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sales & Marketing</h1>
        <p className="text-muted-foreground">Manage campaigns and promotions</p>
      </div>

      {/* Tabs: Offers / Campaigns / Analytics */}
      <Tabs defaultValue="offers" className="mt-6">
        <div className="flex items-center justify-between">
          <TabsList aria-label="Sales & Marketing Tabs">
            <TabsTrigger value="offers">Offers</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <div className="ml-4">
            <Button variant="default" size="sm">+ Add Offer</Button>
          </div>
        </div>

        <TabsContent value="offers" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Offers</CardTitle>
              <CardDescription>Manage promotional offers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <div className="w-72">
                    <Input placeholder="Search offers..." />
                  </div>
                  <select className="h-9 rounded-md border px-2 text-sm">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Expired</option>
                  </select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-muted-foreground text-left border-t border-b">
                        <th className="py-3">Title</th>
                        <th>Discount %</th>
                        <th>Validity</th>
                        <th>Usage Count</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[{
                        title: "Weekend Deal",
                        code: "WEEKEND2025",
                        discount: "20%",
                        validity: "Dec 15 - Dec 31, 2025",
                        usage: "47 of 100",
                        status: "Active",
                      }, {
                        title: "10% off spa package",
                        code: "SPA10",
                        discount: "10%",
                        validity: "Jan 1 - Mar 31, 2025",
                        usage: "23 of 50",
                        status: "Active",
                      }, {
                        title: "Holiday Discount",
                        code: "HOLIDAY2025",
                        discount: "15%",
                        validity: "Dec 20 - Jan 5, 2026",
                        usage: "12 of 30",
                        status: "Active",
                      }, {
                        title: "New Year Special",
                        code: "NEWYEAR2026",
                        discount: "25%",
                        validity: "Jan 1 - Jan 10, 2026",
                        usage: "5 of 20",
                        status: "Upcoming",
                      }].map((offer, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-4">
                            <div className="font-medium">{offer.title}</div>
                            <div className="text-xs text-muted-foreground">{offer.code}</div>
                          </td>
                          <td className="text-green-600 font-bold">{offer.discount}</td>
                          <td className="text-sm text-muted-foreground">{offer.validity}</td>
                          <td className="text-sm">{offer.usage}</td>
                          <td><span className={`inline-flex items-center px-3 py-1 rounded-full ${offer.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"} text-xs`}>{offer.status}</span></td>
                          <td>
                            <div className="flex gap-2">
                              <button className="text-green-600">Edit</button>
                              <button className="text-red-600">Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: "Drafts",
              description: "3 Campaigns",
              campaigns: [
                { name: "Spring Sale", details: "Email Campaign • ROI: N/A" },
                { name: "Flash Sale", details: "Social Media • ROI: N/A" },
                { name: "VIP Exclusive", details: "Email + Social • ROI: N/A" },
              ],
              bgColor: "bg-slate-50",
            }, {
              title: "Active",
              description: "4 Campaigns",
              campaigns: [
                { name: "Weekend Deal", details: "Social Media • ROI: 340%" },
                { name: "Spa Package Promo", details: "Email + Social • ROI: 280%" },
                { name: "Holiday Blast", details: "Multi-channel • ROI: 400%" },
                { name: "Black Friday", details: "Multi-channel • ROI: 450%" },
              ],
              bgColor: "bg-emerald-50",
            }, {
              title: "Expired",
              description: "2 Campaigns",
              campaigns: [
                { name: "Summer Special", details: "Email Campaign • ROI: 200%" },
                { name: "Autumn Sale", details: "Social Media • ROI: 150%" },
              ],
              bgColor: "bg-rose-50",
            }].map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.campaigns.map((campaign, idx) => (
                      <div key={idx} className={`p-3 rounded ${section.bgColor}`}>
                        <div className="font-medium">{campaign.name}</div>
                        <div className="text-xs text-muted-foreground">{campaign.details}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Rates</CardTitle>
              </CardHeader>
                <CardContent>
                  <div className="h-52">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={conversationData}
                          dataKey="value"
                          nameKey="name"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={4}
                        >
                          {conversationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartTooltip formatter={(value: number) => value} />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Views to Booking Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-52">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={funnelData} layout="vertical" barCategoryGap={20}>
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="name" width={80} />
                      <Bar dataKey="value" fill="#16a34a" radius={[10, 10, 0, 0]}>
                        {funnelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                      <RechartTooltip formatter={(value: number) => value} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <div className="text-xs text-muted-foreground">Total Views</div>
                <div className="text-2xl font-bold">12,543</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="text-xs text-muted-foreground">Clicks</div>
                <div className="text-2xl font-bold">2,543</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="text-xs text-muted-foreground">Bookings</div>
                <div className="text-2xl font-bold">456</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
