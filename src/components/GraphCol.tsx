type Props = {
    month: string
}


export default function GraphCol({month}: Props) {
    return (
        <div className="h-5/6 w-20 rounded-lg flex items-center flex-col">
            <div className="rounded-lg h-full w-full">
                <div className="h-3/12 w-full bg-blue-600"></div>
                <div className="h-2/12 w-full bg-green-600"></div>
                <div className="h-2/12 w-full bg-yellow-600"></div>
                <div className="h-4/12 w-full bg-purple-600"></div>
            </div>
            <span className="font-semibold text-xl">{month}</span>
        </div>
    )
}
