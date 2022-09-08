import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'
import { setupURLPolyfill } from 'react-native-url-polyfill'

setupURLPolyfill()

const supabaseUrl = "https://putkbgifnbxxqsvuwqhc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dGtiZ2lmbmJ4eHFzdnV3cWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI2NjY3MzQsImV4cCI6MTk3ODI0MjczNH0.5Q9t6lRTPIq1e6RlBzSnR5jbRAV7rtTSjod6pOJbwFc"

export const supabase = createClient(
    supabaseUrl, 
    supabaseAnonKey, 
    {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
    }
);