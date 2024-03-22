export default function Problem() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center ">
      <div className="flex flex-col gap-4 font-bold items-center max-w-lg bg-secondary rounded-md p-8 md:p-16">
        <ul className="flex flex-col gap-2 text-center">
          <li>
            <span className="font-bold text-red-600">1 hr</span> to setup
            Next.js Template
          </li>
          <li>
            <span className="font-bold text-red-600">+ 6 hrs</span> designing a
            landing page
          </li>
          <li>
            <span className="font-bold text-red-600">+ 4 hrs</span> adding
            Internationalization
          </li>
          <li>
            <span className="font-bold text-red-600">+ ∞ hrs</span> learning
            Next.js...
          </li>
        </ul>
        <div className="font-bold text-xl">
          = <span className="font-bold text-red-600">11+ hours</span> not
          solving the issue...
        </div>
      </div>
      <div>
        <p className="font-bold text-sm">There is an easier way</p>
      </div>
    </div>
  );
}
