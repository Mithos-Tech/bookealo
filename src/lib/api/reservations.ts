import { supabase, type Reservation } from '../supabase'

export function generateConfirmationCode(): string {
  const year = new Date().getFullYear()
  const random = Math.floor(100000 + Math.random() * 900000)
  return `BKA-${year}-${random}`
}

export async function createReservation(
  data: Omit<Reservation, 'id' | 'confirmation_code' | 'created_at' | 'updated_at'>
): Promise<{ success: boolean; data?: Reservation; error?: string }> {
  console.log('🟡 ========== CREATE RESERVATION ==========')
  console.log('📤 Datos recibidos:', data)
  
  try {
    const confirmationCode = generateConfirmationCode()
    console.log('🎫 Código generado:', confirmationCode)

    const reservationData = {
      ...data,
      confirmation_code: confirmationCode,
      status: 'pending',
    }

    console.log('📦 Enviando a Supabase:', reservationData)

    const { data: reservation, error } = await supabase
      .from('reservations')
      .insert([reservationData])
      .select()
      .single()

    console.log('📥 Respuesta Supabase:', { reservation, error })

    if (error) {
      console.error('❌ Error Supabase:', error)
      return { success: false, error: error.message }
    }

    console.log('✅ Reserva creada:', reservation)
    console.log('🟡 =========================================')
    return { success: true, data: reservation }
  } catch (error) {
    console.error('❌ Error inesperado:', error)
    console.log('🟡 =========================================')
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Error desconocido' 
    }
  }
}
