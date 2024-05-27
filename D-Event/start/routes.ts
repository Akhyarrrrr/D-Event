import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const PagesController = () => import('#controllers/pages_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const LogoutController = () => import('#controllers/auth/logout_controller')
const AdminController = () => import('#controllers/admin_controller')
const EventsController = () => import('#controllers/events_controller')

router.get('/', async (ctx) => {
  await ctx.auth.check()
  return ctx.view.render('pages/beranda')
})

router
  .group(() => {
    router
      .get('/register', [RegisterController, 'show'])
      .as('register.show')
      .use(middleware.guest())
    router
      .post('/register', [RegisterController, 'store'])
      .as('register.store')
      .use(middleware.guest())

    router.get('/login', [LoginController, 'show']).as('login.show')
    router.post('/login', [LoginController, 'store']).as('login.store')

    router.post('/logout', [LogoutController, 'handle']).as('logout')
  })
  .prefix('auth')
  .as('auth')

// Rute umum yang memerlukan autentikasi
router
  .group(() => {
    router.get('/blog', [PagesController, 'blog'])
    router.get('/acara', [PagesController, 'acara'])
    router.get('/bantuan', [PagesController, 'bantuan'])
    router.get('/selengkapnya', [PagesController, 'selengkapnya'])
    router.get('/index', [AdminController, 'index']).as('index')
    router.get('/admin', [AdminController, 'index']).as('admin.index')
    router.delete('/user/:id', [AdminController, 'destroy']).as('user.destroy')
    router.post('/events', [EventsController, 'store']).as('events.store')
    router.get('/events', [EventsController, 'index']).as('events.index')
  })
  .middleware([middleware.auth()])
