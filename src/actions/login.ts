import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { password, email } = validatedFields.data;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Return user data if login is successful
    return { user, success: "Login successfully", error: null };
  } catch (error) {
    // Firebase-specific error handling
    if (error instanceof Error) {
      const errorMessage = error.message;
      console.error("Error message:", errorMessage);

      return { error: errorMessage }; // Return the error message
    } else {
      console.error("Unknown error:", error);
      return { error: "Unknown error occurred" };
    }
  }
};
