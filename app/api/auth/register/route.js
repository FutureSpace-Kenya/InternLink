import { NextResponse } from "next/server";
import { User, InternProfile } from "../../../../models/user";
import {Sequelize} from "sequelize";
import { hash } from "bcrypt";

export async function GET() {
    return NextResponse.json({message: 'Hello from Next.js!'})
}

export async function POST(req) {
    // Get the body of the request
    const body = await req.json();
    const { firstName, secondName, email, university, courseOfStudy, phoneNumber, idNumber, password } = body;

    if (!firstName || !secondName || !email || !university || !courseOfStudy || !phoneNumber || !idNumber || !password) {
        return NextResponse.json({ error: 'Missing required fields in request body' });
    }

    try {
        // Check if a user with the same email, idNumber, or phoneNumber already exists
        const existingUser = await User.findOne({
            include: [{
                model: InternProfile,
                where: {
                    [Sequelize.Op.or]: [
                        { IdNumber: idNumber },
                        { PhoneNumber: phoneNumber }
                    ]
                }
            }],
            where: {
                Email: email
            }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'A user with this email, ID, or phone number already exists' });
        }

        const hashedPassword = await hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            Username: email,
            Email: email,
            Password: hashedPassword,
            UserType: 'Intern',
            FirstName: firstName,
            SecondName: secondName
        });

        // Create a new intern profile
        await InternProfile.create({
            UserID: newUser.UserID,
            University: university,
            CourseOfStudy: courseOfStudy,
            PhoneNumber: phoneNumber,
            IdNumber: idNumber
        });

        return NextResponse.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while registering the user' });
    }
}