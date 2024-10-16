import type { HttpContext } from '@adonisjs/core/http'

export default class ContactsController {
  async index({ view }: HttpContext) {
    return view.render('contacto')
  }
}
