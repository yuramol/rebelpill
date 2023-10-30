import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import { Input, Typography } from '~/components/ui';

const OURRATE = 40;

const projectsDurationTime = [
  { id: '1', label: '5 - 10', range: 1 },
  { id: '2', label: '10 - 100', range: 1.8 },
  { id: '3', label: '100 - 300', range: 2.7 },
  { id: '4', label: '300 - 1 000', range: 3.6 },
  { id: '5', label: '1 000 - 10 000', range: 5 },
];

export const RevenueModel = component$(() => {
  const selectedProjectDurationTime = useSignal('2');
  const range = useSignal(projectsDurationTime[1].range);
  const customerRateError = useSignal(false);

  const handleSetProfit = $((value: string) => {
    value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    if (+value < 40) {
      customerRateError.value = true;
    } else {
      customerRateError.value = false;
    }

    const projectDurationType = selectedProjectDurationTime.value;

    const minProjectDuration =
      projectDurationType === '1'
        ? 5
        : projectDurationType === '2'
        ? 10
        : projectDurationType === '3'
        ? 100
        : projectDurationType === '4'
        ? 300
        : 1000;

    const maxProjectDuration =
      projectDurationType === '1'
        ? 10
        : projectDurationType === '2'
        ? 100
        : projectDurationType === '3'
        ? 300
        : projectDurationType === '4'
        ? 1000
        : 10000;

    const minValue = (+value - 40) * minProjectDuration;
    const maxValue = (+value - 40) * maxProjectDuration;
    const profit = `$ ${minValue} - $ ${maxValue}`;
    (document.getElementById('profitValue') as HTMLInputElement).value =
      +value > 40 ? profit : '';
  });

  const handleRadioChange = $((event: any) => {
    selectedProjectDurationTime.value = event.target.id;
    handleSetProfit(
      (
        document.getElementById('customerValue') as HTMLInputElement
      ).value.replace(/\$/g, '')
    );
  });

  const handleRangeChange = $((event: any) => {
    range.value = Math.random();
    // TODO add bind
    const randomValue = Math.random() * 0.00000001;

    if (+event.target.value < 1.4) {
      range.value = projectsDurationTime[0].range + randomValue;
      selectedProjectDurationTime.value = '1';
    }
    if (+event.target.value >= 1.4 && +event.target.value < 2.2) {
      range.value = projectsDurationTime[1].range + randomValue;
      selectedProjectDurationTime.value = '2';
    }
    if (+event.target.value >= 2.2 && +event.target.value < 3.2) {
      range.value = projectsDurationTime[2].range + randomValue;
      selectedProjectDurationTime.value = '3';
    }
    if (+event.target.value >= 3.2 && +event.target.value < 4.3) {
      range.value = projectsDurationTime[3].range + randomValue;
      selectedProjectDurationTime.value = '4';
    }
    if (+event.target.value >= 4.3) {
      range.value = projectsDurationTime[4].range + randomValue;
      selectedProjectDurationTime.value = '5';
    }

    handleSetProfit(
      (
        document.getElementById('customerValue') as HTMLInputElement
      ).value.replace(/\$/g, '')
    );
  });

  const handleInputChange = $((event: any) => {
    (document.getElementById('customerValue') as HTMLInputElement).value =
      '$ ' +
      event.target.value
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*?)\..*/g, '$1')
        .trim(2);

    handleSetProfit(event.target.value.replace(/\$/g, ''));
  });

  useVisibleTask$(() => {
    (document.getElementById('customerValue') as HTMLInputElement).value = '$ ';
    (document.getElementById('profitValue') as HTMLInputElement).value = '$ ';
  });

  return (
    <div class="flex flex-col w-full max-w-[743px] max-h-full xl:max-h-[468px] py-[30px] px-5 md:px-8 md:py-11 lg:p-[60px] lg:pr-[96px] border border-[rgba(255, 255, 255, 0.50)] rounded-es-none rounded-br-none md:rounded-br-[5px] xl:rounded-br-none rounded-se-[5px] md:rounded-es-[5px] xl:rounded-se-none rounded-tl-[5px]">
      <Typography
        variant="h2"
        class="uppercase mb-[47px] md:mb-[42px] text-h4 md:text-h2 text-center md:text-left"
      >
        Revenue Model
      </Typography>

      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row flex-wrap justify-between w-full gap-[30px] mb-[30px] md:mb-[66px]">
          <div class="flex flex-col gap-3 md:gap-[18px]">
            <Typography variant="button" class="uppercase text-sm md:text-base">
              Customer rate
            </Typography>
            <div class="flex flex-row items-center gap-[14px]">
              <Input
                type="text"
                id="customerValue"
                variant="outlined"
                extraClass="max-w-full md:max-w-[160px] h-[47px] text-center text-base"
                error={customerRateError.value}
                helperText="Not less than our rate"
                onChange$={handleInputChange}
                onInput$={handleInputChange}
              />
              <Typography
                variant="description"
                class="text-caption font-light uppercase whitespace-nowrap"
              >
                / per hour
              </Typography>
            </div>
          </div>
          <div class="flex flex-col gap-3 md:gap-[18px]">
            <Typography variant="button" class="uppercase text-sm md:text-base">
              Our rate
            </Typography>
            <div class="flex flex-row items-center gap-[14px]">
              <Input
                disabled
                variant="outlined"
                value={`$ ${OURRATE}`}
                extraClass="max-w-full md:max-w-[160px] h-[47px] text-center text-base "
              />
              <Typography
                variant="description"
                class="text-caption font-light uppercase whitespace-nowrap"
              >
                / per hour
              </Typography>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center gap-[10px] mb-[18px] whitespace-nowrap">
          <Typography variant="button" class="uppercase text-sm md:text-base">
            Project duration
          </Typography>
          <Typography
            variant="description"
            class="text-caption font-light uppercase"
          >
            / hours
          </Typography>
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
