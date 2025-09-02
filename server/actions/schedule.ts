"use server";

import { db } from "@/drizzle/db";
import {
  EventTable,
  ScheduleAvailabilityTable,
  ScheduleTable,
} from "@/drizzle/schema";
import { eventFormSchema } from "@/schema/events";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import z from "zod";

type ScheduleRow = typeof ScheduleTable.$inferSelect;
type AvailabilityRow = typeof ScheduleAvailabilityTable.$inferSelect;

export type FullSchedule = ScheduleRow & { availabilities: AvailabilityRow[] };

export async function getSchedule(
  userId: string
): Promise<FullSchedule | null> {
  try {
    const schedule = await db.query.ScheduleTable.findFirst({
      where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
      with: {
        availabilities: true,
      },
    });

    return schedule as FullSchedule | null;
  } catch (error: any) {
    throw new Error(`Failed to fetch schedule: ${error.message || error}`);
  }

  return null;
}
