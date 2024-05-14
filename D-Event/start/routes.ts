/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PagesController = () => import('#controllers/pages_controller')

router.get('/', [PagesController, 'beranda'])
router.get('/beranda', [PagesController, 'beranda'])
router.get('/blog', [PagesController, 'blog'])
router.get('/acara', [PagesController, 'acara'])
router.get('/bantuan', [PagesController, 'bantuan'])
router.get('/login', [PagesController, 'login'])
router.get('/register', [PagesController, 'register'])
router.get('/selengkapnya', [PagesController, 'selengkapnya'])
