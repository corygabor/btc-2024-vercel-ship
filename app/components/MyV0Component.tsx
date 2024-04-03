/**
 * v0 by Vercel.
 * @see https://v0.dev/t/od2x2mMGssy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Now</CardTitle>
        <CardDescription>Current weather conditions.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <SunIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
          <p className="text-4xl font-semibold tracking-tighter">
            72
            <span className="text-2xl font-medium">°F</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ThermometerIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <p>
            High 75
            <span className="font-semibold">°F</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ThermometerIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <p>
            Low 68
            <span className="font-semibold">°F</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
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
