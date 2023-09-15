import { connect } from "../../dbConfig/dbConfig";

import User from "../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect()

export async function POST(request: NextRequest) {
    try {

        const { email, password } = await request.json();
        console.log({ email, password });

        //check if user already exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User does not exist" },
                { status: 400 }
            );
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }


        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData,
            process.env.JWT_SECRET_KEY!, { expiresIn: "1d" })


        const response = NextResponse.json({
            message: "successful response",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;


    } catch (error) {
        return NextResponse.json({ error: 'Error in fetching' },
         { status: 500 });
    }
}
