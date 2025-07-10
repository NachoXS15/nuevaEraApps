type Modal = {
    isOpen: boolean
    content: React.ReactNode
}

export default function PhraseModal({ isOpen, content }: Modal) {
    if (!isOpen) return null

    return (
        <>
            <div
                className="w-5/6 h-[650px] bg-blue-600 rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
            >
                <div className="h-full bg-cover bg-center flex flex-col pl-36 text-white ">
                    {content}
                    
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}