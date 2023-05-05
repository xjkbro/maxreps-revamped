import { BellRing, Check, Terminal, X, Edit } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
];

type CardProps = React.ComponentProps<typeof Card>;

export function WorkoutLogs({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-full", className)} {...props}>
            <CardHeader>
                <CardTitle>Today&apos;s Log</CardTitle>
                <CardDescription>
                    You currently have logged 3 workouts.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Alert className="relative">
                    <div className="absolute right-8 top-3 flex items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <X className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Delete this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Edit className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Edit this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <AlertTitle>Bench Press</AlertTitle>
                    <Separator className="my-2" />
                    <AlertDescription className="flex h-5 items-center space-x-4 text-sm text-gray-500">
                        <div>135 for 12</div>
                        <Separator orientation="vertical" />
                        <div>155 for 8</div>
                        <Separator orientation="vertical" />
                        <div>165 for 4</div>
                    </AlertDescription>
                </Alert>
                <Alert className="relative">
                    <div className="absolute right-8 top-3 flex items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <X className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Delete this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Edit className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Edit this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <AlertTitle>Bench Press</AlertTitle>
                    <Separator className="my-2" />
                    <AlertDescription className="flex h-5 items-center space-x-4 text-sm text-gray-500">
                        <div>135 for 12</div>
                        <Separator orientation="vertical" />
                        <div>155 for 8</div>
                        <Separator orientation="vertical" />
                        <div>165 for 4</div>
                    </AlertDescription>
                </Alert>

                <Alert className="relative">
                    <div className="absolute right-8 top-3 flex items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <X className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Delete this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Edit className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Edit this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <AlertTitle>Bench Press</AlertTitle>
                    <Separator className="my-2" />
                    <AlertDescription className="flex h-5 items-center space-x-4 text-sm text-gray-500">
                        <div>135 for 12</div>
                        <Separator orientation="vertical" />
                        <div>155 for 8</div>
                        <Separator orientation="vertical" />
                        <div>165 for 4</div>
                    </AlertDescription>
                </Alert>
                <Alert className="relative">
                    <div className="absolute right-8 top-3 flex items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <X className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Delete this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Edit className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Edit this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <AlertTitle>Bench Press</AlertTitle>
                    <Separator className="my-2" />
                    <AlertDescription className="flex h-5 items-center space-x-4 text-sm text-gray-500">
                        <div>135 for 12</div>
                        <Separator orientation="vertical" />
                        <div>155 for 8</div>
                        <Separator orientation="vertical" />
                        <div>165 for 4</div>
                    </AlertDescription>
                </Alert>
                <Alert className="relative">
                    <div className="absolute right-8 top-3 flex items-center gap-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <X className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Delete this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Edit className="h-4 w-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Edit this entry</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <AlertTitle>Bench Press</AlertTitle>
                    <Separator className="my-2" />
                    <AlertDescription className="flex h-5 items-center space-x-4 text-sm text-gray-500">
                        <div>135 for 12</div>
                        <Separator orientation="vertical" />
                        <div>155 for 8</div>
                        <Separator orientation="vertical" />
                        <div>165 for 4</div>
                    </AlertDescription>
                </Alert>
            </CardContent>
            <CardFooter>
                {/* <Button className="w-full">
                    <Check className="mr-2 h-4 w-4" /> Mark all as read
                </Button> */}
            </CardFooter>
        </Card>
    );
}
