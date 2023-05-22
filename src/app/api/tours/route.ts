import { NextRequest, NextResponse } from 'next/server';
import db from '../../../db.json';
import { filterTours } from './lib/filterTours';
import { parseFilters } from './lib/parseFilters';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const { filters } = parseFilters(searchParams);

  const { tours } = db;

  const filteredTours = filterTours(tours, filters);

  return new NextResponse(JSON.stringify(filteredTours), {
    status: 200,
  });
}
