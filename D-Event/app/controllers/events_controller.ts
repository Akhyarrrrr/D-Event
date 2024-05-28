import { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'
import { DateTime } from 'luxon'

export default class EventsController {
  async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'email', 'event_date', 'description'])

    console.log('Received data:', data)

    if (data.event_date) {
      data.event_date = DateTime.fromISO(data.event_date)
    }

    await Event.create(data)
    return response.redirect('/bantuan')
  }

  async index({ view }: HttpContext) {
    const events = await Event.all()

    const formattedEvents = events.map((event) => {
      const eventData = event.toJSON()
      eventData.event_date = event.event_date ? event.event_date.toFormat('dd-MM-yyyy') : null
      eventData.url = `/events/${event.id}`
      return eventData
    })
    console.log('Formatted events:', formattedEvents)

    return view.render('pages/admin/events', { events: formattedEvents })
  }
}
