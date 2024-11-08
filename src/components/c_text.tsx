import React from "react";

interface CTextProps {
    text: string;
}
export default function CText(props: CTextProps) {
    return (
        <p className="text-white">
            Text
        </p>
    );
}
