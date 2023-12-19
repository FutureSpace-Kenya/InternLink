import { NextResponse } from "next/server";
import { User, InternProfile, Company } from "../../../../models/user";
import {Sequelize} from "sequelize";

export async function GET() {
    return NextResponse.json({message: 'Hello from Next.js!'})
}

export async function POST(req) {
    // Get the body of the request
    const { firstName, secondName, email, university, courseOfStudy, phoneNumber, idNumber, password } = req.body;

    try {
        // Check if a user with the same email, idNumber, or phoneNumber already exists
        const existingUser = await User.findOne({
            where: {
                [Sequelize.Op.or]: [
                    { Email: email },
                    { 'InternProfile.idNumber': idNumber },
                    { 'InternProfile.phoneNumber': phoneNumber }
                ]
            },
            include: InternProfile
        });

        if (existingUser) {
            return NextResponse.json({ error: 'A user with this email, ID, or phone number already exists' });
        }

        // Create a new user
        const newUser = await User.create({
            Username: email,
            Email: email,
            Password: password, // Make sure to hash the password before saving it to the database
            UserType: 'Intern',
        });

        // Create a new intern profile
        await InternProfile.create({
            UserID: newUser.UserID,
            Name: `${firstName} ${secondName}`,
            ContactInfo: phoneNumber,
        });

        return NextResponse.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while registering the user' });
    }
}