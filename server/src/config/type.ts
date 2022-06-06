export default interface ConfigType {
  urls: {
    authorize: string
    authorizeFull: string
    token: string
    data: string
    domain: string
    redirect: string
  }
  environment: {
    secure: boolean
  }
  database: {
    url: string
    database: string
    synchronize: boolean
    logging: boolean
    entities: string[]
    migrations: string[]
    subscribers: string[]
  },
  testDatabase: {
    database: string
    dropSchema: boolean
    synchronize: boolean
    logging: boolean
    entities: string[]
    migrations: string[]
    subscribers: string[]
  }
}