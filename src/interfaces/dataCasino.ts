export interface Root {
  success: boolean
  data: DataCasino
  displayMessage: string
  errorMessage: any[]
  code: number
}

export interface DataCasino {
  generalData: GeneralData
  sections: Sections
}

export interface GeneralData {
  idCasino: number
  name: string
  principalImagePath: string
  logoPath: string
  promotionalVideoPath: string
  musicPath: string
  principalImagePathWeb: string
  logoPathWeb: string
  promotionalVideoPathWeb: string
  musicPathWeb: string
  color: string
  history: string
  mission: string
  vision: string
}

export interface Sections {
  home: Home
  ourOffers: OurOffers
  promotions: Promotions
  events: Events
  register: Register
  findUs: FindUs
  club: Club
  clubBenefits: ClubBenefits
  clubNews: ClubNews
  promotionalAd: PromotionalAd
  footer: Footer
  catalogue: Home
}

export interface Home {
  title: string
  name: string
  description: string
  imagePathWeb: string
}

export interface OurOffers {
  infoSection: InfoSection
  ourOffers: OurOffer[]
}

export interface InfoSection {
  title: string
  name: string
  description: string
  imagePathWeb: string
}

export interface OurOffer {
  idClubBenefit: number
  idClub: number
  title: string
  description: string
  iconPath: string
  iconPathWeb: string
  priority: number
  state: boolean
}

export interface Promotions {
  infoSection: InfoSection
  promotions: Announcements[]
}
export interface Events {
  infoSection: InfoSection
  events: Announcements[]
}


export interface Announcements {
  idAnnouncement: number
  idCasino: number
  announcementType: number
  announcementTypeStr: string
  title: string
  description: string
  publishAt: string
  startDate: string
  endDate: string
  priority: number
  state: boolean
  casino: any
  announcementsMedia: AnnouncementsMedum[]
}

export interface AnnouncementsMedum {
  idAnnouncementMedia: number
  idAnnouncement: number
  path: string
  pathWeb: string
}


export interface Register {
  title: string
  name: string
  description: string
  imagePathWeb: string
}

export interface FindUs {
  infoSection: InfoSection
  latitude: number
  longitude: number
  address: string
}


export interface Club {
  title: string
  name: string
  description: string
  imagePathWeb: string
}

export interface ClubBenefits {
  infoSection: InfoSection
  clubBenefits: ClubBenefit[]
}


export interface ClubBenefit {
  idClubBenefit: number
  idClub: number
  title: string
  description: string
  iconPath: string
  iconPathWeb: string
  priority: number
  state: boolean
  club: any
}

export interface ClubNews {
  infoSection: InfoSection
  clubNews: ClubNew[]
}
export interface ClubNew{
  description:        string
  idClub:             number
  idClubNews:         number
  imagePathWeb:       string
  name:               string

}

export interface PromotionalAd {
  title: string
  name: string
  description: string
  imagePathWeb: string
}

export interface Footer {
  infoSection: InfoSection
  contactEmails: ContactEmail[]
  contactPhones: ContactPhone[]
  socialNetworks: SocialNetwork[]
}


export interface ContactEmail {
  idContactEmail: number
  idCasino: number
  email: string
  password: string
  host: string
  port: string
  priority: number
  state: boolean
  casino: any
}

export interface ContactPhone {
  idContactPhone: number
  idCasino: number
  phoneNumber: string
  priority: number
  state: boolean
  casino: any
}

export interface SocialNetwork {
  idSocialNetwork: number
  idIcon: number
  idCasino: number
  name: string
  uri: string
  priority: number
  state: boolean
  casino: any
  icon: Icon
}

export interface Icon {
  idIcon: number
  name: string
  class: string
  from: string
  unicode: string
  tags: string
  priority: number
  state: boolean
  socialNetworks: any[]
  corpServices: any[]
  corpSocialNetworks: any[]
}
