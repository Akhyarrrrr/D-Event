import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async store({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    // Arahkan berdasarkan roleId
    if (user.role === 'Admin') {
      return response.redirect().toRoute('admin.index')
    } else if (user.role === 'User') {
      return response.redirect().toRoute('/')
    }

    // Default redirect if roleId is not 1 or 2
    return response.redirect().toPath('/')
  }
}
