import { startOfDay } from "date-fns";
import z from "zod";

const meetingBaseSchema = z.object({
  startTime: z.date().min(new Date()),
  guestEmail: z.email().min(1, "Required"),
  guestName: z.string().min(1, "Required"),
  guestNotes: z.string().optional(),
  timezone: z.string().min(1, "Required"),
});

export const meetingFormSchema = z
  .object({
    date: z.date().min(startOfDay(new Date()), "Must be in future"),
  })
  .extend(meetingBaseSchema.shape);

export const meetingActionSchema = z
  .object({
    eventId: z.string().min(1, "Required"),
    clerkUserId: z.string().min(1, "Required"),
  })
  .extend(meetingBaseSchema.shape);
