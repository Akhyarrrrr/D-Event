import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)

    await auth.use('web').login(user)

    if (user.role === 'Admin') {
      return response.redirect().toRoute('admin.index')
    } else if (user.role === 'User') {
      return response.redirect().toRoute('/')
    }

    return response.redirect().toPath('/')
  }
}
