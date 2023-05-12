"use client";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export function MultiUploader() {
    const { getRootProps, getInputProps, isDragActive, files, startUpload } =
        useUploadThing("imageUploader");

    return (
        <div
            {...getRootProps()}
            // className="border border-1 rounded-sm border-spacing-1 border-gray-200 border-dashed"
        >
            <div className={isDragActive ? "bg-gray-200" : ""}>
                <Input
                    id="picture"
                    name="status-upload"
                    type="file"
                    {...getInputProps()}
                    className="!block file:hidden"
                />
            </div>
            <div>
                {files.length > 0 && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            startUpload();
                        }}
                    >
                        Upload {files.length} files
                    </button>
                )}
            </div>
            {/* Drop files here! */}
        </div>
    );
}
