import { Form } from "@/components/form";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="min-h-screen w-full px-4 pt-12 flex flex-col items-center justify-center bg-[#001236]">
        <section>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/images/toledo.png"
                alt="Foto do Altair Toledo"
                width={120}
                height={120}
                className="rounded-full"
              />
              <h2 className="text-white font-semibold">Altair Antônio Toledo</h2>
            </div>
            <ul className="flex flex-col gap-2 text-[#001236]">
              <li className="text-white text-center">Central de Links:</li>
              <li className="w-full">
                <a className="w-full bg-white rounded py-1 px-4 font-medium flex items-center gap-2" href="https://www.instagram.com/toledo.altair/">
                  <svg className="w-5 h-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                  </svg>
                  <span>Acompanhe no Instagram</span>
                </a>
              </li>
              <li className="w-full">
                <a className="w-full bg-white rounded py-1 px-4 font-medium flex items-center gap-2" href="https://www.linkedin.com/in/altair-antonio-toledo-222394/">
                  <svg className="w-5 h-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">    <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" /></svg>
                  <span>Acompanhe no LinkedIn</span>
                </a>
              </li>
            </ul>
            <Form />
          </div>
        </section>
      </main>
    </>
  )
}
