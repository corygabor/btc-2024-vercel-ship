/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AaBFnH0F8wG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <SunIcon className="w-6 h-6 text-yellow-500" />
        <div className="grid gap-1.5">
          <div className="text-sm font-medium leading-none">72° Partly Cloudy</div>
          <div className="text-sm leading-none text-gray-500 dark:text-gray-400">
            Feels like 72°. Partly cloudy throughout the day.
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <SmileIcon className="w-6 h-6" />
        <div className="text-2xl font-semibold">Happy</div>
      </div>
    </div>
  )
}

function SmileIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
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
