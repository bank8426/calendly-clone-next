"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { google } from "googleapis";

async function getAuthClient(clerkUserId: string) {
  try {
    const client = await clerkClient();

    const { data } = await client.users.getUserOauthAccessToken(
      clerkUserId,
      "google"
    );

    if (data.length === 0 || !data[0].token) {
      throw new Error("No OAuth data or token found for the user.");
    }

    const oAuthClient = new google.auth.OAuth2(
      process.env.GOOGLE_OAUTH_CLIENT_ID,
      process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      process.env.GOOGLE_OAUTH_REDIRECT_URL
    );

    oAuthClient.setCredentials({ access_token: data[0].token });

    return oAuthClient;
  } catch (error) {}
}
