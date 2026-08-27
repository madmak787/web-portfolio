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
	name: z.string().min(3, { message: "Please enter your name." }),
	phone: z.string().optional(),
	email: z.string().email({ message: "Enter a valid email address" }),
	message: z.string().optional(),
});

type FormValue = z.infer<typeof formSchema>;

const ContactForm = () => {
	const [loading, setLoading] = useState(false);

	const onSubmit = async (data: FormValue) => {
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("phone", data.phone ?? "");
		formData.append("email", data.email ?? "");
		formData.append("message", data.message ?? "");

		const url = `${process.env.NEXT_PUBLIC_API_URL}/contact`;
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
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full text-slate-500">
					<hr className="border-none h-2" />
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<hr className="border-none h-2" />
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input placeholder="Enter your phone" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<hr className="border-none h-2" />
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email address" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<hr className="border-none h-2" />
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea placeholder="Enter your message" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<hr className="border-none h-2" />
					<Button variant={`destructive`} className="bg-[#DB202C] hover:bg-[#DB202C]/95 h-auto w-full py-4 text-2xl" disabled={loading} type="submit">
						{loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
						Send
					</Button>
				</form>
			</Form>
		</>
	);
};
export default ContactForm;
