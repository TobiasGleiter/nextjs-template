export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 600 600"
    >
      <foreignObject
        width="100%"
        height="100%"
        x="0"
        y="0"
        externalResourcesRequired="true"
      >
        <div className="bg-transparent w-screen max-w-full aspect-square md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px]">
          <div className="w-full aspect-square overflow-hidden flex justify-center items-center shadow-xl">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="400"
                viewBox="0 0 24 24"
                fill="#ffffff"
                stroke="#1e1e1e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-app-window"
                fillOpacity="0.9"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M10 4v4" />
                <path d="M2 8h20" />
                <path d="M6 4v4" />
              </svg>
            </span>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}
