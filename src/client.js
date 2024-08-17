import { createClient } from "@supabase/supabase-js";

const URL = 'https://rxxoqnqhuaimemkgehiy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4eG9xbnFodWFpbWVta2dlaGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MjgwOTYsImV4cCI6MjAzOTQwNDA5Nn0.25JAsLKNmuYHjZvpL9SggEZMNXSGYOl9YGFdrYSBBdE';
export const supabase = createClient(URL, API_KEY);

