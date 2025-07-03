import React from "react";
import GradientText from "@/components/GradientText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import { Checkbox } from "@/components/ui/checkbox";
import { useSigninMutation } from "@/services/authApi";

const FormSchema = z.object({
  EmailAddress: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  password: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  }),
});

const Signin = () => {
  const [signin] = useSigninMutation();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      EmailAddress: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    const signinData = {
      email: data.EmailAddress,
      password: data.password,
    };
    console.log(signinData);
    const response = await signin(signinData);
    console.log(response);
  }
  return (
    <div className="flex justify-center bg-[#111827] px-4 py-12">
      <div className="w-full flex flex-col justify-center items-center gap-y-6">
        <div>
          <GradientText className="text-2xl font-bold">DevFolio</GradientText>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h2 className="text-3xl font-bold text-white">Welcome back</h2>
          <p className="text-gray-400">Signin to your developer profile</p>
        </div>
        <div className="backdrop-blur-xl flex flex-col space-y-3 w-[440px] rounded-2xl p-8 border shadow-2xl bg-gray-800/40 border-gray-700">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="EmailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">
                      Email address
                    </FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-1.5 top-3 h-5 w-5 text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="pl-10 h-12 text-gray-300 text-[16px] placeholder:text-gray-400 placeholder:text-[16px] bg-gray-700/50 border-gray-600"
                        />
                      </FormControl>
                    </div>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">
                      Password
                    </FormLabel>
                    <div className="relative">
                      <Lock className="absolute left-1.5 top-3 h-5 w-5 text-gray-400" />
                      <FormControl>
                        <Input
                          placeholder="Create a password"
                          {...field}
                          className="pl-10 h-12 text-gray-300 text-[16px] placeholder:text-gray-400 placeholder:text-[16px] bg-gray-700/50 border-gray-600"
                        />
                      </FormControl>
                    </div>
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                  <Checkbox className="bg-white hover:cursor-pointer " />
                  <span className="text-gray-400 text-xs">Remember me</span>
                </div>
                <div className="text-xs text-cyan-300 hover:cursor-pointer">
                  Forgot password?
                </div>
              </div>
              <GradientButton
                className="w-full px-6 py-3 flex justify-center items-center gap-x-3 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
                type="submit"
              >
                <span>Create Account</span>
                <ArrowRight className="h-5 w-5" />
              </GradientButton>
            </form>
          </Form>

          <div className="flex items-center space-x-1">
            <div className="h-[1px] w-full bg-gray-400"></div>
            <div className="text-gray-400 text-sm whitespace-nowrap">
              Or continue with
            </div>
            <div className="h-[1px] w-full bg-gray-400"></div>
          </div>
          <div className="flex justify-between">
            <button className="py-[12px] px-[45px] text-[1rem] text-gray-400 flex bg-transparent border-[1px] border-gray-700 transition-all duration-300 hover:cursor-pointer hover:bg-gray-800 hover:scale-105 rounded-lg items-center gap-x-2">
              <Github />
              <span>Github</span>
            </button>
            <button className="py-[12px] px-[45px] text-[1rem] text-gray-400 flex bg-transparent border-[1px] border-gray-700 transition-all duration-300 hover:cursor-pointer hover:bg-gray-800 hover:scale-105 rounded-lg items-center gap-x-2">
              <Chrome />
              <span>Google</span>
            </button>
          </div>
          <div className="text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <span className="text-cyan-300 hover:cursor-pointer">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
