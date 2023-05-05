"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Check, ChevronsUpDown, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
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

export function WorkoutEntryCard() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Workout</CardTitle>
                <CardDescription>Log your workout</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between"
                            >
                                {value
                                    ? frameworks.find(
                                          (framework) =>
                                              framework.value === value
                                      )?.label
                                    : "Select framework..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96 p-0" align="start">
                            <Command>
                                <CommandInput placeholder="Search framework..." />
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup className="w-full">
                                    {frameworks.map((framework) => (
                                        <CommandItem
                                            key={framework.value}
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
                                                    value === framework.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {framework.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <div className="grid grid-cols-5 gap-2 ">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Set 1</Label>
                            <Input id="reps" placeholder="Repetitions" />
                            <Input id="weights" placeholder="Weight" />
                        </div>
                        <Button
                            className="flex flex-col gap-2 h-full text-gray-500"
                            variant={"outline"}
                        >
                            <Plus className="w-4 h-4" />
                            Add Set 2
                        </Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    );
}
