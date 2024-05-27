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

  async selengkapnya({ view }: HttpContext) {
    return view.render('pages/selengkapnya')
  }
}
