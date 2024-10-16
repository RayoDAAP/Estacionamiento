const ContactsController = () => import('#controllers/contacts_controller')
const ParkingsController = () => import('#controllers/parkings_controller')
const RegistersController = () => import('#controllers/registers_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [ParkingsController, 'index']).as('parking.index')
router.get('/registro', [RegistersController, 'index']).as('register.index')
router.get('/contacto', [ContactsController, 'index']).as('contact.index')
