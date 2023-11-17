"use client";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

export default function Step2({ onBack, onNext }: Props) {
  return (
    <>
      <div className="hidden h-auto flex-1 bg-[#A0BF6C] xl:flex" />

      <div className="flex flex-[2] flex-col gap-[20px] bg-[#33302C] px-[40px] py-[50px] text-white">
        <div className="flex flex-row justify-end gap-[2px]">
          <i className="fa-solid fa-ellipsis fa-2xl" />
          <i className="fa-solid fa-ellipsis fa-2xl" />
        </div>

        <div>
          <div className="mt-[30px] text-[20px] font-light text-[#EDF1F3]">
            Scope of work
          </div>

          <h2 className="text-[40px] font-bold text-[#EDF1F3]">
            Estimate the scope of your work
          </h2>
        </div>

        <div className="mt-[10px] flex flex-col justify-between gap-[40px] md:flex-row">
          <div className="flex h-[142px] w-full flex-col items-center justify-center gap-[5px] rounded-[6px] border-[1px] border-[#EDF1F3] hover:bg-[#474B35]">
            <div className="flex flex-col items-center gap-[20px]">
              <i className="fa-solid fa-grip fa-2xl" />
              <div className="text-[18px] font-light">Small</div>
            </div>

            <div className="text-[14px] font-light">Quick Tasks</div>
          </div>

          <div className="flex h-[142px] w-full flex-col items-center justify-center gap-[5px] rounded-[6px] border-[1px] border-[#EDF1F3] hover:bg-[#474B35]">
            <div className="flex flex-col items-center gap-[20px]">
              <i className="fa-solid fa-grip fa-2xl" />
              <div className="text-[18px] font-light">Medium</div>
            </div>

            <div className="text-center text-[14px] font-light">
              Well defined project
            </div>
          </div>

          <div className="flex h-[142px] w-full flex-col items-center justify-center gap-[5px] rounded-[6px] border-[1px] border-[#EDF1F3] hover:bg-[#474B35]">
            <div className="flex flex-col items-center gap-[20px]">
              <i className="fa-solid fa-grip fa-2xl" />
              <div className="text-[18px] font-light">Large</div>
            </div>

            <div className="text-center text-[14px] font-light">
              Long term, complex tasks
            </div>
          </div>
        </div>

        <div className="h-[213px]" />

        <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row">
          <button
            type="button"
            className="h-[44px] w-[210px] rounded-[6px] border-[1px] border-[#AFD275] text-[16px] font-semibold text-[#AFD275] hover:bg-[#AFD275] hover:text-[#EDF1F3] active:bg-[#AFD275]"
            onClick={() => onBack()}
          >
            Back
          </button>

          <button
            type="button"
            className="h-[44px] w-[210px] rounded-[6px] border-[1px] border-[#AFD275] text-[16px] font-semibold text-[#AFD275] hover:bg-[#AFD275] hover:text-[#EDF1F3] active:bg-[#AFD275]"
            onClick={() => onNext()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
