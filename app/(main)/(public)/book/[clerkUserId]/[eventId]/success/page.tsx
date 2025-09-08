import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateTime } from "@/lib/formatter";
import { getEvent } from "@/server/actions/events";
import { clerkClient } from "@clerk/nextjs/server";
import { AlertTriangle } from "lucide-react";

const SuccessPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ clerkUserId: string; eventId: string }>;
  searchParams: Promise<{ startTime: string; timezone: string }>;
}) => {
  const { clerkUserId, eventId } = await params;
  const { startTime, timezone } = await searchParams;
  const event = await getEvent(clerkUserId, eventId);

  if (!event)
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md flex items-center gap-2 text-sm max-w-md mx-auto mt-6">
        <AlertTriangle className="w-5 h-5" />
        <span>This event doesn't exist anymore.</span>
      </div>
    );

  const client = await clerkClient();
  const calendarUser = await client.users.getUser(clerkUserId);
  const startTimeDate = new Date(startTime);

  return (
    <Card className="max-w-xl mx-auto border-8 border-blue-200 shadow-2xl shadow-accent-foreground">
      <CardHeader>
        <CardTitle>
          ✅Successfully Booked {event.name} with {calendarUser.fullName}
        </CardTitle>

        <CardDescription>
          {formatDateTime(startTimeDate, timezone)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        You should receive an email confirmation shortly. You can safely close
        this page now.
      </CardContent>
    </Card>
  );
};

export default SuccessPage;
