import * as z from "zod"

const passwordValidation = new RegExp(
    /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/
  );
  
export const LoginSchema=z.object({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(1,{
        message:"Password is required"
    })
})

export const RegisterSchema= z.object({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(1,{
        message:"Minimum password 6 characters"
    }) .regex(passwordValidation, {
        message: 'Your password is not valid',
      }),
    name:z.string().min(1,{
        message:"Name is required"
    })
})