import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  const { input } = await request.json()

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant for Phantom Wrap, a car wrapping company. Provide helpful and friendly responses to customer inquiries."
        },
        {
          role: "user",
          content: input
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    })

    return NextResponse.json({ response: response.choices[0].message.content })
  } catch (error) {
    console.error('Error calling OpenAI:', error)
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 })
  }
}

