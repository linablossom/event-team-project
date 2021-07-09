// ===================
import createModalMarkup from '../tpl/card-modal.hbs';
// ===================
const data = {
  name: 'Jamie Cullum',
  type: 'event',
  id: 'G5vHZ4iKnUqgL',
  test: false,
  url: 'https://www.ticketmaster.co.uk/jamie-cullum-liverpool-10-04-2021/event/1F0056C4EAD9DD5F',
  locale: 'en-us',
  images: [
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_EVENT_DETAIL_PAGE_16_9.jpg',
      width: 205,
      height: 115,
      fallback: false,
    },
    {
      ratio: '3_2',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RETINA_PORTRAIT_3_2.jpg',
      width: 640,
      height: 427,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RETINA_PORTRAIT_16_9.jpg',
      width: 640,
      height: 360,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/9e8/addeae93-1d13-41a2-a300-9f6744e269e8_398971_TABLET_LANDSCAPE_LARGE_16_9.jpg',
      width: 2048,
      height: 1152,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RETINA_LANDSCAPE_16_9.jpg',
      width: 1136,
      height: 639,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_TABLET_LANDSCAPE_16_9.jpg',
      width: 1024,
      height: 576,
      fallback: false,
    },
    {
      ratio: '16_9',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RECOMENDATION_16_9.jpg',
      width: 100,
      height: 56,
      fallback: false,
    },
    {
      ratio: '3_2',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_ARTIST_PAGE_3_2.jpg',
      width: 305,
      height: 203,
      fallback: false,
    },
    {
      ratio: '3_2',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_TABLET_LANDSCAPE_3_2.jpg',
      width: 1024,
      height: 683,
      fallback: false,
    },
    {
      ratio: '4_3',
      url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_CUSTOM.jpg',
      width: 305,
      height: 225,
      fallback: false,
    },
  ],
  sales: {
    public: {
      startDateTime: '2019-06-07T08:30:00Z',
      startTBD: false,
      startTBA: false,
      endDateTime: '2021-10-04T18:00:00Z',
    },
    presales: [
      {
        startDateTime: '2019-06-05T08:30:00Z',
        endDateTime: '2019-06-07T07:30:00Z',
        name: 'Artist Presale',
      },
    ],
  },
  dates: {
    start: {
      localDate: '2021-10-04',
      localTime: '19:00:00',
      dateTime: '2021-10-04T18:00:00Z',
      dateTBD: false,
      dateTBA: false,
      timeTBA: false,
      noSpecificTime: false,
    },
    timezone: 'Europe/London',
    status: {
      code: 'rescheduled',
    },
    spanMultipleDays: false,
  },
  classifications: [
    {
      primary: true,
      segment: {
        id: 'KZFzniwnSyZfZ7v7nJ',
        name: 'Music',
      },
      genre: {
        id: 'KnvZfZ7vAvE',
        name: 'Jazz',
      },
      subGenre: {
        id: 'KZazBEonSMnZfZ7vkda',
        name: 'Jazz',
      },
      type: {
        id: 'KZAyXgnZfZ7v7nI',
        name: 'Undefined',
      },
      subType: {
        id: 'KZFzBErXgnZfZ7v7lJ',
        name: 'Undefined',
      },
      family: false,
    },
  ],
  promoter: {
    id: '4325',
    name: 'S.J.M. LIMITED',
    description: 'S.J.M. LIMITED / NTL / GBR',
  },
  promoters: [
    {
      id: '4325',
      name: 'S.J.M. LIMITED',
      description: 'S.J.M. LIMITED / NTL / GBR',
    },
    {
      id: '4325',
      name: 'S.J.M. LIMITED',
      description: 'S.J.M. LIMITED / NTL / GBR',
    },
  ],
  info: 'Tickets for this event are provided directly by the promoter and not printed by Ticketmaster and may not be despatched until ten days before the event.',
  pleaseNote: 'Under 16s must be accompanied by an adult over 18.',
  priceRanges: [
    {
      type: 'standard including fees',
      currency: 'GBP',
      min: 38.5,
      max: 108.9,
    },
    {
      type: 'standard',
      currency: 'GBP',
      min: 35,
      max: 99,
    },
  ],
  seatmap: {
    staticUrl: 'https://s1.ticketm.net/uk/tmimages/venue/maps/uk2/uk21758a.gif',
  },
  accessibility: {},
  ticketLimit: {
    info: 'There is a strict limit of four tickets per person and per card for the presale, rising to eight tickets per person and per card for the general sale.',
  },
  ageRestrictions: {
    legalAgeEnforced: false,
  },
  _links: {
    self: {
      href: '/discovery/v2/events/G5vHZ4iKnUqgL?locale=en-us',
    },
    attractions: [
      {
        href: '/discovery/v2/attractions/K8vZ9175xH0?locale=en-us',
      },
    ],
    venues: [
      {
        href: '/discovery/v2/venues/KovZ9177a-V?locale=en-de',
      },
    ],
  },
  _embedded: {
    venues: [
      {
        name: 'Liverpool Philharmonic Hall',
        type: 'venue',
        id: 'KovZ9177a-V',
        test: false,
        url: 'https://www.ticketmaster.co.uk/Liverpool-Philharmonic-Hall-tickets-Liverpool/venue/255710',
        locale: 'en-de',
        images: [
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/v/b48/293d749a-6c79-4850-b596-8ec6e7016b48_307132_SOURCE.jpg',
            width: 2593,
            height: 1909,
            fallback: false,
            attribution: 'CC BY-SA 3.0 via wikipedia',
          },
        ],
        postalCode: 'L1 9BP',
        timezone: 'Europe/London',
        city: {
          name: 'Liverpool',
        },
        country: {
          name: 'Great Britain',
          countryCode: 'GB',
        },
        address: {
          line1: 'Hope Street',
        },
        location: {
          longitude: '-2.969705',
          latitude: '53.401223',
        },
        markets: [
          {
            name: 'All of United Kingdom',
            id: '201',
          },
          {
            name: 'Wales and North West',
            id: '205',
          },
        ],
        dmas: [
          {
            id: 601,
          },
          {
            id: 605,
          },
        ],
        boxOfficeInfo: {
          openHoursDetail:
            'Mon-Sat: 10:00-17:30 Sun: 12:00-17:00 On concert nights the box office will remain open for counter booking until 15mins after the start of an event and on Sundays, if there is a concert, the box office will be open from 12:00 until 15 minutes after the start of an event for counter bookings.',
        },
        parkingDetail: 'There is a car park adjacent to the hall. There is a charge for parking.',
        accessibleSeatingDetail:
          'The venue is accessible for wheelchair users. Wheelchair spaces available in stalls and boxes. Disabled toilets available. Cash point and telephone accessible to disabled patrons.Disabled access to restaurant and bar.',
        generalInfo: {
          generalRule:
            'No cameras, video cameras or audio recording devices. No food.(only in auditorium (not in bar areas) No bottles or cans. (only in auditorium) No alcohol or illegal substances. (only in auditorium) Smoking is not allowed in the venue.',
          childRule:
            'There is no minimum age of admittance. If a child is being disruptive they must be removed from the venue.',
        },
        upcomingEvents: {
          _total: 53,
          ticketmaster: 53,
        },
        ada: {
          adaPhones: 'Box Office - 0151 7093789\n',
          adaCustomCopy:
            'To better accommodate your needs, Liverpool Philharmonic Hall has requested that all Accessible seating requests be solicited only through their representatives. Please contact a Liverpool Philharmonic Hall representative for further help with your ticket purchase.\n\n* Advance ticket purchase may be required.\n\n* Box office information is subject to change.',
          adaHours:
            'Mon-Sat: 10:00-17:30 Sun: 12:00-17:00 On concert nights the box office will remain open for counter booking until 15mins after the start of an event and on Sundays, if there is a concert, the box office will be open from 12:00 until 15 minutes after the start of an event for counter bookings.',
        },
        _links: {
          self: {
            href: '/discovery/v2/venues/KovZ9177a-V?locale=en-de',
          },
        },
      },
    ],
    attractions: [
      {
        name: 'Jamie Cullum',
        type: 'attraction',
        id: 'K8vZ9175xH0',
        test: false,
        url: 'https://www.ticketmaster.co.uk/artist/907815',
        locale: 'en-us',
        externalLinks: {
          twitter: [
            {
              url: 'https://twitter.com/jamiecullum',
            },
          ],
          wiki: [
            {
              url: 'https://en.wikipedia.org/wiki/Jamie_Cullum',
            },
          ],
          musicbrainz: [
            {
              id: 'b10806de-2198-4313-af6a-13df4acb912f',
            },
          ],
          homepage: [
            {
              url: 'http://www.jamiecullum.com/',
            },
          ],
        },
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/9e8/addeae93-1d13-41a2-a300-9f6744e269e8_398971_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/cd2/3f1da095-fa42-47df-a7c1-c84d2de55cd2_1069281_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
        ],
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nJ',
              name: 'Music',
            },
            genre: {
              id: 'KnvZfZ7vAvE',
              name: 'Jazz',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vkda',
              name: 'Jazz',
            },
            type: {
              id: 'KZAyXgnZfZ7v7nI',
              name: 'Undefined',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7v7lJ',
              name: 'Undefined',
            },
            family: false,
          },
        ],
        upcomingEvents: {
          _total: 11,
          'mfx-nl': 1,
          ticketmaster: 8,
          'mfx-cz': 1,
          'mfx-be': 1,
        },
        _links: {
          self: {
            href: '/discovery/v2/attractions/K8vZ9175xH0?locale=en-us',
          },
        },
      },
    ],
  },
};

// ссилки на DOM

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal-btn-close'),
  markupModal: document.querySelector('.tpl-modal'),
};

// закрити модалку по натисканню на Х

refs.modalCloseBtn.addEventListener('click', onClick);

function onClick() {
  refs.backdrop.classList.toggle('is-hidden');
}

// закрити модалку по натисканню на ESC

window.addEventListener('keydown', onDownEsc);

function onDownEsc(e) {
  if (e.code !== 'Escape' || refs.backdrop.classList.contains('is-hidden')) return;
  refs.backdrop.classList.add('is-hidden');
}

// закрити модалку по натисканню на темный фон (backdrop)

refs.backdrop.addEventListener('click', onClickBackdrop);

function onClickBackdrop(e) {
  if (e.target !== refs.backdrop) return;
  refs.backdrop.classList.add('is-hidden');
}

// рендер контента модалки

function renderMarkupModal(data) {
  refs.markupModal.innerHTML = '';
  refs.markupModal.insertAdjacentHTML('beforeend', createModalMarkup(data));
  console.log('ok');
}

renderMarkupModal(data);
