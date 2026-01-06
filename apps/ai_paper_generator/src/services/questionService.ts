/**
 * Question Service
 * Handles Supabase operations for generated questions
 */

import { getClient } from "./supabase";
import type { Tables, TablesUpdate, TablesInsert } from "@skolist/db";

export type GeneratedQuestion = Tables<"gen_questions">;

/**
 * Create a new question
 */
export async function createQuestion(
  question: TablesInsert<"gen_questions">
): Promise<GeneratedQuestion> {
  const client = getClient();

  const { data, error } = await client
    .from("gen_questions")
    .insert(question)
    .select()
    .single();

  if (error) {
    console.error("Failed to create question:", error);
    throw error;
  }

  return data;
}

/**
 * Fetch all questions for a specific activity
 */
export async function fetchQuestions(
  activityId: string
): Promise<GeneratedQuestion[]> {
  const client = getClient();

  // We order by created_at for now, as requested to be sequential as fetched
  const { data, error } = await client
    .from("gen_questions")
    .select("*")
    .eq("activity_id", activityId)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to fetch questions:", error);
    throw error;
  }

  return data ?? [];
}

/**
 * Update a question
 */
export async function updateQuestion(
  questionId: string,
  updates: TablesUpdate<"gen_questions">
): Promise<GeneratedQuestion> {
  const client = getClient();

  const { data, error } = await client
    .from("gen_questions")
    .update(updates)
    .eq("id", questionId)
    .select()
    .single();

  if (error) {
    console.error("Failed to update question:", error);
    throw error;
  }

  return data;
}

/**
 * Delete a question
 */
export async function deleteQuestion(questionId: string): Promise<void> {
  const client = getClient();

  const { error } = await client
    .from("gen_questions")
    .delete()
    .eq("id", questionId);

  if (error) {
    console.error("Failed to delete question:", error);
    throw error;
  }
}
