export function Logo({ color, className }: { color: string, className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 200" width='50' height='30' className={`min-w-[50px] ${className}`} >
            <path d="M153 1h33v1h9v1h7v1h5v1h4v1h2v1h1v1h1v1h1v6h-1v3h-1v3h-1v3h-1v4h-1v3h-1v3h-1v4h-1v2h-1v4h-1v3h-1v3h-1v4h-1v2h-1v1h-1v1h-2v1h-5v-1h-6v-1h-12v-1h-12v1h-12v1h-9v-1h-2v-2h-1v-2h-1v-3h-1v-3h-1v-3h-1v-4h-1v-3h-1v-3h-1v-3h-1v-4h-1v-3h-1v-3h-1v-4h-1v-2h-1V8h1V7h1V6h1V5h3V4h4V3h7V2h9ZM117 22h2v1h3v1h1v1h1v2h1v4h1v4h1v4h1v4h1v4h1v5h1v5h1v2h-1v2h-1v1h-1v1h-1v1h-3v1h-3v1h-2v1h-2v1h-2v1h-7v-1h-1v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-2h-1v-6h1v-2h2v-1h1v-1h3v-1h2v-1h2v-1h2v-1h3v-1h2v-1h3v-1h3v-1h3ZM221 24h8v1h3v1h2v1h3v1h2v1h2v1h2v1h2v1h2v1h2v1h1v1h1v1h1v7h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v1h-8v-1h-2v-1h-2v-1h-2v-1h-3v-1h-2v-1h-2v-1h-1v-2h-1v-5h1v-4h1v-4h1v-5h1v-3h1v-4h1v-4h1v-4h1v-2h1v-1h1ZM76 42h6v1h2v1h1v2h1v1h1v2h1v2h1v2h1v2h1v2h1v1h1v2h1v2h1v1h1v2h1v2h1v2h1v2h1v5h-1v2h-1v1h-1v1h-2v1h-1v1h-1v1h-2v1h-1v1h-1v1h-1v1h-2v1h-7v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-3h-1v-3h1v-3h1v-1h1v-1h2v-1h1v-1h1v-1h1v-1h1v-1h2v-1h1v-1h1v-1h1v-1h2v-1h1v-1h2v-1h1v-1h2ZM261 43h4v1h2v1h1v1h2v1h1v1h2v1h1v1h1v1h1v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h2v2h1v6h-1v2h-1v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v2h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-1v1h-2v1h-5v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1v-1h-2v-1h-1v-2h-1v-6h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-2h1v-1h1v-2h1v-2h1v-1h1v-1h2ZM45 70h3v1h3v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v6h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1h-1v1h-1v1h-1v1h-2v1h-4v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-3v-1h-2v-1h-1v-1h-1v-1h-1v-8h1v-1h1v-2h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-1h1v-1h1v-2h1v-1h1v-1h1v-1h1v-1h1v-1h2ZM166 71h2v1h2v1h2v1h1v1h1v1h2v2h1v1h1v2h1v2h1v3h1v10h-1v4h-1v5h1v2h2v1h2v-1h2v-1h1v-1h1v-2h1v1h1v1h1v2h1v3h1v12h-1v3h-1v2h-1v1h-1v1h-1v2h-1v1h-2v1h-1v1h-2v1h-2v1h-1v-2h1v-1h1v-2h1v-8h-1v-1h-1v-1h-1v-1h-1v-1h-2v6h-1v1h-5v-1h-1v-1h-1v-1h-1v-2h-1v-9h1v-3h1v-3h1v-2h1v-3h1v-7h-1v2h-1v3h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v1h-1v2h-1v2h-1v3h-1v9h1v3h1v3h1v1h1v2h-1v-1h-2v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h-1v-3h-1v-3h-1v-7h1v-3h1v-3h1v-1h1v-2h1v-1h1v3h-1v3h1v2h2v-1h1v-1h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1v-2h1v-2h1v-2h1v-3h1v-2h1v-4h1v-9h-1v-2h-1ZM292 72h5v1h2v1h1v1h1v2h1v1h1v1h1v1h1v2h1v1h1v2h1v1h1v1h1v2h1v1h1v2h1v2h1v5h-1v2h-1v1h-1v1h-3v1h-1v1h-3v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-5v-1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-2h-1v-4h1v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2Z" fill={color}/>
            <path d="M160 79h1v2h1v9h-1v2h-1v2h-1v1h-1v1h-2v-1h-1v-5h1v-1h1v-2h1v-1h1v-3h1ZM21 106h5v1h2v1h2v1h1v1h2v1h2v1h2v1h2v1h1v1h2v1h2v1h2v1h2v1h1v1h2v1h2v1h1v2h1v6h-1v3h-1v2h-1v2h-1v2h-1v3h-1v2h-1v1h-1v1h-2v1h-4v-1h-6v-1h-6v-1h-5v-1h-6v-1h-4v-1h-3v-1H9v-2H8v-6h1v-4h1v-3h1v-2h1v-3h1v-2h1v-2h1v-3h1v-2h1v-2h1v-1h1v-1h2ZM316 107h2v1h3v1h1v1h1v2h1v2h1v3h1v2h1v2h1v3h1v2h1v3h1v4h1v5h-1v2h-1v1h-2v1h-3v1h-5v1h-7v1h-5v1h-6v1h-4v1h-2v-1h-3v-1h-1v-1h-1v-2h-1v-2h-1v-3h-1v-2h-1v-3h-1v-2h-1v-5h1v-2h1v-1h2v-1h1v-1h2v-1h2v-1h2v-1h1v-1h2v-1h2v-1h2v-1h1v-1h2v-1h2v-1h2v-1h2v-1h1v-1h3ZM102 118h9v1h3v1h2v1h2v1h2v1h2v1h1v1h2v1h2v1h2v1h2v1h2v1h1v1h1v6h-1v2h-1v2h-1v2h-1v2h1v1h1v1h1v1h2v1h2v1h2v1h2v1h2v1h2v1h3v1h1v1h3v1h2v1h2v1h2v1h2v1h2v1h2v1h2v1h2v1h1v-1h3v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h3v-1h2v-1h1v-1h2v-1h2v-1h1v-4h-1v-2h-1v-2h-1v-4h-1v-1h1v-2h1v-1h1v-1h2v-1h2v-1h1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h10v1h2v1h2v1h1v1h1v1h1v1h1v2h1v2h1v1h1v2h1v3h1v8h-1v3h-1v2h-1v1h-1v1h-1v1h-1v1h-2v1h-2v1h-1v1h-2v1h-2v1h-2v1h-1v1h-2v1h-2v1h-2v1h-2v1h-6v-1h-1v-1h-1v-2h-1v-2h-1v-1h-1v-2h-1v-1h-1v-1h-2v1h-2v1h-2v1h-2v1h-2v1h-3v1h-1v1h-3v1h-1v1h-2v1h-2v1h-3v1h-2v1h-2v1h-2v1h-2v1h-2v2h3v1h2v1h2v1h2v1h2v1h2v1h2v1h2v4h-1v1h-4v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1h-3v1h-4v-2h-1v-2h1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-2h-2v-1h-2v-1h-2v-1h-1v-1h-3v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v1h-1v1h-1v1h-1v2h-1v2h-1v2h-1v1h-2v1h-6v-1h-1v-1h-2v-1h-2v-1h-2v-1h-2v-1h-2v-1h-1v-1h-2v-1h-2v-1h-2v-1h-1v-1h-1v-1h-2v-2h-1v-1h-1v-3h-1v-10h1v-2h1v-2h1v-2h1v-2h1v-1h1v-1h1v-2h2v-1h1v-1h3Zm47 58v1h-1v2h3v-1h1v-1h-1v-1Zm39 0v2h1v1h3v-1h-1v-1h-1v-1ZM6 148h9v1h4v1h3v1h5v1h4v1h5v1h3v1h3v1h1v1h1v3h1v3h-1v6h-1v8h-1v2h-1v1h-2v1H5v-1H3v-1H2v-2H1v-12h1v-7h1v-6h1v-2h1v-1h1ZM328 148h4v1h2v1h1v1h1v2h1v6h1v10h1v7h-1v2h-1v2h-2v1h-34v-1h-2v-1h-1v-1h-1v-4h-1v-8h-1v-6h1v-2h1v-1h1v-1h2v-1h3v-1h5v-1h4v-1h4v-1h4v-1h4v-1h4Z" fill={color}/>
        </svg>
    )
}