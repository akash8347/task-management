"use client"
import { useSession } from "next-auth/react"
import {useRouter} from "next/navigation"
export default function Page() {
    const router=useRouter();

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          router.push("/signin")
        },
      })

    if (!session) return <div>Not authenticated</div>
    return (
        <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}