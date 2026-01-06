/**
 * Supabase client for AI Paper Generator app
 * Re-exports the shared auth client and provides app-specific utilities
 */

import { getSupabaseClient } from "@skolist/auth";

/**
 * Get the Supabase client instance
 * Uses the shared auth package's client
 */
export function getClient() {
  return getSupabaseClient();
}

/**
 * Helper to get the current user ID
 * Throws if not authenticated
 */
export async function getCurrentUserId(): Promise<string> {
  const client = getClient();
  const {
    data: { user },
    error,
  } = await client.auth.getUser();

  if (error || !user) {
    throw new Error("User not authenticated");
  }

  return user.id;
}

/**
 * Helper to check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const client = getClient();
  const {
    data: { user },
  } = await client.auth.getUser();
  return !!user;
}

// Re-export client getter
export { getSupabaseClient } from "@skolist/auth";
