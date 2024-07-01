'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

let initialData = {
    name: '',
    email: '',
    phone: '',
}

export function Form() {
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    function handleChange(type: keyof typeof initialData, value: string) {
        let hlp = { ...data }
        if (type === 'phone') {
            hlp[type] = formatPhoneNumber(value)
        } else {
            hlp[type] = value
        }
        setData(hlp)
    }

    function formatPhoneNumber(value: string) {
        if (value.length > data.phone.length) {
            if (value.length <= 1) {
                value = `(${value}`
            } else if (value.length <= 3) {
                value = `${value}) 9 `
            } else if (value.length === 11) {
                value = `${value}-`
            }
        }

        return value
    }

    async function formSubmited(e: FormEvent) {
        e.preventDefault()
        let dataHlp = data

        setData(dataHlp)
        setLoading(true)

        await fetch("https://webhook.sellflux.com/webhook/v2/form/lead/bf190332af63ee21935d61793aab36f1?not_query=true&redirect_url=google.com", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async res => {
            setLoading(false)
            setMessage('Muito bem! A sua inscrição na nossa newsletter foi confirmada!')
        }).catch(e => console.log(e))
    }

    return (
        <form
            className="relative rounded-md w-full sm:max-w-xl z-50 px-6 sm:mx-0 mx-2 border border-[#1b2d51] py-6"
            onSubmit={(e) => formSubmited(e)}
        >
            {!message.length ? (
                <div className="flex flex-col gap-2">
                    <div className="pb-2">
                        <h2 className="text-xl font-semibold text-white text-center">Newsletter</h2>
                        <p className="text-zinc-400 text-sm text-center">Cadastre-se e fique atualizado nos assuntos mais quentes do tributário.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('name', e.target.value)} value={data.name} className="text-white outline-none rounded py-2 px-3 text-sm bg-[#1b2d51]" type="text" id="name" name="name" placeholder="Insira seu nome" min={2} required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('email', e.target.value)} value={data.email} className="text-white outline-none rounded py-2 px-3 text-sm bg-[#1b2d51]" type="text" id="email" name="email" placeholder="Insira seu melhor e-mail" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={(e) => handleChange('phone', e.target.value)} value={data.phone} className="text-white outline-none rounded py-2 px-3 text-sm bg-[#1b2d51]" type="tel" id="tel" name="phone" maxLength={16} placeholder="WhatsApp: (00) 00000-0000" required />
                    </div>
                    <button className="w-full text-sm sm:text-base text-center flex items-center justify-center gap-2 px-6 py-2 font-semibold text-white bg-green-600 hover:bg-green-700 transition rounded" type="submit">
                        {!loading ? (
                            <span>Cadastre-se</span>
                        ) : (
                            <>
                                <div className="flex flex-row gap-1 py-1">
                                    <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce [animation-delay:-.3s]"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce [animation-delay:-.5s]"></div>
                                </div>
                            </>
                            // <div className="w-5 h-5 border-2 text-blue-400 animate-spin flex items-center justify-center border-t-[#1b2d51] rounded-full"></div>
                        )}
                    </button>
                </div>
            ) : (
                <div>
                    <p className="text-center text-zinc-400 text-sm">{message}</p>
                </div>
            )}
        </form>
    )
}

