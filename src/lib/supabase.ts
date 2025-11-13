import { createClient } from '@supabase/supabase-js'

// HARDCODED TEMPORAL PARA DEBUG
const supabaseUrl = 'https://xpttetytzdgaygteewid.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdHRldHl0emRnYXlndGVld2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MzkzMzgsImV4cCI6MjA3ODMxNTMzOH0.U058yc20tc7pOk13oNFG--p3uLlfoN64g1FMWh8pz2s'

console.log('🟢 ========== SUPABASE INIT ==========')
console.log('📍 URL:', supabaseUrl)
console.log('🔑 Key existe:', !!supabaseAnonKey)
console.log('📏 Key length:', supabaseAnonKey?.length)
console.log('🟢 ====================================')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ FALTAN CREDENCIALES')
  throw new Error('Missing Supabase credentials')
}

console.log('✅ Creando cliente Supabase...')
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
console.log('✅ Cliente Supabase creado')

export type Reservation = {
  id?: string
  customer_name: string
  customer_email: string
  customer_phone: string
  date: string
  time: string
  party_size: number
  table_type?: string
  status?: string
  special_requests?: string
  confirmation_code: string
  created_at?: string
  updated_at?: string
}

export type ContactMessage = {
  id?: string
  name: string
  email: string
  phone?: string
  message: string
  status?: string
  created_at?: string
}
