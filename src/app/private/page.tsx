import { FormButton } from "@/components/UI/FormButton";
import { auth, signOut } from "@/modules/auth/infra/impl/services/nextAuth/providers";

export default async function PrivatePage() {
    const session = await auth()
    console.log(session)
    const handleSignOut = async () => {
        'use server'
        await signOut({ redirect: true, redirectTo: '/auth/login'})
    }
    return <form action={handleSignOut}>
        <FormButton type="submit" className="bg-blue-800">Logout</FormButton>
    </form>
}