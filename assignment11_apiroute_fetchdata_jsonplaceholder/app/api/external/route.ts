import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts"

export async function GET () {
    try {
        const response = await fetch (EXTERNAL_API_URL)
        if (!response.ok) {
            return NextResponse.json({
                success:false,
                message: "Failed to fetch the data from API",
                status:response.status,
            })
        }
        const data = await response.json(); //Parsing the data from one variable to other
        return NextResponse.json({success:true,data})
    }
    catch (error:any) {
        return NextResponse.json({
            success:false,
            message:"Got unexpected error",
            error:error.message
        })
    }
}