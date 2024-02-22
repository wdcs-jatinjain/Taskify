import { loginbody } from "@/types";
import Views from "@/views";

export default async function loginUserController({ body: { email, password } }: { body: loginbody }) {
try {
    const user = await Views.userViews.
} catch (error) {
    
}
}