"use client"

import { useState } from "react"
import { Bell, ChevronDown, Star } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Review {
  id: string
  author: string
  location: string
  avatar: string
  initials: string
  rating: number
  date: string
  content: string
}

const reviewsData: Review[] = [
  {
    id: "1",
    author: "Mark Jones",
    location: "USA",
    avatar: "/user-avatar.jpg",
    initials: "MJ",
    rating: 5,
    date: "1 day ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: "2",
    author: "Grace Taylor",
    location: "UK",
    avatar: "/user-avatar.jpg",
    initials: "GT",
    rating: 3,
    date: "5 days ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: "3",
    author: "Aria Nelson",
    location: "Sweden",
    avatar: "/user-avatar.jpg",
    initials: "AN",
    rating: 4,
    date: "1 week ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
]

export default function Reviews() {
  const [selectedSource, setSelectedSource] = useState("all-sources")
  const [selectedRating, setSelectedRating] = useState("all-ratings")

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Review Management</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg">
            <Bell size={20} className="text-muted-foreground" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/user-avatar.jpg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sarah Johnson</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
            <ChevronDown size={16} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="px-4 py-2 border border-border rounded-md text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all-sources">All Sources</option>
              <option value="google">Google</option>
              <option value="tripadvisor">TripAdvisor</option>
              <option value="booking">Booking.com</option>
            </select>

            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="px-4 py-2 border border-border rounded-md text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all-ratings">All Ratings</option>
              <option value="5-stars">5 Stars</option>
              <option value="4-stars">4 Stars</option>
              <option value="3-stars">3 Stars</option>
              <option value="below-3">Below 3 Stars</option>
            </select>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{review.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{review.author}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">{renderStars(review.rating)}</div>

                <p className="text-sm text-foreground leading-relaxed mb-4">{review.content}</p>

                <button className="text-primary hover:text-primary/80 text-sm font-medium">Reply</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Sentiment & Rating */}
        <div className="w-64 space-y-6">
          {/* Review Sentiment */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-6">Review Sentiment</h3>

            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  {/* Background circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted"
                  />

                  {/* Positive (green) - 49/58 = 84.5% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#408678"
                    strokeWidth="8"
                    strokeDasharray={`${(49 / 58) * 314.159} 314.159`}
                  />

                  {/* Neutral (gray) - 5/58 = 8.6% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#787878"
                    strokeWidth="8"
                    strokeDasharray={`${(5 / 58) * 314.159} 314.159`}
                    strokeDashoffset={`-${(49 / 58) * 314.159}`}
                  />

                  {/* Negative (red) - 4/58 = 6.9% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#f64d4d"
                    strokeWidth="8"
                    strokeDasharray={`${(4 / 58) * 314.159} 314.159`}
                    strokeDashoffset={`-${((49 + 5) / 58) * 314.159}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">58</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 w-full">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-chart-1"></span>
                    <span className="text-muted-foreground">Positive</span>
                  </span>
                  <span className="font-medium text-foreground">49</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-muted"></span>
                    <span className="text-muted-foreground">Neutral</span>
                  </span>
                  <span className="font-medium text-foreground">5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive"></span>
                    <span className="text-muted-foreground">Negative</span>
                  </span>
                  <span className="font-medium text-foreground">4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Average Rating */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-6">Average Rating</h3>

            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  {/* Background circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted"
                  />

                  {/* Filled portion - 66% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#408678"
                    strokeWidth="8"
                    strokeDasharray={`${(66 / 100) * 314.159} 314.159`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">66%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
