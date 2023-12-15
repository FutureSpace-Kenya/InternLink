import { NextResponse } from 'next/server';
import { InternProfile } from '../../../models/InternProfile'

export async function GET() {
    try {
        const interns = await InternProfile.findAll();
        return NextResponse.json(interns)
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}
