import { NextRequest, NextResponse } from 'next/server';
import db from '../../../../db.json';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  if (!id) return NextResponse.json({ message: 'Tour id required' });

  const { tours } = db;

  const findTour = tours.find((i) => i.id === Number(id));

  if (!findTour) return NextResponse.json({ message: 'Invalid tour id' });

  return new NextResponse(JSON.stringify(findTour), {
    status: 200,
  });
}
