import type { HttpContext } from '@adonisjs/core/http'

export default class RegistersController {
  async index({ view }: HttpContext) {
    return view.render('registro')
  }
}
