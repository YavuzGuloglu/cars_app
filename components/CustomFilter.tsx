"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CustomFilterProps } from "@/types";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { updateQueryParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  useEffect(() => {
    router.push(updateQueryParams({ [title]: selected.value }), {
      scroll: false,
    });
  }, [selected]);

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-1">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected?.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="arrow-down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </ListboxButton>

          <Transition>
            <ListboxOptions className="custom-filter__options">
              {options?.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({ focus }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      focus ? "bg-primary-blue text-white" : "text-gray-500"
                    }`
                  }
                >
                  {({ selected }) => <span>{option.title}</span>}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
