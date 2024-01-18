import {NextResponse} from "next/server";
import User from '/models/user';

export async function GET(request, {params}) {
    try {
        const {userId: id} = params;

        // Find the user with the specified ID
        const user = await User.findByPk(id);

        // Check if the user was found
        if (!user) {
            return NextResponse.json({message: "User not found"})
        }

        return NextResponse.json({message: "Fetched user successfully", user});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching user", error})
    }
}