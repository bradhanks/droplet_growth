import { Key } from "readline";

export const SectionNumber = ({ number, size = "small" }: { number: number | string, size?: string }) => {
  const sizes = {
    small: {
      container: "w-8 h-8",
      text: "text-xl",
      border: "border-4"
    },
    medium: {
      container: "w-16 h-16",
      text: "text-3xl",
      border: "border-6"
    },
    large: {
      container: "w-20 h-20",
      text: "text-5xl",
      border: "border-8"
    }
  }

  const currentSize = sizes[size as keyof typeof sizes] || sizes.small;

  return (
    <div className="text-black rounded-full relative overflow-hidden">
      <div className={`bg-white ${currentSize.border} border-black rounded-full justify-center items-center ${currentSize.container} ${currentSize.text} font-bold flex relative overflow-hidden`}>
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
}
