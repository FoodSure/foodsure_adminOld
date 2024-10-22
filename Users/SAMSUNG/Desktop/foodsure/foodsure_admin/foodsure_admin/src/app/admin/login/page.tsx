"use client";

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FoodSureAdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just redirect to the dashboard without any validation
    router.push('/admin/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/images/foodsure_logo.png"
              alt="FoodSure Logo"
              width={200}
              height={60}
            />
          </div>
          <CardTitle className="text-2xl text-center text-green-700">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Access the FoodSure admin panel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@foodsure.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-700">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a href="#" className="text-sm text-green-600 hover:underline">
            Forgot password?
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}