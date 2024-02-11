import {NextResponse} from "next/server";
const { User } = require('/models/user');

export async function GET(request, {params}) {
    try {
        const { userId: id } = params;

        let user;
        if (id.includes('@')) {
            user = await User.findOne({ where: { Email: id } });
        } else {
            user = await User.findByPk(id);
        }

        if (!user) {
            return NextResponse.json({ message: "User not found" });
        }

        //remove the password from the user object
        user = user.get({ plain: true });
        delete user.Password;

        return NextResponse.json({ message: "Fetched user successfully", user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching user", error})
    }
}