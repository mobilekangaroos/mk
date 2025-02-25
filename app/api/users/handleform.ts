import { NextResponse } from "next/server";

const GET = async (req: any) => {
  const data = {
    name: "Bishal Shrestha",
    age: "27",
  };

  return NextResponse.json({ data });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, org, lName } = body;
    // https://d4.bubble.is/site/mkpos/api/1.1/wf/web_form
    //database logic

    return NextResponse.json({
      message: "User data submitted successfully!",
      success: true,
    });
  } catch (error) {
    console.error("Error submitting user data:", error);
    return NextResponse.json(
      { message: "Failed to submit user data", success: false },
      { status: 500 },
    );
  }
}
