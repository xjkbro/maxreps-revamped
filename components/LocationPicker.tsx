"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

const locations = [
    { value: "0", name: "EOS Fitness", address: "123 Main St" },
    { value: "1", name: "LA Fitness", address: "124 Hollywood Blvd" },
    { value: "2", name: "EOS Fitness", address: "114 Las Vegas Blvd" },
    { value: "3", name: "24hr Fitness", address: "144 Lame Rd" },
];

export function LocationPicker() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? locations.find((gym) => gym.value === value)?.name
                        : "Select A Gym..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {locations.map((location) => (
                            <CommandItem
                                key={location.value}
                                value={location.value}
                                onSelect={(currentValue) => {
                                    setValue(
                                        currentValue === value
                                            ? ""
                                            : currentValue
                                    );
                                    setOpen(false);
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === location.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                <div className="flex flex-col ">
                                    <span>{location.name}</span>
                                    <span className="text-xs text-gray-500">
                                        {location.address}
                                    </span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
