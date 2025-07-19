// Main component showing all numbers 1-6
function SectionNumbers() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Section Numbers 1-6</h1>

      {/* All numbers in a row */}
      <div className="flex flex-wrap gap-6 mb-12">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <SectionNumber key={num} number={num} />
        ))}
      </div>

      {/* Individual usage examples */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Individual Numbers:</h2>
          <div className="flex gap-4">
            <SectionNumber number={1} />
            <SectionNumber number={2} />
            <SectionNumber number={3} />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">More Examples:</h2>
          <div className="flex gap-4">
            <SectionNumber number={4} />
            <SectionNumber number={5} />
            <SectionNumber number={6} />
          </div>
        </div>
      </div>

      {/* Code example */}
      <div className="mt-12 bg-gray-900 text-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Usage:</h3>
        <pre className="text-sm overflow-x-auto">
          {`// Individual component
<SectionNumber number={1} />

// Multiple numbers
{[1, 2, 3, 4, 5, 6].map(num => (
  <SectionNumber key={num} number={num} />
))}`}
        </pre>
      </div>
    </div>
  )
}
export const SectionNumber = ({ number }: { number: string | number }) => (
  <div className="text-black rounded-full relative overflow-hidden">
    <div className="bg-white border-8 border-black rounded-full justify-center items-center w-20 h-20 text-5xl font-bold flex relative overflow-hidden">
      {number}
    </div>
    <div
      className="pointer-events-none rounded-full flex absolute inset-0"
      style={{
        backgroundImage: 'linear-gradient(#6601e8, #ac00d7)',
        mixBlendMode: 'screen'
      }}
    ></div>
  </div>
)
