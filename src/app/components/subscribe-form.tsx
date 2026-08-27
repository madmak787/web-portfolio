"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { LoaderCircle } from "lucide-react";


const formSchema = z.object({
	email: z.string().email({ message: "Enter a valid email address" }),
});

type FormValue = z.infer<typeof formSchema>;

const SubscribeForm = () => {
	const [loading, setLoading] = useState(false);

	const onSubmit = async (data: FormValue) => {
		const formData = new FormData();
		formData.append("email", data.email ?? "");
		
		const url = `${process.env.NEXT_PUBLIC_API_URL}/subscribe`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((result) => {})
			.catch((error) => {
				console.log(error);
			});
	};

	const form = useForm<FormValue>({
		resolver: zodResolver(formSchema),
	});

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-slate-500 relative">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Email address" {...field} className="py-0 px-5 rounded" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button variant={`destructive`} className="bg-[#DB202C] hover:bg-[#DB202C]/95 h-auto text-xl absolute top-[2px] right-0 bottom-[1px] px-10 rounded-ss-none rounded-es-none" disabled={loading} type="submit">
						{loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
						Subscribe
					</Button>
				</form>
			</Form>
		</>
	);
};
export default SubscribeForm;
