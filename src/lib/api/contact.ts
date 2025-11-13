import { supabase, type ContactMessage } from '../supabase'

export async function sendContactMessage(
  data: Omit<ContactMessage, 'id' | 'status' | 'created_at'>
): Promise<{ success: boolean; error?: string }> {
  console.log('📧 ========== SEND CONTACT MESSAGE ==========')
  console.log('📤 Datos recibidos:', data)
  
  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          ...data,
          status: 'new',
        },
      ])

    console.log('📥 Respuesta Supabase:', { error })

    if (error) {
      console.error('❌ Error Supabase:', error)
      return { success: false, error: error.message }
    }

    console.log('✅ Mensaje de contacto enviado')
    console.log('📧 =========================================')
    return { success: true }
  } catch (error) {
    console.error('❌ Error inesperado:', error)
    console.log('📧 =========================================')
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Error desconocido' 
    }
  }
}

export async function getContactMessages() {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching messages:', error)
    return { success: false, error: 'Error al obtener mensajes' }
  }
}
