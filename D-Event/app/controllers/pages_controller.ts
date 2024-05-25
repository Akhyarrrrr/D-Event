import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async beranda({ view }: HttpContext) {
    return view.render('pages/beranda')
  }

  async acara({ view }: HttpContext) {
    return view.render('pages/acara')
  }

  async bantuan({ view }: HttpContext) {
    return view.render('pages/bantuan')
  }

  async blog({ view }: HttpContext) {
    return view.render('pages/blog')
  }

  async login({ view }: HttpContext) {
    return view.render('pages/login')
  }

  async register({ view }: HttpContext) {
    return view.render('pages/register')
  }

  async selengkapnya({ view }: HttpContext) {
    return view.render('pages/selengkapnya')
  }

  async index({ view }: HttpContext) {
    return view.render('pages/admin/index')
  }
}
