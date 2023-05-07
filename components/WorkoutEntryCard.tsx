"use client";
import { useRef, useState } from "react";

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
import { headers } from "next/dist/client/components/headers";

const workouts = [
    {
        value: "benchpress",
        label: "Bench Press",
    },
    {
        value: "deadlift",
        label: "Deadlift",
    },
    {
        value: "squat",
        label: "Squat",
    },
];

type EntrySetData = {
    weight: number | null;
    repetitions: number | null;
};

export function WorkoutEntryCard() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [entrySets, setEntrySets] = useState<EntrySetData[]>([
        { weight: null, repetitions: null },
    ]);

    async function submitWorkout() {
        //Checks for empty fields
        const find = entrySets.filter(
            (set) => set.repetitions == null || set.weight == null
        );
        console.log(find);
        if (find.length == 0 && value != "") {
            //if find is empty, then submit form
            console.log(entrySets);
            await fetch("http://localhost:3000/api/workout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ workout: value, data: entrySets }),
            });
        }
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Workout</CardTitle>
                <CardDescription>Log your workout</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    {/* Workout Dropdown */}
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between"
                            >
                                {value
                                    ? workouts.find(
                                          (workout) => workout.value === value
                                      )?.label
                                    : "Select workout..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96 p-0" align="start">
                            <Command>
                                <CommandInput placeholder="Search framework..." />
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup className="w-full">
                                    {workouts.map((workout) => (
                                        <CommandItem
                                            key={workout.value}
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
                                                    value === workout.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {workout.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/* Sets Array */}
                    <CreateSetInputs entry={{ entrySets, setEntrySets }} />
                    {/* <div className="grid grid-cols-5 gap-2 ">
                        {entrySets.map((set, index) => (
                            <div
                                key={"set" + index}
                                className="flex flex-col gap-2 min-h-[4rem]"
                            >
                                <Label htmlFor="name" className="ml-1">
                                    Set {index + 1}
                                </Label>
                                <Input
                                    id="reps"
                                    placeholder="Repetitions"
                                    min={0}
                                    type="number"
                                    value={set.repetitions?.toString()}
                                />
                                <Input
                                    id="weights"
                                    min={0}
                                    placeholder="Weight"
                                    type="number"
                                    value={set.weight?.toString()}
                                />
                            </div>
                        ))}
                        {entrySets.length < 10 && (
                            <Button
                                className="flex flex-col gap-2 h-full text-gray-500 min-h-[6rem]"
                                variant={"outline"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (entrySets.length < 10) {
                                        const tmp = [...entrySets];
                                        tmp.push(baseEntry);
                                        setEntrySets([...tmp]);
                                    }
                                }}
                            >
                                <Plus className="w-4 h-4" />
                                Add Set {entrySets.length + 1}
                            </Button>
                        )}
                    </div> */}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                {/* <Button variant="ghost">Cancel</Button> */}
                <Button onClick={submitWorkout}>Save</Button>
            </CardFooter>
        </Card>
    );
}

const CreateSetInputs = ({ entry: { entrySets, setEntrySets } }) => {
    const baseEntry = { weight: null, repetitions: null };
    const UpdateEntryReps = (e, index) => {
        const tmp = [...entrySets];
        tmp[index].repetitions = parseInt(e.target.value);
    };
    const UpdateEntryWeight = (e, index) => {
        const tmp = [...entrySets];
        tmp[index].weight = parseInt(e.target.value);
    };
    return (
        <div className="grid grid-cols-5 gap-2 ">
            {entrySets.map((set, index) => (
                <div
                    key={"set" + index}
                    className="flex flex-col gap-2 min-h-[4rem]"
                >
                    <Label htmlFor="name" className="ml-1">
                        Set {index + 1}
                    </Label>
                    <Input
                        id="reps"
                        placeholder="Repetitions"
                        required
                        min={0}
                        type="number"
                        value={set.repetitions?.toString()}
                        onChange={(e) => {
                            UpdateEntryReps(e, index);
                            console.log(entrySets);
                        }}
                    />
                    <Input
                        id="weights"
                        min={0}
                        placeholder="Weight"
                        required
                        type="number"
                        value={set.weight?.toString()}
                        onChange={(e) => {
                            UpdateEntryWeight(e, index);
                            console.log(entrySets);
                        }}
                    />
                </div>
            ))}
            {entrySets.length < 10 && (
                <Button
                    className="flex flex-col gap-2 h-full text-gray-500 min-h-[6rem]"
                    variant={"outline"}
                    onClick={(e) => {
                        e.preventDefault();
                        if (entrySets.length < 10) {
                            const tmp = [...entrySets, baseEntry];
                            console.log(baseEntry);
                            setEntrySets([...tmp]);
                        }
                    }}
                >
                    <Plus className="w-4 h-4" />
                    Add Set {entrySets.length + 1}
                </Button>
            )}
        </div>
    );
};
