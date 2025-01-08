import { UserSchema } from "@/types";
import { NextResponse } from "next/server";

export async function POST (request:Request) {
    // Retrieves the JSON data from the request body and stores it in the body variable.
    const body = await request.json()

    // Use Zod to validate the received data against the UserSchema
    // Utilizes the safeParse method provided by Zod to validate the received data against the UserSchema. The result contains information about whether the validation was successful and, if not, details about the validation issues.
    const result = UserSchema.safeParse(body)

    // Check if the validation is successful
    // If the validation is successful, a JSON response with { success: true } is sent.
    if (result.success) {
    return NextResponse.json({ success: true });
    }

    // If validation errors, map them into an object
    // If there are validation errors, the code maps them into an object with field names and corresponding error messages.
    const serverErrors = Object.fromEntries(
        result.error?.issues?.map((issue)=>[issue.path[0], issue.message]) || []
    );

    // Respond with a JSON object containing the validation errors
    return NextResponse.json({errors:serverErrors})
}

