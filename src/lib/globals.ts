const apiVersion = '1.0.0'
// export const BASE_API_URL = "https://beherenow-06dedcad18d1.herokuapp.com/api/v" + apiVersion + "/";
export const BASE_API_URL = 'http://localhost:8050/api/v' + apiVersion + '/'

export enum Tabs {
  Explore = 'Explore',
  Following = 'Following',
  Nearby = 'Nearby',
  Global = 'Global',
}
export enum UserTabs {
  Profile = 'Profile',
  Settings = 'Settings',
  SignOut = 'Sign out',
}
export enum Options {
  AddToFavorites = 'Add to Favorites',
  Report = 'Report',
  Share = 'Share',
}

// API
const enum Countries {
  UnitedStates = 'United States',
  Mexico = 'Mexico',
  Canada = 'Canada',
}

const enum StatesAndProvinces {
  // United States
  Alabama = 'Alabama',
  Alaska = 'Alaska',
  Arizona = 'Arizona',
  Arkansas = 'Arkansas',
  California = 'California',
  Colorado = 'Colorado',
  Connecticut = 'Connecticut',
  Delaware = 'Delaware',
  Florida = 'Florida',
  Georgia = 'Georgia',
  Hawaii = 'Hawaii',
  Idaho = 'Idaho',
  Illinois = 'Illinois',
  Indiana = 'Indiana',
  Iowa = 'Iowa',
  Kansas = 'Kansas',
  Kentucky = 'Kentucky',
  Louisiana = 'Louisiana',
  Maine = 'Maine',
  Maryland = 'Maryland',
  Massachusetts = 'Massachusetts',
  Michigan = 'Michigan',
  Minnesota = 'Minnesota',
  Mississippi = 'Mississippi',
  Missouri = 'Missouri',
  Montana = 'Montana',
  Nebraska = 'Nebraska',
  Nevada = 'Nevada',
  NewHampshire = 'New Hampshire',
  NewJersey = 'New Jersey',
  NewMexico = 'New Mexico',
  NewYork = 'New York',
  NorthCarolina = 'North Carolina',
  NorthDakota = 'North Dakota',
  Ohio = 'Ohio',
  Oklahoma = 'Oklahoma',
  Oregon = 'Oregon',
  Pennsylvania = 'Pennsylvania',
  RhodeIsland = 'Rhode Island',
  SouthCarolina = 'South Carolina',
  SouthDakota = 'South Dakota',
  Tennessee = 'Tennessee',
  Texas = 'Texas',
  Utah = 'Utah',
  Vermont = 'Vermont',
  Virginia = 'Virginia',
  Washington = 'Washington',
  WestVirginia = 'West Virginia',
  Wisconsin = 'Wisconsin',
  Wyoming = 'Wyoming',

  // Canada
  Alberta = 'Alberta',
  BritishColumbia = 'British Columbia',
  Manitoba = 'Manitoba',
  NewBrunswick = 'New Brunswick',
  NewfoundlandAndLabrador = 'Newfoundland and Labrador',
  NorthwestTerritories = 'Northwest Territories',
  NovaScotia = 'Nova Scotia',
  Nunavut = 'Nunavut',
  Ontario = 'Ontario',
  PrinceEdwardIsland = 'Prince Edward Island',
  Quebec = 'Quebec',
  Saskatchewan = 'Saskatchewan',
  Yukon = 'Yukon',

  // Mexico
  Aguascalientes = 'Aguascalientes',
  BajaCalifornia = 'Baja California',
  BajaCaliforniaSur = 'Baja California Sur',
  Campeche = 'Campeche',
  Chiapas = 'Chiapas',
  Chihuahua = 'Chihuahua',
  Coahuila = 'Coahuila',
  Colima = 'Colima',
  Durango = 'Durango',
  Guanajuato = 'Guanajuato',
  Guerrero = 'Guerrero',
  Hidalgo = 'Hidalgo',
  Jalisco = 'Jalisco',
  MexicoCity = 'Mexico City',
  MexicoState = 'Mexico State',
  Michoacan = 'Michoacán',
  Morelos = 'Morelos',
  Nayarit = 'Nayarit',
  NuevoLeon = 'Nuevo León',
  Oaxaca = 'Oaxaca',
  Puebla = 'Puebla',
  Queretaro = 'Querétaro',
  QuintanaRoo = 'Quintana Roo',
  SanLuisPotosi = 'San Luis Potosí',
  Sinaloa = 'Sinaloa',
  Sonora = 'Sonora',
  Tabasco = 'Tabasco',
  Tamaulipas = 'Tamaulipas',
  Tlaxcala = 'Tlaxcala',
  Veracruz = 'Veracruz',
  Yucatan = 'Yucatán',
  Zacatecas = 'Zacatecas',
}
