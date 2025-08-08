"use client";
import { cn } from "@/lib/utils";

export function IndustryCards() {
  return (
    <div className="lg:flex md:grid md:grid-cols-2 md:gap-5">
      <div
        className={cn(
          "group w-96 cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i0.wp.com/zeta-v.com/wp-content/uploads/2025/01/GOVERNMENT1.png?w=1080&ssl=1)] bg-contain bg-no-repeat bg-center",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRlaHExZnI3bmE1aGFyZmEwaWVyd2d4c3cxazZzcDVkeGwwcGFvcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13d2jHlSlxklVe/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRlaHExZnI3bmE1aGFyZmEwaWVyd2d4c3cxazZzcDVkeGwwcGFvcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13d2jHlSlxklVe/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 hover:scale-105",
        )}
      >
        <div className="text relative z-50 max-w-md">
          <h1 className="font-bold text-xl md:text-3xl text-black relative ">
            Government
          </h1>
        </div>
      </div>
            
{/* Finance */}
        <div
        className={cn(
          "group w-96 cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i0.wp.com/zeta-v.com/wp-content/uploads/2025/01/Financial-Services1.png?w=1024&ssl=1)] bg-contain bg-no-repeat bg-center",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWV2aWtpMHlteTc4dzJqbTJtdHo4MzE4eXhianA3eGF6NTJybzgzcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TpLfalAKqsld0b7gMS/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWV2aWtpMHlteTc4dzJqbTJtdHo4MzE4eXhianA3eGF6NTJybzgzcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TpLfalAKqsld0b7gMS/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 hover:scale-105"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Finance
          </h1>          
        </div>
      </div>
      <div
        className={cn(
          "group w-96 cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://t2conline.com/wp-content/uploads/2025/03/Screenshot-2025-03-16-234239.jpg)] bg-contain bg-no-repeat bg-center",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGF4dTlqYzVvYTRsNTRhMDQ1YTdsdWlyaHk4dnZ3ZmtvbGhjNDVtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wlWvFwsVG75EvtF33/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGF4dTlqYzVvYTRsNTRhMDQ1YTdsdWlyaHk4dnZ3ZmtvbGhjNDVtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wlWvFwsVG75EvtF33/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 hover:scale-105"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Manufacturing
          </h1>          
        </div>
      </div>
      {/* Healthcare */}
      <div
        className={cn(
          "group w-96 cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://i0.wp.com/zeta-v.com/wp-content/uploads/2025/01/HEALTHCARE1.jpg?w=1080&ssl=1)] bg-contain bg-no-repeat bg-center",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hkNnRuczh3cDI0YWVnMXNtYzh2ZmVkdGVpN2F2a3F5dGllNHJhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x37wEINncI98I/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hkNnRuczh3cDI0YWVnMXNtYzh2ZmVkdGVpN2F2a3F5dGllNHJhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x37wEINncI98I/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 hover:scale-105"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Healthcare
          </h1>          
        </div>
      </div>
    </div>
  );
}
