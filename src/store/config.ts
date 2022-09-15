import create from 'zustand'

export interface ConfigDTO {
  firstUser: PersonDTO
  secondUser: PersonDTO
}

export interface PersonDTO {
  name: string
  percentage: number
}

interface IConfig {
  config: ConfigDTO
  editConfig: (config: ConfigDTO) => void
}

export const useConfigStore = create<IConfig>()((set, get) => ({
  config: {
    firstUser: {
      name: 'Pessoa 1',
      percentage: 50
    },
    secondUser: {
      name: 'Pessoa 2',
      percentage: 50
    }
  },
  editConfig: (config: ConfigDTO) => set((state) => ({config: config })),
}))