import type { HttpContext } from '@adonisjs/core/http'

export default class ParkingsController {
  async index({ view }: HttpContext) {
    return view.render('index')
  }
}
