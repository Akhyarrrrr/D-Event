import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AdminController {
  async index({ view }: HttpContext) {
    try {
      const users = await User.all()
      return view.render('pages/admin/index', { users })
    } catch (error) {
      console.error(error)
    }
  }

  async destroy({ params, response, session }: HttpContext) {
    const admin = await User.find(params.id)
    if (admin) {
      await admin.delete()
      session.flash({ status: 'User deleted successfully' })
      return response.redirect('/index')
    }
  }
}
