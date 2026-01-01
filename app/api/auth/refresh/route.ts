import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get('refresh_token')?.value

  if (!refreshToken) {
    return NextResponse.json(
      { message: 'No refresh token' },
      { status: 401 }
    )
  }

  try {
    // Call NestJS backend
    const res = await fetch(
      `${process.env.BACKEND_URL}/auth/refresh`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken}`,
        },
        credentials: 'include',
      }
    )

    if (!res.ok) {
      return NextResponse.json(
        { message: 'Refresh failed' },
        { status: 401 }
      )
    }

    const data = await res.json()

    const response = NextResponse.json({ success: true })

    // Set new access token
    response.cookies.set('access_token', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 15, // 15 minutes
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    )
  }
}
