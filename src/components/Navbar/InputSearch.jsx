"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if(!keyword) return

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)

        }



    }

    return (
        <div className="relative">
            <input placeholder="Cari Anime" className="w-full rounded p-2" ref={searchRef} onKeyDown={handleSearch} />
            <button  onClick={handleSearch}>
                <MagnifyingGlass className="absolute end-2 top-2" size={24} />
            </button>


        </div>
    )
}

export default InputSearch