import { $, component$, useSignal } from '@builder.io/qwik';

import { Input, Typography } from '~/components/ui';

const projectsDurationTime = [
  { id: '1', label: '5 - 10', range: 1 },
  { id: '2', label: '10 - 100', range: 1.8 },
  { id: '3', label: '100 - 300', range: 2.7 },
  { id: '4', label: '300 - 1 000', range: 3.6 },
  { id: '5', label: '1 000 - 10 000', range: 5 },
];

export const RevenueModel = component$(() => {
  const selectedProjectDurationTime = useSignal('roomPrivate');
  const range = useSignal(projectsDurationTime[1].range);

  const handleRadioChange = $((event: any) => {
    selectedProjectDurationTime.value = event.target.id;
  });

  const handleRangeChange = $((event: any) => {
    if (+event.target.value < 1.4) {
      range.value = projectsDurationTime[0].range;
    }
    if (+event.target.value >= 1.4 && +event.target.value < 2.2) {
      range.value = projectsDurationTime[1].range;
    }
    if (+event.target.value >= 2.2 && +event.target.value < 3.2) {
      range.value = projectsDurationTime[2].range;
    }
    if (+event.target.value >= 3.2 && +event.target.value < 4.3) {
      range.value = projectsDurationTime[3].range;
    }
    if (+event.target.value >= 4.3) {
      range.value = projectsDurationTime[4].range;
    }
  });

  return (
    <div class="flex flex-col w-full max-w-[743px] max-h-full xl:max-h-[468px] py-[30px] px-5 md:px-8 md:py-11 lg:p-[60px] lg:pr-[96px] border border-[rgba(255, 255, 255, 0.50)] rounded-es-none rounded-br-none md:rounded-br-[5px] xl:rounded-br-none rounded-se-[5px] md:rounded-es-[5px] xl:rounded-se-none rounded-tl-[5px]">
      <Typography
        variant="h2"
        text="Revenue Model"
        class="uppercase mb-[47px] md:mb-[42px] text-h4 md:text-h2 text-center md:text-left"
      />

      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row flex-wrap justify-between w-full gap-[30px] mb-[30px] md:mb-[66px]">
          <div class="flex flex-col gap-3 md:gap-[18px]">
            <Typography
              variant="button"
              class="uppercase text-sm md:text-base"
              text="Customer rate"
            />
            <div class="flex flex-row items-center gap-[14px]">
              <Input
                variant="outlined"
                extraClass="max-w-full md:max-w-[160px] h-[47px] text-center text-base"
              />
              <Typography
                variant="description"
                text="/ per hour"
                class="text-tiny font-light uppercase whitespace-nowrap"
              />
            </div>
          </div>
          <div class="flex flex-col gap-3 md:gap-[18px]">
            <Typography
              variant="button"
              class="uppercase text-sm md:text-base"
              text="Our rate"
            />
            <div class="flex flex-row items-center gap-[14px]">
              <Input
                variant="outlined"
                extraClass="max-w-full md:max-w-[160px] h-[47px] text-center text-base"
              />
              <Typography
                variant="description"
                text="/ per hour"
                class="text-tiny font-light uppercase whitespace-nowrap"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center gap-[10px] mb-[18px] whitespace-nowrap">
          <Typography
            variant="button"
            text="Project duration"
            class="uppercase text-sm md:text-base"
          />
          <Typography
            variant="description"
            text="/ hours"
            class="text-tiny font-light uppercase"
          />
        </div>
        <div class="hidden xl:flex flex-col gap-[14px]">
          <div class="flex flex-row justify-between">
            {projectsDurationTime.map(({ id, label }) => (
              <div key={id}>{label}</div>
            ))}
          </div>
          <input
            type="range"
            min={1}
            max={5}
            value={range.value}
            step={0.1}
            class="h-[6px] max-w-[583px] w-full accent-[#ee5600] border-0 rounded-[5px]"
            id="myRange"
            onChange$={handleRangeChange}
          />
        </div>

        <div class="flex xl:hidden flex-row flex-wrap gap-[10px]">
          {projectsDurationTime.map((room) => (
            <div
              key={room.id}
              class={`inline-flex rounded-[3px] border ${
                selectedProjectDurationTime.value === room.id
                  ? 'border-primary'
                  : 'border-[rgba(255, 255, 255, 0.50)]'
              } `}
            >
              <input
                type="radio"
                name="room_type"
                id={room.id}
                checked={selectedProjectDurationTime.value === room.id}
                onChange$={handleRadioChange}
                hidden
              />
              <label
                for={room.id}
                class="text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"
              >
                {room.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
