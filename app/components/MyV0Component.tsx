/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TvnlUjt9TeZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center space-y-2">
          <CloudyIcon className="h-12 w-12" />
          <CardTitle>Current</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <p className="text-sm font-medium">Partly cloudy</p>
          <div className="flex items-center space-x-2">
            <ThermometerIcon className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm font-medium">72°</span>
          </div>
          <div className="flex items-center space-x-2">
            <DropletIcon className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm font-medium">65% humidity</span>
          </div>
          <div className="flex items-center space-x-2">
            <WindIcon className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm font-medium">5 mph wind</span>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm">
        <CardContent className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm font-medium">Today</span>
            <span className="ml-auto text-sm font-medium">High 78° Low 64°</span>
          </div>
          <div className="flex items-center space-x-2">
            <UmbrellaIcon className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm font-medium">Scattered showers</span>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm">
        <CardContent className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4 mr-1 flex-shrink-0" />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function CloudyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
    </svg>
  )
}


function DropletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function ThermometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}


function UmbrellaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  )
}


function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}
