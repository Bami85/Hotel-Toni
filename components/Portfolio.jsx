import { Fragment } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'

const reviews = {
  average: 5,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p> 🇬🇧 We loved the location and the host. What a sweet lady! Very warm person and very accommodating. Her husband helped us with finding the place and the lady was a great conversationalist. I didn’t understand what my Albanian friend and her were saying but they were laughing a lot. Clean and a view of the mountains and wood. Everything was perfect.</p>
      `,
      content1: `<p> 🇦🇱 Ne pëlqeu vendndodhja dhe mikpritjen. Si një zonjë e ëmbël! Shumë e ngrohtë dhe shumë e gatshme për të ndihmuar. Burri i saj na ndihmoi të gjenim vendin dhe zonja ishte shumë e aftë në biseda. Nuk kuptova se çfarë flisnin shoku im shqiptar dhe ajo, por ata qeshën shumë. I pastër dhe me pamje të maleve dhe pyjeve. Të gjitha ishin perfekte.</p>`,

      date: 'July 16, 2021',
      datetime: '2021-08-07',
      author: 'Julie - Albania>',
      avatarSrc:
        'https://cf.bstatic.com/static/img/review/avatars/ava-j/f69a0f45af414641ac0371c1f139c49637969c6c.png',
    },
    {
      id: 2,
      rating: 4,
      content: `
        <p> 🇬🇧  I liked my stay there a lot. It is a basic accommodation. They only have rooms, no option to have breakfast etc. But that was not necessary since there is a restaurant right underneath and all around the hotel. Furthermore, the rooms and balcony are wooden so it gives a nice, relaxed atmosphere and a view into the forest.
        The lady that greeted me was super nice. She did not speak any English (but Italian), but she got help from someone from the restaurant so we could communicate everything.</p>
      `,
      content1: `<p> 🇦🇱 Më pëlqeu shumë qëndrimi im atje. Është një akomodim bazik. Ata kanë vetëm dhoma, pa mundësi për marrjen e mëngjesit, etj. Por kjo nuk ishte e nevojshme, pasi ka një restorant poshtë dhe në të gjithë hotelin. Për më tepër, dhomat dhe ballkoni janë prej druri, kështu që krijohet një atmosferë e bukur, e relaksuar dhe një pamje në pyll.

      Zonja që më përshëndeti ishte shumë e ëmbël. Ajo nuk fliste asnjë fjalë anglisht (por italisht), por ajo mori ndihmë nga një person nga restoranti, kështu që mundëm të komunikonim gjithçka. </p>`,
      date: 'July 12, 2021',
      datetime: '2022-08-22',
      author: 'Alexandra - Germany',
      avatarSrc:
        'https://lh3.googleusercontent.com/a/AATXAJwuQowN7TRQ_BKKIHLWs1N25a5C-ojqKdegMjMN=s96-c',
    },
    {
      id: 3,
      rating: 4,
      content: `
        <p> 🇬🇧  It was really nice to stay in this Hotel Toni. It's a perfect place to take a route for the mountains and to breath with a fresh air. You can find many restaurants near here, so let's say that it's the center of Llogara Natural Park. The owner of the hotel was very nice and friendly 🙂
        So If you want to get to this Hotel just take a way to Llogara, it's near to Restorant Noeli, because it shows wrong on a map.
        
        </p>
      `,
      content1: `<p> 🇦🇱 Ishte shumë e bukur të qëndrosh në këtë Hotel Toni. Është një vend i përsosur për të zgjedhur një rrugë drejt maleve dhe për të frymëzuar me ajër të pastër. Mund të gjeni shumë restorante në afërsi, pra le të themi se është qendra e Parkut Natyror Llogara. Pronari i hotelit ishte shumë i mirë dhe miqësor 🙂.
      Prandaj, nëse dëshironi të shkoni në këtë hotel, thjesht merrni rrugën drejt Llogarasë, është pranë Restorantit Noeli, sepse tregon gabim në hartë. </p>`,
      date: 'July 12, 2021',
      datetime: '2021-07-28',
      author: 'Marcela - Polen',
      avatarSrc:
        'https://cf.bstatic.com/static/img/review/avatars/ava-m/0e43c9b9a23d334b52510a328641c048847226bc.png',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Portfolio() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product details */}
          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                      )
                    }
                  >
                    Reviews from Booking
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="-mb-10">
                  {/* <h3 className="sr-only"> Reviews from Booking</h3> */}
                  {reviews.featured.map((review, reviewIdx) => (
                    <div
                      key={review.id}
                      className="flex space-x-4 text-sm text-gray-500"
                    >
                      <div className="flex-none py-10">
                        <img
                          src={review.avatarSrc}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-100"
                        />
                      </div>
                      <div
                        className={classNames(
                          reviewIdx === 0 ? '' : 'border-t border-gray-200',
                          'py-10',
                        )}
                      >
                        <h3 className="font-medium text-gray-900">
                          {review.author}
                        </h3>
                        <p>
                          <time dateTime={review.datetime}>{review.date}</time>
                        </p>

                        <div className="mt-4 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0',
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {review.rating} out of 5 stars
                        </p>

                        <div
                          className="prose prose-sm mt-4 max-w-none text-gray-500"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                        <div
                          className="prose prose-sm mt-4 max-w-none text-gray-500"
                          dangerouslySetInnerHTML={{ __html: review.content1 }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}
